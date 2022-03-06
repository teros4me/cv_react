import React, { Component } from "react";
import cvsida from "./mittcv.json";
const Cv = () => {
  return (
    <div>
      <h1>CV - Curriculum Vitae</h1>
      <h3>Utbildningar</h3>
      <ul>
        {cvsida.map((record, u) => (
          <li key={u}>
            <li>{record.utb6}</li>
            <li>{record.utb5}</li>
            <li>{record.utb4}</li>
            <li>{record.utb3}</li>
            <li>{record.utb2}</li>
            <li>{record.utb1}</li>
          </li>
        ))}
      </ul>
      <h3>Arbetslivserfarenhet</h3>
      <ul>
        {cvsida.map((record, a) => (
          <li key={a}>
            <li>{record.arb9}</li>
            <li>{record.arb8}</li>
            <li>{record.arb7}</li>
            <li>{record.arb6}</li>
            <li>{record.arb5}</li>
            <li>{record.arb4}</li>
            <li>{record.arb3}</li>
            <li>{record.arb2}</li>
            <li>{record.arb1}</li>
          </li>
        ))}
      </ul>
      <h3>Datorkunskaper</h3>
      <ul>
        {cvsida.map((record, d) => (
          <li key={d}>
            <li>{record.it21}</li>
            <li>{record.it20}</li>
            <li>{record.it19}</li>
            <li>{record.it18}</li>
            <li>{record.it17}</li>
            <li>{record.it16}</li>
            <li>{record.it15}</li>
            <li>{record.it14}</li>
            <li>{record.it13}</li>
            <li>{record.it12}</li>
            <li>{record.it11}</li>
            <li>{record.it10}</li>
            <li>{record.it9}</li>
            <li>{record.it8}</li>
            <li>{record.it7}</li>
            <li>{record.it6}</li>
            <li>{record.it5}</li>
            <li>{record.it4}</li>
            <li>{record.it3}</li>
            <li>{record.it2}</li>
            <li>{record.it1}</li>
          </li>
        ))}
      </ul>
      <h3>Språk</h3>
      <ul>
        {cvsida.map((record, s) => (
          <li key={s}>
            <li>{record.spr2}</li>
            <li>{record.spr1}</li>
          </li>
        ))}
      </ul>
      <h3>Övrigt</h3>
      <ul>
        {cvsida.map((record, o) => (
          <li key={o}>
            <li>{record.ovr3}</li>
            <li>{record.ovr2}</li>
            <li>{record.ovr1}</li>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cv;