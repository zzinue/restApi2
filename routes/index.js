const productsRouter = require("./productsRouter");
const categoriesRouter = require("./categoriesRouter");
const userRouter = require("./usersRouter");

const apiRouter = (app) => {
  app.use("/products", productsRouter);
     app.use("/categories", categoriesRouter);
    app.use("/users", userRouter);
};

module.exports = apiRouter;