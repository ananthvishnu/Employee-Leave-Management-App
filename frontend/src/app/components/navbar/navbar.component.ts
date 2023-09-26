import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
ngOnInit(): void {
const navbarToggle:any = document.querySelector("#navbar-toggle");
const navbarMenu:any = document.querySelector("#navbar-menu");
const navbarLinksContainer:any = navbarMenu.querySelector(".navbar-links");
let isNavbarExpanded:any = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e:any) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);

}
}
