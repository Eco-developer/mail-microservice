import axios from "axios";
import { MailInterface } from "../src/interfaces";
import 'dotenv/config';

const api = `${process.env.TEST_API}${process.env.API_VERSION}`;

export const sendMail = async (data: MailInterface) => {
    try {
        const response = await axios.post(
            `${api}/send-email`,
            data
        )   
        return response; 
    } catch (error:any) {
        return {
            data: null,
            error: error.response.data.error,
        }
    }
     
}
