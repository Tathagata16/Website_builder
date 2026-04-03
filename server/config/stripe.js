import dotenv from 'dotenv';
dotenv.config();
import Stripe from 'stripe';
const stripe = new Stripe(PROCESS.env.STRIPE_SECRET_KEY);

export default stripe;