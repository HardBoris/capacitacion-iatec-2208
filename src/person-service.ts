export class PersonService{
  
  people = [
    {name: "Lillie Eaton", city: "Fall River, Wisconsin", age: 58, maritalStatus: "Casado"},
    {name: "Donna Halle", city: "Eules, Texas", age: 49, maritalStatus: "Casado"},
    {name: "Danny Palmer", city: "La Quinta, California", age: 51, maritalStatus: "Casado"},
    {name: "Dave Tindell", city: "Omaha, Nebraska", age: 32, maritalStatus: "Casado"},
    {name: "Pedro Gray", city: "Traverse City, Michigan", age: 26, maritalStatus: "Casado"},
    {name: "Charles McBrayer", city: "Boynton Beach, Florida", age: 43, maritalStatus: "Casado"},
    {name: "Dion Farrier", city: "Minneapolis, Minnesota", age: 40, maritalStatus: "Casado"},
    {name: "Glenn Burns", city: "Baton Rouge, Lousiana", age: 36, maritalStatus: "Casado"},
    {name: "Elia Eicher", city: "Somerville", age: 44, maritalStatus: "Casado"},
    {name: "Margaret Tang", city: "Montezuma, Georgia", age: 70, maritalStatus: "Casado"}
  ]

}

export interface PersonType{
  name: string;
  city: string;
  age: number;
  maritalStatus: string;
}
