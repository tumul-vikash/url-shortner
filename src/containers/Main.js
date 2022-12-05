import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFirestore, addDoc, doc, collection } from "firebase/firestore/lite";

import { app } from "../App";

const Main = () => {
  let navigate = useNavigate();

  const [Message, setMessage] = useState("");
  const [Url, setUrl] = useState("");

  const db = getFirestore(app);

  async function onClick() {
    const response = await addDoc(collection(db, "UrlMap"), {
      url: Url,
    });
    setMessage(`https://url-shortner-42cfd.web.app/${response.id}`);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter url"
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={() => onClick()}>Short it</button>
      {Message !== "" ? <h5>generated url is {Message}</h5> : null}
    </div>
  );
};

export default Main;
