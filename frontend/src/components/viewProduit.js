import React ,{useState, useEffect,inputRef} from 'react'
import axios from 'axios'
import {useNavigate,useParams} from 'react-router-dom';
const ViewProduit =() => {
    const {id}=useParams('id');
    const navigate = useNavigate();
    const [produits , setProduit]=useState([])
    useEffect(()=>{
        const fetchData = async () =>{
        try {
            const response = await axios.get(`http://localhost:3000/api/article/fournisseur/${id}`)
            if(response){
                const responseData = response.data;
                setProduit(responseData);
            }
        }catch(error){
            console.error('something went wrong',error);
        }
    };
    fetchData();
},[])

    return (
        <div  ref={inputRef}>
        <div className="">
            <div className=''>
            </div>
            <h1 className=''>Liste des produit </h1>
            <div className=''>
            </div>
        </div>
        <div className=''>
            {produits.map((produit)=>(
                    <div key={produit.id} className=''>
                        <div>
                            <h3 className=''>Nom : {produit.nom}</h3>
                            <p className=''>prix vente : {produit.prix_vente}</p>
                            <p className=''>tva : {produit.tva}</p>
                            <p className=''>quantite : {produit.quantite}</p>
                            <p className=''>localisation : {produit.localisation}</p>
                        </div>
                    </div>
                ))}
        </div>
    </div>    
)
};
export default  ViewProduit ;