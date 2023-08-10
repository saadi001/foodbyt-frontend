import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../Asset/icon/icons8-google-48.png'
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../Hooks/useToken';

const Signup = () => {
     const { createUser, updateUserProfile, providerLogin } = useContext(AuthContext)
     const [signupError, setSignupError] = useState('')
     const provider = new GoogleAuthProvider()
     const { register, formState: { errors }, handleSubmit } = useForm();
     const [createdEmail, setCreatedEmail] = useState('')
     const navigate = useNavigate()
     const location = useLocation()
     // const [token] = useToken(createdEmail)

     // if(token){
     //      navigate('/')
     // }
     

     const handleSignup = (data) => {
          console.log(data)
          const { name, email, password, phone, location } = data;

          createUser(email, password)
               .then(result => {
                    const user = result.user;
                    console.log(user)
                    setSignupError('')
                    toast.success('Account created successfully.')

                    const userInfo = {
                         displayName: name,
                         phoneNumber: phone
                    }
                    updateUserProfile(userInfo)
                         .then(() => {
                              navigate('/')
                              saveUser(data)
                         })
                         .catch(err => console.error(err))

               })
               .catch(error => {
                    console.error(error.message)
                    const errMessage = error.message.split('/')[1].slice(0, -1).slice(0, -1);
                    // setSignupError(errMessage)
                    setSignupError(error.message)
               })
     }

     const googleProviderLogin = (provider) => {
          providerLogin(provider)
               .then(result => {
                    console.log(result.user)
                    const userInfo = {
                         email: result.user?.email,
                         name: result.user?.displayName
                    }
                    saveUserForGoogleProvider(userInfo)
                    navigate("/")

               })
               .catch(err => console.error(err))
     }

     const saveUser = (data) => {
          const { name, email, password, phone, location } = data;
          const user = { name, email, password, phone, location, role: "user" }

          fetch('https://foodbyt-backend.vercel.app/users', {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(user)
          })
               .then(res => res.json())
               .then(data => {
                    console.log(data)
                    fetch(`https://foodbyt-backend.vercel.app/jwt?email=${email}`)
                    .then(res => res.json())
                    .then(data => {
                         // console.log(data.accessToken)
                         if (data.accessToken) {
                              localStorage.setItem('accessToken', data.accessToken)
                              navigate('/')
                         }
                    })
                    
               })
     }

     const saveUserForGoogleProvider = (data) =>{
          const {email, name} = data;
          const userInfo = {
               email,
               name,
               password: "",
               phone: "",
               location:"",
               role: "user"
          }

          fetch('https://foodbyt-backend.vercel.app/users', {
               method: 'POST', 
               headers: {
                    'content-type' : 'application/json'
               },
               body: JSON.stringify(userInfo)
          })
          .then(res => res.json())
          .then(data => {
               console.log(data)
               if(data.acknowledged){
                    toast.success("sign in successful")
               }
               else{
                    toast.success(`Welcome back ${name}`)
               }
          })
     }
     return (
          <div className='mt-24 mb-5'>

               <div class=" flex flex-col items-center justify-center">
                    <div class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-4xl">
                         <div class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Create Your Account</div>
                         <button onClick={() => googleProviderLogin(provider)} class="flex justify-center gap-3 items-center mt-6 border rounded-md py-3 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
                              <img className='w-6' src={google} alt="" />
                              <span>Login with Google</span>
                         </button>
                         <div class="relative mt-10 h-px bg-gray-300">
                              <div class="absolute left-0 top-0 flex justify-center w-full -mt-2">
                                   <span class="bg-white px-4 text-xs text-gray-500 uppercase">Or create an account</span>
                              </div>
                         </div>

                         <div class="mt-10">
                              <form onSubmit={handleSubmit(handleSignup)} className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                                   {/* name */}
                                   <div class="flex flex-col mb-4">
                                        <label for="name" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Your name</label>
                                        <div class="relative">

                                             <input {...register('name', { required: 'This field is required' })} id="name" type="text" name="name" class="text-sm sm:text-base placeholder-gray-500 px-3 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Name" />
                                             {errors.name && <p className='text-xs text-red-500 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-[2px]">
                                                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                             </svg>
                                                  {errors.name?.message}</p>}
                                        </div>
                                   </div>
                                   {/* email  */}
                                   <div class="flex flex-col mb-4">
                                        <label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label>
                                        <div class="relative">

                                             <input {...register('email', { required: 'This field is required' })} id="email" type="email" name="email" class="text-sm sm:text-base placeholder-gray-500 px-3 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="E-Mail Address" />
                                             {errors.email && <p className='text-xs text-red-500 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-[2px]">
                                                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                             </svg>
                                                  {errors.email?.message}</p>}
                                        </div>
                                   </div>
                                   {/* password  */}
                                   <div class="flex flex-col mb-4">
                                        <label class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password</label>
                                        <div class="relative">

                                             <input {...register('password', { required: ('this field is required') })} type="password" class="text-sm sm:text-base placeholder-gray-500 px-3 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="password" />
                                             {errors?.password && <p className='text-xs text-red-500 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-[2px]">
                                                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                             </svg>
                                                  {errors?.password?.message}</p>}
                                             {signupError && <p className='text-xs text-red-500 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-[2px]">
                                                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                             </svg>{signupError}</p>}
                                        </div>
                                   </div>
                                   {/* image  */}
                                   <div className='mb-4'>
                                        <label for="image" className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Image (optional)</label>
                                        <input {...register('image')} type="file" className="block w-full px-3 py-2 text-sm text-gray-500 bg-white border border-gray-400 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-[2.5px] file:border-none file:rounded-full placeholder-gray-400/70  focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 " />
                                   </div>
                                   {/* phone number  */}
                                   <div class="flex flex-col mb-4">
                                        <label class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Phone Number</label>
                                        <div class="relative">

                                             <input {...register('phone', { required: 'This field is required' })} type="number" class="text-sm sm:text-base placeholder-gray-500 px-3 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="phone number" />
                                             {errors.phone && <p className='text-xs text-red-500 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-[2px]">
                                                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                             </svg>
                                                  {errors.phone?.message}</p>}
                                        </div>
                                   </div>
                                   {/* location  */}
                                   <div className=''>
                                        <label for="location" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Location</label>
                                        <select {...register('location', { required: 'This field is required' })} className="block w-full px-3 py-2 text-gray-700 bg-white border border-gray-400 rounded-md focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                             <option value='' selected>Select your location</option>
                                             <option value='YKSG-2' >YKSG-2</option>
                                             {/* <option value='YKSG-1(oldBuilding)'>YKSG-1 (old building)</option>
                                             <option value='YKSG-1(newBuilding)'>YKSG-1 (new building)</option> */}
                                        </select>
                                        {errors.location && <p className='text-xs text-red-500 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-[2px]">
                                             <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                        </svg>
                                             {errors.location?.message}</p>}
                                   </div>
                                   {/* room number  */}
                                   <div class="flex flex-col mb-4">
                                        <label class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Room number</label>
                                        <div class="relative">

                                             <input {...register('room', { required: "This field is required." })} type="number" class="text-sm sm:text-base placeholder-gray-500 px-3 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="room number" />
                                             {errors?.room && <p className='text-xs text-red-500 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-[2px]">
                                                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                             </svg>
                                                  {errors.room?.message}</p>}
                                        </div>
                                   </div>

                                   {/* signup button  */}
                                   <div class="flex w-full md:col-span-2">
                                        <button type="submit" class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-primary hover:bg-primary/80 rounded py-2 w-full transition duration-150 ease-in">
                                             <span class="mr-2 uppercase">Sign up</span>
                                             <span>
                                                  <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                                       <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                  </svg>
                                             </span>
                                        </button>
                                   </div>
                              </form>
                         </div>
                         <div class="flex justify-center items-center mt-6">
                              <a href="#" target="_blank" class="inline-flex items-center font-bold text-blue-500 hover:text-blue-700 text-xs text-center">
                                   <span>
                                        <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                             <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                        </svg>
                                   </span>
                                   <Link to={'/login'} class="ml-2">Already have an account?</Link>
                              </a>
                         </div>
                    </div>
               </div>

          </div>
     );
};

export default Signup;