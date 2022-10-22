import { Oval } from 'react-loader-spinner'

export default function LoaderSpinner() {
	const showTooLongTimeWaitingWarning = () => {
		setTimeout(() => {
			return (
				<p>
					¿Está tardando demasiado? Puede que haya un error con el servidor{' '}
					<p>Intenta de nuevo más tarde.</p>
				</p>
			)
		}, 10000)
	}

	return (
		<div className='loader-spinner'>
			<Oval
				height={40}
				width={40}
				color='#1e5128'
				wrapperStyle={{}}
				wrapperClass=''
				visible={true}
				ariaLabel='oval-loading'
				secondaryColor='#4e9f3d'
				strokeWidth={2}
				strokeWidthSecondary={2}
			/>
			<>{showTooLongTimeWaitingWarning()}</>
		</div>
	)
}
