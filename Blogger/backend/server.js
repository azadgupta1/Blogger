import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes.js';
import blogRoutes from './routes/blogRoutes.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
// app.use(cors({ 
//     origin: 'http://localhost:5500', 
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], 
//     credentials: true, 
// }));
app.use(bodyParser.json());


app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);

app.get('/', (req, res)=>{
    res.send("Welcome to blogger!!")
});

app.listen(PORT, () =>{
    console.log("Server is running on port "+PORT);
});