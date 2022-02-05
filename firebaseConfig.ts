import {
  AUTH_DOMAIN,
  API_KEY,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGE_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} from "@env";

export const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL:
    "https://translatoroo-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGE_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};
