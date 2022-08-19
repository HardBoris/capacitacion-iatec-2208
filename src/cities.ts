import { CitiesService, CityType } from './cities-service';
import {bindable, inject} from "aurelia-framework"

@inject(CitiesService)
export class Cities{
  constructor(private citiesService: CitiesService ){}

  city: CityType;
  @bindable isVisible = false;
  columnsHeader = ["Municipios","Unidade Federativa","População"]

  onlyCapitals(){
    this.isVisible = !this.isVisible;
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
