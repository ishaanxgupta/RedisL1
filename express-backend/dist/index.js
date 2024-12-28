"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const redis_1 = require("redis");
const client = (0, redis_1.createClient)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
client.connect();
app.post('/submit', (req, res) => {
    const { problem, code, userID, language } = req.body;
    //name of queue is submissions
    client.lPush('submissions', JSON.stringify({ problem, code, userID, language }));
    res.json({ message: "submitted" });
});
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
});
