import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    stockId: String,
    stockType: String,
    stockPic: String,
    brand: String,
    category: String,
    amount: {
        type: Number,
        default: 0
    },
    rcvQuan: {
        type: Number,
        default: 0
    },
    remQuan: {
        type: Number,
        default: 0
    },
    useQuan: {
        type: Number,
        default: 0
    },
    expDate: {
        type: Date,
        default: new Date()
    },
    rcvDate: {
        type: Date,
        default: new Date()
    },
    location: String,
    supId: String,
    sOrderId: String
});

const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage;