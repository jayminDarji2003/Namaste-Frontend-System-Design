import React, { useState } from "react";
import { LANG_DATA } from "./langConstant";

const App = () => {
  const [lang, setLang] = useState("en");
  const data = LANG_DATA[lang];

  return (
    <div>
      <h1>Multi Language Support App</h1>

      <div className="select_container">
        <p>Select Language : </p>
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="gu">Gujarati</option>
        </select>
      </div>

      <div className="container">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default App;
