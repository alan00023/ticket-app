import mongoose, { mongo, Schema } from "mongoose";
import { stringify } from "postcss";
mongoose.connect(process.env.MONGODB_URI);

mongoose.Promise = global.Promise

const ticketSchema = new Schema(
    {
        title: { type: String, required: true }, // Updated field name
        description: { type: String }, // Add description if needed
        category: { type: String, required: true },
        priority: { type: Number, required: true },
        progress: { type: Number, required: true },
        status: { type: String, required: true },
        active: Boolean,
    },
    {
        timestamps:true,
    }
)


const Ticket = mongoose.models.Ticket || mongoose.model("Ticket",ticketSchema)

export default Ticket;