import { Resend } from 'resend';
import dotenv from 'dotenv'
dotenv.config()

const resend = new Resend(process.env.RESEND_API);
if(process.env.RESEND_API){
  console.log("Provide RESEND_API on .env file ")
}
const sendEmail = async({sendTo, subject, html}) =>{
  try {
    const { data, error } = await resend.emails.send({
      from: 'Tendora <onboarding@resend.dev>',
      to: sendTo,
      subject: subject,
      html: html,
    });
    if (error) {
      return console.error({ error });
    }
    return data;
  } 
  catch (error) {
    console.log(error);
    
  }
}

export default sendEmail;

