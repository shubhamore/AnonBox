import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

export async function POST(request:Request){
    dbConnect()
    try {
        const {username,code}=await request.json()
        const user=await UserModel.findOne({username})
        if(!user){
            return Response.json({
                success:false,
                message:"User not found"
            },{status:500})
        }
        const isCodeValid=user.verifyCode===code
        const isCodeNotExpired=new Date(user.verifyCodeExpiry)>new Date()
        if(!isCodeValid){
            return Response.json({
                success:false,
                message:"Incorrect verification code"
            },{status:400})
        } else if(!isCodeNotExpired){
            return Response.json({
                success:false,
                message:"Verification code has expired, Please sign-up again"
            },{status:400})
        } else{
            user.isVerified=true
            user.save()
            return Response.json({
                success:true,
                message:"User verified successfully"
            },{status:200})
        }
    } catch (error) {
        console.error("Error verifying user ",error)
        return Response.json({
            success:false,
            message:"Error verifying user"
        },{status:500})
    }
}