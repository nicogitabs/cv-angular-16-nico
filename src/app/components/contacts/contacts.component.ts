// import { Component } from '@angular/core';
// import { Title } from '@angular/platform-browser';

// @Component({
//   selector: 'app-contacts',
//   templateUrl: './contacts.component.html',
//   styleUrls: ['./contacts.component.css']
// })
// export class ContactsComponent {
  
//     constructor(private titleService:Title){
//       this.titleService.setTitle('Nicolò Corpuz Absolor - Contacts');
//     }

// }

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Contact } from 'src/app/models/contact-models';
import { ContactDataService } from 'src/app/services/contact-data.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[] = [];


    //attraverso costruttore inietto con setTitle la stringa da cui ottengo il titolo nella scheda del browser

  constructor(private titleService: Title, private contactService: ContactDataService) {
    this.titleService.setTitle('Nicolò Corpuz Absolor - Contacts');
  }

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }
}
