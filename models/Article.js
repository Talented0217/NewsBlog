const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    media: {
        type: String,
        required: false,  // Since not every post may have media
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    tags: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Tag',
            required: true
        }
    ],
    comments: [{
        commenter: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        content: {
            type: String,
        },
        at: {
            type: Date,
            default: Date.now
        }
    }],
    postDate: {
        type: Date,
        default: Date.now
    }


});

module.exports = mongoose.model('Article', ArticleSchema);