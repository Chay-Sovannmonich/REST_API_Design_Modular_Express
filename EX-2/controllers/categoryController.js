import { categories } from "../models/data.js";

// // Function to get all categories
export const getAllCategories = (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            categories
        }
    });
};
// // Function to get a single category by ID
export const getCategoryById = (req, res) => {
    const { id } = req.params;
    const category = categories.find(category => category.id === parseInt(id));

    if (!category) {
        return res.status(404).json({
            status: "fail",
            message: "Category not found"
        });
    }

    res.status(200).json({
        status: "success",
        data: {
            category
        }
    });
};
// // Function to create a new category
export const createCategory = (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            status: "fail",
            message: "Name is required"
        });
    }

    const newCategory = {
        id: categories.length + 1,
        name
    };

    categories.push(newCategory);

    res.status(201).json({
        status: "success",
        data: {
            category: newCategory
        }
    });
};
// // Function to update a category by ID
export const updateCategory = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const category = categories.find(category => category.id === parseInt(id));

    if (!category) {
        return res.status(404).json({
            status: "fail",
            message: "Category not found"
        });
    }

    if (!name) {
        return res.status(400).json({
            status: "fail",
            message: "Name is required"
        });
    }

    category.name = name;

    res.status(200).json({
        status: "success",
        data: {
            category
        }
    });
};
// // Function to delete a category by ID
export const deleteCategory = (req, res) => {
    const { id } = req.params;

    const categoryIndex = categories.findIndex(category => category.id === parseInt(id));

    if (categoryIndex === -1) {
        return res.status(404).json({
            status: "fail",
            message: "Category not found"
        });
    }

    categories.splice(categoryIndex, 1);

    res.status(204).json({
        status: "success",
        data: null
    });
};