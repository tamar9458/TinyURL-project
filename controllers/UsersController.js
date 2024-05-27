import link from "../models/link.js";
import users from "../models/user.js";

const UsersController = {

    getList: async (req, res) => {
        try {
            const getUsers = await users.find();//ללא סינון
            res.json({ getUsers });
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },

    getById: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await users.findById(id);//שליפה לפי מזהה
            res.json(user);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },

    add: async (req, res) => {
        try {
            const newUser = await users.create(req.body);//הוספת חדש
            res.json(newUser);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },
    update: async (req, res) => {
        const { id } = req.params
        try {
            const updatedUser = await users.findByIdAndUpdate(id, req.body, { new: true })
            res.json(updatedUser)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },

    delete: async (req, res) => {
        const { id } = req.params;
        try {
            const deleted = await users.findByIdAndDelete(id);//מחיקה לפי מזהה
            res.json(deleted);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },
};

export default UsersController;
