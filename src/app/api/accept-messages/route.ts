import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import UserModel from "@/model/User";
import dbConnect from "@/lib/dbConnect";
import { User } from "next-auth";


export async function POST(request:Request) {
    await dbConnect()
    const session=await getServerSession(authOptions)
    const user:User=session?.user as User
    if(!session||!session.user){
        return Response.json({
            success:false,
            message:"Not Authenticated"
        },{status:401})
    }
    const userId=user._id
    const {acceptMessage}=await request.json()

    try {
        const updatedUser=await UserModel.findByIdAndUpdate(
            userId,
            {isAcceptingMessage:acceptMessage},
            {new:true}
        )
        if(!updatedUser){
            return Response.json({
                success:false,
                mesasge:"Failed to update user's accept-message"
            },{status:500})
        }
        return Response.json({
            success:true,
            message:"Accept-message updated successfully ",updatedUser
        },{status:200})
    } catch (error) {
        console.error("Failed to update user's accept-message ",error)
        return Response.json({
            success:false,
            mesasge:"Failed to update user's accept-message"
        },{status:500})
    }
}


export async function GET(request:Request){
    await dbConnect()
    const session=await getServerSession(authOptions)
    const user:User=session?.user as User
    if(!session||!session.user){
        return Response.json({
            success:false,
            message:"Not Authenticated"
        },{status:401})
    }
    const userId=user._id
    try {
        const foundUser=await UserModel.findById({userId})
        if(!foundUser){
            return Response.json({
                success:false,
                mesasge:"User not found"
            },{status:404})
        }
        return Response.json({
            success:true,
            isAcceptingMessage:foundUser.isAcceptingMessage
        })
    } catch (error) {
        console.error("Failed to get user's accept-message ",error)
        return Response.json({
            success:false,
            mesasge:"Failed to get user's accept-message"
        },{status:500})
    }
}