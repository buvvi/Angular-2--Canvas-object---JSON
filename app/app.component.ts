import { Component } from '@angular/core';
import { Ajitha1 } from './ajitha.component';
import { buvvi1 } from './buvvi.component';
import { draw1 } from './draw1.component';
@Component({
  selector: 'my-app',
  template: `


  
  
  <draw1></draw1>


  `,
  directives: [draw1]



})
export class AppComponent { }
