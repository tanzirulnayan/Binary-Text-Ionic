import { Component } from '@angular/core';
import { IonItem, IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public color = 'blue';

  constructor() { }

  favorite( itemSlide: any ) {
    console.log("favorite called");
    console.log(itemSlide);
    this.color = 'red';
    itemSlide.setElementClass("active-sliding", true);
  };

  // public openNotification(itemSlide: any, item: any) {
  //   // reproduce the slide on the click

  //   itemSlide.setElementClass("active-sliding", true);
  //   itemSlide.setElementClass("active-slide", true);
  //   itemSlide.setElementClass("active-options-right", true);
  //   item.setElementStyle("transform", "translate3d(-241px, 0px, 0px)");
  // };
}
