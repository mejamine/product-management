import React,{useState} from 'react';
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
const Home =()=>{
    const [info, setInfo]=useState({});
    const [errors, setErrors]= useState({});
    const navigate = useNavigate();

    const handleChange = (e) =>{
        setInfo({
            ...info,
            [e.target.name]:e.target.value,
        });
    };
    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(info);
        try{
            const response = await axios.post('http://localhost:3000/api/users/login',info);
            if(response){
                if(response.data.ROLE == "Admin"){
                    navigate(`/admin/${response.data.id}`);
                }
                if(response.data.ROLE == "Client"){
                    navigate(`/client/${response.data.id}`);
                }
            }else{
                console.log('bad request');
            }
        }catch(error){
            console.log(error);
            if(error.response && error.response.data && error.response.data.message){
                setErrors({ server:error.response.data.message});
            }else{
                setErrors({server : "an error occured, please try again"});
            }
        }
    };
    return(
        <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 '>
            <h1 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>se connecter</h1> <br/><br/>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className='space-y-6'>
                <div className=''>
                    <label className='block text-sm font-medium leading-6 text-gray-900'>Email</label>
                    <input
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        type='text'
                        name="email"
                        id="email"
                        onChange={handleChange}
                    />
                </div>
                <div className=''>
                    <label className='block text-sm font-medium leading-6 text-gray-900'>Password</label>
                    <input
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        type='password'
                        name="password"
                        id="password"
                        onChange={handleChange}
                    />
                </div>
                
                <button className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' type='' onClick={handleSubmit}>Submit</button><br/><br/>
                {errors.server && <p className="">{errors.server}</p>}
                </div>
            </div>
            
            <Link className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" to="/SignUp">Sign Up</Link>
        </div>
    );
};
export default Home;