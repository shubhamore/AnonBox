import { Resend } from "resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";
import { resend } from "@/lib/resend";

export async function sendVerificationEmail(
    email:string,
    username:string,
    verifyCode:string
):Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'verification@anonbox.shbm.me',
            to: email,
            subject: 'AnonBox | Verification code',
            react: VerificationEmail({username,otp:verifyCode}),
          });
        return {
            success:true,
            message:"Verification email sent successfully!"
        }
    } catch (error) {
        console.error("error sending verification email ",error)
        return {
            success:false,
            message:"error sending verification email"
        }
    }
}