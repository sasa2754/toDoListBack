import { Express } from "express";
import express from 'express';
import list from './list.ts';
import user from "./user.ts";

export default function (app: Express) {
    app
        .use(express.json())
        .use('/task', list)
        .use('/user', user)
}

// senhaMaravilhosa:aSabrinaÉLindaEMaravilhosa123