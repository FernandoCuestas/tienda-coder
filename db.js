const firebase = require('firebase');
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyD496o83DGtb1XMdEO-z1fzR8vyOsy6KOI",
  authDomain: "store-ece73.firebaseapp.com",
  projectId: "store-ece73",
  storageBucket: "store-ece73.appspot.com",
  messagingSenderId: "866141875666",
  appId: "1:866141875666:web:564327271990e988202c0b"
});

var db = firebase.firestore();

var productos = [
  {
    "id": 1,
    "price": 400,
    "title": "Bleach",
    "img": "Bleach.png"

  },
  {
    "id": 2,
    "price": 400,
    "title": "Gantz zero",
    "img": "Gantz-zero.png"

  },
  {
    "id": 3,
    "price": 200,
    "title": "One piece",
    "img": "One-piece.png"

  },
  {
    "id": 4,
    "price": 410,
    "title": "One Punch",
    "img": "One-Punch.png"

  },
  {
    "id": 5,
    "price": 310,
    "title": "Boku no Hero",
    "img": "Boku-hero.png"

  },
  {
    "id": 6,
    "price": 400,
    "title": "Bleach ichigo",
    "img": "Bleach-ichigo.png"

  },
  {
    "id": 7,
    "price": 400,
    "title": "Naturo gaara",
    "img": "Naturo-gaara.png"

  },
  {
    "id": 8,
    "price": 400,
    "title": "Evangelion",
    "img": "Evangelion.png"

  },
  {
    "id": 9,
    "price": 400,
    "title": "Evangelion shikari",
    "img": "Evangelion-shikari.png"

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
