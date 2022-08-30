# Insert

插入多条数据记录，返回插入行数

## `insert` 插入多条记录, 返回插入行数

### 处理器

`models.模型名称.Insert`

### 参数表

| 参数    | 类型                  | 说明         | 示例                            |
| ------- | --------------------- | ------------ | ------------------------------- |
| args[0] | Array\<String\>       | 字段清单     | `["user_id", "province"]`       |
| args[1] | Array\<Array\<Any\>\> | 数据记录集合 | `[[4, "北京市"],[4, "天津市"]]` |

### 返回值

`Integer` 插入行数

## 示例一

### 数据模型

| 模型    | 模型定义                                 |
| ------- | ---------------------------------------- |
| address | [模型描述文件](../examples/address) |

### 处理器

```json
models.address.Insert
```

### 参数表

```json
[
  ["user_id", "province", "city", "location"],
  [
    [4, "北京市", "丰台区", "银海星月9号楼9单元9层1024室"],
    [4, "天津市", "塘沽区", "益海星云7号楼3单元1003室"]
  ]
]
```

### 返回值

```json
2
```

## 外部引用

### 在业务逻辑(`Flow`) 中调用:

```json
{
  "nodes": [
    {
      "name": "address",
      "process": "models.address.Insert",
      "args": [
        ["user_id", "province", "city", "location"],
        [
          [4, "北京市", "丰台区", "银海星月9号楼9单元9层1024室"],
          [4, "天津市", "塘沽区", "益海星云7号楼3单元1003室"]
        ]
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
      "path": "/insert",
      "method": "POST",
      "process": "models.address.Insert",
      "in": ["$payload.columns", "$payload.data"],
      "out": {
        "status": 200,
        "type": "application/json"
      }
    }
  ]
}
```

```bash
POST /api/address/insert
```

`REQUEST PAYLOAD`

```json
{
  "columns": ["user_id", "province", "city", "location"],
  "data": [
    [4, "北京市", "丰台区", "银海星月9号楼9单元9层1024室"],
    [4, "天津市", "塘沽区", "益海星云7号楼3单元1003室"]
  ]
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

### Insert 批量新增：

```javascript
function Insert() {
  return Process(
    "models.category.insert",
    ["parent_id", "name"],
    [
      [1, "语文"],
      [1, "地理"],
    ]
  );
}
```

执行 `yao run scripts.test.Insert`
