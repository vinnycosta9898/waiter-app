import { Router } from 'express';

import multer from 'multer';

import { CreateUserController } from './controllers/user/CreateUserController';

import { AuthUserController } from './controllers/user/AuthUserController';

import { DetailUserController } from './controllers/user/DetailUserController';

import { isAuthentiated } from './middlewares/isAuthenticated';

import { CreateCategoryController } from './controllers/category/CreateCategoryController'

import { ListCategoryController } from './controllers/category/ListCategoryController'

import { CreateProductController } from './controllers/product/CreateProductController';

import { ListByCategoryController } from './controllers/product/ListByCategoryController';

import { CreateOrderController } from './controllers/order/CreateOrderController';

import { RemoveOrderController } from './controllers/order/RemoveOrderController';

import { AddItemController } from './controllers/order/AddItemController';

import { RemoveItemController } from './controllers/order/RemoveItemController';

import { SendOrderController } from './controllers/order/SendOrderController';

import { ListOrderController } from './controllers/order/ListOrderController';

import { DetailOrderController } from './controllers/order/DetailOrderController';

import { FinishOrderController } from './controllers/order/FinishOrderController';

import uploadConfig from './config/multer';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

// User Routes

router.post("/users", new CreateUserController().handle)

router.post("/session", new AuthUserController().handle)

router.get("/me", isAuthentiated, new DetailUserController().handle)

// Private Routes

router.post("/category", isAuthentiated, new CreateCategoryController().handle )

router.get("/category", isAuthentiated, new ListCategoryController().handle )

// Product Routes

router.post("/product", isAuthentiated, upload.single("file"), new CreateProductController().handle )

router.get("/category/product", isAuthentiated, new ListByCategoryController().handle )

// Order Routes

router.post("/order", isAuthentiated, new CreateOrderController().handle )

router.delete("/order", isAuthentiated, new RemoveOrderController().handle )

router.post("/order/add", isAuthentiated, new AddItemController().handle )

router.delete("/order/remove", isAuthentiated, new RemoveItemController().handle )

router.put("/order/send", isAuthentiated, new SendOrderController().handle )

router.get("/orders", isAuthentiated, new ListOrderController().handle )

router.get("/order/detail", isAuthentiated, new DetailOrderController().handle )

router.put("/order/finish", isAuthentiated, new FinishOrderController().handle )


export { router };

