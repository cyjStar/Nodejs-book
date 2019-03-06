# 风神书籍信息管理系统前后端项目
采取的开发结构（数据渲染采用BSR）是前后端分离开发（部署的时候也是前后端分离）

### 前端架构

主体结构：RMVC ； SPA + MPA （index + admin）

View: 视图编译采用template-web.js（artTemplate）

Router: SME-Router

环境搭建：

采用Webpack 4.0开发

UI框架：AdminLTE

JS编译处理：

webpack 4 + babel 7

#### 数据结构

> 图书编号 _id ---- 
> 书名 name ---- String
> 封面 cover
> 作者 writer ----- String
> 出版社 press ----- String
> 出版日期 date ----- 
> ISBN isbn(国际标准图书编号)
> 版次 edition
> 定价 price
> 数量 number