import { model } from "mongoose"
import UserSchema from "./content.schema"

export const UserModel = model("conents", UserSchema)