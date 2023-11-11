import React from 'react'
import { Navbar } from '../components/Navbar'

export const Error = () => {
    return (
        <>
            <Navbar />
            <h1>Entraste a una ruta que no existe</h1>
            <img src="https://img.freepik.com/vector-gratis/pagina-error-404-no-encontrada_24908-59516.jpg" alt="error" />
        </>
    )
}
