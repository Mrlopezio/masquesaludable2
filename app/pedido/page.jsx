"use client";
// import Link from "next/link";
import React, { useState } from "react";
import styles from "./form.module.scss";

const FORMSPARK_ACTION_URL = "https://submit-form.com/19ToP4iWl";

const form_fields = ["name", "surname", "email", "password", "country", "phone", "id", "address", "city", "town", "postalcode"]


const Home = (props) => {
    console.log("props", props);
    const [mailBody, setMailBody] = useState();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formSending, setFormSending] = useState(false);

    const checkInputs = (input, value) => {
        let updatedMailBody = { ...mailBody };
        switch (input) {
            case "name":
                console.log("age checks...", value);
                updatedMailBody.nombre = value;
                break;
            case "surname":
                console.log("gender checks...", value);
                updatedMailBody.apellido = value;
                break;
            case "email":
                console.log("email checks...", value);
                updatedMailBody.email = value;
                break;
            case "password":
                console.log("telefono checks...", value);
                updatedMailBody.contrasena = value;
                break;
            case "tel":
                console.log("pais checks...", value);
                updatedMailBody.telefono = value;
                break;
            case "id":
                console.log("enfermedad checks...", value);
                updatedMailBody.identificacion = value;
                break;
            case "country":
                console.log("sintomas checks...", value);
                updatedMailBody.pais = value;
                break;
            case "address":
                console.log("medicins checks...", value);
                updatedMailBody.direccion = value;
                break;
            case "town":
                console.log("smokes checks...", value);
                updatedMailBody.ciudad = value;
                break;
            case "postalcode":
                console.log("alcohol checks...", value);
                updatedMailBody.codigopostal = value;
                break;
        }
        setMailBody(updatedMailBody);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setFormSending(true);

        await fetch(FORMSPARK_ACTION_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                mailBody,
            }),
        });
        // alert("Form submitted");
        setFormSending(false);
        setFormSubmitted(true);
    };
    return (
        <div className={styles["contact"]}>
            <h2 style={{ color: "#3333b2" }}>Más Que Saludable</h2>
            <h2>Formulario</h2>
            <p>Formulario de pedido.</p>
            {!formSubmitted && !formSending && (
                // <form action="https://submit-form.com/19ToP4iWl">
                <form onSubmit={onSubmit}>
                    <div className={styles["contact-form"]}>
                        <div className={styles["contact-form-row"]}>
                            <div className={styles["contact-form-item"]}>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder=" "
                                    name="name"
                                    required
                                    autoComplete="name"
                                    onChange={(e) => checkInputs(e.target.id, e.target.value)}
                                />
                                <label htmlFor="name">Nombre *</label>
                            </div>

                            <div className={styles["contact-form-item"]}>
                                <input
                                    type="text"
                                    id="surname"
                                    placeholder=" "
                                    name="apellido"
                                    required
                                    autoComplete="surname"
                                    onChange={(e) => checkInputs(e.target.id, e.target.value)}
                                />
                                <label htmlFor="surname">Apellidos *</label>
                            </div>
                            <div className={styles["contact-form-item"]}>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder=" "
                                    name="email"
                                    required
                                    autoComplete="email"
                                    onChange={(e) => checkInputs(e.target.id, e.target.value)}
                                />
                                <label htmlFor="email">Correo electrónico(si tiene)</label>
                            </div>

                            <div className={styles["contact-form-row"]}>
                                <div className={styles["contact-form-item"]}>
                                    <input
                                        type="password"
                                        id="password"
                                        placeholder=" "
                                        name="contraseña"
                                        required
                                        autoComplete="password"
                                        onChange={(e) => checkInputs(e.target.id, e.target.value)}
                                    />
                                    <label htmlFor="password">Contraseña *</label>
                                </div>
                            </div>

                            <div className={styles["contact-form-item"]}>
                                <input
                                    type="tel"
                                    id="tel"
                                    placeholder=" "
                                    name="telefono"
                                    required
                                    autoComplete="tel"
                                    onChange={(e) => checkInputs(e.target.id, e.target.value)}
                                />
                                <label htmlFor="telefono">Número de móvil *</label>
                            </div>
                        </div>
                        <div className={styles["contact-form-row"]}>
                            <div className={styles["contact-form-item"]}>
                                <input
                                    type="id"
                                    id="id"
                                    placeholder=" "
                                    name="id"
                                    required
                                    autoComplete="id"
                                    onChange={(e) => checkInputs(e.target.id, e.target.value)}
                                />
                                <label htmlFor="id">Número identificación(Cedula / DNI) * (contacto via Whatsapp)</label>
                            </div>

                            <div className={styles["contact-form-row"]}>
                                <div className={styles["contact-form-item"]}>
                                    <input
                                        type="text"
                                        id="country"
                                        placeholder=" "
                                        name="pais"
                                        required
                                        autoComplete="country"
                                        onChange={(e) => checkInputs(e.target.id, e.target.value)}
                                    />
                                    <label htmlFor="country">País *</label>
                                </div>
                            </div>
                        </div>
                        <div className={styles["contact-form-row"]}>
                            <div className={styles["contact-form-item"]}>
                                <textarea
                                    // type="text"
                                    id="address"
                                    placeholder=" "
                                    name="direccion"
                                    required
                                    autoComplete="address"
                                    onChange={(e) => checkInputs(e.target.id, e.target.value)}
                                />
                                <label htmlFor="address">Dirección completa * (Incluye todos los datos necesarios)</label>
                            </div>
                        </div>

                        <div className={styles["contact-form-item"]}>
                            <input
                                type="text"
                                id="town"
                                autoComplete="town"
                                name="Ciudad"
                                placeholder=" "
                                required
                                onChange={(e) => checkInputs(e.target.id, e.target.value)}
                            ></input>
                            <label htmlFor="town">Ciudad/Provincia/Departamento *</label>
                        </div>
                        <div className={styles["contact-form-item"]}>
                            <input
                                id="postalcode"
                                autoComplete="postalcode"
                                name="codigo postal"
                                placeholder=" "
                                required
                                onChange={(e) => checkInputs(e.target.id, e.target.value)}
                            ></input>
                            <label htmlFor="postalcode">Código Postal(Si lo sabe)</label>
                        </div>
                        <div className={styles["contact-form-item"]}>
                            <button className={styles["submit-button"]} type="submit">
                                <p className="button-text">Enviar...</p>
                            </button>
                        </div>
                    </div>
                </form>
            )}
            {formSending && (
                <div
                    className="formSending"
                    style={{
                        textAlign: "center",
                        backgroundColor: "gray",
                        padding: "1rem",
                        borderRadius: "0.5rem",
                        color: "white",
                    }}
                >
                    <span className="loader">Enviando...</span>
                </div>
            )}
            {formSubmitted && (
                <div className="formSubmitted">
                    <h4>Gracias por tu mensaje, te responderemos a la brevedad.</h4>
                </div>
            )}
            <h5>* Campos obligatorios</h5>
            <p style={{ fontSize: "0.8rem", color: "gray" }}>
                Los datos serán tratados de manera confidencial y no compartidos con
                terceras personas ni compañias.
            </p>
        </div>
    );
};

export default Home;