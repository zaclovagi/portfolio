import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent implements OnInit {
  @Input() title: string = 'Project Title';
  @Input() description: string = 'Project Description';
  @Input() backgroundImage!: string;
  @Input() techUsed: string[] = [];

  @Input() liveUrl?: string;
  @Input() codeUrl?: string;
  @Input() internalUrl?: string;
  @Input() companyName: string = 'Personal Project';

  bgClass = '';

  ngOnInit(): void {
    console.log(this.backgroundImage);
    this.bgClass = "bg-[url('" + this.backgroundImage + "')]";
  }

  openUrl(arg0: string) {
    throw new Error('Method not implemented.');
  }
}
