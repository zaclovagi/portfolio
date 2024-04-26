import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'fullstack-white',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/fullstack-white.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'fullstack-white-outline',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/fullstack-white-outline.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'fullstack-teal',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/fullstack-teal.svg'
      )
    );
  }
  title = 'portfolio';
}
