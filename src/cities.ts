import { CitiesService, CityType } from './cities-service';
import {bindable, inject, observable} from "aurelia-framework"

@inject(CitiesService)
export class Cities{
  public cityMsg = "Municipios Brasileiros";

  constructor(private citiesService: CitiesService ){}

  city: CityType;
  @bindable isVisible = false;

  @observable search = null
  isError = false;
  isEmpty = true;

  columnsHeader = ["Municipios","Unidade Federativa","População"]

  onlyCapitals(){
    this.isVisible = !this.isVisible;
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

}

export class UpperCityValueConverter{
  toView(name: string){
    if (name) {
      return  name.toUpperCase()
    }
    return name
  }
}

export class FiltroCityValueConverter{
  toView(city: CityType[], search: string) {
    if (!city || !search) {
      return city
    }
    return city.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
  }
}
