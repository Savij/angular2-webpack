import { Component, OnInit } from '@angular/core';
import '../../style/app.scss';
@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
  styleUrls: ['about.component.scss']
})
export class AboutComponent implements OnInit {
  Title: string = 'About Component';
  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello About');
  }

}
