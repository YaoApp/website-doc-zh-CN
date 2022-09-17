# YAO 中文文档

## YAO 0.10.2 下载

**注意: v0.10.2 正在持续迭代中, 功能随时调整, 不推荐用于生产环境**

### 制品下载

[yao-0.10.2-darwin-amd64 Intel](https://release-sv.yaoapps.com/archives/yao-0.10.2-darwin-amd64)

[yao-0.10.2-darwin-arm64 M1/M2](https://release-sv.yaoapps.com/archives/yao-0.10.2-darwin-arm64)

[yao-0.10.2-linux-amd64 Linux AMD64](https://release-sv.yaoapps.com/archives/yao-0.10.2-linux-amd64)

[yao-0.10.2-linux-arm64 Linux Arm64](https://release-sv.yaoapps.com/archives/yao-0.10.2-linux-arm64)

### Docker

```bash
docker run -d --name yao -v <project root>:/data/app -p 5099:5099 yaoapp/yao:0.10.2-amd64-dev
```

**Arm64, M1/M2**

```bash
docker run -d --name yao -v <project root>:/data/app -p 5099:5099 yaoapp/yao:0.10.2-arm64-dev
```
