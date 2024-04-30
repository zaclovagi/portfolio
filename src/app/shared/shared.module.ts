import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPageComponent } from './components';
import { JoinPipe } from './pipes';

@NgModule({
  declarations: [AppPageComponent, JoinPipe],
  exports: [AppPageComponent, JoinPipe],
  imports: [CommonModule],
})
export class SharedModule {}
