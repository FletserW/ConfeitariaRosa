// Importa as funções necessárias do SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuração do Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyCqcedVa6Adx5LG6FRgJ5-miqGEZoXQM44",
  authDomain: "confeitariarosa-c15a5.firebaseapp.com",
  projectId: "confeitariarosa-c15a5",
  storageBucket: "confeitariarosa-c15a5.firebasestorage.app",
  messagingSenderId: "531090204003",
  appId: "1:531090204003:web:12844a41875bd5df509f56",
  measurementId: "G-7KPP770MZJ",
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);

// Inicializando o Firestore
const db = getFirestore(app);

export { db, app }; // Exporta a instância do Firestore e do app do Firebase
