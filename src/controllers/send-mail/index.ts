import { Request, Response } from 'express';
import 'dotenv/config';
import { transporter } from '../../nodemailer-config';

export async function sendMail(req: Request, res: Response) {
    const { 
        body : {
            from,
            to,
            subject,
            contentHtml,
            contentText,
        }
    } = req;


    try {
        if (!from) {
            throw new Error("there is not a sender subject.");
        }

        if (!to) {
            throw new Error("there is not a reciver subject.");
        }

        if (!subject) {
            throw new Error("there is not a subject.");
        }

        if (!contentHtml) {
            throw new Error("there is not a html content.");
        }
        const info = await transporter.sendMail({
            from: `<${from}>`, // sender address
            to, // list of receivers
            subject, // Subject line
            text: contentText, // plain text body
            html: contentHtml, // html body
        });

        return res.status(200).send({messageId: info.messageId});
    } catch (err: any) {
        return res.status(400).send({error: err.message})
    }
}