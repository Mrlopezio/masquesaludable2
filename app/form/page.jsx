"use client";
// import Link from "next/link";
import React, { useState } from "react";
import styles from "./form.module.scss";

const FORMSPARK_ACTION_URL = "https://submit-form.com/19ToP4iWl";

const page = (props) => {
  console.log("props", props);
  const [mailBody, setMailBody] = useState();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSending, setFormSending] = useState(false);

  const checkInputs = (input, value) => {
    let updatedMailBody = { ...mailBody };
    switch (input) {
      case "age":
        console.log("age checks...", value);
        updatedMailBody.edad = value;
        break;
      case "gender":
        console.log("gender checks...", value);
        updatedMailBody.sexo = value;
        break;
      case "email":
        console.log("email checks...", value);
        updatedMailBody.email = value;
        break;
      case "tel":
        console.log("telefono checks...", value);
        updatedMailBody.telefono = value;
        break;
      case "country":
        console.log("pais checks...", value);
        updatedMailBody.pais = value;
        break;
      case "disease":
        console.log("enfermedad checks...", value);
        updatedMailBody.enfermedad = value;
        break;
      case "simptoms":
        console.log("sintomas checks...", value);
        updatedMailBody.sintomas = value;
        break;
      case "medicins":
        console.log("medicins checks...", value);
        updatedMailBody.medicinas = value;
        break;
      case "smokes":
        console.log("smokes checks...", value);
        updatedMailBody.fumador = value;
        break;
      case "alcohol":
        console.log("alcohol checks...", value);
        updatedMailBody.alcohol = value;
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
      <p>Formulario de contacto.</p>
      {!formSubmitted && !formSending && (
        // <form action="https://submit-form.com/19ToP4iWl">
        <form onSubmit={onSubmit}>
          <div className={styles["contact-form"]}>
            <div className={styles["contact-form-row"]}>
              {/* <div className={styles["contact-form-item"]}>
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
              </div> */}

              <div className={styles["contact-form-row"]}>
                <div className={styles["contact-form-item"]}>
                  <input
                    type="number"
                    id="age"
                    placeholder=" "
                    name="edad"
                    required
                    autoComplete="age"
                    onChange={(e) => checkInputs(e.target.id, e.target.value)}
                  />
                  <label htmlFor="age">Edad *</label>
                </div>
                <div className={styles["contact-form-item"]}>
                  <input
                    type="text"
                    id="gender"
                    placeholder=" "
                    name="sexo"
                    required
                    autoComplete="gender"
                    onChange={(e) => checkInputs(e.target.id, e.target.value)}
                  />
                  <label htmlFor="gender">Sexo *</label>
                </div>
              </div>

              <div className={styles["contact-form-item"]}>
                <input
                  type="email"
                  id="email"
                  placeholder=" "
                  name="email"
                  // required
                  autoComplete="email"
                  onChange={(e) => checkInputs(e.target.id, e.target.value)}
                />
                <label htmlFor="email">Correo electrónico</label>
              </div>
            </div>
            <div className={styles["contact-form-row"]}>
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
                <label htmlFor="tel">Teléfono * (contacto via Whatsapp)</label>
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
                <input
                  type="text"
                  id="disease"
                  placeholder=" "
                  name="enfermedad"
                  required
                  autoComplete="disease"
                  onChange={(e) => checkInputs(e.target.id, e.target.value)}
                />
                <label htmlFor="disease">Enfermedad *</label>
              </div>
            </div>

            <div className={styles["contact-form-item"]}>
              <textarea
                id="simptoms"
                autoComplete="textarea"
                name="sintomas"
                placeholder=" "
                required
                onChange={(e) => checkInputs(e.target.id, e.target.value)}
              ></textarea>
              <label htmlFor="simptoms">Sintomas y molestias *</label>
            </div>
            <div className={styles["contact-form-item"]}>
              <textarea
                id="medicins"
                autoComplete="textarea"
                name="medicinas"
                placeholder=" "
                required
                onChange={(e) => checkInputs(e.target.id, e.target.value)}
              ></textarea>
              <label htmlFor="medicins">
                ¿Estás tomando alguna medicación? *
              </label>
            </div>

            <div className={styles["contact-form-item"]}>
              <label htmlFor="smokes"></label>
              <select id="smokes" name="fumador" required>
                <option value=""> ¿Eres fumador? *</option>
                <option value="si">Si</option>
                <option value="no">No</option>
              </select>
              {"  "}

              <label htmlFor="alcohol"></label>
              <select id="alcohol" name="bebedor" required>
                <option value=""> ¿Bebes alcohol de forma habitual? *</option>
                <option value="si">Si</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className={styles["contact-form-item"]}></div>

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

export default page;
