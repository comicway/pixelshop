const CheckOut = () => { 
    return (
        <>
        <div className='container'>
            <div className="row g-5">
                <div className="col-md-5 col-lg-4 order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-primary">Total del carrito</span>
                        <span className="badge bg-primary rounded-pill">5{/*itemsTotal*/}</span>
                    </h4>
                    <ul className="list-group mb-3">
                        <li className="list-group-item d-flex justify-content-between lh-sm">
                            <div>
                                  <h6 className="my-0">Subtotal: </h6>
                                  <small className="text-body-secondary">Subtotal de los productos</small>
                            </div>
                            <span className="text-body-secondary">$1243</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
                            <div className="text-success">
                                <h6 className="my-0">Envío</h6>
                                <small className="text-body-secondary">Los costes de envío se calculan al finalizar la compra.</small>
                            </div>
                            <span className="text-success">$0</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total:</span>
                            <strong>3214</strong>
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
                    <form className="needs-validation" noValidate="">
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="nombree" className="form-label">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nombre"
                                    placeholder=""
                                    defaultValue=""
                                    required=""
                                />
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
                                    defaultValue=""
                                    required=""
                                />
                                <div className="invalid-feedback">Su apellido es requerido</div>
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
                                />
                                <div className="invalid-feedback">
                                    Porfavor coloca en email valido
                                </div>
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
                                />
                                <div className="invalid-feedback">
                                   Por favor coloca una dirección para poder hacer el envío
                                </div>
                            </div>
                            <div className="col-12">
                                <label htmlFor="address2" className="form-label">
                                    Departamento o casa <span className="text-body-secondary">(Optional)</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address2"
                                    placeholder="Número"
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="region" className="form-label">
                                    Región
                                </label>
                                <select className="form-select" id="country" required="">
                                    <option value="">Elige...</option>
                                    <option>Región Metropolitana</option>
                                    <option>Valparaíso</option>
                                </select>
                                <div className="invalid-feedback">Por favor selecciona una región</div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="comuna" className="form-label">
                                    Comuna
                                </label>
                                <select className="form-select" id="state" required="">
                                    <option value="">Elige...</option>
                                    <option>Santiago</option>
                                    <option>Ñuñoa</option>
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
                                    name="paymentMethod"
                                    type="radio"
                                    className="form-check-input"
                                    defaultChecked=""
                                    required=""
                                />
                                <label className="form-check-label" htmlFor="credit">
                                    Tarjeta de crédito
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    id="debit"
                                    name="paymentMethod"
                                    type="radio"
                                    className="form-check-input"
                                    required=""
                                />
                                <label className="form-check-label" htmlFor="debit">
                                    Tarjeta de débito
                                </label>
                            </div>
                        </div>
                        <div className="row gy-3">
                            <div className="col-md-6">
                                <label htmlFor="cc-name" className="form-label">
                                    Nombre en la tarjeta
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cc-name"
                                    placeholder=""
                                    required=""
                                />
                                <small className="text-body-secondary">
                                    El nombre impreso sobre la tarjeta
                                </small>
                                <div className="invalid-feedback">Este campo es requerido</div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="cc-number" className="form-label">
                                    Número de la tarjeta
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cc-number"
                                    placeholder=""
                                    required=""
                                />
                                <div className="invalid-feedback">Este campo es requerido</div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="cc-expiration" className="form-label">
                                    Fecha de vencimiento
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cc-expiration"
                                    placeholder=""
                                    required=""
                                />
                                <div className="invalid-feedback">Este campo es requerido</div>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="cc-cvv" className="form-label">
                                    CVV
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cc-cvv"
                                    placeholder=""
                                    required=""
                                />
                                <div className="invalid-feedback">Este campo es requerido</div>
                            </div>
                        </div>
                        <hr className="my-4" />
                        <button className="w-100 btn btn-primary btn-lg" type="submit">
                            REALIZAR EL PEDIDO
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
    )
}

export default CheckOut