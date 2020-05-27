import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture-list',
  templateUrl: './picture-list.component.html',
  styleUrls: ['./picture-list.component.css']
})
export class PictureListComponent implements OnInit {
  pictures = [
    'assets/images/-1526382343.jpg',
    'assets/images/1 (1).jpg',
    'assets/images/1.jpg',
    'assets/images/4d6561e0b61b58caa63b48fa15307476.jpg',
    'assets/images/536147.jpg',
    'assets/images/9200000117209519.jpg',
    'assets/images/animal-cute-kitten-cat.jpg',
    'assets/images/baby-panda-ap-ml-180531_sl_3x2_1600.jpg',
    'assets/images/Beata-Miro.jpg',
    'assets/images/c64f0475196dc54f4dd4386ad962beba.jpg',
    'assets/images/Cat-Cat_Guide-An_adult_cat_cleaning_her_kittens_coat.jpg',
    'assets/images/cute-baby-animals-9.jpg',
    'assets/images/cute-baby-animals-1558535060.jpg',
    'assets/images/cute-kitten-416x254-cm-premium-non-woven-130gsm-i77094.jpg',
    'assets/images/Cute-Kitten-Picture-get-your-cat-to-look-at-the-camera.jpg',
    'assets/images/download.jpg',
    'assets/images/GujRFOc.jpg',
    'assets/images/hqdefault.jpg',
    'assets/images/images.jpg',
    'assets/images/istockphoto-1049781144-1024x1024.jpg',
    'assets/images/pet-animal-cute-kitten-baby-cat-mother-145122504.jpg',
    'assets/images/somali-cat-6-week-old-cute-kitten-mouth-open-13483358.jpg.webp',
    'assets/images/unnamed (1).jpg'
  ];

  constructor() { }

  ngOnInit() {
    
  }

}
