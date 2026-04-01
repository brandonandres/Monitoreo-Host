const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(express.json());

// 📥 Guardar datos
app.post('/api/data', async (req, res) => {
    const data = req.body;

    if (!data.hostname) {
        return res.status(400).json({ error: "hostname requerido" });
    }

    try {
        await prisma.equipo.create({
            data: {
                hostname: data.hostname,
                usuario: data.usuario,
                cpu: data.cpu,
                ram: data.ram
            }
        });

        console.log("💾 Guardado en BD:", data);

        res.json({ status: "ok" });

    } catch (error) {
        console.error("❌ Error BD:", error);
        res.status(500).json({ error: "Error guardando datos" });
    }
});

// 📊 Estado actual
app.get('/api/equipos', async (req, res) => {
    try {
        const registros = await prisma.equipo.findMany({
            orderBy: { createdAt: 'desc' }
        });

        const mapa = {};

        registros.forEach(eq => {
            if (!mapa[eq.hostname]) {
                mapa[eq.hostname] = eq;
            }
        });

        const ahora = new Date();
        const resultado = {};

        for (let key in mapa) {
            const eq = mapa[key];
            const diff = (ahora - new Date(eq.createdAt)) / 1000;

            resultado[key] = {
                hostname: eq.hostname,
                usuario: eq.usuario,
                cpu: eq.cpu,
                ram: eq.ram,
                lastSeen: eq.createdAt,
                estado: diff < 10 ? "ACTIVO" : "INACTIVO",
                segundosSinConexion: Math.floor(diff)
            };
        }

        res.json(resultado);

    } catch (error) {
        console.error("❌ Error consulta:", error);
        res.status(500).json({ error: "Error obteniendo datos" });
    }
});

// 📈 Historial
app.get('/api/historial/:hostname', async (req, res) => {
    const { hostname } = req.params;

    try {
        const datos = await prisma.equipo.findMany({
            where: { hostname },
            orderBy: { createdAt: 'asc' },
            take: 50
        });

        res.json(datos);

    } catch (error) {
        console.error("❌ Error historial:", error);
        res.status(500).json({ error: "Error obteniendo historial" });
    }
});

// 🚀 Servidor
app.listen(3000, '0.0.0.0', () => {
    console.log("🚀 Backend en http://localhost:3000");
});