const express = require ('express');

const controller = require ('../ProductController/ProductContoller');
const Product = require ('../model/product');


const router = express.Router();

router.get("/welcome", (req, res)=>{
    res.send("welcome to product list")
})

// post a product 
router.post("/products",controller.postProduct);

//Getting all Products
router.get('/', async(req,res)=>{
    try {
        const result =await Product.find()
        res.status(200).send({response:result, message:"all Products shown"})
    } catch (error) {
        res.status(400).send({message:"can not get all Products"})
    }
})

//get by id
router.get('/:id', async(req,res)=>{
    try {
        const result =await Product.findOne({_id:req.params.id})
        res.status(200).send({response:result, message:"getting Product by id successful"})
    } catch (error) {
        res.status(400).send({message:"can not get  Product"})
    }
})

// getting Product by name!
router.get('/name/:name', async(req,res)=>{
    try {
        const result =await Product.find({name:req.params.name})
        res.status(200).send({response:result, message:"getting Product by name successful"})
    } catch (error) {
        res.status(400).send({message:"can not get  Product"})
    }
})

// delete with id
router.delete('/:id', async(req,res)=>{
    try {
        const result =await Product.deleteOne({_id:req.params.id})
        res.status(200).send({response:result, message:"deleting Product by id successful"})
    } catch (error) {
        res.status(400).send({message:"can not delete  Product"})
    }
})
// updating with id
router.put ('/:id', async(req, res)=>{
    try {
        const result=await Product.updateOne({_id:req.params.id}, {$set:{...req.body}})
            res.send({message:'Product updated'})
    } catch (error) {
        res.send(400).send({message: "update unsuccessful"})
    }
})








module.exports = router