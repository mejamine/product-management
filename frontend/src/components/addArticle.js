import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate ,useParams} from 'react-router-dom';
const AddArticle =()=>{
    const {id}=useParams('id');
    const navigate = useNavigate();
    const [newArticle, setNewArticle] = useState({});
    const handleChange = (e)=>{
        setNewArticle({
            ...newArticle,
            [e.target.name]: e.target.value,
            ["fournisseur"]:id
                    });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:3000/api/article', newArticle);
            navigate(`/admin/viewArticles/${id}`);
        }catch(error){
            console.error("Error creating Article:",error);
        }
    };
    return(
        <div className=''>
            <h1 className=''>Ajouter Un Article</h1> 
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
                    <label className=''>prix vente</label><br/>
                    <input
                    className=''
                        type='Number'
                        name="prix_vente"
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
export default AddArticle;