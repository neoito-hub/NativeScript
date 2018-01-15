import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";
import firebase = require("nativescript-plugin-firebase");
firebase.init({
  
  }).then(
      function (instance) {
        console.log("firebase.init done");
      },
      function (error) {
        console.log("firebase.init error: " + error);
      }
  );

platformNativeScriptDynamic().bootstrapModule(AppModule);
