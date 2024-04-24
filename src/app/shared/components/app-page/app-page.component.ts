import { Component } from '@angular/core';

@Component({
  selector: 'app-page',
  template: `
    <div class="p-4 pt-12 w-full">
      <ng-content></ng-content>
    </div>
  `,
})
export class AppPageComponent {}
