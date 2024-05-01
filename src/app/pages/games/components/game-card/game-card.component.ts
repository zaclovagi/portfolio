import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
})
export class GameCardComponent {
  @Input() title: string = 'Game Title';
  @Input() description: string = 'Game Description';
  @Input() techUsed: string[] = [];
  @Input() companyName: string = 'Personal Project';
  @Input() liveText = 'Play';

  @Input() liveUrl?: string;
  @Input() internalUrl?: string;
}
