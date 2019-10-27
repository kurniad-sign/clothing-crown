import * as firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCRDMIGviP3H0Y7xXMFZYGhNoJAZhngM0g',
	authDomain: 'clothing-crown.firebaseapp.com',
	databaseURL: 'https://clothing-crown.firebaseio.com',
	projectId: 'clothing-crown',
	storageBucket: 'clothing-crown.appspot.com',
	messagingSenderId: '685304499563',
	appId: '1:685304499563:web:71907eb7b79087fd09d02e',
	measurementId: 'G-2SY623470Q'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
