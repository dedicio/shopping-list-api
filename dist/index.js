"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());
app.set('port', process.env.PORT || 3000);
app.get('/', (req, res) => {
    res.send('Teste');
});
exports.default = app;
//# sourceMappingURL=index.js.map