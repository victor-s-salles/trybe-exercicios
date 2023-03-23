// ./routes/books.routes.ts

import { Router } from 'express';
import BooksController from '../controllers/books.controller';

const booksController = new BooksController();

const router = Router();


const booksSlashId = '/books/:id';

router.get('/books', booksController.getAll);
router.get(booksSlashId, booksController.getById);
router.post('/books', booksController.create);
router.put(booksSlashId, booksController.update);
router.delete(booksSlashId, booksController.remove);

export default router;