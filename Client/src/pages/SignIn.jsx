import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Label, TextInput , Button, Alert } from 'flowbite-react'



export default function SignIn() {

  const [formdata , setFormdata] = useState({})
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  
  const handleChange =(e)=>{
    setFormdata({...formdata, [e.target.id]:e.target.value.trim() })
    console.log(formdata)
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(!formdata.email || !formdata.password){
      return setErrorMessage("please fill out all fields");
    } 
    try{
      setErrorMessage(null);
      const res = await fetch('/api/auth/signin', {
        method:"POST",
        headers : {'Content-Type':'application/json'},
        body: JSON.stringify(formdata),
      })
      const data = await res.json();
      if(data.success == false){
        return setErrorMessage(data.message);
      }
      if(res.ok){
        navigate('/')
      }

    }catch(error){
      setErrorMessage(error.message);
    }

  }
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex max-w-3xl mx-auto flex-col md:flex-row items-center gap-4'>
        <div className='m-6 flex-1'>{/* left */}
          <Link to="" className='text-sm sm:text-xl font-bold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white text-4xl'>Shrey</span>
            Blog
          </Link>
          <p className='mt-5'>
            this is a Blog project used to create blog you can sign in and sign up with your email or with google account
          </p>
        </div>

        <div className='flex-1'>{/* right */}
          <form className='flex flex-col' onSubmit={handleSubmit}>        
            <div>
              <Label value="your email" />
              <TextInput 
              type='email'
              placeholder='user@mail.com'
              id='email'
              onChange={handleChange}
                />
            </div>
            <div>
              <Label value="your password" />
              <TextInput 
              type='password'
              placeholder='**************'
              id='password'
              onChange={handleChange}
                />
            </div>

            <Button gradientDuoTone='purpleToPink' className='mt-4'type='submit' >
              Sign In
            </Button>
          </form>
          <div className='gap-2 flex mt-5'>
            <span>dont have an account ? </span>
            <Link to='/sign-up' className='text-blue-500 font-semibold'>
            Sign up
            </Link>
          </div>
          {
            errorMessage && (
              <Alert>
              {errorMessage}
              </Alert>
            )
        }
        </div>
      </div>
    </div>
  )
}
