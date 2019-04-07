import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  classToggle = false;
  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
   
    if(window.scrollY > 10){
      this.classToggle=true;
    }
    else{
      this.classToggle=false;
    }
  
}


  constructor() { }

  ngOnInit() {
  }

}
