import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-momentos',
  templateUrl: './momentos.page.html',
  styleUrls: ['./momentos.page.scss'],
})
export class MomentosPage implements OnInit {

  isModalOpenM1 = false;

  setOpenM1(isOpen: boolean) {
    this.isModalOpenM1 = isOpen;
  }

  isModalOpenM2 = false;

  setOpenM2(isOpen: boolean) {
    this.isModalOpenM2 = isOpen;
  }

  isModalOpenM3 = false;

  setOpenM3(isOpen: boolean) {
    this.isModalOpenM3 = isOpen;
  }

  constructor() { }

  ngOnInit() {
  }

}
