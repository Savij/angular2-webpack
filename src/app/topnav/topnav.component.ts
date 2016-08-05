import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
@Component({
    moduleId: module.id,
    selector: 'my-topnav',
    templateUrl: 'topnav.component.html',
    directives : [ROUTER_DIRECTIVES]
})
export class TopNavComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
