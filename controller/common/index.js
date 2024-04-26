import { waitlistModel } from "../../Models/Waitlist.js";

export const createWaitlist = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).send({ message: "Email is required" });
        }

        const newEntry = await waitlistModel.create({ email });
        res.status(201).send(newEntry);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};


export const getWaitlist = async (req, res) => {
    try {
        const entries = await waitlistModel.find({});
        res.status(200).send(entries);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};