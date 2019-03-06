import angel from '@utils/angel'
import appHeader from '@views/layout/app-header.html'
import appNav from '@views/layout/app-nav.html'
import appContent from '@views/layout/app-content.html'

const render = () => {
    let $wrapper = $('#app') // 主体容器
    $wrapper.append(appHeader)
    $wrapper.append(appContent)
    $wrapper.append(appNav)

    // 给导航添加点击事件
    $('.router-link').click(function () {
        let url = $(this).data('route') // 获取url
        angel.emit('go', url) // 进行跳转
    })
}

export default {
    render
}