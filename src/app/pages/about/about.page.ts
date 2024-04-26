import { Component, OnInit } from '@angular/core';
const birthday = new Date(1996, 0, 18);
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrl: './about.page.scss',
})
export class AboutPage implements OnInit {
  age: number = 0;
  ngOnInit(): void {
    const timeDiff = Math.abs(Date.now() - birthday.getTime());
    this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
  }
}
