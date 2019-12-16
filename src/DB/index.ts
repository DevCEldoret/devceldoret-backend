import { Pool } from "pg";

const pool = new Pool({
  connectionString: "postgres://postgres:50filthyCENT!@localhost:5432/devceldoret"
});

class Database {
  static async query(query:any, value:any, isArray = false) {
    const response = await pool.query(query, value);
    const result = isArray ? response.rows : response.rows[0];
    return result;
  }
}

export default Database;
