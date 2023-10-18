const express = require('express');
const router = express.Router();
const userController = require('../../controllers/users.controller')

router
.route('/all')
.get(userController.getAllUsers)

router
.route('/save')
.post(userController.saveAUser)

router
.route('/:update')
.patch(userController.updateDetails)
//bulk update
router
.route('/bulk-update')
.put(userController.bulkUpdate)

router
.route('/:delet')
.delete(userController.deleteUser)

//random users
router.route('/:random')
.get(userController.getRandomUsers)












module.exports = router;