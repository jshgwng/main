export class User {
  constructor(
    public id: number,
    public email: string,
    public phoneNumber: string,
    public fullName: string,
    public role: string,
    private _token: string
  ) {}
  get token() {
    return this._token;
  }
}
