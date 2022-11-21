# Connector 连接器

<blockquote>
  连接器用于与外部服务进行连接。 使用连接器，可以与 `MySQL` , `MongoDB`,
  `Redis`, `ElasticSearch` 等外部服务建立连接，与 `Store`, `Model` 等 Widgets
  绑定后访问数据。
</blockquote>

Connector DSL 文件放置在项目 `connectors` 文件夹下，命名为小写英文字母，扩展名为 `.conn.json` [查看示例](https://github.com/YaoApp/yao/tree/main/tests/connectors)

| 引擎版本 | 是否支持                                                         |
| -------- | ---------------------------------------------------------------- |
| v0.10.2  | **支持** [下载地址](https://github.com/YaoApp/website-doc-zh-CN) |
| v0.10.1  | 不支持                                                           |
| v0.9.2   | 不支持                                                           |
| v0.9.1   | 不支持                                                           |

<Detail title="查看源码">

```json
{
  "LANG": "1.0.0",
  "VERSION": "1.0.0",
  "label": "Mongo TEST",
  "type": "mongo",
  "options": {
    "db": "test",
    "hosts": [
      {
        "host": "$ENV.MONGO_TEST_HOST",
        "port": "$ENV.MONGO_TEST_PORT",
        "user": "$ENV.MONGO_TEST_USER",
        "pass": "$ENV.MONGO_TEST_PASS"
      }
    ],
    "params": { "maxPoolSize": 20, "w": "majority" }
  }
}
```

</Detail>

查看 [代码示例](#示例)

## Connector DSL

| 字段    | 类型   | 说明                                                        |
| ------- | ------ | ----------------------------------------------------------- |
| label   | String | 连接器名称                                                  |
| type    | ENUM   | 连接器类型, 当前支持 `mysql`, `sqlite3`, `mongo` 和 `redis` |
| options | Object | 连接器配置项                                                |

### MySQL Options

| 字段      | 类型          | 说明                                           |
| --------- | ------------- | ---------------------------------------------- |
| db        | String        | 数据库名称, 支持使用`$EVN.变量名` 读取环境变量 |
| charset   | String        | MySQL charset                                  |
| collation | String        | MySQL collation                                |
| parseTime | Boolen        | `true`                                         |
| hosts     | Array\<Host\> | 服务器列表                                     |

Host Object

| 字段    | 类型   | 说明                                                |
| ------- | ------ | --------------------------------------------------- |
| host    | String | MySQL Host, 支持使用`$EVN.变量名` 读取环境变量      |
| port    | String | MySQL Port, 支持使用`$EVN.变量名` 读取环境变量      |
| user    | String | MySQL User name, 支持使用`$EVN.变量名` 读取环境变量 |
| pass    | String | MySQL Password, 支持使用`$EVN.变量名` 读取环境变量  |
| primary | Boolen | `true` 为主库, `false`为从库                        |

### Redis Options

| 字段 | 类型   | 说明                                                |
| ---- | ------ | --------------------------------------------------- |
| host | String | Redis Host, 支持使用`$EVN.变量名` 读取环境变量      |
| port | String | Redis Port, 支持使用`$EVN.变量名` 读取环境变量      |
| user | String | Redis User name, 支持使用`$EVN.变量名` 读取环境变量 |
| pass | String | Redis Password, 支持使用`$EVN.变量名` 读取环境变量  |
| db   | String | Redis DB, 支持使用`$EVN.变量名` 读取环境变量        |

### Sqlite3 Options

| 字段 | 类型   | 说明                                               |
| ---- | ------ | -------------------------------------------------- |
| file | String | 数据库文件地址, 支持使用`$EVN.变量名` 读取环境变量 |

### MongoDB Options

| 字段   | 类型          | 说明                                                                                                             |
| ------ | ------------- | ---------------------------------------------------------------------------------------------------------------- |
| db     | String        | 数据库名称, 支持使用`$EVN.变量名` 读取环境变量                                                                   |
| hosts  | Array\<Host\> | 服务器列表                                                                                                       |
| params | Map           | 连接参数 [查看文档](https://www.mongodb.com/docs/drivers/go/current/fundamentals/connection/#connection-options) |

Host Object

| 字段 | 类型   | 说明                                                  |
| ---- | ------ | ----------------------------------------------------- |
| host | String | MongoDB Host, 支持使用`$EVN.变量名` 读取环境变量      |
| port | String | MongoDB Port, 支持使用`$EVN.变量名` 读取环境变量      |
| user | String | MongoDB User name, 支持使用`$EVN.变量名` 读取环境变量 |
| pass | String | MongoDB Password, 支持使用`$EVN.变量名` 读取环境变量  |

## 示例

### MySQL

`my.conn.json`

```json
{
  "LANG": "1.0.0",
  "VERSION": "1.0.0",
  "label": "MySQL 8.0 TEST",
  "type": "mysql",
  "version": "8.0.26",
  "options": {
    "db": "test",
    "charset": "utf8mb4",
    "parseTime": true,
    "hosts": [
      {
        "host": "$ENV.MYSQL_TEST_HOST",
        "port": "$ENV.MYSQL_TEST_PORT",
        "user": "$ENV.MYSQL_TEST_USER",
        "pass": "$ENV.MYSQL_TEST_PASS",
        "primary": true
      },
      {
        "host": "$ENV.MYSQL_TEST_HOST",
        "port": "$ENV.MYSQL_TEST_PORT",
        "user": "$ENV.MYSQL_TEST_USER",
        "pass": "$ENV.MYSQL_TEST_PASS"
      }
    ]
  }
}
```

### Redis

`redis.conn.json`

```json
{
  "LANG": "1.0.0",
  "VERSION": "1.0.0",
  "label": "Redis TEST",
  "type": "redis",
  "options": {
    "host": "$ENV.REDIS_TEST_HOST",
    "port": "$ENV.REDIS_TEST_PORT",
    "user": "$ENV.REDIS_TEST_USER",
    "pass": "$ENV.REDIS_TEST_PASS",
    "db": "1"
  }
}
```

### Sqlite

`sqlite.conn.json`

```json
{
  "LANG": "1.0.0",
  "VERSION": "1.0.0",
  "label": "SQLite TEST",
  "type": "sqlite3",
  "options": {
    "file": "$ENV.SQLITE_DB"
  }
}
```

### MongoDB

`mongo.conn.json`

```json
{
  "LANG": "1.0.0",
  "VERSION": "1.0.0",
  "label": "Mongo TEST",
  "type": "mongo",
  "options": {
    "db": "test",
    "hosts": [
      {
        "host": "$ENV.MONGO_TEST_HOST",
        "port": "$ENV.MONGO_TEST_PORT",
        "user": "$ENV.MONGO_TEST_USER",
        "pass": "$ENV.MONGO_TEST_PASS"
      }
    ],
    "params": { "maxPoolSize": 20, "w": "majority" }
  }
}
```

<Div style={{ display: "flex", justifyContent: "space-between" }}>
  <Link type="prev" title="Import" link="手册/Widgets/Import"></Link>
  <Link type="next" title="Task" link="手册/Widgets/Task"></Link>
</Div>
