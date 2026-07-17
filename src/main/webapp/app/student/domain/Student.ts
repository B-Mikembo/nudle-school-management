export class Student {
  constructor(username: string) {
    if (username.length < 3) throw Error('Username must be at least 3 characters long!');
  }
}
