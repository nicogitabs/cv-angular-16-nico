import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResumeDataService {

getSkills() {
    return [
      { name: 'HTML, CSS', level: 65 },
      { name: 'Javascript', level: 75 },
      { name: 'Typescript', level: 80 },
      { name: 'Angular', level: 75 },
      { name: 'Java', level: 85 },
      { name: 'Spring-Boot', level: 80 },
      { name: 'MySQL Database', level: 75 },
      { name: 'Postgress', level: 75 },
    ];
  }
  getLanguages() {
    return [
      { nome: 'Italiano', percent: 95 },
      { nome: 'Inglese', percent: 85 },
      { nome: 'Spagnolo', percent: 60 }
    ];
  }

  getEducation() {
    return [
      { periodo: '03/2025 - 07/2025', titolo: 'Corso FrontEnd Developer', ente: 'Accademia Informatica' },
      { periodo: '04/2024 - 07/2024', titolo: 'Academy Developer', ente: 'Gruppo MCR' },
      { periodo: '02/2023 - 04/2023', titolo: 'Corso Java Developer', ente: 'Exolab Srl' },
      { periodo: '04/2022 - 12/2022', titolo: 'Analista Programmatore', ente: 'Istituto Cefi' },
      { periodo: '2018 - 2020', titolo: 'Scienze Infermieristiche', ente: 'Università La Sapienza' },
      { periodo: '2015 - 2016', titolo: 'Diploma Chimico-Biologico', ente: 'Istituto Piaget-Diaz' },
    ];
  }

  getExperiences() {
    return [
      {
        periodo: '06/2025 - Presente',
        azienda: 'FMG Consulting',
        ruolo: 'Stage curriculare Frontend Developer',
        descrizione: 'Creazione progetto web app utilizzando Angular, HTML, CSS, TypeScript.'
      },
      {
        periodo: '04/2023 - 07/2023',
        azienda: 'Exolab Srl',
        ruolo: 'Stage Assistenza back office',
        descrizione: 'Supporto utenti per Bonus Autotrasportatori, Patente, Carta Docente.'
      }
    ];
  }

  getInterests() {
    return [
      { label: 'Lettura', icon: 'book-outline' },
      { label: 'Film', icon: 'desktop-outline' },
      { label: 'Divulgazione', icon: 'information-circle-outline' },
      { label: 'Cucina', icon: 'cafe-outline' }
    ];
  }
}
