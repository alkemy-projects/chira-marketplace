import { initializeApp } from 'firebase/app'

const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: 'chira-e-commerce.firebaseapp.com',
	projectId: 'chira-e-commerce',
	storageBucket: 'chira-e-commerce.appspot.com',
	messagingSenderId: '1057326651291',
	appId: '1:1057326651291:web:2807825c5621e2d5a2b33e',
}

const app = initializeApp(firebaseConfig)
export default app
