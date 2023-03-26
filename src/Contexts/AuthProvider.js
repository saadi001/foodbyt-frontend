import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/Firebase.config';
import { addToDb, getStoredCart } from '../Components/addToDb';


export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
     const [cart, setCart] = useState([])
     const [products, setProducts] = useState([])
    

     const handleAddtoCart = (product) =>{     
          // console.log(product)
          const newCart = [...cart, product]
          setCart(newCart)
          addToDb(product.id)
     }

     useEffect(()=>{
          fetch('products.json')
          .then(res => res.json())
          .then(data => setProducts(data))
     },[])

     useEffect(()=>{
          const storedCart = getStoredCart()          
          const savedCart = [];
          for(const id in storedCart){
               const addedProduct = products.find(product => product.id == id)               
               if(addedProduct){
                    const quantity = storedCart[id];
                    addedProduct.quantity = quantity;
                    savedCart.push(addedProduct)
               }
          }
          console.log(savedCart)
          setCart(savedCart)
     },[products])

     const providerLogin = (provider) => {
          setLoading(true);
          return signInWithPopup(auth, provider)
     }

     const createUser = (email, password) => {
          setLoading(true);
          return createUserWithEmailAndPassword(auth, email, password);
     }

     const signIn = (email, password) => {
          setLoading(true);
          return signInWithEmailAndPassword(auth, email, password);
     }

     const updateUserProfile = (userInfo) => {
          return updateProfile(auth.currentUser, userInfo);
     }

     const logOut = () => {
          setLoading(true);
          return signOut(auth);
     }

     useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
               console.log('current user is: ', currentUser)
               setUser(currentUser);
               setLoading(false);
          })
          return () => {
               unsubscribe();
          }
     }, [])

     const authInfo = {user, loading, providerLogin, logOut, createUser, signIn, setUser, updateUserProfile, setLoading, cart, setCart, handleAddtoCart };
     return (
          <div>
               <AuthContext.Provider value={authInfo}>
                    {children}
               </AuthContext.Provider>
          </div>
     );
};

export default AuthProvider;