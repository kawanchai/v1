import 'bootstrap';


export class App {
  configureRouter(config, router){
    config.title = 'Benny\'s Restaurant';
    config.map([
      { route: ['','welcome'],  name: 'welcome',      moduleId: 'welcome',      nav: true, title:'Welcome' },
      { route: 'contact',         name: 'contact',        moduleId: 'contact',        nav: true, title:'Contact' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title:'Child Router' }
    ]);

    this.router = router;
  }
}
