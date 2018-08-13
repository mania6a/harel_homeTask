import { Component, OnInit } from '@angular/core';
import {animate, group, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  animations: [
    trigger('body', [
      state('hide', style({
        opacity: 0,
        height: 0
      })),
      state('show', style({
        height: '*',
        opacity: 1
      })),
      transition('show => hide', [
        group([
          animate(300, style({
            opacity: 0
          })),
          animate(500, style({
            height: 0
          }))
        ])
      ]),
      transition('hide => show', [
        group([
          animate('200ms 300ms', style({
            opacity: 1
          })),
          animate(300, style({
            height: '*'
          }))
        ])
      ])

    ])
  ]
})
export class InfoComponent implements OnInit {
  chosed = true;
  radios = [
    {name: 'עבורי', isRadio: true},
    {name: 'עבור אדם אחר', isRadio: false}
  ];
  state = 'show';
  constructor() { }

  ngOnInit() {
  }

  choose(){
    this.chosed = !this.chosed;
  }

  changeRadio(radio) {
    this.radios.forEach(r => r.isRadio = false);
    radio.isRadio = true;
  }

  hide() {
    this.state = this.state === 'hide' ? this.state = 'show' : this.state = 'hide';
  }

}
