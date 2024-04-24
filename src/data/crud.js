import { addDoc, collection, getDocs } from "firebase/firestore/lite"
import { db } from "./fire"

const collectionName = "RollingSummerProducts"

async function getProducts() {
    const productCollection = collection(db, collectionName)
    const collectionSnapshot = await getDocs(productCollection)
    const productList = collectionSnapshot.docs.map(doc => withKey(doc))
    return productList
}

function withKey(doc) {
	let id = doc.data()
	id.key = doc.id  
	return id
}

export { getProducts }