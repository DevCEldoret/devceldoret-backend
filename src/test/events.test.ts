import { expect } from "chai";

import request from "supertest";

const getEvents = require("../DB/db.js");
const Database = require ("../DB/index");

import app from "../server";

describe("DevC", () => {
  // gets json response
//   describe("GET events", () => {
//     let id;
//     let title;
//     before(done => {
//       Database.query(
//         // Insert default Event into table events
//         "INSERT INTO events (id, title) VALUES ($1, $2) RETURNING id",
//         [event.getEvents.id, event.getEvents.title]
//       ).then((value: { id: number,title:string; }) => {
//         id = value.id;
//         title = value.title;
//         done();
//       });
//     });
//     it("gets event information with the id of 1", done => {
//       request(app)
//         .get("/api/v1/events")
//         .set("Content-Type", "application/json")
//         .then(res => {
//           const {
//             body: {
//               status,
//               data: { value }
//             }
//           } = res;
//           expect(res.status).to.equal(200);
//           expect(status).to.equal("success");
//           expect(value).to.have.property('id');
//           expect(value).to.have.property('title');
//           done();
//         })
//         .catch(error => done(error));
//     });
//   });
});
