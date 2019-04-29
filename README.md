# Heroes Firebase [CRUD]

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.7.

# Get started

#### Install

```bash
npm install
```
# Set environment for DEV

### **REALTIME DATABASE**

Does `git checkout heros-real-time-db` branch. Then, open `src/environments/environment.ts` and copy your credentials.
```bash
export const environment = {
   production: false,
   api_url: 'YOUR URL FIREBASE HERE'
};
```

--------------------------------------------------------------------------
### **CLOUD FIRESTORE**
Does `git checkout heros-cloud-firestore` branch. Then, open `src/environments/environment.ts` and copy your credentials.
```bash
export const environment = {
   production: false,
   firebase: {
      apiKey: 'API KEY HERE',
      authDomain: 'YOUR_PROYECT_ID.firebaseapp.com',
      databaseURL: 'https://YOUR_PROYECT_ID.firebaseio.com',
      projectId: 'YOUR_PROYECT_ID',
      storageBucket: 'YOUR_PROYECT_ID.appspot.com',
      messagingSenderId: 'YOUR MESSAGING ID'
   }
};
```

# Run Server

Run `ng serve -o` or `npm start` for a dev server. Navigate to `http://localhost:4200/`
