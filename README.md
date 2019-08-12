# bamazon
A simple working Amazon-like storefront application using MySQL and node.js. 

###Customer Portal
Browse and choose from the list of products we have on sale in the customer portal. Enter the ID number of the product along with the quantity to make the purchase.  Bamazon is limited in what it has in stock, so a transaction that goes over our current inventory will cancel.

To run the customer interface please follow the steps below:

	git clone git@github.com:ryanlester91/Bamazon.git
	cd Bamazon
	npm install
	node bamazonCustomer.js


The Manager portal gives you access to more store tasks:  add a product to inventory, view products that are low in stock, and view products for sale.

    node bamazonManager.js

It is our pleasure to serve the customer!

Make sure you save and require the MySQL and Inquirer npm packages in your homework files--your app will need them for data input and storage.
