import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

const minimumY = 100;

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrl: './app-bar.component.scss',
})
export class AppBarComponent {
  constructor(router: Router) {
    this.router = router;

    document.addEventListener('scroll', () => {
      this.$isScrollingUp.next(this.lastY > window.scrollY);
      this.lastY = window.scrollY;
      this.$isAtTop.next(window.scrollY < minimumY);
    });
  }

  lastY = 0;
  $isAtTop: BehaviorSubject<boolean> = new BehaviorSubject(true);
  $isScrollingUp: BehaviorSubject<boolean> = new BehaviorSubject(false);

  title = 'zaclovagi.ca';
  tabs = [
    {
      title: 'Home',
      url: '/',
      icon: 'home',
    },
    {
      title: 'About',
      url: '/about',
      icon: 'info',
    },
    {
      title: 'Projects',
      url: '/projects',
      icon: 'code',
    },
    {
      title: 'Games',
      url: '/games',
      icon: 'sports_esports',
    },
    {
      title: 'Contact',
      url: '/contact',
      icon: 'mail',
    },
  ];

  router: Router;
}
