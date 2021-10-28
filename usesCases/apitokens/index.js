
const bcrypt= require("bcrypt");
const ApiToken= require ("../../models/apitokens"); 

const get= async () => {
    const tokens= await ApiToken.find({}).exec();
    return tokens;
}; 

const getById= async (tokenId)=> {
    const token= await ApiToken.findById(tokenId).exec();
    return token;
}
const create= async (password)=>{
    const hash= await hashsPassword(password);
    const token= new ApiToken.model ({token: hash}); 
    const savedToken = await token.saved ();
    return savedToken;
}; 

const hashsPassword= async (password) => {
    const hash = await bcrypt.hash(password,10);
    return hash;
}