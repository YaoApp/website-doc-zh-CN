# YAO 应用

文档: [https://yaoapps.com/doc](https://yaoapps.com/doc)

## 默认管理员账号

|      |                  |
| ---- | ---------------- |
| 账号 | `xiang@iqka.com` |
| 密码 | `A123456p+`      |

## 环境变量

| 变量名称          | 说明                                                             | 示例                     |
| ----------------- | ---------------------------------------------------------------- | ------------------------ |
| YAO_ENV           | 服务模式 `development` 或 `production`                           | `development`            |
| YAO_HOST          | 服务监听地址 `0.0.0.0`                                           | `127.0.0.1`              |
| YAO_PORT          | 服务监听端口默认为 `5099`                                        | `5066`                   |
| YAO_DB_DRIVER     | 数据库驱动 `sqlite3` 或 `mysql`                                  | `sqlite3`                |
| YAO_DB_PRIMARY    | 数据文件过驱动 DSN                                               | `/app/db/yao.db`         |
| YAO_LANG          | 语言 `en-us`,`zh-ch`                                             | `zh-cn`                  |
| YAO_LOG           | 日志文件地址                                                     | `./logs/application.log` |
| YAO_LOG_MODE      | 日志文件格式 `TEXT` 或 `JSON`                                    | `JSON`                   |
| YAO_SESSION_STORE | 会话存储方式 `file`或 `redis`                                    | `file`                   |
| YAO_SESSION_FILE  | 会话文件地址 `file`或 `redis`                                    | `/app/db/.session`       |
| YAO_STUDIO_PORT   | Studio API 服务端口默认为 `5077`                                 | `5077`                   |
| OPENAI_KEY        | OPENAI API KEY, 可在连接器中更换变量名。 启用 Neo 或 AIGC 必须。 | `sk-xxx`                 |

`.env` 文件

```bash
YAO_DB_DRIVER="sqlite3"
YAO_DB_PRIMARY="/app/db/yao.db"
YAO_ENV="development"
YAO_HOST="0.0.0.0"
YAO_LANG="zh-cn"
YAO_LOG="./logs/application.log"
YAO_LOG_MODE="TEXT"
YAO_PORT="5099"
YAO_SESSION_FILE="/app/db/.session"
YAO_SESSION_STORE="file"
YAO_STUDIO_PORT="5077"
OPENAI_KEY="sk-123456"
```
