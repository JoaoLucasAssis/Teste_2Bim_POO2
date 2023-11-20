import { PrismaClient } from "@prisma/client";
import Lance from "../models/Lance";

const prisma = new PrismaClient()

class LanceService {

    async insert(lance: Lance) {
        try {
            await prisma.lance.create({
                data: {
                    comprador: {
                        connect: {
                            email: lance.getUsuario().getEmail()
                        }
                    },
                    leilao: {
                        connect: {
                            id: lance.getLeilao().getId()
                        }
                    },
                    valor: lance.getValor()
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

    async update(compradorId: number, leilaoId: string, lance: Lance) {
        try {
            await prisma.lance.update({
                where: {
                    compradorId_leilaoId: {
                        compradorId: compradorId,
                        leilaoId: leilaoId,
                    },
                },
                data: {
                    comprador: {
                        connect: {
                            email: lance.getUsuario().getEmail()
                        }
                    },
                    leilao: {
                        connect: {
                            id: lance.getLeilao().getId()
                        }
                    },
                    valor: lance.getValor()
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

    async delete(compradorId: number, leilaoId: string) {
        try {
            await prisma.lance.delete({
                where: {
                    compradorId_leilaoId: {
                        compradorId: compradorId,
                        leilaoId: leilaoId,
                    },
                },
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
            return await prisma.lance.findMany();
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

export default new LanceService();