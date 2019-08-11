var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "L8n%)72Jrg^FM!a_",
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
      inquirerUpdates();
  });
}

function inquirerUpdates() {
    inquirer.prompt([{
        
    }])
}