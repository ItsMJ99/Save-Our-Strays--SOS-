import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDOO3RjTQSBal26Cg2YPmFYQtKH_F61Bbg",
  authDomain: "save-our-strays-sos-f91b7.firebaseapp.com",
  projectId: "save-our-strays-sos-f91b7",
  storageBucket: "save-our-strays-sos-f91b7.appspot.com",
  messagingSenderId: "770130213214",
  appId: "1:770130213214:web:afe9408f4f68b6fab677cf",
  measurementId: "G-RKSPLK1SQN"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();

document.addEventListener("DOMContentLoaded", function () {
  const Req = document.querySelector('.userRegistration');

  if (Req) {
    Req.addEventListener('submit', (e) => {
      e.preventDefault();
      const file = Req.ownerdoc.files[0];
      const storageRef = ref(storage, 'Ownership Documents/' + file.name);
      const uploadTask = uploadBytes(storageRef, file);
      uploadTask
        .then((snapshot) => {
          const fileRef = ref(storage, snapshot.ref.fullPath);
          getDownloadURL(fileRef)
            .then((url) => {
              addDoc(collection(db, 'User Registrations'), {
                owner_fname: Req.o_fname.value,
                owner_mname: Req.o_mname.value,
                owner_lname: Req.o_lname.value,
                owner_email: Req.o_email.value,
                owner_phoneno: Req.o_phoneno.value,
                owner_password: Req.o_password.value,
                owner_confirm_password: Req.o_confirm_password.value,
                owner_gender: Req.o_gender.value,
                owner_occupation: Req.o_occupation.value,
                owner_dob: Req.o_dob.value,
                owner_address: Req.o_address.value,
                owner_state: Req.o_state.value,
                owner_district: Req.o_district.value,
                owner_pincode: Req.o_pincode.value,
                animal_name: Req.a_name.value,
                animal_species: Req.a_species.value,
                animal_breed: Req.a_breed.value,
                animal_age: Req.a_age.value,
                animal_gender: Req.a_gender.value,
                animal_dob: Req.a_dob.value,
                animal_mark: Req.a_mark.value,
                animal_weight: Req.a_weight.value,
                ownership_document: url
              });
            });
        });
    });
  }
});
