import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SignUp =()=>{
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState({});
    const handleChange = (e)=>{
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value,
            ["ROLE"]:"Client"
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            console.log(newUser);
            await axios.post('http://localhost:3000/api/users', newUser);
            navigate('/');
        }catch(error){
            console.error("Error creating User:",error);
        }
    };
    return(
        <div className=''>
            <h1 className=''>Ajouter Une Compte</h1> 
            <div className="">
                <div>
                <div className=''>
                    <label className=''>Nom</label><br/>
                    <input
                    className=''
                        type='text'
                        name="nom"
                        onChange={handleChange}
                        requiredplaceholder="entrer le nom"
                    />
                </div><br/>
                <div className=''>
                    <label className=''>Prenom</label><br/>
                    <input
                    className=''
                        type='text'
                        name="prenom"
                        onChange={handleChange}
                        requiredplaceholder="entrer le prenom"
                    />
                </div><br/>
                <div className=''>
                    <label className=''>Email</label><br/>
                    <input
                    className=''
                        type='text'
                        name="email"
                        onChange={handleChange}
                        requiredplaceholder="entrer l'email"
                    />
                </div><br/>
                <div className=''>
                    <label className=''>Password</label><br/>
                    <input
                    className=''
                        type='password'
                        name="password"
                        onChange={handleChange}
                        requiredplaceholder="enter password"
                    />
                </div>
                <br/>
                <button className='' onClick={handleSubmit}>Submit</button><br/><br/>
                </div>
            </div><br/>
        </div>
    );
};
export default SignUp;