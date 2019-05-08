// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
   production: false,
   api_url: 'YOUR URL FIREBASE HERE', // Only in realtimedb
   firebase: {
      apiKey: 'API KEY HERE',
      authDomain: 'YOUR_PROYECT_ID.firebaseapp.com',
      databaseURL: 'https://YOUR_PROYECT_ID.firebaseio.com',
      projectId: 'YOUR_PROYECT_ID',
      storageBucket: 'YOUR_PROYECT_ID.appspot.com',
      messagingSenderId: 'YOUR MESSAGING ID'
   }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
