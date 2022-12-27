import React from "react";
import {Text, Image, View, Button, StyleSheet, TouchableOpacity, Alert} from "react-native";
import {cart, pushCart, retrieveCart} from "../services/Cart.js";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Product({id, nome, preco, path, onPress}) {
	const navigation = useNavigation();



	return (
		<TouchableOpacity
		style={styles.card}
		onPress={onPress}
		>
			{/*<Image style={styles.image} source={image}/>*/}
			<Image style={styles.image} source={{uri: "https://lukbuk.com.br/omie/usr/" + path}}/>
			<View style={styles.infoContainer}>
				<Text style={styles.name}>{nome}</Text>
				<Text style={styles.price}>R${preco}</Text>

			</View>
			<Button
  				title="Adicionar ao Carrinho"
				onPress={() => {
					pushCart({id: id, nome: nome, preco: preco});
				}}
			/>
			
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: "white",
		borderRadius: 16,
		alignItems: "center",
		justifyContent: "center",
		marginTop: "4%"
	},
	image: {
		width: "100%",
		aspectRatio: 1,
	},
	infoContainer: {
		padding: 16
	},
	name: {
		fontSize: 22,
		color: "#000",
		fontWeight:"bold"
	},
	price: {
		fontSize: 16,
		color: "#000",
		fontWeight: "600",
		marginBottom: 8
	}
})

/*
				//Alert.alert(
					//	"Alert Title",
					//	"My Alert Msg",
					//	[
					//	  {
					//		text: "Cancel",
					//		onPress: () => console.log("Cancel Pressed"),
					//		style: "cancel"
					//	  },
					//	  { text: "OK", onPress: () => console.log("OK Pressed") }
					//	]
					// );

*/