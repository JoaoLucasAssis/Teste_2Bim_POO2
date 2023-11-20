import express from 'express';
import Leilao from '../models/Leilao';
import Lance from '../models/Lance';
import Usuario from '../models/Usuario';
import LanceService from '../services/LanceService';

class LanceController {

    public async insert(req: express.Request, res: express.Response) {

        try {
            const { comprador, leilao, valor } = req.body;

            const lance = await LanceService.insert(
                new Lance(
                    new Usuario(
                        comprador.nome, 
                        comprador.email
                    ), 
                    new Leilao(
                        leilao.id, 
                    leilao.produto, 
                    leilao.preco, 
                    leilao.dataLimite, 
                    new Usuario(
                        leilao.dono.nome, 
                        leilao.dono.email), 
                    leilao.listaLances
                    ),
                    valor
            ));

            return res.json(lance);
        } catch (error) {
            console.log(error);
        }
    }

    public async update(req: express.Request, res: express.Response) {

        try {
            const { compradorId, leilaoId, comprador, leilao, valor } = req.body;

            const lance = await LanceService.update(compradorId, leilaoId, new Lance(
                new Usuario(
                    comprador.nome, 
                    comprador.email
                ), 
                new Leilao(
                    leilao.id, 
                leilao.produto, 
                leilao.preco, 
                leilao.dataLimite, 
                new Usuario(
                    leilao.dono.nome, 
                    leilao.dono.email), 
                leilao.listaLances
                ),
                valor
        ));

            return res.json(lance);
        } catch (error) {
            console.log(error);
        }
    }

    public async delete(req: express.Request, res: express.Response) {

        try {
            const { compradorId, leilaoId } = req.body;

            const lance = await LanceService.delete(compradorId, leilaoId);

            return res.json(lance);
        } catch (error) {
            console.log(error);
        }
    }

    public async getAll(req: express.Request, res: express.Response) {

        try {
            const lances = await LanceService.getAll();

            return res.json(lances);
        } catch (error) {
            console.log(error);
        }
    }
}

export default new LanceController();