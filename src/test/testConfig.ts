import { expect } from "chai";
import request from "supertest";
import app from "../server";

const baseUrl = "/api/v1/";

export { app, request, expect, baseUrl };
