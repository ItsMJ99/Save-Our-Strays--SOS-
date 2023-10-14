import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDOO3RjTQSBal26Cg2YPmFYQtKH_F61Bbg",
  authDomain: "save-our-strays-sos-f91b7.firebaseapp.com",
  projectId: "save-our-strays-sos-f91b7",
  storageBucket: "save-our-strays-sos-f91b7.appspot.com",
  messagingSenderId: "770130213214",
  appId: "1:770130213214:web:afe9408f4f68b6fab677cf",
  measurementId: "G-RKSPLK1SQN"
};

//init firebase
const app = initializeApp(firebaseConfig);

//init service
const db = getFirestore(app);

//refers to the collection to access
const colRef = collection(db, 'contact-us');

const contactus = document.querySelector('.form');
contactus.addEventListener('submit', (e) => {
    e.preventDefault();
    addDoc(colRef, {
        username: contactus.username.value,
        phone_no: contactus.phone.value,
        email: contactus.email.value,
        message: contactus.message.value
    }).then(() => {
        alert("Request sent successfully, We will contact you as soon as possible");
        contactus.reset()
        console.log('Problem Submitted');
    })
        .catch((error) => {
            console.error('Request not sent :', error);
        });
});