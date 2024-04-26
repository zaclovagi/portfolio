import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-call-for-hire',
  templateUrl: './call-for-hire.component.html',
  styleUrl: './call-for-hire.component.scss',
})
export class CallForHireComponent {
  protected opened: boolean = false;

  public onClose = new EventEmitter<void>();
  public onOpen = new EventEmitter<void>();

  public open(): void {
    this.opened = true;
    this.onOpen.emit();
  }

  public close(): void {
    this.opened = false;
    this.onClose.emit();
  }
}
