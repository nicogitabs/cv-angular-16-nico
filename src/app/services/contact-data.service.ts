import { Injectable } from '@angular/core';
import { Contact } from '../models/contact-models';

@Injectable({
  providedIn: 'root'
})
export class ContactDataService {

  constructor() { }

  getContacts(): Contact[] {
    return [
      { label: 'Telefono', icon: 'call-outline', text: '+39 388 78 90 555' },
      { label: 'Email', icon: 'mail-outline', text: 'nicol4s8993@gmail.com' },
      { label: 'GitHub', icon: 'logo-github', link: 'https://github.com/nicogitabs' },
      { label: 'LinkedIn', icon: 'logo-linkedin', link: 'https://linkedin.com' },
      { label: 'YouTube', icon: 'logo-youtube', link: 'https://youtube.com' },
      { label: 'Località', icon: 'pin-outline', text: 'Roma, Italia' }
    ];
  }
}
