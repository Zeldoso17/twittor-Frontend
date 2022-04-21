/* eslint-disable import/no-anonymous-default-export */
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import User from "../pages/User";


export default [
    {
        path: "/:id", // Esta es la ruta de la pagina de perfil de usuario
        exact: true,
        page: User
    },
    {
        path: "/", // Esta es la ruta raiz de la aplicacion
        exact: true,
        page: Home
    },
    {
        path: "*", // Esta es la ruta de error 404
        page: Error404
    },
];