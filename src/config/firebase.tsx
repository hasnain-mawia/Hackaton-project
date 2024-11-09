import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth"
import { collection, addDoc, getFirestore,getDocs, doc, getDoc } from "firebase/firestore"; 
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const firebaseConfig = {
  apiKey: "AIzaSyBaJVwFxA-Kh0FKpP66uP_VLBqJT2aeU7o",
  authDomain: "hackathon-project-75005.firebaseapp.com",
  projectId: "hackathon-project-75005",
  storageBucket: "hackathon-project-75005.firebasestorage.app",
  messagingSenderId: "809659069225",
  appId: "1:809659069225:web:52eccaa57421b1f4e8bd38",
  measurementId: "G-XHRCQYQ97W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);
const storage = getStorage();
const ProviderF =  new FacebookAuthProvider();
const ProviderG = new GoogleAuthProvider();

const RegisterSetup = async(email:any, password:any, fullname:any) =>{
await createUserWithEmailAndPassword(auth, email, password)
return addDoc(collection(db, "users"),{email,fullname})
  
}
const LoginWithFacebook = async() =>{
   await signInWithPopup(auth, ProviderF).then((res)=>{
    const credentials = FacebookAuthProvider.credentialFromResult(res);
    const token = credentials?.accessToken;
    const user = res.user;
    localStorage.setItem('isLogin', "true");
   }).catch((err)=>{
    console.log(err)
   })
}

const LoginWithGoogle = async() =>{
   await signInWithPopup(auth, ProviderG).then((res)=>{
    const credential = GoogleAuthProvider.credentialFromResult(res);
    const token = credential?.accessToken;
    const user = res.user;
    localStorage.setItem('isLogin', "true");
   }).catch((err)=>{
    console.log(err)
   })
}

const LoginSetup = (email:any, password:any) =>{
   return signInWithEmailAndPassword(auth, email, password)
}

const Logout = (navigate:any) =>{
  signOut(auth)
  try{
  toast.success(`Logout Successfully`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
    localStorage.removeItem('isLogin');
    navigate('/')
  } catch(err){
    toast.success(`${err}, Logout issue`);
  }
}
const ProductUpload = async(obj:any) =>{
  const {title, price, category, description, image, quantity} = obj;
  const storageRef = ref(storage, 'products/'+ image.name);
  await uploadBytes(storageRef,image)
  const URL = await getDownloadURL(storageRef);
  return addDoc(collection(db,"products"),{title, quantity, price, category, description, image: URL});
}

const Getdata = async() =>{
  const docRef = collection(db,"products")
  const docData = await getDocs(docRef);
  const data = docData.docs.map(doc=>({
    id:doc.id, ...doc.data()
  }))
  return data
}


export {
  RegisterSetup, 
  LoginSetup,
  Logout,
  onAuthStateChanged,
  auth,
  ProductUpload,
  Getdata,
  doc,
  db,
  getDoc,
  LoginWithFacebook,
  LoginWithGoogle
}