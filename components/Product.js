import React from "react";
import {Text, Image, View, StyleSheet, TouchableOpacity} from "react-native";

export function Product({nome, preco, path, onPress}) {
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