import { Component } from '@angular/core';

@Component({
  selector: 'app-page',
  template: `
    <div class="px-4 pt-12 pb-20 w-full">
      <ng-content></ng-content>
    </div>
  `,
})
export class AppPageComponent {}
