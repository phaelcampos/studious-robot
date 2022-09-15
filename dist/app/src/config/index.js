"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CONFIG = {
    STAGE: process.env.STAGE ? process.env.STAGE : 'dev',
    EMAIL: process.env.EMAIL ? process.env.EMAIL : 'tiba@zappts.com.br',
    ACCOUNT: process.env.ACCOUNT ? process.env.ACCOUNT : 'b56047bc4b11e52dca96e1863aed1ea5c5c76103',
    BOTEMAIL: process.env.BOTEMAIL ? process.env.BOTEMAIL : 'zbotgroup@z-bot-sheets-helper.iam.gserviceaccount.com',
    VALIDORGS: process.env.VALIDORGS ? process.env.VALIDORGS : ['/', '/Diretoria', '/Leadership'],
};
exports.default = CONFIG;
