export class Persons {
  cristinID: string;
  firstname: string;
  lastname: string;
  institution: string;
  position: string;

  constructor(
    firstname: string,
    lastname: string,
    cristinID: string,
    institution: string,
    position: string) {

    this.firstname = firstname;
    this.lastname = lastname;
    this.cristinID = cristinID;
    this.institution = institution;
    this.position = position;
  }
}
