const mongoose = require('mongoose');


function connectToDb() {
    mongoose.connect('mongodb+srv://satyamwebsite1:04cNNIRMjY0ylRzT@cluster0.ybvid.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    ).then(() => {
        console.log("Connect to DB");
    }).catch(err => console.log(err));
}


module.exports = connectToDb;
