const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/book',{ useNewUrlParser: true })

// 书籍item Schema (规定文档的格式)
var bookItemSchema = new mongoose.Schema({
//     图书编号 _id ---- 
// > 书名 name ---- String
// > 封面 cover
// > 作者 writer ----- String
// > 出版社 press ----- String
// > 出版日期 date ----- 
// > ISBN isbn(国际标准图书编号)
// > 版次 edition
// > 定价 price
// > 数量 number
    name: String,
    cover: String,
    writer: String,
    press: String,
    date: Number,
    isbn: Number,
    edition: Number,
    price: Number,
    num: Number
});

// 单数会自动加s （集合）
var Items = mongoose.model('item', bookItemSchema)

// 获取书籍信息
const getBookItems = () => {
    return Items.find({}).exec()
}

// 发布新书
const postbookItem = (params) => {
    return Items.insertMany(params)
}

module.exports = {
    getBookItems,
    postbookItem
}
