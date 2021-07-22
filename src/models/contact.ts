export default class Contact {

  name = "";
  firstName= "";
  phone = "";
  photo = "";
  birthdate: Date = null;
  address = "";


  constructor(name: string, firstName: string, phone: string, photo: string, birthdate: Date | null, address: string) {
    this.name = name;
    this.firstName = firstName;
    this.phone = phone;
    this.photo = photo;
    this.birthdate = birthdate;
    this.address = address;
  }

  public toString = (): string => {
    return `${this.name} ${this.firstName}`;
  }

}