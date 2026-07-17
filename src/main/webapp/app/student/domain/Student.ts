export class Student {
  constructor(username: string, name: string, lastname: string) {
    if (username.length < 3) throw Error('Username must be at least 3 characters long!');
    if (username.length > 20) throw Error('Username must be at most 20 characters long!');
    if (name.trim().length === 0) throw Error('First name is required');
    if (lastname.trim().length === 0) throw Error('Last name is required');
  }
}
