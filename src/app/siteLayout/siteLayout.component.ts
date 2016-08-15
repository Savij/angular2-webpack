import { Component, OnInit } from '@angular/core';
import { TopNavComponent } from '../topnav/topnav.component';
import { FooterComponent } from '../footer/footer.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    directives: [ROUTER_DIRECTIVES, TopNavComponent, FooterComponent],
    selector: 'site-layout',
    templateUrl: 'siteLayout.component.html'
})
export class SiteLayoutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}