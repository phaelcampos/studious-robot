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
/* eslint-disable no-continue */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
// const SHEETS_ID_TEST = "1oUBeCIlPQkC-T9Bfp_XRwanOemjS1tWHllmROru3mMU";
const SHEETS_ID_TEST = "1yBUE8kaI1Nqa3WySwNaOIA_dPkL6_iajdMxCF65sM_0"; // test excel
class GoogleService {
    readSheet() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    ;
}
exports.default = GoogleService;
