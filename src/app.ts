import {Router, RouterConfiguration} from "aurelia-router";
import {PLATFORM} from "aurelia-framework";
export class App {
  router: Router;
  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'Capacitação Aurelia';
    config.map([
      {
        route: ["","city"],
        name: "city",
        moduleId: PLATFORM.moduleName("./cities"),
        nav: true,
        title: "Cidade"
      },
      {
        route: "person",
        name: "person",
        moduleId: PLATFORM.moduleName("./person"),
        nav: true,
        title: "Person"
      },
      {
        route: "prueba",
        name: "prueba",
        moduleId: PLATFORM.moduleName("./prueba"),
        nav: true,
        title: "Prueba"
      },
      /* {
        route: "bginput",
        name: "bginput",
        moduleId: PLATFORM.moduleName("./bginput"),
        nav: true,
        title: "Bginput"
      } */
    ])
    this.router = router;
  }
  
  
}
