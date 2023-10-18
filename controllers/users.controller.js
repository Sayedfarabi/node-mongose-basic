
const users = require('../public/fakeData.json');

module.exports.getAllUsers = (req,res)=>{
  res.send(users)
}
module.exports.saveAUser = (req,res)=>{
  const userNew = req.body;
  console.log(userNew);
  users.push(userNew);
  res.send(users)
}
module.exports.updateDetails = (req,res)=>{
  const { update } = req.params;
  console.log(update);
  const foundUser = users.find(user => user.id == update);
  if(foundUser){
    foundUser.id = update;
    foundUser.gender = req.body.gender;
    foundUser.name = req.body.name;
    foundUser.contact = req.body.contact;
    foundUser.address = req.body.address;
    foundUser.photoUrl = req.body.photoUrl;
    res.send(foundUser)
  }else{
  res.send('user not found')
  }
}

//delete user
module.exports.deleteUser = (req, res,next) => {
  const {delet} = req.params;
  const updatedUsers  = users.filter(user => user.id !== Number(delet));
  res.send(updatedUsers );

  next()
}

//bulk update
module.exports.bulkUpdate = (req, res,next) => {
  const userIds = req.body;

  for (const userId of userIds) {
    const foundUser = users.find(user => user.id === userId.id);

    if(foundUser){
      foundUser.id = userId.id;
      foundUser.gender = userId.gender;
      foundUser.name = userId.name;
      foundUser.contact = userId.contact;
      foundUser.address = userId.address;
      foundUser.photoUrl = userId.photoUrl;
      foundUser.updated = true;
    }
    res.send(users);
  }
  next();
}






module.exports.getRandomUsers = (req,res)=>{
  const { random } = req.params;
  
  if (random === 'random') {
    const random = Math.ceil(Math.random() * 10);
    console.log(random);
    const foundUser = users.find(user => Number(user.id) == random);
    console.log(foundUser);
    res.send(foundUser);
  } else {
    const foundUser = users.find(user => Number(user.id) == random);

    if (foundUser) {
      res.send(foundUser);
    } else {
      res.status(404).send({ error: 'User not found' });
    }
  }
}

