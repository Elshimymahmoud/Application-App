import { db } from "./config";
import { collection, getDocs, doc, setDoc } from "@firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Products from "./../data/destinations.json";
async function getProducts() {
  const productsCol = collection(db, "products");
  const querySnapshot = await getDocs(productsCol);
  const productsList = querySnapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  console.log("entered getproducts");

  if (productsList.length !== 0) {
    console.log("entered if statement");
    await AsyncStorage.setItem("Products", JSON.stringify(productsList));
    return productsList;
  } else {
    Products.map(async (product) => {
      await setDoc(doc(productsCol, product.id), product);
    });
    getProducts();
  }
}
export { getProducts };
