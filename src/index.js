import React from "react";
import ReactDOM  from "react-dom/client";
import { Contador } from "./components/Contador";
import { Texto } from "./components/Texto";
import { Nvocontador } from "./components/Nvocontador";

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <Contador />
        <Texto />
        <Nvocontador />
    </>
)