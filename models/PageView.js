const mongoose = require("mongoose");

const PageViewSchema = new mongoose.Schema({
    path: { type: String },
    date: { type: Date, default: Date.now },
    userA: { type: String }
});
module.exports = mongoose.model("PageView", PageViewSchema);