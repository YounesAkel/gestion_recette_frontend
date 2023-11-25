import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
//logo="images/logo.jpg"
  // menu= document.getElementById("menu") as HTMLFormElement;
  display:boolean=false;
      showHideMenu(){
  this.display=!this.display;
    // this.menu.classList.toggle("opened");
    // this.menu.classList.toggle('opened');
          }
}
