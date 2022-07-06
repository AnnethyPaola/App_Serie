import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})


export class PersonajesPage implements OnInit {

  isModalOpen1 = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen1 = isOpen;
  }

  isModalOpen2 = false;

  setOpen1(isOpen: boolean) {
    this.isModalOpen2 = isOpen;
  }

  isModalOpen3 = false;

  setOpen2(isOpen: boolean) {
    this.isModalOpen3 = isOpen;
  }

  constructor() { }

  ngOnInit() {
  }

   

}
