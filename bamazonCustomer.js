var mysql = require('mysql');
var inquirer = require('inquirer');
var product={};
var lente;
var current_stock;
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
        lente=results.length;
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
        product=ans.q2;
        db.query('SELECT * FROM products WHERE ?',{
        id:ans.q2
        },
        
        function(err,results){
            if (err) throw err;
            if (ans.q2>lente) {console.log("No such item ");buy();}
            else {console.log("You have selected this product")
        console.log(results);
        current_stock= results[0].stock_quantity;

        if (current_stock<=0){console.log("no stock"); proccess.exit()}
        else{
         stock()}}
       
    
       }       )     }   )}
            
            

function stock(){
inquirer.prompt([{name:"q3",
type:"input",
message:"how many of this items do you wanna buy?"}])

.then(function(ans){
    var st=ans.q3;
    var dif = current_stock - parseInt(ans.q3);

    console.log(dif)
    db.query("UPDATE products SET ? WHERE ?",

       [ 
        {stock_quantity:dif},
        {id:product}
        

       ]
    
    
        
        ,function(err,results){
        if (err) throw err;

        console.log("Thanks for your purchase!")
        db.end()
    }
    )


}
)

}
   
  



    
