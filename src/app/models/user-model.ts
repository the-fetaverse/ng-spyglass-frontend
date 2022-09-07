export class User {
  // Fields
  username: string;
  password: string;
  enabled: boolean;

  // Constructor
  constructor(username: string, password: string, enabled: boolean) {
    this.username = username;
    this.password = password;
    this.enabled = enabled;
  }
}
