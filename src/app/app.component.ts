import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, RouterLink} from '@angular/router';
import { ApiService } from './shared';
//import { TopNavComponent } from './topnav/topnav.component';
//import { FooterComponent } from './footer/footer.component';

import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app', // <my-app></my-app>
  providers: [ApiService],
  directives: [...ROUTER_DIRECTIVES, RouterLink],
  templateUrl: './app.component.html'
})
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';

  constructor(private api: ApiService) {
  }
}
