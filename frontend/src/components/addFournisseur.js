import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddFournisseur =()=>{
    const navigate = useNavigate();
    const [newFournisseur, setNewFournisseur] = useState({});
    const handleChange = (e)=>{
        setNewFournisseur({
            ...newFournisseur,
            [e.target.name]: e.target.value
                    });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:3000/api/fournisseur', newFournisseur);
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
                        requiredplaceholder="entrer la localisation"
                    />
                </div><br/>
                <button className='' onClick={handleSubmit}>Submit</button><br/><br/>
                </div>
            </div><br/>
        </div>
    );
};
export default AddFournisseur;