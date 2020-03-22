# nextjs

## 使用
## 调试

### webstorm调试
因为next.js存在服务端运行的代码，所以有一些代码需要调试时，仅仅通过黑漆漆的终端来查看，或者
调试，对前端工程师而言，不是那么友好，希望可以利用好webstorm来打断点，这样调试会事半功倍。

#### 启动工程

![debug模式启动项目](https://tva1.sinaimg.cn/large/00831rSTgy1gd1ui243wfj305p012q2p.jpg)

#### IDE插入断点

![IDE插入断点](https://tva1.sinaimg.cn/large/00831rSTgy1gd1uk7f05lj30mp0aeglr.jpg)

#### 查看

![查看](https://tva1.sinaimg.cn/large/00831rSTgy1gd1uknp8ylj30oi07n3yr.jpg)

## 构建

![](https://tva1.sinaimg.cn/large/00831rSTgy1gd2euxlx8kj30rm0j0wf0.jpg)

## 三个关键方法

`getStaticProps`

|API  | 用途  | 原理  |
|:-:|:-:|:-:|:-:|:-:|
|`getStaticProps`   | pre-render page using props return by it  |   |
| `getStaticPaths`  | pre-render dynamic page  |   |
| `getServerSideProps`  | You should use getServerSideProps only if you need to pre-render a page whose data must be fetched at request time  |   |
