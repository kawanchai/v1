import {bindable} from 'aurelia-framework';
import $ from 'jquery';

export class NavBar {
  @bindable router = null;

  click(name){

    
    $('html, body').animate({
      scrollTop: $('#'+name).offset().top - 70
    },400);
    
  }
  
}
