import { useEffect, useState } from 'react'

export const useHome = () => {
	const [phones, setPhones] = useState<any[]>([])

	useEffect(() => {
		if (phones.length >= 1) return
		bringPhones()
	}, [])

	const bringPhones = async () => {
		const data = await fetch(
			'https://api.mercadolibre.com/sites/MLA/search?category=MLA1055'
		)
		const resp = await data.json()
		setPhones(resp.results)
	}

	return { phones }
}
