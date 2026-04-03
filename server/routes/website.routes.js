import express from 'express';
import isAuth from '../middlewares/isAuth.js';
import { generateWebsite, getWebsiteById, getWebsites } from '../controllers/website.controllers.js';

const websiteRouter = express.Router();
websiteRouter.post("/generate", isAuth, generateWebsite);
websiteRouter.get('/get-all', isAuth, getWebsites);
websiteRouter.get('/get-by-id/:id', isAuth, getWebsiteById);

export default websiteRouter;