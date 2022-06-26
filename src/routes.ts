import { Router } from 'express';

import CategoryService from './services/Category.service';
import FoodService from './services/Food.service';
import UserService from './services/User.Service';
import OrderService from './services/Order.service';
import OrderItemService from './services/Order-item.service';

import OrderController from './controllers/OrderController';
import OrderItemController from './controllers/OrderItemController';
import CategoryController from './controllers/CategoryController';
import FoodController from './controllers/FoodController';
import UserController from './controllers/UserController';

const foodController = new FoodController(new FoodService);
const categoryController = new CategoryController(new CategoryService)
const userController = new UserController(new UserService);
const orderController = new OrderController(new OrderService);
const orderItemController = new OrderItemController(new OrderItemService);

const routes = Router();

routes.post('/category/', categoryController.create);
routes.get('/category/', categoryController.get);
routes.put('/category/:id', categoryController.update);
routes.delete('/category/:id', categoryController.delete);

routes.post('/food/', foodController.create);
routes.get('/food/', foodController.get);
routes.put('/food/:id', foodController.update);
routes.delete('/food/:id', foodController.delete);

routes.post('/order/', orderController.create);
routes.get('/order/', orderController.get);
routes.get('/order/last10', orderController.getLast10);

routes.post('/orderItem/', orderItemController.create);
routes.get('/orderItem/', orderItemController.get);
routes.get('/orderItem/:order_id', orderItemController.getById);

routes.post('/user/', userController.create);
routes.get('/user/', userController.get);

export { routes };
