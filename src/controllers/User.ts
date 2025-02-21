import express, { Request, Response, Router } from 'express';
import User from '../models/User.ts';
import CryptoJS from 'crypto-js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();


export const register = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    try {
        const passHash = CryptoJS.AES.encrypt(password, process.env.SECRET as string).toString();

        const newUser = new User({
            email,
            password: passHash
        });

        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar usuário: ', error });
    }
};


export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log("chegou aqui");


    const user = await User.findOne({ email });

    if(!user)
        return res.status(400).send({ message: "Email ou senha inválidos" });

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET as string);
    const decryptedPass = bytes.toString(CryptoJS.enc.Utf8);

    const secret = process.env.SECRET;
    
    if(secret) {
        const token = jwt.sign(
            {
                id: user.id,
            },
            secret,
            {
                expiresIn: '2 days',
            }
        )
    
        if (decryptedPass != password)
            return res.status(400).send({ message: "Email ou senha inválidos" });
    
    
        else
            return res.status(200).send({ token: token});
    }

}

