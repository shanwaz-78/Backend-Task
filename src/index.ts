import "dotenv/config";
import { createServer, Server } from "http";
import { app } from "./app";

const PORT = process.env.APP_PORT || "8080";

const server: Server = createServer(app);
server.listen(PORT);

server.on("listening", () =>
  console.log(`server is listening on port http://localhost:${PORT}`)
);
server.on("error", (error) =>
  console.log(`server is not listening on port${PORT}: [Error]: ${error}`)
);
