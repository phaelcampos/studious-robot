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
const create_1 = require("../database/create");
const dbConnection_1 = __importDefault(require("../database/dbConnection"));
const firstProvider_1 = __importDefault(require("../business/firstProvider"));
class Orders {
    createOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            const providerResult = yield this.veirfyProvider(order.provider_id);
            if (providerResult == undefined)
                return { statuCode: 400, message: "Fornecedor não encontrado" };
            if (providerResult[0].id === 1) {
                const provider = new firstProvider_1.default();
                const result = yield provider.createOrder(order, providerResult[0].site);
                if (result == 200) {
                    yield this.saveOrder(order);
                }
            }
            return { statuCode: 200, message: { order_id: order.order_id } };
        });
    }
    ;
    saveOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = new dbConnection_1.default();
            const con = yield db.getConnection();
            yield con.connect();
            for (let item in order.products) {
                const product = order.products[item];
                const uniqueItem = {
                    order_id: order.order_id,
                    product_id: product.product,
                    product_quantity: product.product_quantity
                };
                yield (0, create_1.createOrder)(uniqueItem, con);
            }
            con.end();
            return order.order_id;
        });
    }
    veirfyProvider(provider_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const new_provider_id = parseInt(provider_id);
            const db = new dbConnection_1.default();
            const con = yield db.getConnection();
            yield con.connect();
            const result = yield (0, create_1.getProvider)(new_provider_id, con);
            con.end();
            if (result.length == 0)
                return;
            return result;
        });
    }
    ;
    getOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = new dbConnection_1.default();
            const con = yield db.getConnection();
            yield con.connect();
            const result = yield (0, create_1.getOrder)(order, con);
            con.end();
            return { statuCode: 200, message: { order_id: result } };
        });
    }
    getProduct(order, provider_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const providerResult = yield this.veirfyProvider(provider_id);
            if (providerResult == undefined)
                return { statuCode: 400, message: "Fornecedor não encontrado" };
            const provider = new firstProvider_1.default();
            const result = yield provider.getProduct(order, providerResult[0].site);
            return { statuCode: 200, message: result };
        });
    }
}
exports.default = Orders;
