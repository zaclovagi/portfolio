import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AboutRoutingModule } from './about-routing.module';
import { AboutPage } from './about.page';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AboutPage],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MatTabsModule,
    PdfViewerModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class AboutModule {}
