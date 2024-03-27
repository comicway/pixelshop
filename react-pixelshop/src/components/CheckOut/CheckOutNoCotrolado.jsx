import { object } from "prop-types"

function CheckOutNoControlado() {
    const submit = (e) => {
        e.preventDefault()
        const data = Array.from(new FormData(e.target))
        console.log(Object.fromEntries(data))
    }
    return (
        <form className="needs-validation" noValidate="" onSubmit={submit}>
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
                                    value={nombre}
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
                                    required=""
                                    name='apellido'
                                    value={apellido}
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
                                    name='email'
                                    value={email}
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
                                    name='address'
                                    value={address}
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
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="region" className="form-label">
                                    Región
                                </label>
                                    <select className="form-select" id="region" required="">
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
                                <select className="form-select" id="comuna" required="">
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
                                    value={nombretarjeta}
                                />
                                <small className="text-body-secondary">
                                    El nombre impreso sobre la tarjeta
                                </small>
                                <div className="invalid-feedback">Este campo es requerido</div>
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
                                    value={numerotarjeta}
                                />
                                <div className="invalid-feedback">Este campo es requerido</div>
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
                                    name='expiration'
                                    value={expiration}
                                />
                                <div className="invalid-feedback">Este campo es requerido</div>
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
                                    value={cvv}
                                />
                                <div className="invalid-feedback">Este campo es requerido</div>
                            </div>
                        </div>
                        <hr className="my-4" />
                        <a>
                            <button className="w-100 btn btn-primary btn-lg" type="submit">
                                REALIZAR EL PEDIDO
                            </button>
                        </a>  
                    </form>
    )
}

export default CheckOutNoControlado