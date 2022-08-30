# Create

创建单条记录, 返回新创建记录的主键

## `create` 创建单条记录, 返回新创建记录的 ID

### 处理器

`models.模型名称.Create`

### 参数表

| 参数    | 类型       | 说明     | 示例                                               |
| ------- | ---------- | -------- | -------------------------------------------------- |
| args[0] | Object Row | 数据记录 | `{"name": "用户创建","manu_id": 2,"type": "user"}` |

### 返回值

`Integer` 新创建的记录 ID

## 示例一

### 数据模型

| 模型 | 模型定义                         |
| ---- | -------------------------------- |
| user | [模型描述文件](../examples/user) |

### 处理器

```json
models.user.Create
```

### 参数表

```json
[
  {
    "name": "用户创建",
    "manu_id": 2,
    "type": "user",
    "idcard": "23082619820207006X",
    "mobile": "13900004444",
    "password": "qV@uT1DI",
    "key": "XZ12MiPp",
    "secret": "wBeYjL7FjbcvpAdBrxtDFfjydsoPKhRN",
    "status": "enabled",
    "extra": { "sex": "女" }
  }
]
```

### 返回值

```json
106
```

## 外部引用

### 在业务逻辑(`Flow`) 中调用:

```json
{
  "nodes": [
    {
      "name": "user",
      "process": "models.user.Create",
      "args": [
        {
          "name": "用户创建",
          "manu_id": 2,
          "type": "user",
          "idcard": "23082619820207006X",
          "mobile": "13900004444",
          "password": "qV@uT1DI",
          "key": "XZ12MiPp",
          "secret": "wBeYjL7FjbcvpAdBrxtDFfjydsoPKhRN",
          "status": "enabled",
          "extra": { "sex": "女" }
        }
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
      "path": "/create",
      "method": "POST",
      "process": "models.user.Create",
      "in": [":payload"],
      "out": {
        "status": 200,
        "type": "application/json"
      }
    }
  ]
}
```

```bash
POST /api/user/create
```

`REQUEST PAYLOAD`

```json
{
  "name": "用户创建",
  "manu_id": 2,
  "type": "user",
  "idcard": "23082619820207006X",
  "mobile": "13900004444",
  "password": "qV@uT1DI",
  "key": "XZ12MiPp",
  "secret": "wBeYjL7FjbcvpAdBrxtDFfjydsoPKhRN",
  "status": "enabled",
  "extra": { "sex": "女" }
}
```

## 示例二

### 新建模型，新增`models/category.mod.json`文件，写入以下内容：

```json
{
  "name": "书籍分类",
  "table": {
    "name": "category",
    "comment": "书籍分类"
  },
  "columns": [
    {
      "label": "ID",
      "name": "id",
      "type": "ID",
      "comment": "ID",
      "primary": true
    },
    {
      "label": "父级id",
      "name": "parent_id",
      "type": "integer",
      "nullable": true
    },
    {
      "label": "分类名称",
      "name": "name",
      "type": "string",
      "length": 128,
      "index": true
    }
  ],
  "relations": {
    "book": {
      "type": "hasMany",
      "model": "book",
      "key": "category_id",
      "foreign": "id",
      "query": {}
    },
    "parent": {
      "type": "hasOne",
      "model": "category",
      "key": "id",
      "foreign": "parent_id",
      "query": {}
    }
  },
  "option": {
    "timestamps": true,
    "soft_deletes": true
  },
  "values": [
    {
      "id": 1,
      "parent_id": null,
      "name": "文史类"
    },
    {
      "id": 2,
      "parent_id": 1,
      "name": "历史"
    },
    {
      "id": 3,
      "parent_id": 1,
      "name": "古诗"
    },
    {
      "id": 4,
      "parent_id": null,
      "name": "理工类"
    },
    {
      "id": 5,
      "parent_id": 4,
      "name": "数学"
    },
    {
      "id": 6,
      "parent_id": 4,
      "name": "物理"
    }
  ]
}
```

### Cearte 新增:

```javascript
function Create() {
  return Process("models.category.create", {
    parent_id: 1,
    name: "英语",
  });
}
```

执行 `yao run scripts.test.Create`
