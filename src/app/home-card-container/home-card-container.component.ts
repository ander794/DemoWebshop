import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-card-container',
  templateUrl: './home-card-container.component.html',
  styleUrls: ['./home-card-container.component.css']
})
export class HomeCardContainerComponent implements OnInit {

  header: String;
  text: String;
  link: String;
  pictureUrl: String;

  constructor() { }

  ngOnInit() {
    this.header = "Beautiful landscape"
    this.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    this.pictureUrl = "./assets/6835100-landscape.jpg";
  }

}
