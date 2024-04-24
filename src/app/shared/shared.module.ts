import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPageComponent } from './components';

@NgModule({
  declarations: [AppPageComponent],
  exports: [AppPageComponent],
  imports: [CommonModule],
})
export class SharedModule {}
