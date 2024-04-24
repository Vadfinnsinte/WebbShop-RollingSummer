import { addDoc, collection, getDocs } from "firebase/firestore/lite"
import { db } from "./fire"

const collectionName = "RollingSummerProducts"

async function getProducts() {
    const productCollection = collection(db, collectionName)
    const collectionSnapshot = await getDocs(movieCollection)
    console.log("snapshot is: ", collectionSnapshot);
    const productList = collectionSnapshot.docs.map(doc => withKey(doc))
    return movieList
}

function withKey(doc) {
	let id = doc.data()
	id.key = doc.id  
	return id
}

export { getProducts }