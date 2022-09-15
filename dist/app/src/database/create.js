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
exports.createOrder = void 0;
const dbConnection_1 = __importDefault(require("../database/dbConnection"));
const createOrder = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const db = new dbConnection_1.default();
    const con = yield db.getConnection();
    yield con.connect();
    const queryString = "INSERT INTO ProductOrder (product_id, provider_id, product_quantity) VALUES (?, ?, ?)";
    const result = yield con.query(queryString, [order.product, order.provider, order.productQuantity]);
    con.end();
    return result;
});
exports.createOrder = createOrder;
