// src/app/models/resume.models.ts

export interface Skill {
  name: string;
  level: number;
}

export interface Interest {
  label: string;
  icon: string;
}

export interface Education {
  periodo: string;
  titolo: string;
  ente: string;
}

export interface Experience {
  periodo: string;
  azienda: string;
  ruolo: string;
  descrizione: string;
}

export interface Language {
  nome: string;
  percent: number;
}
