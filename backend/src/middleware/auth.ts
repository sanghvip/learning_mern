import { NextFunction,Request,Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';

declare global {
    namespace Express {
        interface Request {
            userId: string;
        }
    }
}

const verifyToken = (req: Request,resp: Response,next: NextFunction) =>{
    const token = req.cookies['auth_token'];
    if(!token){
        console.log("TOKEN PS: "+token);
        return resp.status(401).json({message: "unauthorized"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
        req.userId = (decoded as JwtPayload).userId;
        next();
    }catch(error){
        return resp.status(401).json({message: "unauthorized"});
    }
};

export default verifyToken;