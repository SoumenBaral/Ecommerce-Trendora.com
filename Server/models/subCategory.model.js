import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema({
    name:{
        type:String,
        default:""
    },
    Image:{
        type: String,
        default:""
    },
    categoryId:{
        type: mongoose.Schema.ObjectId,
        ref: "category"
    }
},{
    timestamps:true
})
const SubCategory = mongoose.model("subCategory", subCategorySchema);
export default SubCategory;