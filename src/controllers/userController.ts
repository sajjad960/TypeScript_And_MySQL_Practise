import User from "../models/userModel";
import factory from "./handleFactory"

const createUser = factory.createOne(User);


// Export
const userController = {createUser};
export = userController;