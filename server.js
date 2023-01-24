// de esta forma se importa faker
const {faker} = require("@faker-js/faker");

// de esta forma se importa express
const express = require("express");
const app = express();
const port = 8000;

class Usuario {
  constructor() {
    this._id = faker.datatype.uuid();
    this.nombre = faker.name.firstName();
    this.apellido = faker.name.lastName();
    this.telefono = faker.phone.number();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Empresa {
  constructor() {
    this._id = faker.datatype.uuid();
    this.nombre = faker.company.name();
    this.direccion = {
      calle: faker.address.streetName(),
      ciudad: faker.address.city(),
      estado: faker.address.state(),
      postal: faker.address.zipCode(),
      pais: faker.address.country(),
    };
  }
}

// Esta ruta devuelve un nuevo usuario
app.get("/api/usuarios/new", (req, res) => {
  res.json(new Usuario());
});

// Esta ruta devuelve una nueva empresa
app.get("/api/empresas/new", (req, res) => {
  res.json(new Empresa());
});

// Esta ruta devuelve un nuevo usuario y una nueva empresa
app.get("/api/usuarios/empresa", (req, res) => {
  res.json({usuario: new Usuario(), empresa: new Empresa()});
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
