const User= require("../../models/users").model; 


//lista de usuarios: 
const get= async ()=> {
    const allUsers= await User.find({}).exec(); 
    return allUsers;
}



//ver los detalles del usuario por id
const getById= async (userId) => {
     const user= await User.findById(userId).exec(); 
     return user;
};



// crear usuario: 

const create= async (userData) => { 

    const { firstName, lastName, userName, password}= userData;
    
    const user= new User({firstName, lastName, userName, password});

    const savedUser= await user.save(); 

    return savedUser; 

} 


//acutalizar con patch los detalles del user 
const update= async (userId, userData)=>{
    const {firstName, lastName, userName, password}=userData
    return User.findByIdAndUpdate(userId, userData).exec();
    
}
 
module.exports= {
    get, 
    getById,
    create,
    update,
}