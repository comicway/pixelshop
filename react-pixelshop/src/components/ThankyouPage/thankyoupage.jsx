import React, { useState, useEffect } from "react"
import { db } from "../../Firebase/config"
import { collection, getDocs, query, where, orderBy } from "firebase/firestore"
import Spinner from "../Spinner/spinner"
import { Link } from "react-router-dom"

const ThankyouPage = () => {

  const [checkoutData, setCheckoutData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const comprasCollection = collection(db, "compras")
        const hoy = new Date();
        const querySnapshot = await getDocs(query(comprasCollection, where("fecha", "<", hoy), orderBy("fecha", "desc")))
        if (!querySnapshot.empty) {
          const ultimaCompra = querySnapshot.docs[0]
          const checkoutData = { id: ultimaCompra.id, ...ultimaCompra.data() }
          setCheckoutData([checkoutData])
        } else {
          console.log('No se encontraron documentos')
        }
        setLoading(false)
      } catch (error) {
        console.error("Error al obtener los datos de compra:", error)
      }
    };

    fetchData()
  }, [])

  return loading ? (
    <Spinner />
  ) : (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="h-100 p-5 bg-body-tertiary border rounded-3">
                <h2>Gracias por tu compra!</h2>
                <ul>
                  {checkoutData.map((item) => (
                      <div key={item.id}>
                        <h4>Sus datos de envío</h4>
                        <p>Numero de orden: {item.id}</p>
                        <p>Nombre: {item.nombre} {item.apellido}</p>
                        <p>Email: {item.email}</p>
                        <p>Dirección: {item.address} {item.addresstwo} {item.comuna} {item.region}</p>
                        <h5>Total: {item.totalprice}</h5>
                      </div>
                    ))}
                </ul>
                <Link to="/shop">
                  <button className="btn btn-outline-secondary" type="button">Regresar</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
  )
};

export default ThankyouPage