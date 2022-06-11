import { Router } from 'express';
import { CreateCategoryController } from './controllers/Category/CreateCategoryController';
import { DeleteCategoryController } from './controllers/Category/DeleteCategoryController';
import { GetAllCategoryController } from './controllers/Category/GetAllCategoryController';
import { UpdateCategoryController } from './controllers/Category/UpdateCategoryController';
import { CreateDetailController } from './controllers/Detail/CreateDetailController';
import { GetAllDetailController } from './controllers/Detail/GetAllDetailController';
import { GetDetailController } from './controllers/Detail/GetDetailController';
import { CreateFoodController } from './controllers/Food/CreateFoodController';
import { DeleteFoodController } from './controllers/Food/DeleteFoodController';
import { GetAllFoodController } from './controllers/Food/GetAllFoodController';
import { UpdateFoodController } from './controllers/Food/UpdateFoodController';
import { CreateOrderController } from './controllers/Order/CreateOrderController';
import { GetAllOrderController } from './controllers/Order/GetAllOrderController';
import { CreateUserController } from './controllers/User/CreateUserController';
import { GetAllUserController } from './controllers/User/GetAllUserController';

const routes = Router();

routes.post('/category/create', new CreateCategoryController().handle);
routes.get('/category/getAll', new GetAllCategoryController().handle);
routes.put('/category/update/:id', new UpdateCategoryController().handle);
routes.delete('/category/delete/:id', new DeleteCategoryController().handle);

routes.post('/food/create', new CreateFoodController().handle);
routes.get('/food/getAll', new GetAllFoodController().handle);
routes.put('/food/update/:id', new UpdateFoodController().handle);
routes.delete('/food/delete/:id', new DeleteFoodController().handle);

routes.post('/order/create', new CreateOrderController().handle);
routes.get('/order/getAll', new GetAllOrderController().handle);

routes.post('/detail/create', new CreateDetailController().handle);
routes.get('/detail/getAll', new GetAllDetailController().handle)
routes.get('/detail/get/:order_id', new GetDetailController().handle)

routes.post('/user/create', new CreateUserController().handle);
routes.get('/user/GetAll', new GetAllUserController().handle);

export { routes };
