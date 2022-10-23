import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CheckSession({ children }: { children: JSX.Element }) {
	const loggedUser = JSON.parse(localStorage.getItem('user') || 'null')
	const navigate = useNavigate()

	useEffect(() => {
		checkLoggedUser()
	}, [])

	const checkLoggedUser = () => {
		
		if (!loggedUser) {
			navigate('/login')
		}
	}

	return <>{children}</>
}
