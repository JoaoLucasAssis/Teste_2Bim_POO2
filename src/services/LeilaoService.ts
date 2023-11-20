import { PrismaClient } from "@prisma/client";
import Leilao from "../models/Leilao";

const prisma = new PrismaClient()

class LeilaoService {

    async insert(leilao: Leilao) {
        try {
            await prisma.leilao.create({
                data: {
                    produto: leilao.getProduto(),
                    preco: leilao.getPreco(),
                    dataLimite: leilao.getDataLimite(),
                    dono: {
                        connect: {
                            email: leilao.getDono().getEmail()
                        }
                    },
                    listaLances: leilao.getListaLances()
                }
            });
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        } finally {
            await prisma.$disconnect()
            process.exit(1)
        }
    }

    async update(id: string, leilao: Leilao) {
        try {
            await prisma.leilao.update({
                where: { id: id },
                data: {
                    produto: leilao.getProduto(),
                    preco: leilao.getPreco(),
                    dataLimite: leilao.getDataLimite(),
                    dono: {
                        connect: {
                            email: leilao.getDono().getEmail()
                        }
                    },
                    listaLances: leilao.getListaLances()
                }
            });
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        } finally {
            await prisma.$disconnect()
            process.exit(1)
        }
    }

    async delete(id: string) {
        try {
            await prisma.leilao.delete({
                where: { id: id },
            });
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        } finally {
            await prisma.$disconnect()
            process.exit(1)
        }
    }

    async getAll() {
        try {
            return await prisma.leilao.findMany();
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        } finally {
            await prisma.$disconnect()
            process.exit(1)
        }
    }
}

export default new LeilaoService();