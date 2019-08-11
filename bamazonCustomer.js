var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

//Require and configure dotenv.
require('dotenv').config()

var fs = require("fs");
var keys = require("./keys.js");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: keys.password,
    database: "bamazon"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as id: " +connection.threadId);
  });

  var showProducts = function() {
    var query = "Select * FROM products";
    connection.query(query, function(err, res) {
      if (err) throw err;
      var displayTable = new Table ({
        head: ["Item ID", "Product", "Department", "Price", "Stock Quantity"],
        colWidths: [10, 40, 25, 10, 17]
      });
      for(var i = 0; i < res.length; i++) {
        displayTable.push(
          [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
        );
      }
      console.log(displayTable.toString());
      purchaseProduct();
  });
}

  //input item_ID and then input how many units of item you wish to buy
  function purchaseProduct() {
      inquirer
        .prompt([{
            name: "ID",
            type: "input",
            message: "Please enter the Item ID of what you want to purchase?",
            filter:Number
        },{
            name: "Quantity",
            type: "input",
            message: "How many items would you like to purchase?",
            filter:Number
        

      }]).then(function(answers) {
          var quantityChosen = answers.Quantity;
          var IDrequested = answers.ID;
          purchaseOrder(IDrequested, quantityChosen);

});
  };
  var purchaseOrder = function(ID, amtNeeded) {
    connection.query('Select * FROM products WHERE item_id = ' + ID, function(err, res) {
      //if(err){console.log(err)};
		if(amtNeeded <= res[0].stock_quantity){
      var totalCost = res[0].price * amtNeeded;
      console.log("--------------------------------------");
      console.log("Good news! Your order is in stock!");
      console.log("--------------------------------------");
      console.log("Your total cost for " + amtNeeded + "" + res[0].product_name + " is " + totalCost + ". Thank you!");

      connection.query("UPDATE products SET stock_quantity = stock_quantity - " + amtNeeded + "WHERE item_id = ?");
    
    }else if (amtNeeded > res[0].stock_quantity) {
      console.log("Insufficient quantity. Sorry, we do not have enough of " + res[0].product_name + " at this time to complete your order.");
    };
      console.log("Please modify your order");
    showProducts();
  });

}; 

showProducts();