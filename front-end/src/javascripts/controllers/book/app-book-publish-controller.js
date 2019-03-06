import appBookPublish from '@views/routes/app-book-publish.html'
import { postBookItem } from '@models/book-model'

const render = (req, res, next) => {
    res.render(appBookPublish)
    // 初始化日历插件
    $('#datepicker').date_input()
    bindEvents() // 绑定各种事件

}

function bindEvents () {
    $('#publish-form').submit(async function(e){
        e.preventDefault()
        let title = $('#item-title').val()
        let description = $('#item-description').val()
        let star = $('#item-star').val()
        let showTime = $('#datepicker').val()
        console.log(title, description, star, showTime)

        let data = await postBookItem({
            title, description, star, showTime
        })
        console.log(data)

    })
}

export default {
    render
}