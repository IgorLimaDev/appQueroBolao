import React from "react";
import {StyleSheet, View, Text, Button} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductsList } from "./screens/ProductsList.js";
import { LoginPage } from "./screens/LoginPage.js";
import { ShoppingCartSummary } from "./screens/ShoppingCartSummary.js";

const Stack = createNativeStackNavigator();


function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Entrar - Quero Bolão" component={LoginPage}></Stack.Screen>
				<Stack.Screen name="Jogos do Catálogo" component={ProductsList}></Stack.Screen>
				<Stack.Screen name="Carrinho de Compras"  component={ShoppingCartSummary}></Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	Container: {
		textAlign: "center",
		alignItems: "center",
		justifyContent: "center",
		flex: 1
	},
	text: {
		fontSize: 30,
		fontWeight: "bold"
	}

});

export default App;