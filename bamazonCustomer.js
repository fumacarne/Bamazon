var mysql = require('mysql');
var inquirer = require('inquirer');
var db = mysql.createConnection({
  host: "localhost",

  // Your port
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "qwerty212342467",
  database: "bamazon_DB"
});

db.connect();
// connect to the mysql server and sql database

// (product_name, department_product,price,stock_quantity)

    db.query('SELECT * FROM products',function(err,results,fields){
        if (err) throw err;
          console.log("|id ||PRODUCT||    DEPARTMENT   || PRICE  || STOCK ||||")
        for (i=0;i<results.length;i++){
           
        console.log(results[i].id + "    |    " + results[i].product_name + "    |    " + results[i].department_product + "    |    " + results[i].price + "    |    " + results[i].stock_quantity);
      console.log("---------------------------------------------------------------------------------------------")
      console.log("---------------------------------------------------------------------------------------------")
 
    }},)

    function init(){

    inquirer.prompt([{
        name:"q1",
        type:"list",
        message:"What do you want to do?",
        choices:["buy an item","exit"]},
    ])
    .then(function(ans){
        if (ans.q1==="exit"){
            process.exit()
        } else{
            buy()
        }
  

    })
    }

    //run the init function
    init()

function buy (){
inquirer.prompt([{name:"q2",
type:"input",
message:"Please enter the 'id' of the item you want to purchase"
},
])
    .then(function(ans){


        db.query('SELECT * FROM products',function(err,results,fields){
            if (err) throw err;

            for (i=0;i<results.length;i++){
            if (ans!== results[i].id){
                console.log("No such item for purchase! Please check the id again")

            

        }

        }

    })

function stock(q){
inquirer.prompt([{name:"q3",
type:"input",
message:"how many of this items do you wanna buy?"}])
}



    
    db.end()
  




})}