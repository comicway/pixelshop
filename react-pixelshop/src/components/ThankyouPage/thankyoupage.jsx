import React, { useEffect, useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { firebaseConfig } from '../../Firebase/config'

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const ThankyouPage = () => {
  const [checkoutData, setCheckoutData] = useState([])

  useEffect(() => {
    const fetchCheckoutData = async () => {
      const checkoutRef = collection(db, 'compras')
      const snapshot = await getDocs(checkoutRef)
      const data = snapshot.docs.map((doc) => doc.data())
      setCheckoutData(data)
    }

    fetchCheckoutData()
  }, [])

  return (
    <div>
      <h1>Gracias por tu compra!</h1>
      <ul>
        {checkoutData.map((item) => (
          <li key={item.id}>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Address: {item.address}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ThankyouPage