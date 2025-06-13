import sendEmail from "../config/sendEamil.js";
import UserModel from "../models/user.model.js";
import verifyEmailTemplate from "../utilits/verifyEmailTemplate.js";

export async function registerUserController(request,response){
    try{
        const {name,email,password} = request.body;
        
        if(!name|| !email || !password){
            return response.status(400).json({
                message : "provide email, name,password",
                error : true,
                success : false
            })
        }
        const user = await UserModel.findOne({email})
        if(user){
            return response.json({
                message : "user already exist",
                error : true,
                success : false
            })
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password,salt);

        const paylod = {
            name,
            email,
            password : hashPassword
        }
        const newUser = new UserModel(paylod);
        const save = await newUser.save();
        const verifyEmailUrl =`${process.env.FRONTEND_URL}/verify-email?code=${save?._id}`

        const verifyEmail = await sendEmail({
            sendTo : email,
            subject : "verify your email from Tendora",
            html : verifyEmailTemplate({
                name,
                url:verifyEmailUrl
            })

        })
        return response.json({
            message : "User register Successfully",
            error : false,
            success : true,
            data : save

        })
        
    }
    catch(error){
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}
