import { expect } from "chai";
import { sendMail  } from './test-api';

describe("end to end sendMail test", () => {
    it("should return an error beacause from subject was not specify", async () => {
        const data = {
            to: "josesk8mqc@gmail.com", // list of receivers
            subject: "Test message end to end test", // Subject line
            contentText: "This is a test message.", // plain text body
            contentHtml: "<b>this is a test message.</b>", // html body
        }
      
        const response:any = await sendMail(data);
        expect(response).to.have.property("error")
        expect(response.error).to.be.equal("there is not a sender subject.");
    })

    it("should return an error beacause to subject was not specify", async () => {
        const data = {
            from: 'josesk8mqc@gmail.com',
            subject: "Test message end to end test", // Subject line
            contentText: "This is a test message.", // plain text body
            contentHtml: "<b>this is a test message.</b>", // html body
        }
      
        const response:any = await sendMail(data);
        expect(response).to.have.property("error")
        expect(response.error).to.be.equal("there is not a reciver subject.");
    })

    it("should return an error beacause the subject was not specify", async () => {
        const data = {
            from: 'josesk8mqc@gmail.com', // sender address
            to: "josesk8mqc@gmail.com",
            contentText: "This is a test message.", // plain text body
            contentHtml: "<b>this is a test message.</b>", // html body
        }
      
        const response:any = await sendMail(data);
        expect(response).to.have.property("error")
        expect(response.error).to.be.equal("there is not a subject.");
    })

    it("should return an error beacause contentHtml was not passed", async () => {
        const data = {
            from: 'josesk8mqc@gmail.com', // sender address
            to: "josesk8mqc@gmail.com",
            subject: "Test message end to end test",
            contentText: "This is a test message.", // plain text body
        }
      
        const response:any = await sendMail(data);
        expect(response).to.have.property("error")
        expect(response.error).to.be.equal("there is not a html content.");
    })

    it("should return the messageId of the message that has been sended", async () => {
        const data = {
            from: 'josesk8mqc@gmail.com', // sender address
            to: "josesk8mqc@gmail.com", // list of receivers
            subject: "Test message end to end test", // Subject line
            contentText: "This is a test message.", // plain text body
            contentHtml: "<b>this is a test message.</b>", // html body
        }
        const response = await sendMail(data);
        expect(response.data).to.have.property("messageId")
        expect(response.data.messageId).to.be.a("string");
    })
})