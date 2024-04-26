import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrl: './skills-card.component.scss',
})
export class SkillsCardComponent {
  @Input() skills: string[] = [];
}
