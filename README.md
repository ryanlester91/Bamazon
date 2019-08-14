# bamazon
A simple working Amazon-like storefront application using MySQL and node.js. 

###Customer Portal

Browse and choose from the list of products we have on sale in the customer portal. Enter the ID number of the product along with the quantity to make the purchase.  Bamazon is limited in what it has in stock, so a transaction that goes over our current inventory will cancel.

To run the customer interface please follow the steps below:

	git clone git@github.com:ryanlester91/Bamazon.git
	cd Bamazon
	npm install
	node bamazonCustomer.js


The Manager portal gives you access to more store tasks:  add a product to inventory, remove an existing product, view products that are low in stock, and view products for sale.

	node bamazonManager.js

When you select a particuar task on the select prompt, the request function will open another prompt to clarify what you want to do:

* Add New Product:  You will input one-by-one the info you want displayed (ID, product name, department, price, and how much is in stock).  What you input will then show up in the table.

* Remove Existing Product: If you are pulling or discontinuing a product, all you will need to do is type in the ID number of the item. Upon pressing Enter, the table will update to erase that product and its data.

* Restocking a Product:  (under construction)  When you are running low on a product, access the restock request and input the ID number of that particular item and input how much you want to add to the existing stock. The restock function will then add current and new arrival together in your table.

* View Inventory: Firing up the manager portal node will automatically display the full table.  Upon completion of a manager task, the table will reappear with the updates. 


It is our pleasure to serve the customer!

Make sure you save and require the MySQL and Inquirer npm packages in your homework files--your app will need them for data input and storage.
