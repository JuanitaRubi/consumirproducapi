import axios from "axios";
import { useEffect, useState } from "react";
import { URL_API, URL_IMAGES } from "../config/rutas";

export function Producinicio(){
    const [dataProducto, setDataProducto]=useState([]);

    useEffect(()=>{
        axios.get(URL_API+"mostrarProductos")//url de productos
        .then((respuesta)=>{
            console.log(respuesta);
            setDataProducto(respuesta.data);
        })
        .catch((err)=>{
            console.log("Error al recuperar de API" +err);
        });
    },[]);

    const listaProductos=dataProducto.map((producto)=>{
        var editar="/EditarProducto/"+producto.id;
        var borrar="/BorrarProducto/"+producto.id;
        var foto=URL_IMAGES+producto.foto;
        return(
            <tr key={producto.id}className="aling-middle">
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.precio}</td>
                <td><img src={foto} width="100px" alt={`foto de ${producto.nombre}`} /></td>
                <td>
                    <a href={editar}>Editar</a> / <a href={borrar}>Borrar</a>
                </td>
            </tr>
        );
    });
    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Foto</th>
                </tr>
            </thead>
            <tbody>
                {listaProductos}
            </tbody>
        </table>
    );

}