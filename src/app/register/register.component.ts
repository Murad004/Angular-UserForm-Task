import { Component } from '@angular/core';
import { UserModel } from '../model';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  name = null;
  surname = null;
  age = null;
  date = null;

  Model = new UserModel();

  constructor() {}

  Register(name: string, surname: string, age: number, date: Date) {
    this.Model.items.push(new User(name, surname, age, date));
  }

  GetItems() {
    return this.Model.items;
  }
}
