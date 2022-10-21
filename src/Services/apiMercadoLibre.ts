export const bringProductsByCategories = id =>
	fetch('https://api.mercadolibre.com/sites/MLA/search?category=' + id).then(
		res => (!res.ok ? res.ok : res.json())
	)

export const getProductById = id =>
	fetch(`https://api.mercadolibre.com/items/${id}`).then(res =>
		!res.ok ? res.ok : res.json()
	)

export const getResultsByQuery = query =>
	fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`).then(res =>
		!res.ok ? res.ok : res.json()
	)
