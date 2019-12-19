import { Router } from "express";
//import { Pool } from 'pg';
import getEvents from "../controllers/event-controller";

const router = Router();
// Added for testing purposes
// const pool = new Pool({
//   connectionString: "postgres://postgres:50filthyCENT!@localhost:5432/devceldoret"
// });

// const getEvents = (_request:any, response:any) => {
//   pool.query('SELECT * FROM events ORDER BY id ASC', (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(results.rows);
//   });
// };

router.get("/", getEvents);

export default router;
