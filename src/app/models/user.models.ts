export class User {
  username: string;
  email: string;
  password: string;
  passwordConfirmed: string;

  constructor(
    username: string,
    email: string,
    password: string,
    passwordConfirmed: string
  ) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.passwordConfirmed = passwordConfirmed;
  }
}
