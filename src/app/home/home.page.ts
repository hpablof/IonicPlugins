import { Component } from '@angular/core';
import { Badge } from '@ionic-native/badge/ngx';
import { CodePush } from '@ionic-native/code-push/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private badge: Badge,
              private codePush: CodePush) {
                this.codePush.sync()
                .subscribe((SyncStatus)=>{
                  console.log(SyncStatus);
                })
              }  
  // badge
  requestPermission(){
    this.badge.requestPermission()
    .then((resp)=>{
      console.log(resp)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  setBadge(){
    this.badge.set(10)
    .then((resp)=>{
      console.log(resp)
    })
    .catch((err)=>{
      console.log(err)

    })
  }
  getBadges(){
    this.badge.get()
    .then((resp)=>{
      console.log(resp)
    })
    .catch(err=>{
      console.log(err)
    })
  }
  // Code Push
  onCodePush(){
  }
}
