import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
})
export class HomePage {
  frontEndSkills: string[] = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS / SCSS',
    'TailwindCSS',
    'Angular Material',
    'Svelte / SvelteKit',
    'React Native',
    'Flutter / Flutterflow',
  ];
  backEndSkills: string[] = [
    'NestJS',
    'NodeJS',
    'Express',
    'MySQL',
    'TypeORM',
    'Restful APIs',
    'Interceptors, Middleware, and Guards',
    'CQRS',
    '3rd Party Integrations (Firebase, Stripe, Zoom, Dwolla, Calendly, BoldSign, etc.)',
  ];
  miscSkills: string[] = [
    'Git and Github',
    'Github Actions',
    'SAAS and Multi-tenancy',
    'Google Cloud Platform',
    'Docker',
    'NX Monorepos',
    'Vercel and Netlify, and Firebase hosting',
    'VS Code',
    'Unity and C#',
    'Github Copilot and Codeium',
    'ClickUp, Jira, and Trello',
  ];
}
