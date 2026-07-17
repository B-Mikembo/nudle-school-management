import { Student } from '@/student/domain/Student';

describe('Student', () => {
  it('should throw error message when username has under 3 characters long', () => {
    expect(() => new Student('Al')).toThrow('Username must be at least 3 characters long!');
  });
});
