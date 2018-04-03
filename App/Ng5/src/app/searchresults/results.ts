import { Affiliation } from './affiliation';

export class Results {
  cristinID: string;
  firstName: string;
  lastName: string;
  affiliation: Affiliation;

  constructor(cristinID: string, firstName: string, lastName: string, affiliation: Affiliation) {
    this.cristinID = cristinID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.affiliation = affiliation;
  }
}
