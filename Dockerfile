FROM eclipse-temurin:25 AS build
COPY . /code/app/
WORKDIR /code/app/
RUN chmod +x mvnw \
    && ./mvnw package -B \
    -DskipTests \
    -Dmaven.javadoc.skip=true \
    -Dmaven.source.skip \
    -Ddevelocity.cache.remote.enabled=false \
    && mv /code/app/target/*.jar /code/nudle-school-management.jar

FROM eclipse-temurin:25.0.3_9-jre
COPY --from=build /code/*.jar /code/
RUN \
    groupadd nudle-school-management && \
    useradd nudle-school-management -s /bin/bash/ -m -g nudle-school-management -G sudo && \
    echo 'B-Mikembo:nudle-school-management'|chpasswd
ENV SPRING_OUTPUT_ANSI_ENABLED=ALWAYS \
    JAVA_OPTS="" \
    NUDLE_SCHOOL_MANAGEMENT_FORCED_PROJECT_FOLDER=/tmp/nudle-school-management
USER nudle-school-management
ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/code/nudle-school-management.jar"]
EXPOSE 80