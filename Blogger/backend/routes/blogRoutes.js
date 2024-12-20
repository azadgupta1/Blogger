import express from 'express';
import { getAllBlogs, createBlog } from '../controllers/blogController.js';

const router = express.Router();

router.get('/', getAllBlogs);
router.post('/', createBlog);

export default router;
