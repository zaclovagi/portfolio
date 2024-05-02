import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input() title: string = 'Project Title';
  @Input() companyName: string = 'Personal Project';
  @Input() description: string = 'Project Description';

  @Input() techUsed: string[] = [];
  @Input() contributions: string[] = [];

  @Input() liveUrl?: string;
  @Input() codeUrl?: string;
  @Input() internalUrl?: string;
}
