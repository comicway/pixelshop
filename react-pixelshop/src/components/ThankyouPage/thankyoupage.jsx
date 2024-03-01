import React, { useState, useEffect } from "react";
import { db } from "../../Firebase/config";
import { collection, getDocs } from "firebase/firestore";
import Spinner from "../Spinner/spinner"

const ThankyouPage = () => {

  const [checkoutData, setCheckoutData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const comprasCollection = collection(db, "compras")
        const querySnapshot = await getDocs(comprasCollection);
        const comprasLista = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCheckoutData(comprasLista);
        setLoading(false)
        console.log(comprasLista)
      } catch (error) {
        console.error("Error al obtener los datos de compra:", error);
      }
    };

    fetchData();
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <div>
      <h1>Gracias por tu compra!</h1>
      <ul>
        {
          checkoutData[0] &&
          <li key={checkoutData[0].id}>
            <p>Name: {checkoutData[0].nombre}</p>
            <p>Email: {checkoutData[0].email}</p>
            <p>Address: {checkoutData[0].address}</p>
          </li>
        }
      </ul>
    </div>
  )
};

export default ThankyouPage;