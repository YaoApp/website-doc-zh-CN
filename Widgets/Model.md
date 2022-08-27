# 数据模型

## Widgets 为我们提供了数据模型创建 JSON 描述来创建数据库表格

### 示例，新增 `models/ccategory.mod.json`文件

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

## 命名规范

```json
{
  "name": "数据表名称",
  "table": {
    "name": "数据库表名",
    "comment": "备注"
  },
  "columns": [],
  "relations": {},
  "option": {
    "timestamps": true,
    "soft_deletes": true
  },
  "values": []
}
```

## DSL 结构

| 字段          | 说明                       |
| ------------- | -------------------------- |
| name          | 模型名称                   |
| table         | 数据库字段设置属性         |
| table.name    | 数据库表名称               |
| table.comment | 数据表备注                 |
| columns       | 每个字段描述               |
| relations     | 模型与其他数据表的关联关系 |
| option        | 设置软删除                 |
| values        | 执行迁移时，默认填充的数据 |

## 处理器清单

数据迁移执行 `yao migrate -n XXX`，比如这个模型应该执行 `yao migrate -n category`