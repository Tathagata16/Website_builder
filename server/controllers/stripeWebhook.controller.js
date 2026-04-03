import stripe from "../config/stripe.js";
import User from "../models/user.model.js";

export const stripeWebhook = async (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
        console.log(`Webhook signature verification failed.`, err.message);
        return res.status(500).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        const userId = session.client_reference_id;
        const credits = Number(session.metadata.credits);
        const plan = session.metadata.plan;
        await User.findByIdAndUpdate(userId, {
            $inc: { credits },
            plan
        })
    }

    return res.json({ received: true })
}

