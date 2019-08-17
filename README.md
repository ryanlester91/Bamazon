# bamazon
A simple working Amazon-like storefront application using MySQL and node.js. 

###Customer Portal

![1_inventory-table](https://user-images.githubusercontent.com/50120534/63212738-e213e600-c0d6-11e9-813c-10ae6036fec1.png)

Browse and choose from the list of products we have on sale in the customer portal. Enter the ID number of the product along with the quantity to make the purchase.  Bamazon is limited in what it has in stock, so a transaction that goes over our current inventory will cancel.

To run the customer interface please follow the steps below:

	git clone git@github.com:ryanlester91/Bamazon.git
	cd Bamazon
	npm install
	node bamazonCustomer.js


Enter Item ID:  ![2_enterItemID](https://user-images.githubusercontent.com/50120534/63212687-50a47400-c0d6-11e9-84c5-a19f37cbb7ea.png)

How many? ![3_enterHowManyItems](https://user-images.githubusercontent.com/50120534/63214486-c7496d80-c0e6-11e9-93cc-f6bef4835f67.png)

The Manager portal gives you access to more store tasks:  add a product to inventory, remove an existing product, view products that are low in stock, and view products for sale.

	node bamazonManager.js

When you select a particuar task on the select prompt, the request function will open another prompt to clarify what you want to do:

* Add New Product:  You will input one-by-one the info you want displayed (ID, product name, department, price, and how much is in stock).  What you input will then show up in the table.

* Remove Existing Product: If you are pulling or discontinuing a product, all you will need to do is type in the ID number of the item. Upon pressing Enter, the table will update to erase that product and its data.

* Restocking a Product:  (under construction)  When you are running low on a product, access the restock request and input the ID number of that particular item and input how much you want to add to the existing stock. The restock function will then add current and new arrival together in your table.

* View Inventory: Firing up the manager portal node will automatically display the full table.  Upon completion of a manager task, the table will reappear with the updates. 


It is our pleasure to serve the customer!

Make sure you save and require the MySQL and Inquirer npm packages in your homework files--your app will need them for data input and storage.
