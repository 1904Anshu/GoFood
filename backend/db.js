 const mongoose = require('mongoose');
const { Await } = require('react-router-dom');
 const mongoURI = 'mongodb://GoFood:Anshu123@ac-kxllhgb-shard-00-00.0wfu6bo.mongodb.net:27017,ac-kxllhgb-shard-00-01.0wfu6bo.mongodb.net:27017,ac-kxllhgb-shard-00-02.0wfu6bo.mongodb.net:27017/goFoodmern?ssl=true&replicaSet=atlas-13flfx-shard-0&authSource=admin&retryWrites=true&w=majority'
 const mongoDB =async() =>{
   await  mongoose.connect(mongoURI,{useNewUrlParser: true},async(err,result)=>{
        if(err) console.log("---",err)
        else{
         console.log("connected");
          const fetched_data = await mongoose.connection.db.collection("food_items");
         fetched_data.find({}).toArray( async function(err,data){
                 const foodCategory = await mongoose.connection.db.collection("foodCategory");
              foodCategory.find({}).toArray(function (err,catData){
                if(err) console.log(err);
                else{
             global.food_items = data;
             global.foodCategory = catData;
            }
          //   // console.log(global.food_items)

              })
          //  if(err) console.log(err)
          //   global.food_items = data;
          //   // console.log(global.food_items)

          })
        }
     });
 }

  module.exports = mongoDB;