const slugify = require('slugify');
const db = require('../../database/db.config');
const Fournisseur = db.fournisseurs;

exports.create=(req, res) => {
    const {nom,localisation} = req.body;
    if(!nom || !localisation ){
        return res.status(400).send({
            message : 'content can not be empty!'
         })
    }
    const newFournisseur = new Fournisseur({
        nom : nom,
        localisation : localisation,
    });
    newFournisseur.save(newFournisseur).then((data) =>{
        res.status(200).send({
            message : 'successfully created Fournisseur!'
        })
    }).catch(err =>{
        console.log(err);
    });
}
exports.findAll = (req, res)=> {
    Fournisseur.find({  
    }).then((data)=>{
      res.send(data);
    }).catch((err) =>{
        console.log(err);
    });
}
exports.delete = (req , res)=>{
    const id = req.params.id;
    if(!id){
        res.status(400).send({message:"content is required"});
    }
    Fournisseur.findByIdAndDelete(id).then((data)=>{
        if(!data){
            res.status(404).send({message:"Company not found"});
        }
        res.status(200).send({message:"Fournisseur was deleted successfully"});
    });
}
exports.findOne = (req, res) =>{
    const id = req.params.id;
    if(!id) {
        res.status(400).send({ message: "content is required"});
    }
    Fournisseur.findById(id).then((data)=> {
        res.send(data);
    }).catch((err)=>{
        console.log(err);
    })
}
exports.update =(req, res) =>{
    const id = req.params.id;
    const {nom, localisation} = req.body;
    if(!id || !nom || !localisation) {
    res.status(400).send({ message: "content is required "});
    }
    Fournisseur.findByIdAndUpdate(id,
    {nom: nom, localisation : localisation},
    {useFindAndModify: false}).then((data) =>{
        if(!data){
            res.status(404).send({ message: `Can not update Fournisseur with id=${id}`});
        }
        res.status(200).send({ message: `Fournisseur was successfully updated`});
        }).catch((err) =>{
            console.log(err);
        });
}