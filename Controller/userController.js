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
        res.status(200).json({message : "User added successfully"});
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};

const getAllUser = async (req, res) => {
    try {
        const userData = await data.find();
        if (!userData || userData.length === 0) {
            return res.status(404).json({ message: "User Not Found !!" });
        }
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};

const getUserByid = async (req,res) => {
try {
    const id = req.params.id;
    const userExist = await data.findById(id);
    if(!userExist){
        return res.status(404).json({ message: "User Not Found !!" });
    }
    res.status(200).json(userExist)
} catch (error) {
    res.status(500).json({ errorMessage: error.message });
}
}
const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await data.findById(id);
        if(!userExist){
            return res.status(404).json({ message: "User Not Found !!" });
        }
       const updatedData = await data.findByIdAndUpdate(id, req.body,{
            new: true
        })
        res.status(200).json(updatedData)
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await data.findById(id);
        if(!userExist){
            return res.status(404).json({ message: "User Not Found !!" });
        }
        await data.findByIdAndDelete(id)
        res.status(200).json({message: "user deleted successfully"})
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}
module.exports = { create, getAllUser, getUserByid, updateUser, deleteUser };
