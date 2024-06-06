import React,{useState,useEffect,inputRef} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
const Admin =() => {
    const navigate = useNavigate();
    const [Fornisseurs,setFournisseur]=useState([])
    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const response = await axios.get(`http://localhost:3000/api/fournisseur/`)
                if(response){
                    setFournisseur(response.data);
                }
            }catch(error){
                console.error('something went wrong',error);
            }
    };
    fetchData();
},[])
    const logout = ()=>{
        navigate('/');
    }
    const viewUsers = ()=>{
        navigate('/admin/users');
    }
    const delFournisseur = async(id)=>{
        try {
            await axios.delete(`http://localhost:3000/api/fournisseur/${id}`);
            window. location. reload();
        } catch (error) {
            console.error("Error deleting Company:",error);
        }
    }
    const addFournisseur = ()=>{
        navigate('/admin/addFournisseur');
    }
    const updateFournisseur = (id)=>{
        navigate(`/admin/updateFournisseur/${id}`);
    }
    
    const viewArticles = (id)=>{
        navigate(`/admin/viewArticles/${id}`);
    }
    return (
    <div  ref={inputRef}>
        <div className="">
            <div className=''>
            <button className='' onClick={()=>viewUsers()}>Users</button>
            </div>
            <h1 className=''>Admin </h1>
            <div className=''>
            <button className=''onClick={()=>logout()}>Log Out</button>
            </div>
        </div>
        <div>
            <h2 className=''> Liste des fournisseurs  </h2>
            <button className='' onClick={()=>addFournisseur()}>Add Fournisseur</button>
        </div>
        <div className=''>
            {Fornisseurs.map((fournisseur)=>(
                    <div key={fournisseur.id} className=''>
                        <div className=''>
                            <h3 className=''>nom : {fournisseur.nom}</h3>
                            <p className=''>Localisation : {fournisseur.localisation}</p>
                            <button
                            className=''
                            onClick={()=>viewArticles(fournisseur.id)}
                            >articles</button>
                            <button 
                            onClick={()=> updateFournisseur(fournisseur.id)}
                            className='b1'
                            >Update</button>
                            <button 
                            onClick={()=> delFournisseur(fournisseur.id)}
                            className='b1'
                            >Delete</button>
                        </div>
                    </div>
                ))}
        </div>
    </div>
    );
};
export default Admin;