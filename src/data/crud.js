import { addDoc, collection, getDocs, updateDoc, deleteDoc } from "firebase/firestore/lite"
import { db } from "./fire"


const collectionName = "RollingSummerProducts"
const productCollectionRef = collection(db, collectionName)

async function getProducts() {
    const productCollection = productCollectionRef
    const collectionSnapshot = await getDocs(productCollection)
    const productList = collectionSnapshot.docs.map(doc => withKey(doc))
    return productList
}

function withKey(doc) {
	let id = doc.data()
	id.key = doc.id  
	return id
}
async function addProduct(product) {
	await addDoc(productCollectionRef, employee)
}

async function deleteProduct(key) {
    try {
        console.log("key", key);
        const documentRef = doc(productCollectionRef, key)
        console.log("deletedProd: ", documentRef);
        await deleteDoc(documentRef)

    }catch {
        console.log("Gick inte");
    }
}

async function editProduct(key, updatedProduct) {

	const documentRef = doc(productCollectionRef, key)

	
	await updateDoc(documentRef, updatedProduct)
}
export { getProducts, addProduct, deleteProduct, editProduct }