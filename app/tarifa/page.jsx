import Link from "next/link";
import React from "react";
import prices from "../tarifa/tarifa.json";
import styles from "./prices.module.scss";
const page = (props) => {
  return (
    <div className={styles["prices"]}>
      <h2>Tarifa</h2>
      <p>Estos precios se han actualizado: </p>
      <p>
        en cualquier caso revisa la web de la tienda para asegurarte los precios
      </p>
      <Link href="https://immunotec.com/masquesaludable" target="_blank">
        Ir a la tienda...
      </Link>
      <div className={styles["prices-container"]}>
        <table className={styles["prices-container-table"]}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Link</th>
              <th>VP</th>
              <th>PVP</th>
              <th>PVCP</th>
              <th>PVCP + AE</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((p) => {
              return (
                <>
                  <tr>
                    <td>{p.name}</td>
                    <td>
                      <Link href={p.link} target="_blank">
                        Ver producto...
                      </Link>
                    </td>
                    <td>{p.vp}</td>
                    <td>{p.pvp}</td>
                    <td>{p.pvpcp}</td>
                    <td>{p.pvpcpae}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
