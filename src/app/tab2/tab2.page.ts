import { Component } from '@angular/core';
import { IonItem, IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public itemColor = 'royalblue';
  public favoriteColor = 'royalblue';
  public starColor = 'royalblue';
  constructor() { }

  favorite() {
    // console.log("favorite called");
    // console.log(itemSlide);
    this.favoriteColor = 'green';
    this.itemColor = 'green';
    this.starColor = 'royalblue';
  };

  star() {
    this.starColor = 'red';
    this.itemColor = 'red';
    this.favoriteColor = 'royalblue';
  };
}