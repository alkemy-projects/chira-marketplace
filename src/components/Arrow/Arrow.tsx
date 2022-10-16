export default function Arrow({
	className,
	onClick,
}: {
	className?: string
	onClick?: any
}) {
	return (
		<button
			className={className}
			style={{
				display: 'block',
				backgroundColor: '#4e9f3d',
				color: 'green',
				borderRadius: '30px',
				width: '40px',
				height: '40px',
				margin: '0px -15px 0px -15px',
			}}
			onClick={onClick}
		/>
	)
}
