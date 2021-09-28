const router = require("express").Router();
// Import individual routes
const userRoutes = require("./user-routes.js");
const postRoutes = require("./post-routes");
const bookRoutes = require("./book-routes");
const bookclubRoutes = require("./bookclub-routes");
const locationRoutes = require("./location-routes");

// Link routes to router
router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/books", bookRoutes);
router.use("/bookclubs", bookclubRoutes);
router.use("/location", locationRoutes);

// Export routes as one router
module.exports = router;
