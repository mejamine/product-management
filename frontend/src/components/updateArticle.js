import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate ,useParams} from 'react-router-dom';
const UpdateArticle =()=>{
    const {idF,id}=useParams('');
    const navigate = useNavigate();
    const [newArticle, setNewArticle] = useState({});
    const handleChange = (e)=>{
        setNewArticle({
            ...newArticle,
            [e.target.name]: e.target.value,
                    });
    };
    useEffect(()=>{
        const fetchData = async () =>{
        try {
            const response = await axios.get(`http://localhost:3000/api/article/${id}`)
            if(response){
                const responseData = response.data;
                setNewArticle(responseData);
            }
        }catch(error){
            console.error('something went wrong',error);
        }
    };
    fetchData();
},[])
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            await axios.put(`http://localhost:3000/api/article/${id}`, newArticle);
            navigate(`/admin/viewArticles/${idF}`);
        }catch(error){
            console.error("Error updating Article:",error);
        }
    };
    return(
        <div className=''>
            <h1 className=''>update Un Article</h1> 
            <div className="">
                <div>
                <div className=''>
                    <label className=''>Nom</label><br/>
                    <input
                    className=''
                        type='text'
                        name="nom"
                        value={newArticle.nom}
                        onChange={handleChange}
                        requiredplaceholder="entrer le nom"
                    />
                </div><br/>
                <div className=''>
                    <label className=''>prix vente</label><br/>
                    <input
                    className=''
                        type='Number'
                        name="prix_vente"
                        value={newArticle.prix_vente}
                        onChange={handleChange}
                        requiredplaceholder="entrer le prix vente"
                    />
                </div><br/>
                <div className=''>
                    <label className=''>tva</label><br/>
                    <input
                    className=''
                        type='Number'
                        name="tva"
                        value={newArticle.tva}
                        onChange={handleChange}
                        requiredplaceholder="entrer le tva"
                    />
                </div><br/>
                <div className=''>
                    <label className=''>Quantite</label><br/>
                    <input
                    className=''
                        type='Number'
                        name="quantite"
                        value={newArticle.quantite}
                        onChange={handleChange}
                        requiredplaceholder="entrer la quantite"
                    />
                </div><br/>
                <div className=''>
                    <label className=''>Localisation</label><br/>
                    <input
                    className=''
                        type='Text'
                        name="localisation"
                        value={newArticle.localisation}
                        onChange={handleChange}
                        requiredplaceholder="entrer la localisation"
                    />
                </div><br/>
                <button className='' onClick={handleSubmit}>Submit</button><br/><br/>
                </div>
            </div><br/>
        </div>
    );
};
export default UpdateArticle;