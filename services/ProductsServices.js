const PRODUCTS = [
	{
		id: 1,
		name: "Bolão 1 - Mega da Virada",
		price: 300,
		image: require("../assets/product_images/PROD_51440_aposta_mega_sena.jpg"),
		description: "Jogo do bolão 1 da mega sena da virada, barato, seguro e rápido!"
	},
	{
		id: 2,
		name: "Bolão 20 - Mega da Virada",
		price: 100,
		image: require("../assets/product_images/PROD_51440_aposta_mega_sena.jpg"),
		description: "Jogo do bolão 20 da mega sena da virada, barato, seguro e rápido!"
	},
	{
		id: 3,
		name: "Bolão 32 - Mega da Virada",
		price: 200,
		image: require("../assets/product_images/PROD_51440_aposta_mega_sena.jpg"),
		description: "Jogo do bolão 32 da mega sena da virada, barato, seguro e rápido!"
	}
]

export function getProducts() {
	return PRODUCTS;
}

export function getProduct(id) {
	return PRODUCTS.find((product) => product.id == id);
}