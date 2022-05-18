import { sendMail } from "../../controllers/index";

import { Router } from 'express';

export function sendRoutes(routes: Router) {
    //ruta para autenticar usuario
    routes.post('/send-email', sendMail);
}