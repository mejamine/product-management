import React,{useState,useEffect,inputRef} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
const AdminUsers =() => {
    const navigate = useNavigate();
    const [users,setUsers]=useState([])
    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const response = await axios.get(`http://localhost:3000/api/users/`)
                if(response){
                    setUsers(response.data);
                }
            }catch(error){
                console.error('something went wrong',error);
            }
            
    };
    fetchData();
},[])
    const delUser = async(id)=>{
        try {
            await axios.delete(`http://localhost:3000/api/users/${id}`);
            window. location. reload();
        } catch (error) {
            console.error("Error deleting User:",error);
        }
    }
    const updateUser = (id)=>{
        navigate(`/updateAccountGeneralAdmin/${id}`);
    }
    return (
    <div  ref={inputRef}>
        <div className="">
        <h1 className=''>Liste des utilisateurs</h1>
        </div>
        <div className=''>
            {users.map((user)=>(
                    <div key={user.id} className=''>
                        <div>
                            <p className=''>nom : {user.nom}</p>
                            <p className=''>Last Name : {user.prenom}</p>
                            <p className=''>email : {user.email}</p>
                            <p>ROLE : {user.ROLE}</p>
                            <button 
                            onClick={()=> updateUser(user.id)}
                            className=''
                            >Update</button>
                            <button 
                            onClick={()=> delUser(user.id)}
                            className=''
                            >Delete</button>
                        </div>
                    </div>
                ))}
        </div>
    </div>
    );
};
export default AdminUsers;