// Importa a instância do Firestore
import { db } from "../../firebaseConfig"; // Certifique-se de que db é exportado corretamente

// Importa o método para adicionar documentos
import { collection, addDoc } from "firebase/firestore";

// Função para adicionar um usuário ao Firestore
export function addUsersAcess() {
  // Refere-se à coleção 'users'
  const usersCollectionRef = collection(db, "users");

  // Adiciona um novo documento à coleção
  addDoc(usersCollectionRef, {
    email: "ana@gmail.com",
    name: "ana",
    password: "123456",
    phone: "666",
    profilePicture: "foto",
    surname: "paula",
  })
    .then((response) => {
      console.log("Document ID:", response.id); // Exibe o ID do novo documento
    })
    .catch((error) => {
      console.error("Error adding document: ", error); // Exibe erros, se houver
    });
}
