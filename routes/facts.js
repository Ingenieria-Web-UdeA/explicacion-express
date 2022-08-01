import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const factsRoutes = express.Router();

factsRoutes.route('/facts').get(async (req, res) => {
  const facts = await prisma.facts.findMany();
  res.status(200).json({
    facts,
  });
});

factsRoutes.route('/facts').post(async (req, res) => {
  const newFact = await prisma.facts.create({
    data: {
      description: req.body.description,
    },
  });

  res.status(200).json({ newFact });
});

export { factsRoutes };
