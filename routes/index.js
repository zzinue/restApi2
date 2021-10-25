const allProductsRouter= require ("./productsRouter");
const router = require("./categoriesRouter");
const categoriesRouter= require ("./categoriesRouter");
const userRouter= require("./userRouter")

const apiRouter = (app) => {
    app.use ("./products", allProductsRouter);
    app.use ("./categories", categoriesRouter);
   // app.use ("./users", userRouter);
};

module. exports= apiRouter; 