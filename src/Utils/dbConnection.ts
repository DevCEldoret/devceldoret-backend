import { getConnectionOptions, createConnection } from "typeorm";
import { NODE_ENV } from "./config";
export const createConn = async () => {
  try {
    const connectionOptions = await getConnectionOptions(NODE_ENV);
    console.log(connectionOptions);
    return createConnection(connectionOptions);
  } catch (error) {
    console.log(error);
  }
};

export const conn = async () => {
  const { name } = await getConnectionOptions(NODE_ENV);
  return name;
};
