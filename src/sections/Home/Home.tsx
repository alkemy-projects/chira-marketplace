import { useEffect, useState } from 'react'
import Category from '../../components/Category/Category'
import PaymentMethod from '../../components/PaymentMethod/PaymentMethod'
import SliderCarrousel from '../../components/SliderCarrousel/SliderCarrousel'
import { useHome } from './useHome'
import { bringProductsByCategories } from '../../Services/apiMercadoLibre'
import { OfertCard } from '../../components/OfertCard/OfertCard'
import Header from '../../components/Header/Header'

export default function Home() {
	const [tv, setTV] = useState<any[]>([])
	const [phone, setPhone] = useState<any[]>([])
	const { phones, categories } = useHome()

	useEffect(() => {
		const bringTV = async () => {
			const tvprod = await bringProductsByCategories("MLA1002")
			setTV(tvprod.results)
		}
		const bringPhones = async () => {
			const phoneprod = await bringProductsByCategories("MLA1055")
			setPhone(phoneprod.results)
		}


		bringPhones()
		bringTV()
	}, [])
	return (
		<>
		<Header/>
		<div className='home-cont'>
			
			<div className='PaymentMethods'>
				<PaymentMethod
					title='Tarjetas de debito y credito'
					description='Promociones bancarias!'
					url='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAApVBMVEX///8AgAAAdwAAfgAAewB9vX3Y5djh7+E4mjgAfACv1q/X6tceiB76/fro9OhpqWmXwJdKmEre8N5no2dTnVONxI0AgwD2+/bB3cHt9u1gpmClzqXQ6NBHnkcAhgBIm0gykTJiq2K/17+RwJFQpFBrr2ux07F6s3omkSZyr3IShxLa79q93r0zkDNkqWSDuoOZyJmYzJihx6GGt4Z4uHgpiylaq1rLnlQjAAAEeUlEQVR4nO2diXraOhBGbUatbRy7DRe8gGNCWAKUlIQs7/9o1yRpmy+xRX0tXS35zwOYOZ+QZGuZcRwAAAAAAAAAAAAAAAD4L6R57JlMnKc8vby4mi8XvskslvOrIm/wi1fXPrGAzCZgwXqz8uoEV+NtQK4NUJAMJ9GH/rc8s0PvBTqbxe964JpsEqyg9Y+3gsU2UB2RcCjZ/REcXFjWgM/QTfF7EP1po2ClOHwdUtPbRHUssti/TP/ho51NWDXiNntuwr19o8wvguXx9SYuVcchk7AyvGWqo5AIe4icyLe1Fx6hMnJSmwVdt+c5RU91EFJhfWdiczesDL84I+sNv8DQbGBoPqcNiekOfz4/ZcjKxf673tw/lVwDriEF+3CQR3qTeuHcbW5HriErC+76sTZE4bpZgmMY+APVof818VOTBceQ/FB13C3wmtbSOIbJSnXUrdht2xrSOD79WI3IN/WN2GyYzFXH3JJJfSM2Gz7uTj9UK4qb2kZsNKSpSePMkXzY0vDcnKnihWhsu6HzDwxhqD0whKH+wBCG+gPDD4a1J8N0pqWhe3PXN4zzloZ0Zhptv/FtAYbmA0PzgaH5wNB8YGg+MDQfGJoPDM0HhuYDQ/OBofnA0HxgaD4wNB8Ymg8MzQeG5sPZx++ZRst9fJruQrMYtD7nbft5ms9wJgqG2gFDGOoPDGGoPzCEof7AEIb6A0MY6g8MYag/gg3TPLsbdecu46fBV2aYZsuyJyRRVy95ypqy4Cs0DK8TcVsBQbAUk2REoGExFbvVwfxML8NQsGD1Y5ciFIUZphLSm9NMwMgtzFBKenM66GM4GMrI/i0idZoow35D1rCOBFfaGH6Xk8CdXXee+QUZ5hs5hrToPO8LMvTq8011N1x3ToAnyHBgvWH8TdK/1NfFML2XczjlpUyDDobOQU49E3b4UJ9JlWFDesKO0FafGT+6liDoBpvuH4nC3kuLSwlv3iI+LsR9PfXFGya3nXuh0C/gW9EVMehBgKDQVYxJIrJIG7l3AvwEr0R5s8tEULlC93Hxg/NLqgyr8Wa0GQ+7M97shazRSDCsEFGvVGS+aax5w1B/YAhD/YEhDPUHhjDUH+sN07bVH6bF6YdqRdzyZpd71lcdckuy+hUyzg3Le9Uht6Rhb5pzw9KwQjNNm2K8ml1zEQtg/xuHegvuPWCjinZlZfuqZC6VmSmtGDUK8u9ykzv3jHD0Do2Cp26rs4tDVnixznhhdmgsDXja0CXaTsffdObndE28bem/yDhAFOjMqf2Fz5xTwRZgaD7sM1SP71tuOHI80XvWetHbOWmpOgipsNyJnuScVNMD8qs368zmjsiO51hiX86BSh2g7TGRUDSx1zAYPR+u9s5t7Yl087rYtNpa2orJ5PULPtqrDkUOtPl9ASC1csYIpm+O60Qz+/6n7y84PFjWFymZvb+jMjl37XEkd1pzZHUwvyBmhWRAl/e1W2dRuFqWTHWCx+6Us0PYeIsq976aj5cbsY4NAAAAAAAAAAAAAADQjX8BzngCBWAHk5EAAAAASUVORK5CYII='
				/>
				<PaymentMethod
					title='Efectivo'
					description='Desde cualquier punto de pago'
					url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIVTvdGgsp9xuWSufhcmC2inQ2LD_TNrxEloiDfLKti9mFX4Cew8z9zkSkvKBXhXmPL4Y&usqp=CAU'
				/>
				<PaymentMethod
					title='Mercado Pago'
					description='Paga en cualquier lugar'
					url='https://play-lh.googleusercontent.com/4VWplTzMiteBZVEyTTSyp_mnG5zSN0pgyW_svdJhRsLvAMapuKoFs_af2Qr8jN04ZGKI'
				/>
			</div>
			<div className='carrcont'>
				<div className='carr'>
					<SliderCarrousel
						products={phone}
						title='Teléfonos en oferta'
					/>
					<SliderCarrousel
						products={tv}
						title='Televisores'
					/>
				</div>

			</div>
			<h1 className='ofert-Title'>Ofertas dia de la madre</h1>
			<div className='oferts'>	
				<OfertCard ofertText='Para tu mama tecnologica' image='https://images.samsung.com/is/image/samsung/ar-galaxy-tab-a-t515-sm-t510nzklaro-frontblack-169407070?$650_519_PNG$' />
				<OfertCard ofertText='Para que tu mama se luzca' image='https://www.chanel.com/images/w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_1920/coco-mademoiselle-eau-de-parfum-spray-3-4fl-oz--packshot-default-116520-8848376659998.jpg' />
			</div>
			<section className='categories'>
				<h2 className='categories__title'>Categorías</h2>
				<ul className='categories-list'>
					{categories.map(category => (
						<Category
							key={category.id}
							{...category}
						/>
					))}
				</ul>
			</section>
		</div>
		</>
	)
}
