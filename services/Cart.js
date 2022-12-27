import AsyncStorage from '@react-native-async-storage/async-storage';


/*
To store shopping cart information locally on the device in a React Native app, you can use the AsyncStorage module. 
AsyncStorage is a simple, asynchronous, persistent, key-value storage system that is global to the app. It should be used instead of LocalStorage.

Here is an example of a function that stores the shopping cart information in AsyncStorage:
*/

	function initCart() {
		if(!AsyncStorage.getItem('cart')) {
			AsyncStorage.setItem('cart', "[]");
		} 
	}

	export async function storeCart(cartObj) {
		initCart();
		try {
		  // Store the cart in AsyncStorage
		  await AsyncStorage.setItem('cart', JSON.stringify(cartObj));
		} catch (error) {
		  // Log the error to the console
		  console.error(error);
		}
	  };
	  
	  export async function pushCart(prod) {
		initCart();
		let cart = await AsyncStorage.getItem('cart');
		cart = JSON.parse(cart);
		cart.push(prod);
		storeCart(cart);
	  };

	  /*
	  This function takes the shopping cart as an argument and stores it in AsyncStorage using the setItem method. 
	  The setItem method takes two arguments: the key for the item, and the value for the item. In this example, the key is 'cart' and the value is the shopping cart, which is converted to a JSON string using JSON.stringify.
	  
	  To retrieve the shopping cart from AsyncStorage, you can use the getItem method:
	  */
	  
	  export async function retrieveCart() {
		initCart();
		let cart = await AsyncStorage.getItem('cart');
		cart = JSON.parse(cart);
		return cart;
	  };
	  
	  /*
	  This function retrieves the shopping cart from AsyncStorage using the getItem method and returns it as a JavaScript object by parsing the JSON string using JSON.parse.
	  
	  I hope this helps! Let me know if you have any questions.
	  */

