const FreeganSeeder = require("./FreeganSeeder");
const KropotkinSeeder = require("./KropotkinSeeder");
const CategorySeeder = require("./CategorySeeder");
const { Client } = require("pg");

let client = process.env.DATABASE_URL
  ? new Client({
      connectionString: process.env.DATABASE_URL,
      ssl: true
    })
  : new Client({
      user: "postgres",
      host: "localhost",
      database: "guttersnipeTest",
      password: "postgres",
      port: 5432
    });

client.connect();

// populate database
const fseeder = new FreeganSeeder(client);
const kseeder = new KropotkinSeeder(client);
const cseeder = new CategorySeeder(client);
fseeder.seedFreegans();
kseeder.seedKropotkins();
cseeder.seedCategories();
