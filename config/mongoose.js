// const mongoose= require('mongoose');

// mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false });

// const db=mongoose.connection;

// db.on('error',console.error.bind(console,"Error in connection Mongodb"));

// db.once('open',()=>{
//     console.log("Mongodb conencted");
// });

// module.exports=db;




const mongoose = require('mongoose')

const url = "mongodb+srv://tashhir:tashhir@cluster0.hcu6o.mongodb.net/social_media_site?retryWrites=true&w=majority";

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true ,
    
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    });


module.exports=mongoose;
