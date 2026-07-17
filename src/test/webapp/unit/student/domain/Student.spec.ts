import { Student } from '@/student/domain/Student';

describe('Student', () => {
  it('should throw error message when username has under 3 characters long', () => {
    expect(() => new Student('Al', 'Aly', 'Dupont', 'address')).toThrow('Username must be at least 3 characters long!');
  });

  it('should throw error message when username has greater than 20 characters long', () => {
    expect(() => new Student('aaaaaaaaaaaaaaaaaaaaa', 'ahaha', 'Dupont', 'address')).toThrow(
      'Username must be at most 20 characters long!',
    );
  });

  it('should throw error when name is blank', () => {
    expect(() => new Student('Tony', ' ', 'Dupont', 'address')).toThrow('First name is required');
  });

  it('should throw error when lastname is blank', () => {
    expect(() => new Student('Tony', 'Anthony', ' ', 'address')).toThrow('Last name is required');
  });

  it('should throw error when address is undefined', () => {
    expect(() => new Student('Tony', 'Anthony', 'Dupont', ' ')).toThrow('Address is required');
  });
});
