import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('nav') nav: ElementRef;
  title = 'Angular7 Sample'

  constructor(private renderer: Renderer2,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.route.firstChild.url['value'][0]),
    ).subscribe((urlSegment) => {
      const path = urlSegment.path;
      this.setNavBackgroundColor(path);
      this.setModuleIcon(path);
    });
  }

  setNavBackgroundColor(path: string) {
    const elements = this.nav.nativeElement.querySelectorAll('[routerLink]');
    [].forEach.call(elements, (element) => {
      const routerLink = element.getAttributeNode('routerLink').value;
      if (routerLink === '/' + path) {
        this.renderer.setStyle(element, 'background-color', '#32d8dc');
      } else {
        this.renderer.setStyle(element, 'background-color', '#51e1a2');
      }
    });
  }

  setModuleIcon(path: string) {
    const element = document.querySelector('link[rel=icon]');
    switch (path) {
      case 'heroes':
        this.renderer.setAttribute(element, 'href', '/assets/icon/mini.ico');
        break;
      default:
        this.renderer.setAttribute(element, 'href', '/assets/icon/bee.ico');
        break;
    }
  }
}
