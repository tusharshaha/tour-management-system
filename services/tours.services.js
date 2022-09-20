const Tours = require("../models/Tours.model");

module.exports.getTourService = async (filters, query) => {
    const result = await Tours.find(filters)
        .skip(query.skip)
        .limit(query.limit)
        .select(query.fields)
        .sort(query.sortBy)
    return result
}

module.exports.getTourByIdService = async (id) => {
    const tour = await Tours.findById(id);
    if (tour) {
        await Tours.updateOne(
            { _id: id },
            { $inc: { hitPoint: 1 } },
            { runValidators: true }
        )
    }
    return tour
}

module.exports.getTrendingTourService = async () => {
    const result = await Tours.find({})
        .sort({ hitPoint: -1 })
        .limit(3);
    return result
}

module.exports.getCheapestTourService = async () => {
    const result = await Tours.find({})
        .sort({ price: -1 })
        .limit(3);
    return result
}

module.exports.createTourService = async (tour) => {
    return await Tours.create(tour, { runValidators: true });
}
