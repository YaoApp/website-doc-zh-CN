# Destroy

真删除指定主键的单条数据记录.

## `destroy` 删除单条记录(真删除)

### 处理器

`models.模型名称.Destroy`

### 参数表

| 参数    | 类型       | 说明     | 示例 |
| ------- | ---------- | -------- | ---- |
| args[0] | Object Row | 模型主键 | `1`  |

### 返回值

`null` 无返回值

## 示例一

### 数据模型

| 模型 | 模型定义                              |
| ---- | ------------------------------------- |
| user | [模型描述文件](../examples/user.json) |

### 处理器

```json
models.user.Destroy
```

### 参数表

```json
[1]
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
      "process": "models.user.Destroy",
      "args": [1],
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
      "path": "/destroy/:id",
      "method": "POST",
      "process": "models.user.Destroy",
      "in": ["$params.id"],
      "out": {
        "status": 200
      }
    }
  ]
}
```

```bash
POST /api/user/destroy/1
```

## 示例二

### 新建模型，新增`models/category.mod.json`文件，写入以下内容:

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

### Destroy 直接从数据库中删除:

```javascript
function Destroy() {
  return Process("models.category.destroy", 9, {});
}
```

运行 `yao run scripts.test.Destroy`
