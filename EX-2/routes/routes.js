import * as articleController from "../controllers/articleController.js";
import * as journalistController from "../controllers/journalistController.js";
import * as categoryController from "../controllers/categoryController.js";
import express from "express";

const router = express.Router();

// Routes for articles
router.get("/articles", articleController.getAllArticles);
router.get("/articles/:id", articleController.getArticleById);
router.post("/articles", articleController.createArticle);
router.put("/articles/:id", articleController.updateArticle);
router.delete("/articles/:id", articleController.deleteArticle);

// Routes for journalists
router.get("/journalists", journalistController.getAllJournalists);
router.get("/journalists/:id", journalistController.getJournalistById);
router.post("/journalists", journalistController.createJournalist);
router.put("/journalists/:id", journalistController.updateJournalist);
router.delete("/journalists/:id", journalistController.deleteJournalist);

// Routes for categories
router.get("/categories", categoryController.getAllCategories);
router.get("/categories/:id", categoryController.getCategoryById);
router.post("/categories", categoryController.createCategory);
router.put("/categories/:id", categoryController.updateCategory);
router.delete("/categories/:id", categoryController.deleteCategory);
export default router;