import express from 'express';
import Leilao from '../models/Leilao';
import Usuario from '../models/Usuario';
import LeilaoService from '../services/LeilaoService';

class LeilaoController {

    public async insert(req: express.Request, res: express.Response) {

        try {
            const {id, produto, preco, dataLimite, dono, listaLances } = req.body;

            const leilao = await LeilaoService.insert(
                new Leilao(
                    id, 
                    produto, 
                    preco, 
                    dataLimite, 
                    new Usuario(dono.nome, dono.email), 
                    listaLances
            ));

            return res.json(leilao);
        } catch (error) {
            console.log(error);
        }
    }

    public async update(req: express.Request, res: express.Response) {

        try {
            const antigoId = req.params.id;
            const {id, produto, preco, dataLimite, dono, listaLances } = req.body;

            const leilao = await LeilaoService.update(
                antigoId, 
                new Leilao(
                    id, 
                    produto, 
                    preco, 
                    dataLimite, 
                    new Usuario(dono.nome, dono.email), 
                    listaLances
            ));

            return res.json(leilao);
        } catch (error) {
            console.log(error);
        }
    }

    public async delete(req: express.Request, res: express.Response) {

        try {
            const id = req.params.id;

            const leilao = await LeilaoService.delete(id);

            return res.json(leilao);
        } catch (error) {
            console.log(error);
        }
    }

    public async getAll(req: express.Request, res: express.Response) {

        try {
            const leilaos = await LeilaoService.getAll();

            return res.json(leilaos);
        } catch (error) {
            console.log(error);
        }
    }
}

export default new LeilaoController();