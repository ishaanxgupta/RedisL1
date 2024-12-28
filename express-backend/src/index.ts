import express from 'express';
import { createClient } from 'redis';

const client = createClient();
const app = express();
app.use(express.json());

client.connect();
app.post('/submit',(req, res) => {
    const {problem,code,userID,language} = req.body;
    //name of queue is submissions
    client.lPush('submissions', JSON.stringify({problem,code,userID,language}));
    res.json({message:"submitted"});

})

// async function startserver() {
//     try{
//         await client.connect();
//         console.log("Connected to Redis");

//         app.listen(3000, () => {
//             console.log('Server started on port 3000');
//         });
//     }catch(error){
//         console.log(error);
//     }
   
//     };

// startserver();
app.listen(3000, () => {
    console.log('Server started on port 3000');
})