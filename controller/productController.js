const danhmucs = require('../model/danhmuc')
const menu = require('../model/menu')
const products = require ('../model/product')
const posts = require ('../model/post')
const logos = require('../model/logo')
const socials = require('../model/social')
const languages = require('../model/language')
const supports = require('../model/support')
const contacts = require('../model/contact')
const admins = require('../model/admin')
const productController = {
    //MENU HEADER
    addMenu: async function (req, res){
        const item = await menu({
            name: req.body.name,
            link: req.body.link,


        })
        const itemSave = await item.save()
        res.status(200).json(itemSave)
    },


    //PRODUCT (SAN PHAM)
    addProduct: async function (req, res){
        const item = await new products({
            name: req.body.name,
            img: req.body.img,
            price: req.body.price,
            description: req.body.description,
            idDanhmuc: req.body.idDanhmuc,

        })
        const itemSave = await item.save();
        res.json(itemSave)
        // console.log(req.body.name);
        // res.json(req.body.name);
        
    },
    xemProduct: async (req, res) => {
        try {
          const itemDB = await products.find();
          res.status(200).json(itemDB);
        } catch (err) {
          res.status(500).json(err);
        }
      },
    

    updateProduct: async (req, res) => {
        try {
          const product = await products.findById(req.params.id);
          await product.updateOne({ $set: req.body });
          res.status(200).json("Updated successfully!");
        } catch (err) {
          res.status(500).json(err);
        }
      },
    
    // lay1Product: async function (req, res){
    //     const oneItem = await products.findOne({id : req.body.id});
    //     res.json(oneItem)
    // },
    getAP: async (req, res) => {
        try {
          const book = await products.findById(req.params.id);
          res.status(200).json(book);
        } catch (err) {
          res.status(500).json(err);
        }
      },

      deleteProduct: async (req, res) => {
        try {
          await products.findByIdAndDelete(req.params.id);
          res.status(200).json("Deleted successfully");
        } catch (err) {
          res.status(500).json(err);
        }
      },





    //DANH MUC SAN PHAM
    addDanhmuc: async function (req, res){
        const item = await danhmucs({
            name: req.body.name,
            link: req.body.link,
            idMenu: req.body.idMenu,
        })
        const itemSave = await item.save()
        res.status(200).json(itemSave)
    },
    xemDanhMucSP: async function (req, res){
        const itemDM = await danhmucs.find();
        res.json(itemDM)
    },
    





    //POST
    addPost: async function (req, res){
        const item = await posts({
            title: req.body.title,
            date: req.body.date,
            description: req.body.description,
            doan1: req.body.doan1,
            doan2: req.body.doan2,
            doan3: req.body.doan3,
            doan4: req.body.doan4,
            doanket: req.body.doanket,
            img: req.body.img,
            idMenu: req.body.idMenu,

        })
        const itemSave = await item.save()
        res.status(200).json(itemSave)
    },

    addViewPost: async (req, res) => {
        try {
          const itemDB = await posts.find();
          res.status(200).json(itemDB);
        } catch (err) {
          res.status(500).json(err);
        }
      },


      add1ViewPost: async (req, res) => {
        try {
          const book = await posts.findById(req.params.id);
          res.status(200).json(book);
        } catch (err) {
          res.status(500).json(err);
        }
      },

      deletePost: async (req, res) => {
        try {
          await posts.findByIdAndDelete(req.params.id);
          res.status(200).json("Deleted successfully");
        } catch (err) {
          res.status(500).json(err);
        }
      },

      updatePost: async (req, res) => {
        try {
          const product = await posts.findById(req.params.id);
          await product.updateOne({ $set: req.body });
          res.status(200).json("Updated successfully!");
        } catch (err) {
          res.status(500).json(err);
        }
      },


      getAPost: async (req, res) => {
        try {
          const book = await posts.findById(req.params.id);
          res.status(200).json(book);
        } catch (err) {
          res.status(500).json(err);
        }
      },

    //LOGO
    addLogo: async function (req, res){
        const item = await logos({
            name: req.body.name,
            img: req.body.img,

        })
        const itemSave = await item.save()
        res.status(200).json(itemSave)
    },


    //SOCIAL MEDIA
    addSocial: async function (req, res){
        const item = await socials({
            name: req.body.name,
            img: req.body.img,
            link: req.body.link,

        })
        const itemSave = await item.save()
        res.status(200).json(itemSave)
    },



    //LANGUAGE
    addLanguage: async function (req, res){
        const item = await languages({
            name: req.body.name,
           

        })
        const itemSave = await item.save()
        res.status(200).json(itemSave)
    },

    //SUPPORT
    addSupport: async function (req, res){
        const item = await supports({
            name: req.body.name,
            link: req.body.link
           

        })
        const itemSave = await item.save()
        res.status(200).json(itemSave)
    },



    //ADD CONTACT
    addContact: async function (req, res){
        const item = await contacts({
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address,
            email: req.body.email,
            topic: req.body.topic,
            description: req.body.description
        })
        const itemSave = await item.save()
        res.status(200).json(itemSave)
    },


        //PRODUCT (SAN PHAM)
        addAdmin: async function (req, res){
            const item = await new admins({
                username: req.body.username,
                password: req.body.password,
                
    
            })
            const itemSave = await item.save();
            res.json(itemSave)
            // console.log(req.body.name);
            // res.json(req.body.name);
            
        },

        goiAdmin: async function (req, res){
            const oneItem = await products.findOne({username : req.body.username});
            res.json(oneItem)
        },
}

module.exports = productController