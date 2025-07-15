# 💼 Portfolio CV – Nicolò Corpuz Absolor

Benvenuto nel mio portfolio personale, sviluppato con **Angular 16**.  
Questa applicazione mostra le mie competenze tecniche, progetti realizzati e informazioni di contatto, in un'interfaccia responsive e moderna.

---

## 🚀 Tecnologie utilizzate

- **Angular 16** – Framework principale
- **TypeScript** – Linguaggio base per componenti e servizi
- **HTML5 + CSS3** – Struttura e stile
- **Bootstrap (ngx-bootstrap)** – Interfacce dinamiche e responsive
- **Font Awesome + Ionicons** – Icone personalizzate
- **Git + GitHub** – Versionamento e repository

---

## 🧩 Architettura del Progetto

- `components/` – Componenti principali: navbar, home, resume, portfolio, contacts
- `models/` – Interfacce personalizzate (`Skill`, `Language`, `Project`, etc.)
- `services/` – Servizi Angular per iniettare dati tramite dependency injection
- `pipes/` – Pipe custom per formattare dinamicamente i contenuti

---

## 📁 Sezioni principali

### 🏠 Home
- Benvenuto e presentazione professionale

### 💼 Portfolio
- Progetti divisi per tecnologia (HTML, CSS, JS, Spring, ecc.)
- Filtrabili tramite tag
- Modale per dettagli aggiuntivi

### 📜 Resume
- Esperienze, skills, formazione, lingue
- Dati iniettati tramite `resume-data.service.ts`
- Download del CV in PDF

### 📬 Contacts
- Informazioni personali con link a GitHub, LinkedIn, YouTube
- Dati gestiti via `contact-data.service.ts`
- Pipe `url-to-label` per migliorare leggibilità

---

## 🧠 Approfondimenti tecnici

- **Data Binding** con `{{}}` e `[property]`
- **Routing** con `AppRoutingModule`
- **Servizi (`@Injectable`)** per separare logica dai componenti
- **Interfacce** per tipizzare i dati
- **Responsività** gestita con media queries e `ngx-bootstrap`
- **GitHub Integration** e deploy semplificato

---

## 🧪 Esecuzione progetto in locale

```bash
npm install       # installa le dipendenze
ng serve          # avvia il server locale su http://localhost:4200
