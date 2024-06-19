import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.get("/usuarios", async (req, res) => {
  const users = await prisma.users.findMany();

  res.status(200).json(users);
});

app.post("/usuarios", async (req, res) => {
  const user = await prisma.user.create({
    data: {
      email: req.body.email,
      age: req.body.age,
      name: req.body.name,
    },
  });

  console.log(users);

  res.status(201).json({ message: "Usuário criado com sucesso!" });
});


app.put("/usuarios/:id", async (req, res) => {
    
    const user = await prisma.user.update({
        where: {
                id: req.params.id
        },
      data: {
        email: req.body.email,
        age: req.body.age,
        name: req.body.name,
      },
    });
  
    console.log(users);
  
    res.status(201).json({ message: "Usuário criado com sucesso!" });
  });

  app.delete("/usuarios/:id", async (req, res) => {
    await prisma.user.delete({

        where: {
            id: req.params.id
    },
    })
    res.status(200).json({ message: "Usuário deletado com sucesso!" });
})
app.listen(3000);

// MONGODB
// Username
//sebastiaofilho2301
// Password
//6zEprRi18Zhy3hru
