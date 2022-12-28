import React, {useEffect, useState} from "react";
import {View, Text, FlatList, StyleSheet, Alert, Button, TouchableOpacity, Image} from "react-native";
import { getProducts } from "../services/ProductsServices";
import { Product } from "../components/Product";
import {cart, pushCart, retrieveCart} from "../services/Cart.js";


export function ProductsList({ route, navigation }) {
	const { vendedor, catalogo } = route.params;
	function renderProduct({item: product}) {
		return (
			<Product
				{...product}
				onPress={() => {
					
				}}
			/>
		)
	}


	const [products, setProducts] = useState([]);
	const [carrinho, setCarrinho] = useState([]);

	const trazerProdutos = async () => {
		if(!products.length) {
			try {
				const response = await fetch('https://lukbuk.com.br/omie/php/api.php?acao=trazerProdutosCatalogo&id=' + catalogo);
				const json = await response.json();
				setProducts(json);
			  } catch (error) {
				console.error(error);
			  } finally {
				//setLoading(false);
			  }
		}
	}
 
	useEffect(() => {
		trazerProdutos().then(() => {
			retrieveCart().then((res) => {
				setCarrinho(res)
			});
		});
	})

	navigation.setOptions({
		headerRight: () => {
			if(!carrinho) {
				return (
					<TouchableOpacity 
					style={styles.cartIcon}
					onPress={() => navigation.navigate("Carrinho de Compras")}
					>
					<View>
					
					<Text><Image source={require('../assets/icons/shopping-cart.png')}  style={styles.img}/> {"(0)"}</Text>
					</View>
				</TouchableOpacity>
				)

			} else {
				let len = carrinho.length;
				return (
					<TouchableOpacity 
					style={styles.cartIcon}
					onPress={() => navigation.navigate("Carrinho de Compras")}
					>
					<View>
					
					<Text><Image source={require('../assets/icons/shopping-cart.png')}  style={styles.img}/> {"("+len+")"}</Text>
					</View>
				</TouchableOpacity>
				)

			}
		

	},
	});

	return (
		<View>
			<FlatList
				style={styles.productsList}
				contentContainerStyle={styles.productsListContainer}
				keyExtractor={(item) => item.id.toString()}
				data={products}
				renderItem={renderProduct}
			/>
		</View>
		
	) 
}

const styles = StyleSheet.create({
	productList: {
		backgroundColor: "#eeeeee"
	},
	cartIcon: {
		backgroundColor:"#fff",
		color:"#000"
	},
	img: {
		width:15,
		height:15
	},
	productsListContainer: {
		backgroundColor: "#eeeeee",
		paddingVertical: 8, 
		marginHorizontal: 8
	}
})

/* 
Exemplo de icone no header:
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import ShoppingCartScreen from './ShoppingCartScreen';

const ShoppingCartButton = props => {
  return (
    <HeaderButtons HeaderButtonComponent={Ionicons}>
      <Item
        title="Cart"
        iconName="ios-cart"
        onPress={() => props.navigation.navigate('ShoppingCart')}
      />
    </HeaderButtons>
  );
};

const AppNavigator = createStackNavigator(
  {
    ShoppingCart: ShoppingCartScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerRight: () => <ShoppingCartButton navigation={navigation} />,
    }),
  },
);

export default createAppContainer(AppNavigator);

*/