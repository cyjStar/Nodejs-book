import SMERouter from 'sme-router'
import angel from '@utils/angel'
import appHomeController from '@controllers/home/app-home-controllers'
import appBookPublishController from '@controllers/book/app-book-publish-controller'
import appBookItemsController from '@controllers/book/app-book-items-controller'

// 路由初始化
const init = () => {
    const router = new SMERouter('router-view')

    // 进入项目，没有hash值就加一个默认的
    if ( !location.hash ) {
        location.href = '#/home'
    }

    // 路由匹配到/home时，router-view渲染hash
    router.route('/home', appHomeController.router)
    router.route('/book/publish', appBookPublishController.router)
    router.route('/book/items', appBookItemsController.router)

    // 默认路由
    router.use((req, res, next) => {
        // 根据路由显示导航情况
        activeNavLink (req)
    })

    angel.on('go', router.go.bind(router))
}

function activeNavLink (req) {
    let route = req.route
    let firstRoute = route.split('/')[1] // 一级路由路径
    let $firstLi = $('.sidebar-menu>li')
    let length = $firstLi.length
    for (let i=0; i< length; i++){
        let $firstLiItem = $firstLi.eq(i)
        let ownDataRoute = $firstLiItem.data('route') // 一级li对应的路由属性data-route
        let ownRoute = ownDataRoute.split('/')[1]
        if ( ownRoute === firstRoute ) { // 判断一级路径哪个li能匹配
            $firstLiItem.addClass('active').siblings().removeClass('active')
            //判断这个li中又有哪个li能匹配到二级路由
            $firstLiItem.find('li').each(function () {
                if ( $(this).data('route') === route ) {
                    $(this).addClass('active').siblings().removeClass('active')
                }
            })
            break;
        }
    }
}

export default {
    init
}

