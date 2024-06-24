import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from "dotenv";
config();


const SECRET_KEY = process.env.JWT_SECRET || 'chave_secreta_qualquer';

interface CustomRequest extends Request {
    userId?: string;
}

export function authenticate(req: CustomRequest, res: Response, next: NextFunction) {
    
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send({ error: 'Nenhum token fornecido.' });
    }

    const parts = authHeader.split(' ');
    if (parts.length !== 2) {
        return res.status(401).send({ error: 'Erro no token.' });
    }

    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({ error: 'Token malformatado.' });
    }

    console.log(`Token recebido: ${token}`); // Adicionando log para debugging

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            console.log(`Erro na verificação do token: ${err.message}`); // Adicionando log para debugging
            return res.status(401).send({ error: 'Token inválido.' });
        }
    
        req.userId = (decoded as { id: string }).id;
        next();
    });
}