import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  
})
export class AdminComponent implements OnInit {
  navLinks:Route[] = [];
  activeLink: Route|null;
  constructor(private router: ActivatedRoute) {
    this.navLinks = router.routeConfig.children;
    this.activeLink = this.navLinks[0];
   }
  ngOnInit() {
      }

}
