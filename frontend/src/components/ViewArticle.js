import React ,{useState, useEffect,inputRef} from 'react'
import axios from 'axios'
import {useNavigate,useParams} from 'react-router-dom';
const ViewArticles =() => {
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
const delArticle = async(id)=>{
    try {
        await axios.delete(`http://localhost:3000/api/article/${id}`);
        window. location. reload();
    } catch (error) {
        console.error("Error deleting Article:",error);
    }
}
const addArticle = (id)=>{
    navigate(`/admin/addArticle/${id}`);
}
const updateArticle = (idF,id)=>{
    navigate(`/admin/updateArticle/${idF}/${id}`);
}

    return (
        <div  ref={inputRef}>
        <div className="">
            <div className=''>
            </div>
            <h1 className=''>Liste des produit </h1>
            <button onClick={()=>addArticle(id)}>ajouter un article</button>
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
                            <button onClick={()=> updateArticle(id,produit.id)}>update</button>
                            <button onClick={()=>delArticle(produit.id)}>delete</button>
                        </div>
                    </div>
                ))}
        </div>
    </div>    
)
};
export default  ViewArticles ;