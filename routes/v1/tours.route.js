const express = require("express");
const router = express.Router();
const toursController = require("../../controllers/tours.controller");

router.get("/tour/trending", toursController.getTrendingTour);
router.get("/tour/cheapest", toursController.getCheapestTour);
router.patch("/tour/:id", toursController.updateTour);

router.route("/tours/")
    .get(toursController.getTours)
    .post(toursController.createTour);

module.exports = router;