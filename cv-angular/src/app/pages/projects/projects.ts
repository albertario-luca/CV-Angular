import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Project = {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  githubLink?: string;
  pdfLink?: string;
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
      title: 'Business Game "LIPARI RISIKO" Full Stack',
      description: 'Sviluppo full stack di un business game gestionale con Angular e Spring Boot. Integrazione MySQL e CRUD.',
      tech: ['Angular', 'Spring Boot', 'Java', 'MySQL'],
      image: 'assets/lipari-risiko.jpg',
      githubLink: 'https://github.com/lukeulele-99/FE-RisikoLipari'
    },

    {
      title: 'Digital Transformation Website "Wannenes"',
      description: 'Analisi competitiva e ottimizzazione dell’esperienza utente per il sito della casa d’aste Wannenes.',
      tech: ['Competitor Analysis', 'UX Research', 'Brand Strategy'],
      image: 'assets/wannenes.jpg',
      pdfLink: 'assets/wannenes-report.pdf'
    },

    {
      title: 'Digital Transformation Analysis - Blockbuster',
      description: 'Analisi strategica del fallimento di Blockbuster, cause principali e confronto con Netflix. Studio delle opportunità mancate nella transizione al digitale.',
      tech: ['Digital Transformation', 'Case Study', 'Strategic Analysis', 'Business Model', 'Competitor Analysis'],
      image: 'assets/ifts.jpg',
      pdfLink: 'assets/blockbuster.pdf'
    },

    {
      title: 'CV Angular - Portfolio Interattivo',
      description: 'Curriculum vitae online moderno, responsive e navigabile sviluppato interamente con Angular.',
      tech: ['Angular', 'TypeScript', 'Bootstrap'],
      image: 'assets/projects/cv-angular.jpg',
      githubLink: 'https://github.com/tuonome/cv-angular'
    },

    {
      title: 'Crickle - App Toelettatura Animali',
      description: 'Applicazione Android per prenotazione servizi di toelettatura, gestione animali e calendario appuntamenti.',
      tech: ['Java', 'Android Studio'],
      image: 'assets/projects/crickle.jpg',
      githubLink: 'https://github.com/tuonome/crickle-android'
    }

  ];

}