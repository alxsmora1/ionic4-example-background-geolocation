import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationEvents, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private backgroundGeolocation: BackgroundGeolocation, public plt: Platform) {
    this.plt.ready().then((readySource) => {
      //Auto inicia el seguimiento GPS al abrir la app por primera vez
      this.startBackgroundGeolocation();
    });
  }

  //Configuración e inicio de Background Geolocation
  startBackgroundGeolocation() {
    const config: BackgroundGeolocationConfig = {
      desiredAccuracy: 10,
      distanceFilter: 5, //Filtro de distancia para activar el seguimiento

      debug: false, //  enable this hear sounds for background-geolocation life-cycle.
      stopOnTerminate: false,   // <-- Allow the background-service to continue tracking when app terminated.
      startOnBoot: true,        // <-- Auto start tracking when device is powered-up.

      //Envio de la localización por JSON
      url: 'https://api.url.com/locations',
      httpHeaders: {
        'Content-Type': 'application/json'
      },
      postTemplate: {
        lat: '@latitude',
        lng: '@longitude',
        test: '1' // you can also add your own properties
      }
    };

    this.backgroundGeolocation.configure(config)
    .then(() => {

    this.backgroundGeolocation.on(BackgroundGeolocationEvents.location).subscribe((location: BackgroundGeolocationResponse) => {
      console.log(location);

      // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
      // and the background-task may be completed.  You must do this regardless if your operations are successful or not.
      // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
      this.backgroundGeolocation.finish(); // FOR IOS ONLY
    });

    });

    // start recording location
    this.backgroundGeolocation.start();
  }

  //Activa el seguimiento del GPS
  initTracking() {
    this.startBackgroundGeolocation();
  }

  //Desactiva el seguimiento del GPS
  stopTracking() {
    // If you wish to turn OFF background-tracking, call the #stop method.
    this.backgroundGeolocation.stop();
  }

}
