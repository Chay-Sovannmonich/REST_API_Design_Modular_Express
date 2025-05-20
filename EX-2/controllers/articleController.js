import { articles } from "../models/data.js";

// Function to get all articles
export const getAllArticles = (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            articles
        }
    });
};
// Function to get a single article by ID
export const getArticleById = (req, res) => {
    const { id } = req.params;
    const article = articles.find(article => article.id === parseInt(id));

    if (!article) {
        return res.status(404).json({
            status: "fail",
            message: "Article not found"
        });
    }

    res.status(200).json({
        status: "success",
        data: {
            article
        }
    });
};
// function to create a new article
export const createArticle = (req, res) => {
    const { title, content, journalistId, categoryId } = req.body;

    if (!title || !content || !journalistId || !categoryId) {
        return res.status(400).json({
            status: "fail",
            message: "All fields are required"
        });
    }

    const newArticle = {
        id: articles.length + 1,
        title,
        content,
        journalistId,
        categoryId
    };

    articles.push(newArticle);

    res.status(201).json({
        status: "success",
        data: {
            article: newArticle
        }
    });
};
// Function to update an article by ID
export const updateArticle = (req, res) => {
    const { id } = req.params;
    const { title, content, journalistId, categoryId } = req.body;

    const articleIndex = articles.findIndex(article => article.id === parseInt(id));

    if (articleIndex === -1) {
        return res.status(404).json({
            status: "fail",
            message: "Article not found"
        });
    }

    if (!title || !content || !journalistId || !categoryId) {
        return res.status(400).json({
            status: "fail",
            message: "All fields are required"
        });
    }

    articles[articleIndex] = {
        ...articles[articleIndex],
        title,
        content,
        journalistId,
        categoryId
    };

    res.status(200).json({
        status: "success",
        data: {
            article: articles[articleIndex]
        }
    });
};
// Function to delete an article by ID
export const deleteArticle = (req, res) => {
    const { id } = req.params;
    const articleIndex = articles.findIndex(article => article.id === parseInt(id));

    if (articleIndex === -1) {
        return res.status(404).json({
            status: "fail",
            message: "Article not found"
        });
    }

    articles.splice(articleIndex, 1);

    res.status(204).json({
        status: "success",
        data: null
    });
};

