import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dz-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isDarkTheme: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
