/* listar los productos
    ver los detalles del producto por medio del id
    crear un nuevo producto
    eliminar un producto
    actualizar los detalles de un producto
     */
// listar los productos:
const Product = require("../../models/products").model;

const get = async () => {
  const allProducts = await Product.find({}).exec();
  return allProducts;
};

// mongoose trabaja por medio de promesas

//ver los detalles del producto por medio del id

const getById = async (productId) => {
    const product = await Product.findById(productId).exec(); 
    return product;
};

//crear nuevo producto
const create=  async (productData)=> { 
    
    const {name, price}= productData;
    
    const product= new Product({name, price});

    const savedProduct= await product.save();

    return savedProduct;

}


//actualizar los detalles de un producto
const update= async (productId, productData)=> {
    const {name, price}= productData
    return Product.findByIdAndUpdate(productId, productData ).exec();

}

//eliminar un producto 

const del= async (productId)=>{
    return Product.findByIdAndDelete(productId).exec()
}



module.exports= {
    get,
    getById, 
    create,
    del, 
    update,
}