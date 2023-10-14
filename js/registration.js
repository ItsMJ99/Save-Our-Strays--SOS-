import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
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
            console.log('You here 123')
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
                animal_name: Req.s_name.value,
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
