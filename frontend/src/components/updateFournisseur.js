import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate ,useParams} from 'react-router-dom';
const UpdateFournisseur =()=>{
    const {id}=useParams('id');
    const navigate = useNavigate();
    const [newFournisseur, setNewFournisseur] = useState({});
    const handleChange = (e)=>{
        setNewFournisseur({
            ...newFournisseur,
            [e.target.name]: e.target.value
                    });
    };
    useEffect(()=>{
        
        const fetchData = async () =>{
            try {
                const response = await axios.get(`http://localhost:3000/api/fournisseur/${id}`)
                if(response){
                    setNewFournisseur(response.data);
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
            await axios.put(`http://localhost:3000/api/fournisseur/${id}`, newFournisseur);
            navigate(`/admin`);
        }catch(error){
            console.error("Error creating User:",error);
        }
    };
    return(
        <div className=''>
            <h1 className=''>Ajouter Un Fournisseur</h1> 
            <div className="">
                <div>
                <div className=''>
                    <label className=''>Nom</label><br/>
                    <input
                    className=''
                        type='text'
                        name="nom"
                        onChange={handleChange}
                        value={newFournisseur.nom}
                        requiredplaceholder="entrer le nom"
                    />
                </div><br/>
                <div className=''>
                    <label className=''>Localisation</label><br/>
                    <input
                    className=''
                        type='text'
                        name="localisation"
                        onChange={handleChange}
                        value={newFournisseur.localisation}
                        requiredplaceholder="entrer la localisation"
                    />
                </div><br/>
                <button className='' onClick={handleSubmit}>Submit</button><br/><br/>
                </div>
            </div><br/>
        </div>
    );
};
export default UpdateFournisseur;