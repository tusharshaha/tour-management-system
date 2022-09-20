const tourServices = require("../services/tours.services");

module.exports.getTours = async (req, res, next) => {
    try {
        let filters = { ...req.query };
        const excludeFields = ["sort", "fields", "limit", "page"];
        // separate filters from query
        excludeFields.forEach(field => delete filters[field]);
        let filtersString = JSON.stringify(filters);
        // validate operator with $ sign
        filtersString = filtersString.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`);
        filters = JSON.parse(filtersString);

        const query = {};

        if (req.query.sort) {
            query.sortBy = req.query.sort.split(",").join(" ");
        }
        if (req.query.fields) {
            query.fields = req.query.fields.split(",").join(" ");
        }
        if (req.query.page) {
            const { page = 1, limit = 10 } = req.query;
            query.skip = (page - 1) * parseInt(limit);
            query.limit = limit;
        }
        const result = await tourServices.getTourService(filters, query);
        res.status(200).json({
            success: true,
            message: "success",
            tours: result
        })
    } catch (err) {
        next(err)
    }
}

module.exports.getTourById = async (req, res, next) => {
    try {
        const result = await tourServices.getTourByIdService(req.query.id);
        if (result) {
            result.hitPoint += 1;
        }
        res.status(200).json({
            success: true,
            message: "success",
            tours: result
        })
    } catch (err) {
        next(err)
    }
}

module.exports.getTrendingTour = async (req, res, next) => {
    try {
        const result = await tourServices.getTrendingTourService();
        res.status(200).json({
            success: true,
            message: "success",
            tours: result
        })
    } catch (err) {
        next(err);
    }
}

module.exports.getCheapestTour = async (req, res, next) => {
    try {
        const result = await tourServices.getCheapestTourService();
        res.status(200).json({
            success: true,
            message: "success",
            tours: result
        })
    } catch (err) {
        next(err);
    }
}

module.exports.createTour = async (req, res, next) => {
    try {
        await tourServices.createTourService(req.body);
        res.status(200).json({
            success: true,
            message: "success",
        })
    } catch (err) {
        next(err);
    }
}

module.exports.updateTour = async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
}