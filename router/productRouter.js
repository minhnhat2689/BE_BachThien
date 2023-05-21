const router = require('express').Router();
const productController = require('../controller/productController')

//MENU HEADER
router.post('/menu',productController.addMenu)



//PRODUCT (SAN PHAM)
router.post('/productAdd',productController.addProduct)
router.get('/xemProduct',productController.xemProduct)
router.get('/getAP/:id',productController.getAP)
router.delete('/deleteProduct/:id', productController.deleteProduct)
router.put('/updateProduct/:id',productController.updateProduct)

//DANH MUC SAN PHAM
router.post('/danhmuc',productController.addDanhmuc)
router.get('/xemDanhmuc',productController.xemDanhMucSP)




//ACCOUNT ADMIN
router.post('/admin',productController.addAdmin)
router.get('/goiadmin/:username',productController.goiAdmin)

//POST
router.post('/post',productController.addPost)
router.get('/viewpost', productController.addViewPost)
router.get('/view1post/:id', productController.add1ViewPost)
router.delete('/delete-post/:id', productController.deletePost)
router.put('/update-post/:id',productController.updatePost)
router.get('/getAPost/:id',productController.getAPost)


//LOGO
router.post('/logo',productController.addLogo)

//SOCIAL
router.post('/social',productController.addSocial)

//LANGUAGE
router.post('/language',productController.addLanguage)

//SUPPORT
router.post('/support',productController.addSupport)

//CONTACT
router.post('/contact',productController.addContact)


//
module.exports = router