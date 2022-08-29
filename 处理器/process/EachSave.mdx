# EachSave

保存多条记录, 不包含主键字段则创建记录, 存在更新记录, 返回记录 ID 集合 ，返回创建或更新的记录 ID 集合。

## `eachsave` 保存多条记录, 不存在创建记录, 存在更新记录, 返回记录 ID

### 处理器

`models.模型名称.EachSave`

### 参数表

| 参数    | 类型                | 必填项 | 说明                                                                                     | 示例                                         |
| ------- | ------------------- | ------ | ---------------------------------------------------------------------------------------- | -------------------------------------------- |
| args[0] | Array\<Object Row\> | 是     | 待保存数据记录集合                                                                       | `[{"id":1,"name": "张三"},{"name": "李四"}]` |
| args[1] | Object Row          | 否     | 共有字段，写入时合并到到每条数据记录；若字段数值为 `$index` 将替换为数据记录集合的 index | `{"manu_id": 2,"sort": "$index"}`            |

### 返回值

`Array<Integer>` 创建或更新的记录 ID 集合

## 示例

### 数据模型

| 模型 | 模型定义                              |
| ---- | ------------------------------------- |
| user | [模型描述文件](../examples/user.json) |

### 处理器

```json
models.user.EachSave
```

### 参数表

```json
[
  [
    {
      "id": 101,
      "name": "张三",
      "manu_id": 2,
      "type": "user",
      "idcard": "23082619820207006X",
      "mobile": "13900004444",
      "password": "qV@uT1DI",
      "key": "XZ12MiPp",
      "secret": "wBeYjL7FjbcvpAdBrxtDFfjydsoPKhRN",
      "status": "enabled",
      "extra": { "sex": "女" }
    },
    {
      "name": "李四",
      "type": "user",
      "idcard": "23082619820207003X",
      "mobile": "13900004444",
      "password": "qV@uT1DP",
      "key": "XZ12MiDp",
      "secret": "wBeYjL7FjbcvpAdBrxtDFfjydsoPKhRN",
      "status": "enabled",
      "extra": { "sex": "难" }
    }
  ],
  { "manu_id": 2, "balance": "$index" }
]
```

### 返回值

```json
[101, 107]
```

## 外部引用

### 在业务逻辑(`Flow`) 中调用:

```json
{
  "nodes": [
    {
      "name": "user",
      "process": "models.user.EachSave",
      "args": [
        [{ "id": 101, "name": "张三" }, { "name": "李四" }],
        { "manu_id": 2, "balance": "$index" }
      ],
      "outs": ["{{$out}}"]
    }
  ]
}
```

### 在服务接口(`API`) 中调用:

```json
{
  "paths": [
    {
      "path": "/save",
      "method": "POST",
      "process": "models.user.EachSave",
      "in": ["$payload.data", "$payload.query"],
      "out": {
        "status": 200,
        "type": "application/json"
      }
    }
  ]
}
```

```bash
POST /api/user/save
```

`REQUEST PAYLOAD`

```json
{
  "data": [{ "id": 101, "name": "张三" }, { "name": "李四" }],
  "query": { "manu_id": 2, "balance": "$index" }
}
```
