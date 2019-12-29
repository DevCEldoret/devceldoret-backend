import { expect } from "chai";
import request from "supertest";
import app from "../server";

const baseUrl = '/api/v1/';

describe("Events", () => {
    it('GET /events', async () => {
        const response = await request(app)
        .get(`${baseUrl}/events`);
        
        const [data] = response.body;
        console.log(data);
        expect(data.id).to.be.a("number");
        expect(data.name).to.be.a("string");
        expect(data.description).not.to.be.undefined;
        expect(data.start_datetime).to.be.a("string");
        expect(data.end_datetime).to.be.a("string");
        expect(data.media_link).not.to.be.undefined;   
    });
});
