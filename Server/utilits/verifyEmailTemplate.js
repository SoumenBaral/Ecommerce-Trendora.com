const verifyEmailTemplate =(name,url)=>{
    return `
    <h4>Dear ${name},</h4>
    <p>Thank you for registering Tendora.</p>
    <a href=${url} style = "color:white;background:blue;margin-top : 10px>
      Verify Your Email
    </a>
    `
}
export default verifyEmailTemplate;