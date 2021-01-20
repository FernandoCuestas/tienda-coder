const firebase = require('firebase');
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyB_yxyb_VNb38Ov0lP46ioNUkWd3zsXNPg",
  authDomain: "store-7e5f7.firebaseapp.com",
  projectId: "store-7e5f7",
});

var db = firebase.firestore();

var productos = [
  {
    "id": 1,
    "price": "400",
    "title": "Bleach",
    "img": "./src/assets/Bleach.png"

  },
  {
    "id": 2,
    "price": "400",
    "title": "Gantz zero",
    "img": "./src/assets/Gantz-zero.png"

  },
  {
    "id": 3,
    "price": "200",
    "title": "One piece",
    "img": "./src/assets/One-piece.png"

  },
  {
    "id": 4,
    "price": "410",
    "title": "One Punch",
    "img": "./src/assets/One-Punch.png"

  },
  {
    "id": 5,
    "price": "310",
    "title": "Boku no Hero",
    "img": "./src/assets/Boku-hero.png"

  },
  {
    "id": 6,
    "price": "400",
    "title": "Bleach ichigo",
    "img": "./src/assets/Bleach-ichigo.png"

  },
  {
    "id": 7,
    "price": "400",
    "title": "Naturo gaara",
    "img": "./src/assets/Naturo-gaara.png"

  },
  {
    "id": 8,
    "price": "400",
    "title": "Evangelion",
    "img": "./src/assets/Evangelion.png"

  },
  {
    "id": 9,
    "price": "400",
    "title": "Evangelion shikari",
    "img": "./src/assets/Evangelion-shikari.png"

  }
];


productos.forEach((obj) => {
  db.collection("productos")
    .add({
      id: obj.id,
      price: obj.price,
      title: obj.title,
      img: obj.img
    })
    .then((docRef) => {
      console.log("Producto registrado con ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error al agregar un documento: ", error);
    });
});
