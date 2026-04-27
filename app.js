// ============================================================
//  REST API - Caso de estudio modificado
//  Ruta principal: /clientes  (variante de /users)
//  Operación extra: GET /productos  (requerimiento calificación 9-10)
//  Compatible con servidor remoto via process.env.PORT
// ============================================================

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// ─────────────────────────────────────────────
//  RUTA: /clientes
// ─────────────────────────────────────────────

// GET /clientes → Retorna la lista de clientes
app.get('/clientes', (req, res) => {
    res.json({ mensaje: 'Retornando lista de clientes' });
});

// POST /clientes → Crea un nuevo cliente
// Body esperado: { "nombre": "Pedro", "correo": "asd@company.com" }
app.post('/clientes', (req, res) => {
    const nuevoCliente = req.body;
    res.json({ mensaje: 'Cliente creado', cliente: nuevoCliente });
});

// PUT /clientes/:id → Actualiza un cliente por ID
app.put('/clientes/:id', (req, res) => {
    const clienteId = req.params.id;
    const clienteActualizado = req.body;
    res.json({
        mensaje: `Cliente con ID ${clienteId} actualizado`,
        clienteActualizado
    });
});

// DELETE /clientes/:id → Elimina un cliente por ID
app.delete('/clientes/:id', (req, res) => {
    const clienteId = req.params.id;
    res.json({ mensaje: `Cliente con ID ${clienteId} eliminado` });
});

// ─────────────────────────────────────────────
//  RUTA EXTRA: /productos  (requerimiento calificación 9-10)
// ─────────────────────────────────────────────

// GET /productos → Retorna la lista de productos
app.get('/productos', (req, res) => {
    res.json({
        mensaje: 'Retornando lista de productos',
        productos: [
            { id: 1, nombre: 'Laptop', precio: 15000 },
            { id: 2, nombre: 'Mouse',  precio: 350   },
            { id: 3, nombre: 'Teclado', precio: 800  }
        ]
    });
});

// ─────────────────────────────────────────────
//  Iniciar servidor
// ─────────────────────────────────────────────
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
