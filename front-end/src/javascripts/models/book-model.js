import request from '@utils/request'

// 获取书籍信息
const getBookItems = () => {
    return request({
        url: '/api/v1/book/items'
    })
}

// 发布书籍信息
const postbookItem = (data) => {
    return request({
        url: '/api/v1/book/item',
        type: 'post',
        data,
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    })
}

export {
    getBookItems,
    postbookItem
}