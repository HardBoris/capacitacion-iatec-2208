import {bindable} from "aurelia-framework"

export class CitiesService{

  cityList = [
    {isCapital: true, code: 3550308,	name: "São Paulo", state: "São Paulo",	population: 12396372},
    {isCapital: true, code: 3304557,	name: "Rio de Janeiro",	 state: "Rio de Janeiro",	population: 6775561},
    {isCapital: true, code: 5300108,	name: "Brasília",	 state: "Distrito Federal",	population: 3094325},
    {isCapital: true, code: 2927408,	name: "Salvador",	state: "Bahia",	population: 2900319},
    {isCapital: true, code: 2304400,	name: "Fortaleza",	 state: "Ceará",	population: 2703391},
    {isCapital: true, code: 3106200,	name: "Belo Horizonte",	 state: "Minas Gerais",	population: 2530701},
    {isCapital: true, code: 1302603,	name: "Manaus",	 state: "Amazonas",	population: 2255903},
    {isCapital: true, code: 4106902,	name: "Curitiba",	 state: "Paraná",	population: 1963726},
    {isCapital: true, code: 2611606,	name: "Recife",	 state: "Pernambuco",	population: 1661017},
    {isCapital: true, code: 5208707,	name: "Goiânia",	 state: "Goiás",	population: 1555626},
    {isCapital: true, code: 1501402,	name: "Belém",	state: "Pará",	population: 1506420},
    {isCapital: true, code: 4314902,	name: "Porto Alegre", state: "Rio Grande do Sul",	population: 1492530},
    {isCapital: false, code: 3518800,	name: "Guarulhos",	 state: "São Paulo",	population: 1404694},
    {isCapital: false, code: 3509502,	name: "Campinas",	 state: "São Paulo",	population: 1223237},
    {isCapital: true, code: 2111300,	name: "São Luís",	 state: "Maranhão",	population: 1115932},
    {isCapital: false, code: 3304904,	name: "São Gonçalo",	 state: "Rio de Janeiro",	population: 1098357},
    {isCapital: true, code: 2704302,	name: "Maceió",	 state: "Alagoas",	population: 1031597},
    {isCapital: false, code: 3301702,	name: "Duque de Caxias",	 state: "Rio de Janeiro",	population: 929449},
    {isCapital: true, code: 5002704,	name: "Campo Grande",	 state: "Mato Grosso do Sul",	population: 916001},
    {isCapital: true, code: 2408102,	name: "Natal",	 state: "Rio Grande do Norte",	population: 896708},
    {isCapital: true, code: 2211001,	name: "Teresina",	 state: "Piauí",	population: 871126},
    {isCapital: false, code: 3548708,	name: "São Bernardo do Campo",	 state: "São Paulo",	population: 849874},
    {isCapital: true, code: 2507507,	name: "João Pessoa",	 state: "Paraíba",	population: 825796},
    {isCapital: false, code: 3303500,	name: "Nova Iguaçu",	 state: "Rio de Janeiro",	population: 825388},
    {isCapital: false, code: 3549904,	name: "São José dos Campos",	 state: "São Paulo",	population: 737310},
    {isCapital: false, code: 3547809,	name: "Santo André",	 state: "São Paulo",	population: 723889},
    {isCapital: false, code: 3543402,	name: "Ribeirão Preto",	 state: "São Paulo",	population: 720116},
    {isCapital: false, code: 2607901,	name: "Jaboatão dos Guararapes",	 state: "Pernambuco",	population: 711330},
    {isCapital: false, code: 3170206,	name: "Uberlândia",	 state: "Minas Gerais",	population: 706597},
    {isCapital: false, code: 3534401,	name: "Osasco",	 state: "São Paulo",	population: 701428},
    {isCapital: false, code: 3552205,	name: "Sorocaba",	 state: "São Paulo",	population: 695328},
    {isCapital: false, code: 3118601,	name: "Contagem",	 state: "Minas Gerais",	population: 673849},
    {isCapital: false, code: 2800308,	name: "Aracaju",	 state: "Sergipe",	population: 672614},
    {isCapital: false, code: 2910800,	name: "Feira de Santana",	state: "Bahia",	population: 624107},
    {isCapital: true, code: 5103403,	name: "Cuiabá",	 state: "Mato Grosso",	population: 623614},
    {isCapital: false, code: 4209102,	name: "Joinville",	 state: "Santa Catarina",	population: 604708},
    {isCapital: false, code: 5201405,	name: "Aparecida de Goiânia",	 state: "Goiás",	population: 601844},
    {isCapital: false, code: 4113700,	name: "Londrina",	 state: "Paraná",	population: 580870},
    {isCapital: false, code: 3136702,	name: "Juiz de Fora",	 state: "Minas Gerais",	population: 577532},
    {isCapital: true, code: 1100205,	name: "Porto Velho",	 state: "Rondônia",	population: 548952},
    {isCapital: false, code: 1500800,	name: "Ananindeua",	state: "Pará",	population: 540410},
    {isCapital: false, code: 3205002,	name: "Serra",	 state: "Espírito Santo",	population: 536765},
    {isCapital: false, code: 4305108,	name: "Caxias do Sul",	 state: "Rio Grande do Sul",	population: 523716},
    {isCapital: true, code: 1600303,	name: "Macapá",	 state: "Amapá",	population: 522357},
    {isCapital: false, code: 3303302,	name: "Niterói",	 state: "Rio de Janeiro",	population: 516981}
  ]
}

export interface CityType{
  isCapital: boolean;
  code?: number;
  name: string;
  state: string;
  population: number;
}
