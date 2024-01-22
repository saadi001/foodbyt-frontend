import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../Asset/icon/icons8-google-48.png'
import { AuthContext } from '../../Contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
     const [loginError, setLoginError] = useState('')
     const { signIn, providerLogin, user } = useContext(AuthContext)
     const { register, formState: { errors }, handleSubmit } = useForm();
     const provider = new GoogleAuthProvider()
     const navigate = useNavigate()
     const location = useLocation()

     const from = location.state?.from?.pathname || '/'

     const googleProviderLogin = (provider) => {
          providerLogin(provider)
               .then(result => {
                    console.log(result.user)
                    const userInfo = {
                         email: result.user?.email,
                         name: result.user?.displayName
                    }
                    saveUser(userInfo)
                    
               })
               .catch(err => console.error(err))
     }

     const handleLogin = (data) => {
          console.log(data)
          const { email, password } = data;

          signIn(email, password)
               .then(result => {
                    const user = result.user;
                    console.log(user)
                    fetch(`https://foodbyt-backend.vercel.app/jwt?email=${email}`)
                    .then(res => res.json())
                    .then(data => {
                         // console.log(data.accessToken)
                         if (data.accessToken) {
                              localStorage.setItem('accessToken', data.accessToken)
                              navigate(from, {replace: true})
                         }
                    })
                    
               })
               .catch(error => {
                    const errMessage = error.message.split('/')[1].slice(0, -1).slice(0, -1);
                    setLoginError(errMessage)
               })

     }

     const saveUser = (data) =>{
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
               fetch(`https://foodbyt-backend.vercel.app/jwt?email=${email}`)
                    .then(res => res.json())
                    .then(data => {
                         // console.log(data.accessToken)
                         if (data.accessToken) {
                              localStorage.setItem('accessToken', data.accessToken)
                         }
                    })
               if(data.acknowledged){
                    toast.success("sign in successful")
               }
               else{
                    toast.success(`Welcome back ${name}`)
               }
               navigate(from, {replace: true})
          })
     }
     return (
          <div className='mt-24 mb-5'>
               {/* <!-- component --> */}

               <div class=" flex flex-col items-center justify-center w-full">
                    <div class="flex border flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
                         <div class="font-medium self-center text-xl sm:text-2xl uppercase text-gray-800">Login To Your Account</div>
                         <button onClick={() => googleProviderLogin(provider)} class="flex justify-center gap-3 items-center mt-6 border rounded-md py-3 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200">
                              <img className='w-6' src={google} alt="" />
                              <span>Login with Google</span>
                         </button>
                         <div class="relative mt-10 h-px bg-gray-300">
                              <div class="absolute left-0 top-0 flex justify-center w-full -mt-2">
                                   <span class="bg-white px-4 text-xs text-gray-500 uppercase">Or Login With Email</span>
                              </div>
                         </div>

                         <div class="mt-10">
                              <form onSubmit={handleSubmit(handleLogin)}>
                                   <div class="flex flex-col mb-6">
                                        <label for="email" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">E-Mail Address:</label>
                                        <div class="relative">
                                             <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                                  <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                                       <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                                  </svg>
                                             </div>

                                             <input {...register('email', { required: "This field is required." })} type="email" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="E-Mail Address" />
                                             {errors.email && <p className='text-xs text-red-500 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-[2px]">
                                                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                             </svg>
                                                  {errors.email?.message}</p>}
                                        </div>
                                   </div>
                                   <div class="flex flex-col mb-6">
                                        <label for="password" class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600">Password:</label>
                                        <div class="relative">
                                             <div class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                                                  <span>
                                                       <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                       </svg>
                                                  </span>
                                             </div>

                                             <input {...register('password', { required: "This field is required." })} type="password" class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400" placeholder="Password" />
                                             {errors.password && <p className='text-xs text-red-500 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 mr-[2px]">
                                                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                             </svg>
                                                  {errors.password?.message}</p>}
                                             {loginError && <p className='text-xs text-red-500 flex items-center mt-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-3 h-3 mr-[2px]">
                                                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                             </svg>{loginError}</p>}
                                        </div>
                                   </div>

                                   <div class="flex items-center mb-6 -mt-4">
                                        <div class="flex ml-auto">
                                             <a href="#" class="inline-flex text-xs sm:text-sm text-blue-500 hover:text-blue-700">Forgot Your Password?</a>
                                        </div>
                                   </div>

                                   <div class="flex w-full">
                                        <button type="submit" class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-primary hover:bg-primary/80 rounded py-2 w-full transition duration-150 ease-in">
                                             <span class="mr-2 uppercase">Login</span>
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
                                   <Link to={'/signup'} class="ml-2">You don't have an account?</Link>
                              </a>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Login;