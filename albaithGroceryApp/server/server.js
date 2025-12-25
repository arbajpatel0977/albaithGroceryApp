import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './configs/db.js';
import 'dotenv/config'
import userRouter from './routes/userRoute.js';
import SellerRouter from './routes/sellerRoute.js';
import connectCloudinary from './configs/cloudnary.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import addressRouter from './routes/addressRoute.js';
import orderRouter from './routes/orderRoute.js';
import { stripeWebhooks } from './controllers/orderController.js';

const app = express();
const PORT = process.env.PORT || 4000;

await connectDB();
await connectCloudinary();


// Define allowed origins for CORS
const allowedOrigins = [
    'http://localhost:5173',
    'https://albaith-grocery-app-mzu8.vercel.app',
    'https://albaith-grocery-app-ip8y-git-main-arbaj-patels-projects.vercel.app'
];

app.post('/stripe', express.raw({ type: 'application/json' }), stripeWebhooks)

// middleware configuration
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
}));




app.get('/', (req, res) => {
    res.send('Hello from the server!');
});
app.use('/api/user', userRouter);
app.use('/api/seller', SellerRouter);
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/address', addressRouter);
app.use('/api/order', orderRouter);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

});

