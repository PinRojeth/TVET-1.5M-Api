import crypto from 'crypto';
import dotenv from 'dotenv';
import { ClientError } from './http-errors';
dotenv.config();

const algorithm = 'aes-192-cbc';
const password = process.env.refresh_secret as string;
const key = crypto.scryptSync(password, 'salt', 24);
const iv = Buffer.alloc(16, 0); // Initialization vector.

export default class TokenGenerator{
    public static createResetPasswordToken(_id: string) {
        let expiredDate = new Date().getTime() + (5 * 60 * 1000); // 5 minute
        return this.encryptData({ id: _id, expire_at: expiredDate, type: "reset_password" });
    }
    
    public static createEmailToken(email : string, type: string) {
        return this.encryptData({email: email, type: type, current_date: new Date});
    }

    public static encryptData (text: any) {
        try {
            const cipher = crypto.createCipheriv(algorithm, key, iv);
            let encrypted = cipher.update(JSON.stringify(text), 'utf8', 'hex');
            encrypted += cipher.final('hex');
            return encrypted;
        } catch (error) {
            throw new ClientError(400, "error = " + error)
        }
    }
    
    public static isValidToken(text: string) {
        try {
            let decipher = crypto.createDecipheriv(algorithm, key, iv);
            let decrypted : any = decipher.update(text, 'hex', 'utf8'); 
            decrypted += decipher.final('utf8');
            let jsonData = JSON.parse(decrypted);
            if (jsonData.expire_at) { 
                if (jsonData.expire_at < new Date().getTime())
                    return false;
            }
            return true
        } catch (error) {
            return false
        }
    }

    public static decryptData (text: string) { 
        try {
            let decipher = crypto.createDecipheriv(algorithm, key, iv);
            let decrypted = decipher.update(text, 'hex', 'utf8'); 
            decrypted += decipher.final('utf8');
            return JSON.parse(decrypted);
        } catch (error) {
            throw new ClientError(400,"invalid token")
        }
    }
}


