export default class Contact {

  name: string;
  firstName: string;
  phone: string;
  photo: string;
  birthdate: Date;
  adress: string;


  constructor(name: string, firstName: string, phone: string, photo: string, birthdate: Date, adress: string) {
    this.name = name;
    this.firstName = firstName;
    this.phone = phone;
    this.photo = photo;
    this.birthdate = birthdate;
    this.adress = adress;
  }

  public toString = (): string => {
    return `${this.name} ${this.firstName}`;
  }

}