import React from 'react'
import { useState } from 'react'
import { useCartContext } from "../Context/cartContext"
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore'
import CartItemCheckOut from '../CartItemDetail/cartitemcheckout'
import { Link } from "react-router-dom"
import { Toaster, toast } from 'react-hot-toast'


const CheckOutSincronico = () => { 
    const { total, itemsTotal, cart, clearCart } = useCartContext()

    const cartItemsElements = cart.map((item, key) => (
        <CartItemCheckOut key={`item-list-${key}`} item={item} />
    ))

    const [nombre, setNombre] = useState({ value: "", error: false });
    const [apellido, setApellido] = useState({ value: "", error: false });
    const [email, setEmail] = useState({ value: "", error: false });
    const [address, setAddress] = useState('')
    const [addresstwo, setAddressTwo] = useState('')
    const [region, setRegion] = useState('')
    const [comuna, setComuna] = useState('')
    const [paymentMethod, setPaymentMethod] = useState({ value: "", error: false });
    const [nombretarjeta, setNombreTarjeta] = useState({ value: "", error: false });
    const [numerotarjeta, setNumeroTarjeta] = useState({ value: "", error: false });
    const [expiration, setExpiration] = useState({ value: "", error: false });
    const [cvv, setNumeroCvv] = useState({ value: "", error: false });
    const [products, setProducts] = useState(cart)
    const [totalprice, setTotalPrice] = useState(total)

    const handleSubmit = async (e) => {

        e.preventDefault()
    
        const db = getFirestore()

        try {
            const docRef = await addDoc(collection(db, "compras"), {
                nombre,
                apellido,
                email,
                address,
                addresstwo,
                region,
                comuna,
                paymentMethod,
                nombretarjeta,
                numerotarjeta,
                expiration,
                cvv,
                products,
                totalprice,
                fecha: Timestamp.now(),
            })
    
            console.log('Compra realizada correctamente')
        } catch (e) {
            console.error("Error al crear la compra: ", e)
        }
    }

    // EXPRESIONES REGULARES
    const textOnlyRegexp = new RegExp(/^[A-Za-z ]+$/)
    const numberOnlyRegexp = new RegExp(/^[0-9]+$/)
    const emailRegexp = new RegExp(/^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/)

    // PARA CAMPO NOMBRE
    const handleBlurNombre = () => {
        const hasError = !textOnlyRegexp.test(nombre.value)
        setNombre(prevState => ({ ...prevState, hasError }))
    }
    const handleChangeNombre = (e) => {
        const newValue = e.target.value
        setNombre(prevState => ({ ...prevState, value: newValue }))
    }
    // PARA CAMPO APELLIDO
    const handleBlurApellido = () => {
        const hasError = !textOnlyRegexp.test(apellido.value)
        setApellido(prevState => ({ ...prevState, hasError }))
    }
    const handleChangeApellido = (e) => {
        const newValue = e.target.value
        setApellido(prevState => ({ ...prevState, value: newValue }))
    }
    // PARA CAMPO EMAIL
    const handleBlurEmail = () => {
        const hasError = !emailRegexp.test(email.value)
        setEmail(prevState => ({ ...prevState, hasError }))
    }
    const handleChangeEmail = (e) => {
        const newValue = e.target.value
        setEmail(prevState => ({ ...prevState, value: newValue }))
    }
    // PARA CAMPO NOMBRE DE LA TARJETA
    const handleBlurNombreTarjeta = () => {
        const hasError = !textOnlyRegexp.test(nombretarjeta.value)
        setNombreTarjeta(prevState => ({ ...prevState, hasError }))
    }
    const handleChangeNombreTarjeta = (e) => {
        const newValue = e.target.value
        setNombreTarjeta(prevState => ({ ...prevState, value: newValue }))
    }
    // PARA CAMPO NUMERO DE LA TARJETA
    const handleBlurNumeroTarjeta = () => {
        const hasError = !numberOnlyRegexp.test(numerotarjeta.value)
        setNumeroTarjeta(prevState => ({ ...prevState, hasError }))
    }
    const handleChangeNumeroTarjeta = (e) => {
        const newValue = e.target.value
        setNumeroTarjeta(prevState => ({ ...prevState, value: newValue }))
    }
    // PARA CAMPO FECHA DE VENCIMIENTO
    const handleBlurExpiration = () => {
        const hasError = !numberOnlyRegexp.test(expiration.value)
        setExpiration(prevState => ({ ...prevState, hasError }))
    }
    const handleChangeExpiration = (e) => {
        const newValue = e.target.value
        setExpiration(prevState => ({ ...prevState, value: newValue }))
    }
    // PARA CAMPO CVV
    const handleBlurNumeroCvv = () => {
        const hasError = !numberOnlyRegexp.test(cvv.value)
        setNumeroCvv(prevState => ({ ...prevState, hasError }))
    }
    const handleChangeNumeroCvv = (e) => {
        const newValue = e.target.value
        setNumeroCvv(prevState => ({ ...prevState, value: newValue }))
    }

    return (
        <>
        <div className='container'>
            Este es el check out de validacion sincronica
            <div className="row g-5">
                <div className="col-md-5 col-lg-4 order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-primary">Total del carrito</span>
                        <span className="badge bg-primary rounded-pill">{itemsTotal}</span>
                    </h4>
                    <ul className="list-group mb-3">
                        {cartItemsElements}
                        <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
                            <div className="text-success">
                                <h6 className="my-0">Envío</h6>
                                <small className="text-body-secondary">Los costes de envío se calculan al finalizar la compra.</small>
                            </div>
                            <span className="text-success">$0</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total:</span>
                            <strong>{total}</strong>
                        </li>
                    </ul>
                </div>
                <div className="col-md-7 col-lg-8">
                    <ul className="list-group mb-3">
                      <li className="list-group-ite d-flex justify-content-between lh-sm">
                          <h4 className="">
                              <span className="text-primary">Tus datos de compra</span>
                          </h4>
                      </li>
                    </ul>
                    <form className="needs-validation" noValidate="" onSubmit={handleSubmit}>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="nombre" className="form-label">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nombre"
                                    placeholder=""
                                    required=""
                                    name="nombre"
                                    value={nombre.value}
                                    onChange={handleChangeNombre}
                                    onBlur={handleBlurNombre} 
                                />
                                {nombre.hasError && <p className="text-danger">Solo se permiten letras.</p>}
                                <div className="invalid-feedback">Su nombre es requerido</div>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="Apellido" className="form-label">
                                    Apellido
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="apellido"
                                    placeholder=""
                                    required=""
                                    value={apellido.value}
                                    onChange={handleChangeApellido}
                                    onBlur={handleBlurApellido} 
                                />
                                <div className="invalid-feedback">Su apellido es requerido</div>
                                {apellido.hasError && <p className="text-danger">Solo se permiten letras.</p>}
                            </div>
                            <div className="col-12">
                                <label htmlFor="email" className="form-label">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="su-email@mail.com"
                                    required=""
                                    name='email'
                                    value={email.value}
                                    onChange={handleChangeEmail}
                                    onBlur={handleBlurEmail} 
                                />
                                <div className="invalid-feedback">Porfavor coloca en email valido</div>
                                {email.hasError && <p className="text-danger">No has colcoado un correo válido.</p>}
                            </div>
                            <div className="col-12">
                                <label htmlFor="direccion" className="form-label">
                                    Su Dirección de envio
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    placeholder="Calle y número"
                                    required=""
                                    name='address'
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                                <div className="invalid-feedback">
                                   Por favor coloca una dirección para poder hacer el envío
                                </div>
                            </div>
                            <div className="col-12">
                                <label htmlFor="addresstwo" className="form-label">
                                    Departamento o casa <span className="text-body-secondary">(Optional)</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="addresstwo"
                                    placeholder="Número"
                                    name='addresstwo'
                                    value={addresstwo}
                                    onChange={(e) => setAddressTwo(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="region" className="form-label">
                                    Región
                                </label>
                                    <select className="form-select" id="region" required="" onChange={(e) => setRegion(e.target.value)}>
                                        <option value="">Elige...</option>
                                        <option value="Región Metropolitana">Región Metropolitana</option>
                                        <option value="Valparaíso">Valparaíso</option>
                                    </select>
                                <div className="invalid-feedback">Por favor selecciona una región</div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="comuna" className="form-label">
                                    Comuna
                                </label>
                                <select className="form-select" id="comuna" required="" onChange={(e) => setComuna(e.target.value)}>
                                    <option value="">Elige...</option>
                                    <option value="Santiago">Santiago</option>
                                    <option value="Ñuñoa">Ñuñoa</option>
                                </select>
                                <div className="invalid-feedback">Por favor selecciona una comuna</div>
                            </div>
                        </div>
                        <hr className="my-4" />
                        <h4 className="mb-3">Forma de pago</h4>
                        <div className="my-3">
                            <div className="form-check">
                                <input
                                    id="credit"
                                    type="radio"
                                    className="form-check-input"
                                    required=""
                                    name='paymentMethod'
                                    value='credit'
                                    checked={paymentMethod === 'credit'}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />
                                <label className="form-check-label" htmlFor="credit">
                                    Tarjeta de crédito
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    id="debit"
                                    type="radio"
                                    className="form-check-input"
                                    required=""
                                    name='paymentMethod'
                                    value='debit'
                                    checked={paymentMethod === 'debit'}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />
                                <label className="form-check-label" htmlFor="debit">
                                    Tarjeta de débito
                                </label>
                            </div>
                        </div>
                        <div className="row gy-3">
                            <div className="col-md-6">
                                <label htmlFor="nombretarjeta" className="form-label">
                                    Nombre en la tarjeta
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nombretarjeta"
                                    placeholder=""
                                    required=""
                                    name='nombretarjeta'
                                    value={nombretarjeta.value}
                                    onChange={handleChangeNombreTarjeta}
                                    onBlur={handleBlurNombreTarjeta} 
                                />
                                <small className="text-body-secondary">
                                    El nombre impreso sobre la tarjeta
                                </small>
                                <div className="invalid-feedback">Este campo es requerido</div>
                                {nombretarjeta.hasError && <p className="text-danger">Solo se permite texto</p>}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="numerotarjeta" className="form-label">
                                    Número de la tarjeta
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="numerotarjeta"
                                    placeholder=""
                                    required=""
                                    name='numerotarjeta'
                                    value={nombretarjeta.value}
                                    onChange={handleChangeNombreTarjeta}
                                    onBlur={handleBlurNombreTarjeta} 
                                />
                                <div className="invalid-feedback">Este campo es requerido</div>
                                {numerotarjeta.hasError && <p className="text-danger">Solo se permite números</p>}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="expiration" className="form-label">
                                    Fecha de vencimiento
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="expiration"
                                    placeholder=""
                                    required=""
                                    name="expiration"
                                    value={expiration.value}
                                    onChange={handleChangeExpiration}
                                    onBlur={handleBlurExpiration}
                                />
                                <div className="invalid-feedback">Este campo es requerido</div>
                                {expiration.hasError && <p className="text-danger">Solo se permite números</p>}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="cvv" className="form-label">
                                    CVV
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cvv"
                                    placeholder=""
                                    required=""
                                    name='cvv'
                                    value={cvv.value}
                                    onChange={handleChangeNumeroCvv}
                                    onBlur={handleBlurNumeroCvv}
                                />
                                <div className="invalid-feedback">Este campo es requerido</div>
                                {cvv.hasError && <p className="text-danger">Solo se permite números</p>}
                            </div>
                        </div>
                        <hr className="my-4" />
                        <a onClick={() => toast('Compra realizada con éxito')}>
                            <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={clearCart}>
                                REALIZAR EL PEDIDO
                            </button>
                        </a>  
                    </form>
                    <Link to="/thankyoupage">
                            <button className="btn btn-outline-secondary btn-lg">
                                VER PEDIDO
                            </button>
                    </Link>
                </div>
            </div>
        </div>
        <Toaster />
    </>
    )
}

export default CheckOutSincronico