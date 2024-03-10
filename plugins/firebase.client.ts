import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin(nuxtApp => {
    
    const firebaseConfig = {
        apiKey: "AIzaSyBqYEyxr7np0rmlToOUWT8Wze5ZecTxw9c",
        authDomain: "remotando-db17e.firebaseapp.com",
        databaseURL: "https://remotando-db17e-default-rtdb.firebaseio.com",
        projectId: "remotando-db17e",
        storageBucket: "remotando-db17e.appspot.com",
        messagingSenderId: "1083891498496",
        appId: "1:1083891498496:web:1631d210f8f532283662e5",
        measurementId: "G-EZM0EPF45B"
      };

      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      const analytics = getAnalytics(app);

      nuxtApp.vueApp.provide('db', db);
      nuxtApp.provide('db', db);
      nuxtApp.provide('defineAsyncComponent', defineAsyncComponent);
})