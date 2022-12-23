import React, {useEffect, useState} from "react";
import {View, Text, FlatList, StyleSheet} from "react-native";
import { getProducts } from "../services/ProductsServices";
import { Product } from "../components/Product";

export function ProductsList({ route, navigation }) {
	const { vendedor, catalogo } = route.params;
	function renderProduct({item: product}) {
		return (
			<Product
				{...product}
				onPress={() => {
					navigation.navigate("ProductDetails", {productId: product.Id})
				}}
			/>
		)
	}

	const [products, setProducts] = useState([]);

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
		trazerProdutos();
	})

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
	productsListContainer: {
		backgroundColor: "#eeeeee",
		paddingVertical: 8,
		marginHorizontal: 8
	}
})