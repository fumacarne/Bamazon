var mysql = require('mysql');
var inquirer = require('inquirer');
var product={};
var lente;
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
         stock()}
       
    
       }       )     }   )}
            
            

            // var value = (results[product-1].id)
            // console.log(value)
           

            // if(parseInt(product)===parseInt(value)){
            //     stock()
            // } else {
            //     console.log("Item not found")
               

            // }})

           
           
    //         for (i=0;i<results.length;i++){
    //         if (ans.q2>[i].id){
    //             console.log("No such item for purchase! Please check the id again");
    //             process.exit()
    //     }  else {
    //         stock()
    //     }
    // }})
    



function stock(){
inquirer.prompt([{name:"q3",
type:"input",
message:"how many of this items do you wanna buy?"}])

.then(function(ans){
    var st=ans.q3;
    db.query('UPDATE products SET stock ? WHERE id ?' ,{
        id:product,
        stock:parseInt(ans.q3),
        
    }

    
        
        ,function(err,results){
        if (err) throw err;

        console.log("Thanks for your purchase!" ,results)
        db.end()
    })})}


    
   
  



    
