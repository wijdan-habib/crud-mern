const data = require('../Model/userModel.js');

const create = async (req, res) => {
    try {
        const newUser = new data(req.body);
        const { email } = newUser;
        const userExist = await data.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "User already exists" });
        }
        const saveData = await newUser.save();
        res.status(200).json(saveData);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};

module.exports = { create };
