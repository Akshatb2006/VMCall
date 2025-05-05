import {StreamChat} from 'stream-chat';
import "dotenv/config";

const apiKey = process.env.VMCall_API_KEY;
const apiSecret = process.env.VMCall_API_SECRET;

if (!apiKey || !apiSecret) {
    console.error("VMCall API key or Secret is missing");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const createStreamUser = async (userData) => {
    try{
        await streamClient.upsertUser(userData);
        return userData;
    } catch (error){
        console.error("Error creating stream user:", error);
    }
};

export const generateStreamToken = (userId) => {
    try{
        const userIdStr = userId.toString();
        return streamClient.createToken(userIdStr);
    }catch (error){
        console.error("Error generating stream token:", error);
    }
};