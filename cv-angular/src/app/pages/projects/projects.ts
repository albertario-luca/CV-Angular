import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.html',
  imports: [CommonModule]
})
export class Projects {
  projects = [
    {
      title: 'CV Angular',
      desc: 'Curriculum online responsive',
      link: '#'
    }
  ];
}