import {
	getAuth,
	GoogleAuthProvider,
	signInWithRedirect,
	getRedirectResult,
	signOut,
} from 'firebase/auth'
import { useEffect } from 'react'
import { provider } from '../authGoogleProvider'

export const useGoogleSignIn = () => {
	const auth = getAuth()

	useEffect(() => {
		getRedirectResult(auth)
			.then((result: any) => {
				const credential = GoogleAuthProvider.credentialFromResult(result)
				const token = credential?.accessToken
				const user = result?.user
				console.log(token, user)
			})
			.catch(error => {
				const errorCode = error.code
				const errorMessage = error.message
				const email = error?.customData?.email
				const credential = GoogleAuthProvider.credentialFromError(error)
				console.log(errorCode, errorMessage, email, credential)
			})
	}, [])

	const closeSession = () => {
		localStorage.removeItem('user')
		signOut(auth)
	}
	const signInWithGoogle = () => signInWithRedirect(auth, provider)

	return { signInWithGoogle, closeSession }
}
