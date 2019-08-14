var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

//var keys = require("./keys.js");

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
      inquirerUpdates();
  });
}

function inquirerUpdates() {
    inquirer.prompt([{
      name:"action",
		type: "list",
		message: "Choose an option below to manage current inventory:",
		choices: ["Restock Inventory", "Add New Product", "Remove An Existing Product"]
	}]).then(function(answers){
		switch(answers.action){
			case 'Restock Inventory':
				restockRequest();
				break;
			case 'Add New Product':
				addRequest();
				break;
			case 'Remove An Existing Product':
				removeRequest();
				break;		
		}
	});
};

/*function restockRequest() {
inquirer.prompt([{

  name: "ID",
  type: "input",
  message: "Enter the item number of the item you wish to restock."
}, {
  name: "Quantity",
  type: "input",
  message: "How many items would you like to add to the existing inventory?"
}

]).then(function(answers) {
  var quantityAdded = answers.Quantity;
  var IDProduct = answers.ID;
  restockInventory(IDProduct, quantityAdded);
});
};

function restockInventory(ID, stock_quantity){
	connection.query('SELECT * FROM Products WHERE item_id = '+ID, function(err,res){
		if(err){console.log(err)};
		connection.query('UPDATE Products SET stock_quantity = stock_quantity + ' +stock_quantity+ 'WHERE item_id =' +item_id);

		displayInventory(res);
	});
};*/

function addRequest(){
  inquirer.prompt([{
    name: "ID",
    type: "input",
    message: "What will the ID number of the item be?"
  }, {

    name: "Name",
    type: "input",
    message: "What is the name of the product you are adding to the inventory?"
  },{

    name: "Department",
    type: "input",
    message: "Which department will the product be located?"
  },
	{
		name:"Price",
		type:"input",
		message:"What is the price for item?"
	},
	{
		name:"Quantity",
		type:"input",
		message:"What is the quantity you would like to add?"
	},

  ]).then(function(answers) {
    var id = answers.ID
    var name = answers.Name;
		var category = answers.Department;
		var price = answers.Price;
		var quantity = answers.Quantity;
		buildNewItem(id,name,category,price,quantity); 
	});
  };

  function buildNewItem(id,name,category,price,quantity){
  	connection.query('INSERT INTO products (item_id,product_name,department_name,price,stock_quantity) VALUES("' + id + '","' + name + '","' + category + '",' + price + ',' + quantity +  ')');
  	showProducts();
  };

  function removeRequest(){
    inquirer.prompt([{

      name: "ID" ,
      type: "input" ,
      message: "Enter the item number of the item you want to delete from inventory."
    }]).then(function(answer) {

      var id = answer.ID;
  		removeInventory(id); 
    })
  };
  

  function removeInventory(id){
  	connection.query('DELETE FROM Products WHERE item_id = ' + id);
  	showProducts();
  };

  

showProducts();
