import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html'
})
export class Projects {

  projects: Project[] = [
    {
      title: 'CV Angular',
      description: 'Curriculum online responsive e navigabile',
      tech: ['Angular', 'Bootstrap'],
      link: '#'
    },
    {
      title: 'App Android',
      description: 'Applicazione Android sviluppata in Java',
      tech: ['Java', 'Android Studio']
    }
  ];

}