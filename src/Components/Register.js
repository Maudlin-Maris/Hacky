import React from 'react'
import background from '../Images/registration.jpeg';
import { useState } from 'react'
import { NavLink as Link } from 'react-router-dom';
import Tech from '../Images/tech.jpg';
import { AiFillEyeInvisible , AiFillEye} from 'react-icons/ai'


function Register() {
    const initialValue = {
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumber: '',
        Password: '',
        confirmPassword: '',
        checked: false,
        Track: '',
        Gender: '',
      }

      const onSubmit = data => alert(JSON.stringify(data));
      const[input, setInput] = useState(initialValue)
      const[show, setShow] = useState(false)
      const[hide, setHide] = useState(false)
    
      console.log({input});
    
      const toggle = () => {
        setShow(!show)
        
      }
      const hideEye =() => {
        setHide(!hide)
      }
     
      
    
      const handleSubmit = () => {
        
        const user = JSON.stringify(input);
        sessionStorage.getItem('user') === null && sessionStorage.setItem('user', user)
        console.log(input);
      //   // if (data.password !== data.confirmPassword) {
      //   //   return;
      //   // }
      //   // setData({
      //   //   Password: data.password,
      //   //   ConfirmPassword: data.
      }
    
      const handleChange = (e) => {
        const {name, value, type, checked, }  = e.target
        setInput({...input,  [name]: type === 'checkbox' ? checked: value  });
        
        console.log(input)
      
      }
  return (
    <div className="second"> 
        <div style={{ backgroundImage: `url(${background}) ` }} className='pb-80' >
            {/* <img src={background} alt="" /> */}
            <div className='  flex justify-between md:justify-between sm:justify-between lg:justify-between pt-8 px-12 pb-12 p-32'>
                <div>
                    <img src={Tech} alt=""  className='w-32 h-8 '/>
                </div>
                <div className='flex gap-4 '>
                <Link to={'/Login'}>Login</Link>
                <Link to={'/Register'}>Register</Link>
                <Link to={'/Dashboard'}>Dashboard</Link>

                </div>
            </div>
        </div>
        
        <div className="container">
      
            <h4 className='Reg  pt-16 text-center font-black pb-12  '>REGISTER HERE</h4>
            
            <form className='form pl-16 w-full pb-32 absolute ' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex   mb-6'>
                    <div className='w-full '>
                    <label >First Name</label>
                    <input type="text" placeholder='First Name' name={'FirstName'}  value={input.FirstName} onChange={handleChange}  className='w-full border rounded-md mt-4 px-4 py-2 shadow-md '/>
                    </div>
                    <div className='ml-32 w-full mr-4'>
                    <label >Last Name</label>
                    <input type="text" placeholder='Last Name' value={input.LastName} onChange={handleChange} name={'LastName'} className='w-full border rounded-md mt-4 px-4 py-2 shadow-md '/>
                    </div>
                </div>

                <div className='flex   mb-6'>
                    <div className='w-full'>
                    <label >Email</label>
                    <input type="Email" placeholder='Email' value={input.Email} name={'Email'} onChange={handleChange}  className='w-full border rounded-md mt-4 px-4 py-2 shadow-md '/>
                    </div>
                    <div className='ml-32 w-full mr-4'>
                    <label >Phone Number</label>
                    <input type="tel" placeholder='+234 123 456 ' value={input.PhoneNumber} onChange={handleChange} name={'PhoneNumber'} className='w-full border rounded-md mt-4 px-4 py-2 shadow-md '/>
                    </div>
                </div>

                <div className='flex   mb-6'>
                    <div className='password w-full flex relative'>
                    <div className=' w-full'>
                        <label >Password</label>
                        <input  type={(show === true)? 'text' : 'password'}
                        value={input.Password}
                        name={'Password'} onChange={handleChange}
                        placeholder='********'  className='w-full border rounded-md mt-4 px-4 py-2 shadow-md'
                        
                        />

                    </div>
                    <div className='absolute mt-12 md:ml-32 lg:ml-64  x pl-28'>
                        {
                        (show === true)? <AiFillEye onClick={toggle}/> : <AiFillEyeInvisible onClick={toggle} className=" Eye "/>
                        }
                    </div>
                    </div>

                    <div className='register ml-32 w-full mr-4 flex '>
                    <div className='c-password w-full'>
                        <label >Confirm Password</label>
                        <input type={(hide === true)? 'text' : 'password'}
                        value={input.confirmPassword}
                        onChange={handleChange}
                        name={'confirmPassword'} placeholder='******** '
                        className='w-full border rounded-md mt-4 px-4 py-2 shadow-md '
                    
                    />

                    </div>
                    <div className='pt-12 right-8  absolute'>
                        {
                        (hide === true)? <AiFillEye onClick={hideEye}/> : <AiFillEyeInvisible onClick={hideEye} className='hideEye'/>
                        }
                    </div>
                    </div>
                
                </div>
                <div className='flex' >
                    <select type='selected' id='select' value={input.Track} className='w-full border rounded-md shadow-md p-2' onChange={handleChange} name={'Track'} >
                    <option value=''>Choose your Track</option>
                    <option value="React js">React js</option>
                    <option value="Nodejs">Nodejs</option>
                    <option value="HTML, CSS & JavaScript">HTML, CSS & Javascript</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Technical Writing">Technical Writing</option>
                    </select>
                    <select name={'Gender'} value={input.Gender} onChange={handleChange} className='w-full mr-4 ml-32 border rounded-md shadow-md p-2' > 
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Not say">Not say</option>
                    </select>
                </div>
                <div className='flex'>
                    <div className='flex gap-2 w-full  mt-4'>
                    <input type="checkbox" name='checked' checked={input.checked} onChange={handleChange} className='mb-5' />
                    <p className='terms pt-4'>I Agree to terms and conditions</p>
                    </div>
                    <div >
                    <button className='regy border rounded-full font-bold px-10 py-4 mt-8 w-64 mr-8 bg-blue-500'>Register</button>
                    </div>
                </div>
            </form>
            
        </div>
    </div>
  )
}

export default Register