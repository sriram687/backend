import userModel from "../models/userModel.js";


//route for user login
const loginUser = async (req , res) => {


}

const registerUser = async(req,res) => {

    try{
        const {name, email, password} = req.body;

        const exists = await userModel.findOne({email})  //checking user already exists or not
    }catch(error){

    }


}
const adminLogin = async ( req, res) => {

}

export { loginUser, registerUser, adminLogin }