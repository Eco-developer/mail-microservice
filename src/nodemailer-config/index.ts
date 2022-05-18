import { createTransport } from "nodemailer";
import 'dotenv/config';


const options:any = {
    host: `${process.env.GMAIL_SERVER}`,
    auth: {
        type: 'OAuth2',
        user: `${process.env.GMAIL_USER}`,
        pass: `${process.env.GMAIL_PASSWORD}`,
        clientId: `${process.env.GAMIL_CLIENT_ID}`,
        clientSecret: `${process.env.GMAIL_CLIENT_SECRETE}`,
        refreshToken: `${process.env.GMAIL_CLIENT_REFRESH_TOKEN}`
    }
}

export const transporter = createTransport(options);