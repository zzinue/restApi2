
const express= require("express");
const app = express();
const port = 8000;
const apiRouter= require("./routes");
const router = require("./routes/categoriesRouter");
const {logErrors, errorHandler}= require("./middlewares/errorHandlers");
app.use(express.json());

app.get("/", (request, response)=>{
    response.send("Hello World!");
});


// ruta para productos
app.get ("/products", (request, response)=>{
    const products = [];
    const { limit } = request.query;

    for (let index=0; index <limit; index++){
    products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), ),
        image: faker.image.imageUrl(), 
    });
}
    
    if (limit){
        //si tiene limite entonces
        response.json({
            ok: true,
            payload: products,
        });
    
    }else {
        // si no tiene limite
        response.json({
            ok: false,
            message: "el limite y la pagina son obligatorios",
        });
    }
}); 


app.get("/products/:id", (request, response)=>{
    const {id } = request.params;
    response.json({
        id, 
        name: "product 1 ",
        price: 1000,
    });
});



app.get("/categories/:categoryId/product/:productId", (request, response)=>{
        const { categoryId,productId }= request.params
    
        response.json({
            productId,
            categoryId, 
            name: "Porducto1",
            price: 1000,
        });
});


// protocolo:dominio:puerto/ruta

app.get("/departments", (request, response)=>{
    const departments =[];
    const { limit } = request.query; 
  
    for (let index = 0; index < limit; index++) {
        departments.push({
            departments: faker.commerce.department(),
    });
};
    if (limit){
        response.json({
            ok:true, 
            payload: departments,
        });
    }else {
        response.json({
            ok:false, 
            message : " numero de departments"
        }); 
    }
});

app.get ("/departments/:departmentsId", (request, response)=>{
        const {departmentsId}= request.params; 
        response.json({
            departmentsId, 
            
        });
    
});

// products
app.get("/allProducts", (request, response)=>{
    const allProducts =[];
    const { limit } = request.query; 
  
    for (let index = 0; index < limit; index++) {
        allProducts.push({
            name: faker.commerce.productName(),
            price: parseInt (faker.commerce.price()),
            image: faker.image.food(),

    });
};
    if (limit){
        response.json({
            ok:true, 
            payload: allProducts,
        });
    }else {
        response.json({
            ok:false, 
            message : " alert"
        }); 
    }
});

app.get ("/allProducts/:allProductsId", (request, response)=>{
        const {allProductsId}= request.params; 
        response.json({
            allProductsId, 
            
        });
    
});

// users
app.get("/users", (request, response)=>{
    const users =[];
    const { limit } = request.query; 
  
    for (let index = 0; index < limit; index++) {
        users.push({
            name: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            image: faker.image.animals(),
            
            //phone: parseInt (fake.phone.phoneNumber()),
            //avatar: fake.image.people(),


    });

};


    if (limit){
        response.json({
            ok:true, 
            payload: users,
        });
    }else {
        response.json({
            ok:false, 
            message : " users"
        }); 
    }
});



app.get ("/users/:usersId", (request, response)=>{
        const {usersId}= request.params; 
        response.json({
            usersId, 
            
        });
    
});




apiRouter(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, ()=>{
    console.log("listening on port:", port);
})





