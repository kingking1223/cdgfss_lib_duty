import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBmh-vZO9g4xfyxCUpA8gMM0QxrSOpCr3k",
    authDomain: "cdgfss-lib-duty.firebaseapp.com",
    projectId: "cdgfss-lib-duty",
    storageBucket: "cdgfss-lib-duty.appspot.com",
    messagingSenderId: "558950546221",
    appId: "1:558950546221:web:fff1f318ecea85f67ab1a4"
};

const app = initializeApp(firebaseConfig);

const reportDutyBtn = document.querySelector('#report-duty-btn');
var firebaseRef = firebase.database().ref('cdgno');

reportDutyBtn.addEventListener('click', () => {
    const cdgno = document.getElementById('cdgno').nodeValue;
    firebaseRef.push(cdgno);
});
