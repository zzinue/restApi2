const bcrypt= require("bcrypt");

const verifyPassword= async () =>{
const password= "password123"
const hash= fgdghgfh // lo que salio del hash
const isMatch= await bcrypt.compare(password, hash);
console.log ("is match", isMatch);
}

verifyPasssword() ; 