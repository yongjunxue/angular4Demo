import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openMap = {
    sub1: true,
    sub2: false,
    sub3: false,
    sub4: false
  };

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[ key ] = false;
      }
    }
  }
}
