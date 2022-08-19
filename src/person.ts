import { PersonService, PersonType } from './person-service';
import {autoinject} from "aurelia-framework"

@autoinject
export class Person{

  constructor(private personService: PersonService){}

  isAdding = false;
  person;
  errorList;
  isError = false;

  addPerson(){
    this.isAdding = true;
    this.person = {};
    this.errorList = []
  }

  validate(){
    const ente = this.person;
    
    this.errorList = [];

    if (ente) {
      Object.keys(ente).forEach(key => {
        if (ente[key] === undefined || ente[key].length === 0) {
          this.errorList.push(key)
        }
      })
      return this.errorList
    }
  }

  removePerson(p){
    const i = this.personService.people.indexOf(p)
    this.personService.people.splice(i,1)
  }

  cancel(){
    this.person = {};
    this.errorList = [];
    this.isError = false;
  }

  confirmPerson(){
    const list = this.validate()
    
    if (list.length !== 0){
      this.isError = true;
      return this.errorList = list
    } else {
      this.personService.people.push(this.person);
      this.isAdding = false;
    }
  }
}

export class UpperPersonValueConverter{
  toView(name: string){
    if (name) {
      return name.toUpperCase()
    }
    return name
  }
}

export class FiltroPersonValueConverter{
  toView(people: PersonType[], search: string) {
    if (!people || !search) {
      return people
    }
    return people.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
  }
}
