const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/v1/users.route');
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;
const users = require('./public/fakeData.json')

app.use('/user',userRoutes)

app.get('/', (req, res) => {
  res.send('welcome to node mongo assignment');
});
app.get('*', (req, res) => {
  res.send('No route found');
});






app.listen(port,()=>{
  console.log(`node Mongo assignment running:${port}`);
})

