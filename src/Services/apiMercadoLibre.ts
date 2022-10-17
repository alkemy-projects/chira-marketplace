export const bringProductsByCategories = id => {
	return fetch(
		'https://api.mercadolibre.com/sites/MLA/search?category=' + id
	).then(res => res.json())
}

export const getProductById = id => {
	return fetch(`https://api.mercadolibre.com/items/${id}`).then(res =>
		res.json()
	)
}
