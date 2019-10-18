# npm包制作与发布

* `npm init` 初始化项目,可以直接输入内容或者创建完后修改.
  * 生成文件内容字段解释如下:
    * name：发布的包名，默认是上级文件夹名。不得与现在npm中的包名重复。包名不能有大写字母/空格/下滑线!
    * version：你这个包的版本，默认是1.0.0。对于npm包的版本号有着一系列的规则，模块的版本号采用X.Y.Z的格式，具体体现为：
      * 1、修复bug，小改动，增加z。
      * 2、增加新特性，可向后兼容，增加y
      * 3、有很大的改动，无法向下兼容,增加x
    * description：项目描述(如果有README文件会引入内容)
    * mian：入口文件，默认是Index.js，可以修改成自己的文件 
    * scripts：包含各种脚本执行命令
    * test：测试命令。
    * author：写自己的账号名
    * license：这个直接回车，开源文件协议吧，也可以是MIT，看需要吧。
    * repository: 用git同步的会有指向gitclone的地址
    * bugs:git
    * homepage: 如果是用git同步的文件夹会有指向git的地址
* 根目录建立一个`index.js` 主入口文件
* 终端命令注释:
  * `npm adduser` 添加npm用户([先去创建一个npm账户](https://www.npmjs.com/))
  * `npm login` 登录
  * `npm publish` 发布()
  

