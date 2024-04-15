import express from 'express';

const app = express();

app.use(express.static('../'));

//port number and call back function to check server status
app.listen(4000,()=>{
    console.log('Server Started on port 4000');
})