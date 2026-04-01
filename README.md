# 🖥️ Sistema de Monitoreo de Equipos en Red

Sistema de monitoreo en tiempo real para equipos dentro de una red local, orientado al área de soporte técnico.

## 🚀 Características

- 📊 Monitoreo de CPU y RAM
- 👤 Usuario activo en cada equipo
- 🟢 Estado (activo / inactivo)
- 📈 Historial de métricas
- 🌐 Dashboard en tiempo real
- 🧠 Arquitectura cliente-servidor

## 🏗️ Arquitectura

- **Agente (Python)** → Recolecta datos
- **Backend (Node.js + Express)** → API REST
- **Base de datos (PostgreSQL + Prisma)** → Persistencia
- **Dashboard (HTML + Chart.js)** → Visualización

## 📡 Funcionamiento

1. El agente se ejecuta en cada PC
2. Envía métricas al servidor
3. El backend almacena en PostgreSQL
4. El dashboard muestra datos en tiempo real

## ⚙️ Tecnologías

- Node.js
- Express
- Prisma
- PostgreSQL
- Python (psutil)
- Chart.js

## 📸 Demo

*(Aquí puedes luego poner screenshots de tu dashboard)*

## 📦 Instalación

```bash
git clone https://github.com/brandonandres/Monitoreo-Host.git
cd Monitoreo-Host
