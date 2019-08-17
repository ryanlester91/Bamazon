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

Transaction approved! 
![4_TransactionApproved](https://user-images.githubusercontent.com/50120534/63214505-f233c180-c0e6-11e9-914f-f3234eadee63.png)

When you input an ID that does not exist:
![5_When-ID-Does-Not-Exist](https://user-images.githubusercontent.com/50120534/63214508-f5c74880-c0e6-11e9-8edc-cd1d62a582c2.png)

The Manager portal gives you access to more store tasks:  add a product to inventory, remove an existing product, view products that are low in stock, and view products for sale.

	node bamazonManager.js

![6_manager-prompt-choices](https://user-images.githubusercontent.com/50120534/63214530-3626c680-c0e7-11e9-929b-794ad276a540.png)


When you select a particuar task on the select prompt, the request function will open another prompt to clarify what you want to do:

* Add New Product:  You will input one-by-one the info you want displayed (ID, product name, department, price, and how much is in stock).  What you input will then show up in the table.

![7_Manager_answering-AddNewProduct-prompt onebyone](https://user-images.githubusercontent.com/50120534/63214533-39ba4d80-c0e7-11e9-82f1-e5b3323a36c8.png)
![8-manager_addnewproduct-select](https://user-images.githubusercontent.com/50120534/63214535-3cb53e00-c0e7-11e9-85b8-e3569f3a08c9.png)

* Remove Existing Product: If you are pulling or discontinuing a product, all you will need to do is type in the ID number of the item. Upon pressing Enter, the table will update to erase that product and its data.

![9-manager_removeProduct-select](https://user-images.githubusercontent.com/50120534/63214537-3f179800-c0e7-11e9-880f-9659e3561f2c.png)

* Restocking a Product:  (under construction)  When you are running low on a product, access the restock request and input the ID number of that particular item and input how much you want to add to the existing stock. The restock function will then add current and new arrival together in your table.

* View Inventory: Firing up the manager portal node will automatically display the full table.  Upon completion of a manager task, the table will reappear with the updates. 


It is our pleasure to serve the customer!

Make sure you save and require the MySQL and Inquirer npm packages in your homework files--your app will need them for data input and storage.
