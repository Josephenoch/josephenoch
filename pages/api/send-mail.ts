import SendMessage from "../../emails/SendMessage";
import { handleEmailFire } from "../../service/email-service";
import { render } from "@react-email/components";
import { NextApiRequest, NextApiResponse } from "next";
export const maxDuration = 300

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<{}>,
  ) {   
    try{
      const {
        message,
        sentTime,
        senderName,
        senderEmail
      } = JSON.parse(req.body)
  
      if(!message || !sentTime || !senderName || !senderEmail) throw new Error("Incomplete details")
      await handleEmailFire({
        to: "admin@josephenoch.com",
     
        from:"admin@josephenoch.com",
        cc: "enochjoseph01@gmail.com",
        replyTo: senderEmail,      
        subject: `A New Message from ${senderName}`,
        html: await render(SendMessage({
          message,
          sentTime,
          senderName,
          senderEmail,
        }))
      })

      res.status(200).send({data: {
          status: "success",
          message: "Successfully sent email"
      }})
    }catch(err){
      console.log(err)  
      if(err instanceof Error){
        res.status(500).send({data: {
          status: "error",
          message: err.message
        }})
        return
      }

      res.status(500).send({
        data: {
          status: "error",
          message: "Internal Server Error"
        }
      })

    }
}