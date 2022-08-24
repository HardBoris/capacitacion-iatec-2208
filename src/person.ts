import { PersonService, PersonType } from './person-service';
import {autoinject, observable} from "aurelia-framework"

@autoinject
export class Person{
  public personMsg = "Personas"

  constructor(private service: PersonService){}

  isAdding = false;
  @observable search = null
  person;
  errorList;
  isError = false;
  isEmpty = true;

  addPerson(){
    this.isAdding = true;
    this.isError = false;
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
    const i = this.service.people.indexOf(p)
    this.service.people.splice(i,1)
  }

  cancel(){
    this.person = {};
    this.errorList = [];
    this.isError = false;
  }

  voltar(){
    this.isAdding = false;
  }

  searchChanged(newValue){
    if (newValue) {
      this.search = newValue;
      this.isEmpty = false;
    }
  }

  emptyText(){
    this.search = null
    this.isEmpty = true
  }

  confirmPerson(){
    const list = this.validate()
    
    if (list.length !== 0){
      this.isError = true;
      return this.errorList = list
    } else {
      this.service.people.push(this.person);
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
