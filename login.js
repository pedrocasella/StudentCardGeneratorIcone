import { getDatabase, ref, set, push, child, get, orderByChild, equalTo } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, getRedirectResult } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAP8hj7lSAwmQmxgfJRzTrdtYYJtckXbpQ",
  authDomain: "carteirinhas-icone.firebaseapp.com",
  projectId: "carteirinhas-icone",
  storageBucket: "carteirinhas-icone.appspot.com",
  messagingSenderId: "56784942993",
  appId: "1:56784942993:web:bee8ad1b22e6e20eb28c30"
};


const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const database = getDatabase(app);

const dbRef = ref(getDatabase());



document.getElementById('login-btn').addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      // Salva o UID no localStorage
      localStorage.setItem('userUidiccCardUID', user.email);

      // Obtém a lista de emails autorizados
      const authorizedEmailsRef = ref(database, 'authorized_emails_idcard');

      get(authorizedEmailsRef).then((snapshot) => {
        const authorizedEmails = snapshot.val();

        if (authorizedEmails) {
          const userEmail = user.email;

          if (Object.values(authorizedEmails).some(item => item.email === userEmail)) {
            // Usuário autorizado, redireciona para a página /cardid
            document.getElementById('allow-alert').style.display = 'block'
            setInterval(()=>{
              document.getElementById('allow-alert').style.display = 'none'
            }, 1000*6)
            setInterval(()=>{
              window.location.href = '/cardid';
            }, 1000*2)
            
          } else {
            // Usuário não autorizado, adiciona o email às solicitações de acesso
            const refAuthTentative = ref(database, "auth_idcard_mails/tentative_acess/" + user.uid);
            const logAccess = {
              name: user.displayName,
              email: user.email
            };
            set(refAuthTentative, logAccess).then(() => {
              document.getElementById('deny-alert').style.display = 'block'
              setInterval(()=>{
                document.getElementById('deny-alert').style.display = 'none'
              }, 1000*6)
            }).catch((error) => {
              alert('Erro ao registrar o acesso: ' + error.message);
            });
          }
        } else {
          alert('Erro ao carregar a lista de emails autorizados.');
        }
      }).catch((error) => {
        alert('Erro ao verificar autorização: ' + error.message);
      });

      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
})

