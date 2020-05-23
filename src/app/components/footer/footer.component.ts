import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  aboutMe = 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, \
  when an unknown printer took a galley of type and scrambled it to make a type specimen book.';
  links = [
    {
      'value': 'Pinterest',
      'url': 'https://google.be'
    },
    {
      'value': 'Instagram',
      'url': 'https://google.be'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
