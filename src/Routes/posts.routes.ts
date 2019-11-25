import { Router } from 'express';
import { getPosts } from '../Controllers/post.controller';

const router = Router();

router.route("/")
  .get(getPosts)

export default router
