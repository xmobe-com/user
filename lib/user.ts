import { IUser } from './user.interface';

export class User implements IUser {
  public id: string;
  public first_name: string;
  public last_name: string;
  public email: string;
  public phone: string;

  constructor();
  constructor(user: IUser);
  constructor(id: string, first_name: string, last_name: string);
  constructor(id: string, first_name: string, last_name: string, email: string);
  constructor(id: string, first_name: string, last_name: string, email: string, phone: string);
  constructor(iOrKey?: IUser | string, first_name?: string, last_name?: string, email?: string, phone?: string) {
    if (typeof iOrKey == 'object') {
      this.id = iOrKey.id;
      this.first_name = iOrKey.first_name;
      this.last_name = iOrKey.last_name;
      this.email = iOrKey.email;
      this.phone = iOrKey.phone;
    } else if (typeof iOrKey == 'string') {
      this.id = iOrKey;
      this.first_name = first_name;
      this.last_name = last_name;
      this.email = email;
      this.phone = phone;
    }
  }

  get full_name(): string {
    return this.first_name + ' ' + this.last_name;
  }
}