export class Personer {
  firstname: string;
  lastname: string;
  role: string;
  institution: string;

  constructor(
    firstname: string,
    lastname: string,
    role: string,
    institution: string) {

    this.firstname = firstname;
    this.lastname = lastname;
    this.role = role;
    this.institution = institution;
  }
}
