import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  tags = [
    {
      title: 'Highlited tags',
      values: ['Animals', 'Baby', 'Cute']
    },
    {
      title: 'By Time',
      values: ['May', 'April', 'March', 'February', 'January']
    },
    { values: ['2020', '2019', '2018', '2017'] },
    {
      title: 'By Label',
      values: ['Family', 'Christmas', 'Nature', 'macro', 'Skylight', 'Animals']
    },
    {},
    { values: ['Show All'] }
  ];

  constructor() { }

  ngOnInit() {
  }

}
