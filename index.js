const firebaseConfig = {
    apiKey: "AIzaSyCK5MHRTY5GKg9GqFLd1ILVxlFecXHhq_I",
    authDomain: "godown-inventory.firebaseapp.com",
    projectId: "godown-inventory",
    storageBucket: "godown-inventory.firebasestorage.app",
    messagingSenderId: "156194495476",
    appId: "1:156194495476:web:43031892d8173ee614b7a1",
    measurementId: "G-9YPJRL4LWP"
  };
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  const categories = {
    "Grains": ["Rice", "Wheat", "Maize"],
    "Pulses": ["Lentils", "Chickpeas", "Beans"],
    "Vegetables": ["Potato", "Tomato", "Onion"]
    // Add more categories and subcategories as needed
};
