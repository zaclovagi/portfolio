import { Component } from '@angular/core';

@Component({
  selector: 'app-warrantysphere-page',
  templateUrl: './warrantysphere.page.html',
  styleUrl: './warrantysphere.page.scss',
})
export class WarrantyspherePage {
  images: string[] = [
    'checkout.jpeg',
    'admin-1.jpeg',
    'admin-2.jpeg',
    'admin-3.jpeg',
    'portal-1.jpeg',
    'portal-2.jpeg',
    'portal-3.jpeg',
    'portal-4.jpeg',
    // 'code-1.png',
    // 'code-2.png',
  ];

  currentImageIndex = 0;
  forward() {
    if (this.currentImageIndex === this.images.length - 1) return;
    this.currentImageIndex++;
  }
  backward() {
    if (this.currentImageIndex === 0) return;

    this.currentImageIndex--;
  }
}
