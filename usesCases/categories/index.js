const Categories= require("../../models/categories").model


//listar los productos
const get = async () => {
    const allCategories= await Categories.find({}).exec(); 
    return allCategories;
}; 


// ver los detalles del producto por medio del id

const getById=async (categoriesID)=> {
    const categories= await Categories.findById(categoriesID).exec();
    return categories; 
}


//crear nuevo porducto

const create= async (categoriesData)=> {
    
    const {name, price, description }= categoriesData;

    const allCategories= new Categories ({name, price, description });

    const savedCategories= await allCategories.save(); 

    return savedCategories;
}

module.exports= {
     get,
     create,
     getById,
}
