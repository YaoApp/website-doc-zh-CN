# DestroyWhere

按条件真删除数据, 返回删除行数。

## `destroyWhere` 按条件真删除数据, 返回删除行数

### 处理器

`models.模型名称.DestroyWhere`

### 参数表

| 参数    | 类型              | 说明     | 示例                                             |
| ------- | ----------------- | -------- | ------------------------------------------------ |
| args[0] | Object QueryParam | 查询条件 | `{"wheres":[{"column":"name", "value":"张三"}]}` |

### 返回值

`Integer` 删除行数

## 示例一

### 数据模型

| 模型 | 模型定义                              |
| ---- | ------------------------------------- |
| user | [模型描述文件](../examples/user) |

### 处理器

```json
models.user.DestroyWhere
```

### 参数表

```json
[
  {
    "wheres": [{ "column": "status", "value": "enabled" }]
  }
]
```

### 返回值

```json
4
```

## 外部引用

### 在业务逻辑(`Flow`) 中调用:

```json
{
  "nodes": [
    {
      "name": "users",
      "process": "models.user.DestroyWhere",
      "args": [
        {
          "wheres": [{ "column": "status", "value": "enabled" }]
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
      "path": "/destroywhere",
      "method": "POST",
      "process": "models.user.DestroyWhere",
      "in": [":params"],
      "out": {
        "status": 200,
        "type": "application/json"
      }
    }
  ]
}
```

```bash
POST /api/user/destroywhere?where.status.eq=enabled
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

```javascript
function Destroywhere() {
  return Process("models.category.destroywhere", {
    wheres: [{ column: "parent_id", value: 4 }],
  });
}
```

运行 `yao run scripts.test.Destroywhere`
