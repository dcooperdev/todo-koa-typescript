import * as Router from 'koa-router';
import stack from '../middleware';

const router = new Router();

router.get('/todos', ...stack.GETTODOS);
router.get('/todo/:id', ...stack.GETTODO);
router.post('/todo', ...stack.CREATETODO);
router.patch('/todo', ...stack.UPDATETODO);
router.delete('/todo/:id', ...stack.DELETETODO);

export default router;
