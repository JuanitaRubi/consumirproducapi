import { useState } from "react";

export function Nvocontador() {
  const luz = ["apagado", "encendido al 25%", "encendido al 50%", "encendido al 75%", "encendido al 100%",];

  const [intensidad, setIntensidad] = useState("apagado");

  function aumentarIntensidad() {
    const intensidadarreglo = luz.indexOf(intensidad);

    if (intensidadarreglo < luz.length - 1) {
      setIntensidad(luz[intensidadarreglo + 1]);
    } else {
      setIntensidad("apagado");
    }
  }

  function disminuirIntensidad() {
    const intensidadarreglo = luz.indexOf(intensidad);

    if (intensidadarreglo > 0) {
      setIntensidad(luz[intensidadarreglo - 1]);
    } else {
      setIntensidad("encendido al 100%");
    }
  }

  function resetearIntensidad() {
    setIntensidad("apagado");
  }

  return (
    <>
      <div>{intensidad}</div>
      <button onClick={aumentarIntensidad}>Aumentar</button>
      <button onClick={disminuirIntensidad}>Disminuir</button>
      <button onClick={resetearIntensidad}>Resetear</button>
    </>
  );
}
