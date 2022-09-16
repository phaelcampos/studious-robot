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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrder = exports.getProvider = exports.createOrder = void 0;
const createOrder = (order, con) => __awaiter(void 0, void 0, void 0, function* () {
    const queryString = "INSERT INTO ProductOrder (order_id, product_id, product_quantity) VALUES (?, ?, ?)";
    const result = yield con.query(queryString, [order.order_id, order.product_id, order.product_quantity]);
    return result;
});
exports.createOrder = createOrder;
const getProvider = (provider_id, con) => __awaiter(void 0, void 0, void 0, function* () {
    const queryString = "SELECT * FROM Provider where id = ?";
    const result = yield con.query(queryString, [provider_id]);
    return result[0];
});
exports.getProvider = getProvider;
const getOrder = (order_id, con) => __awaiter(void 0, void 0, void 0, function* () {
    const queryString = "SELECT * FROM ProductOrder where order_id = ?";
    const result = yield con.query(queryString, [order_id]);
    return result[0];
});
exports.getOrder = getOrder;
