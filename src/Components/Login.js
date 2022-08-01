import React from 'react'
import { useState } from 'react'
import Tech from '../Images/tech.jpeg'
import {Link} from 'react-router-dom'
import { FaFacebookF, FaGooglePlusG,  FaLinkedinIn,  } from 'react-icons/fa'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

function Login() {
  const [data, setData] = useState ('')
  const [open, setOpen] = useState(false)

  console.log({data});

  const toggle = () =>{
    setOpen(!open)
  }
  

  const updateChange = (e) => {
    const inputs = e.target.value;
    const name = e.target.name;
    setData(values => ({...values[name], inputs}))

    
  } 
 

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('welcom!!')
  };
  return (
    <div>
        <div style={{ backgroundImage: `url(${Tech}) ` }} className='back w-full h-screen bg-no-repeat bg-cover'>
          <div className='login flex flex-grow md:flex-row-reverse pr-32 pt-16 '>
            <div className='bg-white '>
              <div>
                <h3 className=' text-5xl  mt-32 mx-4 text-center sm:mx-12  font-bold '>Login to Your Account</h3>
                <p className=' text-sm text-center text-gray-500 mb-2'>Login using social networks</p>
                <div className='social flex  space-x-4 justify-center'>
                  <Link to="" >
                    <FaFacebookF className='h-12 w-12 border bg-gray-600 p-3.5 fill-white rounded-full'/>
                  </Link>
                  <Link to="">
                    <FaGooglePlusG className='h-12 w-12 border bg-red-400 fill-white p-2.5 rounded-full'/>
                  </Link > 
                  <Link to="">
                    <FaLinkedinIn className='h-12 w-12 border bg-gray-600 fill-white p-2.5 rounded-full'/>
                  </Link>
                </div>
                <div className="OR flex items-center py-4  mx-28">
            
                  <div className="flex-grow h-px bg-gray-200"></div> 

                  
                  <span className="text-lg text-gray-500 px-2.5  font-bold">OR</span>

                  
                  <div className="flex-grow h-px bg-gray-200"></div>
                </div>
                <form className=''>
                  <div >
                    <input type="email" placeholder='Email'
                    value={data.email}
                    onChange={updateChange} 
                    className='text-start w-96 p-3 mx-28   bg-blue-50 rounded-full' /> 
                  </div>
                  
                  <div className=' flex'>
                    
                    <input 
                    type={(open === false)? 'password' :'text'}
                    placeholder='Password'
                    value={data.password}
                    onChange={updateChange} 
                    className='text-start w-96 p-3 mx-28 mt-4  bg-blue-50 rounded-full'/>

                    <div className=' text-1xl  right-36 pt-8 relative'>
                    {
                      (open === false)? <AiFillEye onClick={toggle} />: 
                      <AiFillEyeInvisible onClick={toggle}/>
                    }
                    </div>
              
                  
                  </div> 
                  <div className='remember flex'>
                    <div className='check flex pl-32 mt-4 '>
                      <input type="checkbox"/>
                      <p className='text-sm'>Remember me</p>
                    </div>
                    <div className='text-sm mt-4 pl-36'>
                      Forgot Password
                    </div>
                  </div>
                  <div className='px-56'>
                    <button onClick={handleSubmit} className='bg-blue-500 px-16 py-2 my-8  text-white font-bold font-  hover:bg-teal-700 rounded-full'>Login</button>
                  </div>
                </form>


              </div>
            </div>
            <div className='bg-blue-700 w-64'>
              <div>
                <h2  className=' text-stone-100  text-4xl text-center  md:text-left font-bold lg:text-3xl pt-56 px-12 pb-4 '>New Here?</h2>
                <p className='px-4 text-stone-300 text-md '>Register and discover a great amount of new opporturnities!</p>
                <Link to={'/Register'}>
                  <button  className='bg-white px-12 py-2 my-8 mx-12  text-black font-bold font-  hover:bg-stone-400 rounded-full'>Register</button>
                </Link>
              </div>
            </div>

          
          </div> 
        </div>
    </div>
  )
}

export default Login