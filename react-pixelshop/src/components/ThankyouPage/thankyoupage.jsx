import React, { useState, useEffect } from "react";
import { db } from "../../Firebase/config";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import Spinner from "../Spinner/spinner"

const ThankyouPage = () => {

  const [checkoutData, setCheckoutData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const comprasCollection = collection(db, "compras")
        const hoy = new Date();
        const querySnapshot = await getDocs(query(comprasCollection, where("fecha", "<", hoy), orderBy("fecha", "desc")));
        if (!querySnapshot.empty) {
          const ultimaCompra = querySnapshot.docs[0];
          const checkoutData = { id: ultimaCompra.id, ...ultimaCompra.data() };
          setCheckoutData([checkoutData]); 
        } else {
          console.log('No se encontraron documentos');
        }
        setLoading(false)
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
          checkoutData.map((item) => (
            <li key={item.id}>
              <p>Name: {item.nombre}</p>
              <p>Email: {item.email}</p>
              <p>Address: {item.address}</p>
            </li>
          ))}
      </ul>
    </div>
  )
};

export default ThankyouPage;