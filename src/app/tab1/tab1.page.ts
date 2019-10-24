import { Component } from '@angular/core';
import { CHOME } from '../Modeles/CHome';
import { tt } from '../Modeles/test';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public myhome:CHOME[];

  sliderOpts = {
    loop: true,
    slideToClickedSlide: true,
    speed: 1000,
    zoom: false,
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 10,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'custom',
    },
    autoplay: {
      delay: 1500,
    },
  };
  
  constructor() {}

// Gestion des Likes
  public Like(item){
    let likebef = item.like;
    item.like= !item.like;
    if(likebef==false){
      item.nombrelike ++;
    }else{
      item.nombrelike --;
    }
  }

  ngOnInit(){
      
    this.myhome = tt;
    // this.mystorage =
    
}

}
