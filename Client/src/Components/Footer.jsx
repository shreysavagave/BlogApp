import React from 'react'
import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { BsFacebook ,BsInstagram, BsTwitter ,BsGithub } from "react-icons/bs"

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>

      <div className='grid w-full justify-between sm:flex sm:flex-col '>
        <div>
          <Link to="" className='text-sm sm:text-xl font-bold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white text-md'>Shrey</span>
            Blog
          </Link>
        </div>

        <div className='grid grid-cols-2 gap-3 mt-4 sm:grid-cols-3 , sm:gap-6'>

          <div>
            <Footer.Title title='About' />
            <Footer.LinkGroup col>

              <Footer.Link
                href='http://www.Mernproject.com'
                target='_blank'
                rel='noopener noreferrer'>
                MERN Project
              </Footer.Link>
              <Footer.Link
                href='http://www.Mernproject.com'
                target='_blank'
                rel='noopener noreferrer'>
                MERN Project
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title='Follow us' />
            <Footer.LinkGroup col>

              <Footer.Link
                href='#'
                target='_blank'
                rel='noopener noreferrer'>
                GitHub
              </Footer.Link>
              <Footer.Link
                href='#'
                target='_blank'
                rel='noopener noreferrer'>
                discord
              </Footer.Link>
            </Footer.LinkGroup>
          </div>

          <div>
            <Footer.Title title='Legel' />
            <Footer.LinkGroup col>

              <Footer.Link
                href='#'
                target='_blank'
                rel='noopener noreferrer'>
                Terms & conditions
              </Footer.Link>
              <Footer.Link
                href='http://www.Mernproject.com'
                target='_blank'
                rel='noopener noreferrer'>
                MERN Project
              </Footer.Link>
            </Footer.LinkGroup>
          </div>

        </div>
        <Footer.Divider />
        <div  className='w-full sm:flex sm:items-center sm:justify-around'>
          <Footer.Copyright href='#' by="Shrey Blog" year={new Date().getFullYear()}
          />

          <div className='flex gap-3 mt-4 sm:mt-0'>
            <Footer.Icon href='#' icon={BsFacebook} />
            <Footer.Icon href='#' icon={BsInstagram} />
            <Footer.Icon href='#' icon={BsTwitter} />
            <Footer.Icon href='#' icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  )
}
