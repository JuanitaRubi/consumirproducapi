import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Error} from "./Error";
import { Inicio } from "./Inicio";
import { Menu } from "./Menu";
import { Producinicio } from "./Producinicio";
import { EditarUsuario } from "./Editar";
import { BorrarUsuario } from "./Borrar";
import { Nuevo } from "./Nuevo";
import { NuevoProducto } from "./NuevoProducto";
import { EditarProducto } from "./EditarProducto";
import { BorrarProducto } from "./BorrarProductos";

export function Rutas (){
    return(
        <>
        <Menu/>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error/>}></Route>
                <Route path="/" element={<Inicio/>}></Route>
                <Route path="/Nuevo" element={<Nuevo/>}></Route>
                <Route path="/Productos" element={<Producinicio/>}></Route>
                <Route path="/EditarUsuario/:id" element={<EditarUsuario/>}></Route>
                <Route path="/BorrarUsuario/:id" element={<BorrarUsuario/>}></Route>
                <Route path="/NuevoProducto" element={<NuevoProducto/>}></Route>
                <Route path="/EditarProducto/:id" element={<EditarProducto/>}></Route>
                <Route path="/BorrarProducto/:id" element={<BorrarProducto/>}></Route>

                

            </Routes>
        </BrowserRouter>

        </>
    );
}