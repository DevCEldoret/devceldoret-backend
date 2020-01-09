import app from "./app";
const config = require("./Utils/config");
const PORT = config.SERVER_PORT;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;
