const express = require('express')

const userController = require('../controller/userController')
const authController = require('../controller/authController')
const tourController = require('../controller/tourController')
const router = express.Router();



router.post('/signup',authController.signup)
router.post('/login',authController.login)

router.delete('/deleteAll',userController.deleteAllUsers)

router.patch('/updateMe',authController.protect,userController.updateMe)
router.delete('/deleteMe',authController.protect,userController.deleteMe)

router.patch('/updateMyPassword',authController.protect,authController.updatePassword)

router.post('/forgotPassword',authController.forgotPassword)
router.patch('/resetPassword/:token',authController.resetPassword)

  

router
.route('/')
.get(userController.getAllUsers)
.post(userController.createUser)

router
.route('/:id')
.get(userController.getUser)
.patch(userController.updateUser)
.delete(userController.deleteUser);



module.exports = router;