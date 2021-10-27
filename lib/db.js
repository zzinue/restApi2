const mongoose= require ("mongoose"); 
const connect= () => 
new Promise ((resolve, reject)=>{
    mongoose.connect ("mongodb+srv://zzinue:belkerleon1@cluster0.q8dy9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
    }
);
const db = mongoose.connection; 

db.on("open",()=>{
    console.warn("Connection successful");
    resolve (mongoose);
}); 

db.on("error", (error)=>{
    console.error("Connection failed", error);
    reject (error); 
});
});


module.exports= {
    connect, 
}