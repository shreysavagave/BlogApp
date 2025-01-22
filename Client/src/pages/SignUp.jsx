import React from 'react'
import { Link } from 'react-router-dom'
import { Label, TextInput , Button } from 'flowbite-react'
export default function SignUp() {
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

        <div className='flex-1'>{/* right */ }
          <form className='flex flex-col '>
            <div>
              <Label value="your username" />
              <TextInput 
              type='text'
              placeholder='Username'
              id='username'
                />
            </div>
            <div>
              <Label value="your email" />
              <TextInput 
              type='text'
              placeholder='email'
              id='email'
                />
            </div>
            <div>
              <Label value="your password" />
              <TextInput 
              type='text'
              placeholder='password'
              id='password'
                />
            </div>

            <Button gradientDuoTone='purpleToPink' className='mt-4'type='submit' >
              Sign Up
            </Button>
          </form>
          <div className='gap-2 flex mt-5'>
            <span>Already Have an account ? </span>
            <Link to='/sign-in' className='text-blue-500 font-semibold'>
            Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
