import express from 'express';
import isAuth from '../middlewares/isAuth.js';
import { changes, deploy, generateWebsite, getWebsiteById, getWebsites, getBySlug } from '../controllers/website.controllers.js';

const websiteRouter = express.Router();
websiteRouter.post("/generate", isAuth, generateWebsite);
websiteRouter.get('/get-all', isAuth, getWebsites);
websiteRouter.get('/get-by-id/:id', isAuth, getWebsiteById);

websiteRouter.get('/update/:id',isAuth, changes);

websiteRouter.get("/deploy/:id", isAuth, deploy);

websiteRouter.get("/get-by-slug/:slug", getBySlug);


export default websiteRouter;