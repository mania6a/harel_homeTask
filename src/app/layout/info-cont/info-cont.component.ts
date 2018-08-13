import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-cont',
  templateUrl: './info-cont.component.html',
  styleUrls: ['./info-cont.component.css']
})
export class InfoContComponent implements OnInit {
  steps = [{
    name: 'מידע כללי',
    isActive: true
  },
  {
    name: 'פרטי בעל החיסחון',
    isActive: false
  },
  {
    name: 'אישור וסיכום',
    isActive: false
  }];
  constructor() { }

  ngOnInit() {
  }

  changeActive(ind) {
    this.steps.forEach(e => e.isActive = false);
    this.steps[ind].isActive = true;
  }

}
