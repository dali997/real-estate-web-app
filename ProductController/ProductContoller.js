const Product= require ('../model/product');

exports.postProduct= async (req, res)=>{
    try {
        const newProduct= new Product(req.body)

        if (!req.body.description){
            res.status(400).send({message:"description is required !!"})
            return;
        }
        if (!req.body.name){
            res.status(400).send({message:"name is required !!"})
            return;
        }
       
        
        const response=await newProduct.save()
        res.send({response:response, message:'A new product has been saved'})
    } catch (error) {
        console.log(error);
        res.status(500).send({message:'Ooops error has occured '})
    }
}