import { config } from "mssql";

export const sqlConfig: config = {
    user: 'sa',
    password: 'P4ssw0rd!',
    database: 'SACP',
    server: 'localhost',
    port:1433,  //Optional si es otro no standard
    options: {
        trustServerCertificate: true,
        encrypt: true
    }
}