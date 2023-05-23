import React, { useEffect } from "react";

export default function Project() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return 
        <>
            <h1>Hola, soy la página de <strong>un proyecto</strong></h1>
            <h1>Hola, soy la página de <strong>un proyecto</strong></h1>
            <h1>Hola, soy la página de <strong>un proyecto</strong></h1>
        </>
}