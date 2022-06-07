import { controlClassNames } from '@angular/core/schematics/migrations/typed-forms/util';

export class User {
  constructor(
    public name: string,
    public surname: string,
    public age: number,
    public hireDate: Date
  ) {
    (this.name = name),
      (this.surname = surname),
      (this.age = age),
      (this.hireDate = hireDate);
  }
}
