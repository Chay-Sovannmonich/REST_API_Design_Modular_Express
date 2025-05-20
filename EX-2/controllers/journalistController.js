import { journalists } from "../models/data.js";

// // Function to get all journalists
export const getAllJournalists = (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            journalists
        }
    });
};
// // Function to get a single journalist by ID
export const getJournalistById = (req, res) => {
    const { id } = req.params;
    const journalist = journalists.find(journalist => journalist.id === parseInt(id));

    if (!journalist) {
        return res.status(404).json({
            status: "fail",
            message: "Journalist not found"
        });
    }

    res.status(200).json({
        status: "success",
        data: {
            journalist
        }
    });
};
// // Function to create a new journalist
export const createJournalist = (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            status: "fail",
            message: "All fields are required"
        });
    }

    const newJournalist = {
        id: journalists.length + 1,
        name,
        email
    };

    journalists.push(newJournalist);

    res.status(201).json({
        status: "success",
        data: {
            journalist: newJournalist
        }
    });
};
// // Function to update a journalist by ID
export const updateJournalist = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    const journalist = journalists.find(journalist => journalist.id === parseInt(id));

    if (!journalist) {
        return res.status(404).json({
            status: "fail",
            message: "Journalist not found"
        });
    }

    if (name) journalist.name = name;
    if (email) journalist.email = email;

    res.status(200).json({
        status: "success",
        data: {
            journalist
        }
    });
};
// // Function to delete a journalist by ID
export const deleteJournalist = (req, res) => {
    const { id } = req.params;
    const journalistIndex = journalists.findIndex(journalist => journalist.id === parseInt(id));

    if (journalistIndex === -1) {
        return res.status(404).json({
            status: "fail",
            message: "Journalist not found"
        });
    }

    journalists.splice(journalistIndex, 1);

    res.status(204).json({
        status: "success",
        data: null
    });
};

