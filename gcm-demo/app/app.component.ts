import { Component } from "@angular/core";
import  * as firebase  from "nativescript-plugin-firebase";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: "my-app",
  template: "<page-router-outlet></page-router-outlet>"
})
export class AppComponent {
  public constructor() {

  firebase.init({
    onPushTokenReceivedCallback: function (token) {
      console.log('token from firebase now');
      alert(token);
    },
   
  })
  .then(function (result) {
      console.log(result);
    },
    function (error) {
      console.log(error);
    }
  );
   
    firebase.getCurrentPushToken().then((token: string) => {
        console.log("Current push token: " + token);
      });
}


 
}

