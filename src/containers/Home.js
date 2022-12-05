import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getFirestore, getDoc, doc } from "firebase/firestore/lite";

import { app } from "../App";

const Home = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const db = getFirestore(app);

  useEffect(() => {
    getData();
  });

  async function getData() {
    try {
      const docRef = doc(db, "UrlMap", id);
      const UrlMapDoc = await getDoc(docRef);
      if (UrlMapDoc.exists()) {
        window.location.replace(UrlMapDoc.data().url);
      } else {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
      navigate('/');
    }
  }
};

export default Home;
