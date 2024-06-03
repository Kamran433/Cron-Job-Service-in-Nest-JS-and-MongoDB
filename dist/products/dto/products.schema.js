"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
const mongoose_1 = require("mongoose");
exports.productSchema = new mongoose_1.Schema({
    Name_of_the_cron_job: { type: String, required: true },
    Link_to_trigger: { type: String, required: true },
    API_key: { type: String, required: true },
    Schedule_timings: { type: Date, required: true },
    Start_Date: { type: Date, required: true },
});
//# sourceMappingURL=products.schema.js.map