import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { initializeApp } from "firebase/app";

// const firebaseApp = initializeApp(firebaseConfig);
// const auth = getAuth(firebaseApp);

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

//////////////

// const [isAuthenticated, setIsAuthenticated] = useState(false);
//   useEffect(() => {
//     setTimeout(() => {
//       signInWithEmailAndPassword(auth, "ayush@gupta.io", "54321q")
//         .then((user) => {
//           setIsAuthenticated(true);
//         })
//         .catch((e) => {
//           console.log(e);
//         });
//     }, 2000);
//   }, []);

// if (!isAuthenticated) return null;

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// const firebaseApp = initializeApp(firebaseConfig);
