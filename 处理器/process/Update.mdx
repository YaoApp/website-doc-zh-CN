# Update

更新指定主键的单条数据记录

## `update` 更新单条记录

### 处理器

`models.模型名称.Update`

### 参数表

| 参数    | 类型       | 说明     | 示例               |
| ------- | ---------- | -------- | ------------------ |
| args[0] | Object Row | 模型主键 | `1`                |
| args[1] | Object Row | 数据记录 | `{"balance": 200}` |

### 返回值

`null` 无返回值

## 示例一

### 数据模型

| 模型 | 模型定义                              |
| ---- | ------------------------------------- |
| user | [模型描述文件](../examples/user.json) |

### 处理器

```json
models.user.Update
```

### 参数表

```json
[
  1,
  {
    "balance": 200
  }
]
```

### 返回值

```json
null
```

## 外部引用

### 在业务逻辑(`Flow`) 中调用:

```json
{
  "nodes": [
    {
      "name": "user",
      "process": "models.user.Update",
      "args": [
        1,
        {
          "balance": 200
        }
      ],
      "outs": []
    }
  ]
}
```

### 在服务接口(`API`) 中调用:

```json
{
  "paths": [
    {
      "path": "/update/:id",
      "method": "POST",
      "process": "models.user.Update",
      "in": ["$params.id", ":payload"],
      "out": {
        "status": 200
      }
    }
  ]
}
```

```bash
POST /api/user/update/1
```

`REQUEST PAYLOAD`

```json
{
  "balance": 200
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

### Update 更新，第一个参数为 id，第二个参数为更新对象：

```javascript
function Update() {
  return Process("models.category.update", 9, {
    parent_id: 1,
    name: "英语",
  });
}
```

执行`yao run scripts.test.Update`
