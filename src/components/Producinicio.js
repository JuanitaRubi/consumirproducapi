import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Producinicio(){
    const [dataProducto, setDataProducto]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3500/api/mostrarProductos")//url de productos
        .then((respuesta)=>{
            console.log(respuesta);
            setDataProducto(respuesta.data);
        })
        .catch((err)=>{
            console.log("Error al recuperar del api" +err);
        });
    },[]);

    const listaProductos=dataProducto.map((producto)=>{
        var editar="/editar/"+producto.id;
        var borrar="/borrar/"+producto.id;
        var foto="http://localhost:3500/images/"+producto.foto;
        return(
            <tr className="aling-middle">
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.producto}</td>
                <td><img src={foto} width="100px" alt={`foto de ${producto.nombre}`} /></td>
                <td>
                    <Link to={editar}>Editar</Link>
                    <Link to={borrar}>Borrar</Link>
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
                    <th>Producto</th>
                    <th>Foto</th>
                </tr>
            </thead>
            <tbody>
                {listaProductos}
            </tbody>
        </table>
    );

}