import { Router } from 'express';
import CategoryController from './controllers/CategoryController';
import FoodController from './controllers/FoodController';
import UserController from './controllers/UserController';
import { CreateDetailController } from './controllers/Detail/CreateDetailController';
import { GetAllDetailController } from './controllers/Detail/GetAllDetailController';
import { GetDetailController } from './controllers/Detail/GetDetailController';
import { CreateOrderController } from './controllers/Order/CreateOrderController';
import { GetAllOrderController } from './controllers/Order/GetAllOrderController';
import CategoryService from './services/Category.service';
import FoodService from './services/Food.service';
import UserService from './services/User.Service';

const foodController = new FoodController(new FoodService);
const categoryController = new CategoryController(new CategoryService)
const userController = new UserController(new UserService);

const routes = Router();

routes.post('/category/create', categoryController.create);
routes.get('/category/getAll', categoryController.get);
routes.put('/category/update/:id', categoryController.update);
routes.delete('/category/delete/:id', categoryController.delete);

routes.post('/food/', foodController.create);
routes.get('/food/', foodController.get);
routes.put('/food/:id', foodController.update);
routes.delete('/food/:id', foodController.delete);

routes.post('/order/create', new CreateOrderController().handle);
routes.get('/order/getAll', new GetAllOrderController().handle);

routes.post('/detail/create', new CreateDetailController().handle);
routes.get('/detail/getAll', new GetAllDetailController().handle)
routes.get('/detail/get/:order_id', new GetDetailController().handle)

routes.post('/user/create', userController.create);
routes.get('/user/GetAll', userController.get);

export { routes };
