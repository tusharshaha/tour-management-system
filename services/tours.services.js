const Product = require("../models/Tours.model");

module.exports.getProductServices = async (filters, query) => {
    const result = await Product.find(filters)
        .skip(query.skip)
        .limit(query.limit)
        .select(query.fields)
        .sort(query.sortBy)
    return result
}