import React from "react";
import Navigation from "./navigation/navigation";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCuglzPDc8Cb9L154ZLCJx8uCjWSQVH7FM",
  authDomain: "url-shortner-42cfd.firebaseapp.com",
  projectId: "url-shortner-42cfd",
  storageBucket: "url-shortner-42cfd.appspot.com",
  messagingSenderId: "1059161721205",
  appId: "1:1059161721205:web:b416871c0bb6598af96b3c",
  measurementId: "G-JSG24XPP8L"
};

export const app = initializeApp(firebaseConfig);

const App = () => {
  return <Navigation />;
};

export default App;
