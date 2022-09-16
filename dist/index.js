"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const orderBusiness_1 = __importDefault(require("./app/src/business/orderBusiness"));
const body_parser_1 = __importDefault(require("body-parser"));
const uuid_1 = require("uuid");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.get('/order/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const orderBusiness = new orderBusiness_1.default();
    const result = yield orderBusiness.getOrder(id);
    res.statusCode = result.statuCode;
    res.send(result.message);
}));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
app.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = (0, uuid_1.v4)();
    const order = {
        order_id: id,
        provider_id: req.body.provider_id,
        products: req.body.order,
    };
    const orderBusiness = new orderBusiness_1.default();
    const result = yield orderBusiness.createOrder(order);
    res.statusCode = result.statuCode;
    res.send(result.message);
}));
app.get('/product/:provider_id/:product_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product_id = req.params.product_id;
    const provider_id = req.params.provider_id;
    const orderBusiness = new orderBusiness_1.default();
    const result = yield orderBusiness.getProduct(product_id, provider_id);
    res.statusCode = result.statuCode;
    res.send(result.message);
}));
