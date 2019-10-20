# LoRa-NB

## 发布流程

1. 本机clone代码：`git clone -b base-station git@github.com:HuMoran/react-template.git`
2. 安装依赖：`cd react-template && npm install`
3. 编译：`npm run build`
4. 上传代码到服务器：`scp -i xx.pem -r build xx@xx.xx.xx.xx:~/`
5. 服务器安装node环境：
`wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.0/install.sh | bash`
`source ~/.bashrc`
`nvm install 12`
6. 服务器安装serve:`npm install -g serve`
7. 服务器启动WEB服务：`cd build && serve -l 8088 &`
8. 浏览器打开[URL](http://52.83.48.13:8088)
