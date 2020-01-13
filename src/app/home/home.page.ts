import { Component } from '@angular/core';
import { Badge } from '@ionic-native/badge/ngx';
import { CodePush, SyncStatus } from '@ionic-native/code-push/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private badge: Badge,
              private codePush: CodePush,
              private dialogs: Dialogs) {
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
  clearBadge(){
    this.badge.clear()
    .then((resp)=>{
      console.log(resp)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  // Code Push
  onSync(){
    this.codePush.sync()
                .subscribe((syncStatus)=>{
                  switch (syncStatus) {
                    case SyncStatus.UP_TO_DATE:
                      this.dialogMsg('This application is up to date');
                      break;
                    case SyncStatus.UPDATE_IGNORED:
                      this.dialogMsg('The user decided not to install the optional update.');
                      break;
                    case SyncStatus.ERROR:
                      this.dialogMsg('An error occurred while checking for updates'); 
                      break;
                    case SyncStatus.CHECKING_FOR_UPDATE:
                      this.dialogMsg('Check Updates');
                      break;
                  }

                })
  }
  dialogMsg(message){
    this.dialogs.alert(message,'CodePush','Ok')
    .then(()=>{console.log('Dialog dismissed')})
    .catch(e=>{console.log('Error displaying dialog',e)})
  }
  // Mesage Dialogs
  btnAlert(){
    this.dialogs.alert('Message alert','Alert','OK')
    .then(()=>{console.log('Dialog dismissed')})
    .catch(e=>{console.log('Error displaying dialog',e)})
  }

  btnConfirm(){
    this.dialogs.confirm('Confirm message','Confirm',['OK','Cancel'])
    .then(()=>{console.log('Dialog dismissed')})
    .catch(e=>{console.log('Error displaying dialog',e)})
  }
  
  btnPrompt(){
    this.dialogs.prompt('Prompt message','Prompt',['OK'],'Default text')
    .then((resp)=>{console.log(resp)})
    .catch(e=>{console.log('Error displaying dialog',e)})
  }

  btnBeep(){
    this.dialogs.beep(3);
  }
}
