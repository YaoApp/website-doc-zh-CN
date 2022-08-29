# Docker

- 安装 Docker 下载安装 Docker

- 创建并启动容器: `docker run -d --restart unless-stopped --name yao -v <app root>:/data/app -p <Port>:5099 yaoapp/yao:0.10.1-amd64`

**Yao Docker Images**

| 镜像                    | 环境     | 使用场景              |
| ----------------------- | -------- | --------------------- |
| yaoapp/yao:0.10.1-amd64 | 生产环境 | 适用于云主机物理机    |
| yaoapp/yao:0.10.1-arm64 | 生产环境 | 适用于 ARM64 设备部署 |

检查服务状态:

```bash
curl http://127.0.0.1:<Port>/api/xiang/ping
```
