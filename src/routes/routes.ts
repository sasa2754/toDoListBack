import { Express } from "express";
import express from 'express';
import list from './list.ts';

export default function (app: Express) {
    app
        .use(express.json())
        .use('/task', list)
}