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
  public notificationList:any = [];
  constructor() { 
    this.notificationList.push({
      Id      : 'item101',
      Class   : 'class 1',
      Title   : 'Notification 1',
      Time    : '06:45 PM',
      Status  : 'unread'
    },
    {
      Id      : 'item102',
      Class   : 'class 2',
      Title   : 'Notification 2',
      Time    : '06:47 PM',
      Status  : 'unread'
    },
    {
      Id      : 'item103',
      Class   : 'class 3',
      Title   : 'Notification 3',
      Time    : '06:55 PM',
      Status  : 'unread'
    });
  }

  favorite(notification : any) {
    console.log(notification);

    var index = this.notificationList.findIndex(x => x.Id === notification.Id);
    notification.Status = "unread";
    this.notificationList.slice(index,1, {notification})
    console.log(this.notificationList);
    /* notificationId.favoriteColor = 'green';
    notificationId.itemColor = 'green';
    notificationId.starColor = 'royalblue'; */
  };

  star(notification : any) {
    console.log(notification);
    var index = this.notificationList.findIndex(x => x.Id === notification.Id);
    notification.Status = "read";
    this.notificationList.slice(index,1, {notification})
    console.log(this.notificationList);
    /* 
    notificationId.starColor = 'red';
    notificationId.itemColor = 'red';
    notificationId.favoriteColor = 'royalblue'; */
  };
}