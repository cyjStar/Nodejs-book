import appBookItems from '@views/routes/app-book-items.html'
import { getBookItems } from '@models/book-model'

const render = async (req, res, next) => {
    let data = await getBookItems()
    console.log(data,'书籍信息-con..book..item')
    res.render(
        template.compile(appBookItems)({
            items: data
        })
    )

}

export default {
    render
}