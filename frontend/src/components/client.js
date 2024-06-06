import React ,{useState, useEffect,inputRef} from 'react'
import axios from 'axios'
import {useNavigate,useParams} from 'react-router-dom';
const Client =() => {
    const {id}=useParams('id');
    const navigate = useNavigate();
    const [fournisseurs , setFournisseurs]=useState([])
    useEffect(()=>{
        const fetchData = async () =>{
        try {
            const response = await axios.get('http://localhost:3000/api/fournisseur')
            if(response){
                const responseData = response.data;
                setFournisseurs(responseData);
            }
        }catch(error){
            console.error('something went wrong',error);
        }
    };
    fetchData();
},[])
const viewArticles = (id)=>{
    console.log(id);
    navigate(`/viewProduit/${id}`);
}
const updateAccount = (id)=>{
    navigate(`/updateAccountGeneral/${id}`);
}
const logout = ()=>{
    navigate('/');
}
    return (
        <div  ref={inputRef}>
        <div className="">
            <div className=''>
            <button className='' onClick={()=>updateAccount(id)}>Update Account</button>
            </div>
            <h1 className=''>Liste des fournisseurs </h1>
            <div className=''>
            <button className=''onClick={()=>logout()}>Log Out</button>
            </div>
        </div>
        <div className=''>
            {fournisseurs.map((fournisseur)=>(
                    <div key={fournisseur.id} className='element'>
                        <div>
                            <h3 className=''>Nom : {fournisseur.nom}</h3>
                            <p className=''>Localisation : {fournisseur.localisation}</p>
                            <button 
                            onClick={()=> viewArticles(fournisseur.id)}
                            className=''
                            >voir les articles</button>
                        </div>
                    </div>
                ))}
        </div>
    </div>    
)
};
export default Client;