import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDduBKr_DNl8xKNS_MNCboSlQ78LyzduTI",
    authDomain: "ucsc-erp-next.firebaseapp.com",
    projectId: "ucsc-erp-next",
    storageBucket: "ucsc-erp-next.appspot.com",
    messagingSenderId: "24402428387",
    appId: "1:24402428387:web:3dbcfe4bff3f96b76520d6"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };