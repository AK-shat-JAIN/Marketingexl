// API router to submit the form

const express = require('express');
const formRouter = express.Router();
const Form = require('../models/form');

formRouter.post('/submit', async (req, res) => {
    try {
        const { name, email, phone, packages, chooseService } = req.body;

        // Validate fields in the request body to avoid unwanted fields in the database.
        const VALID_FIELDS = ['name', 'email', 'phone', 'packages', 'chooseService'];
        const isValidOperation = Object.keys(req.body).every((field) => VALID_FIELDS.includes(field));
        if (!isValidOperation) {
            return res.status(400).send({ error: 'Invalid fields' });
        }

        // Check if user already present using email
        const existingUser = await Form.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ error: 'User already exists' });
        }

        const form = new Form({
            name,
            email,
            phone,
            packages,
            chooseService
        });
        await form.save();
        res.status(201).send(form);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = formRouter;