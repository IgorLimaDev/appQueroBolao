import React, {useEffect, useState} from "react";
import {View, Text, TextInput, Input, Button, FlatList, StyleSheet} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import {ProductsList} from '../screens/ProductsList';


export function LoginPage() {
		const [codigoCatalogo, setCodigoCatalogo] = useState('');
		const [codigoVendedor, setCodigoVendedor] = useState('');
		const navigation = useNavigation();

		return (
			<View>
			<TextInput
  				placeholder='Código do Catálogo'
				onChangeText={txt1 => setCodigoCatalogo(txt1)}
			/>
			
			<TextInput
  				placeholder='Código do Vendedor'
				onChangeText={txt2 => setCodigoVendedor(txt2)}
			/>

			<Button
  				title="Entrar no Catálogo"
				onPress={() => {
					navigation.navigate("Jogos do Catálogo", {catalogo: codigoCatalogo, vendedor: codigoVendedor})
				}}
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