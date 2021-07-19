export default class Contact {

  nom: string;
  prenom: string;
  tel: string;


  constructor(nom: string, prenom: string, tel: string) {
    this.nom = nom;
    this.prenom = prenom;
    this.tel = tel;
  }

  public toString = (): string => {
    return `${this.nom} ${this.prenom}`;
  }

}