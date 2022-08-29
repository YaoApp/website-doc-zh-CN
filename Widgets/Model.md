# 数据模型

一个数据模型对应数据库中的一张数据表, 通过 JSON 文件描述数据表结构，放置在
models 目录中。使用 yao migrate 命令创建/更新数据表结构设计。

## 处理器清单

| 处理器                                 | 说明                                                                       | 文档                                                                                      |
| -------------------------------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| models.<模型名称\>.Find                | 查询单条记录                                                               | [查看](https://github.com/YaoApp/docs-yao/blob/main/model/process/Find.md)                |
| models.<模型名称\>.Get                 | 按条件查询, 不分页                                                         | [查看](https://github.com/YaoApp/docs-yao/blob/main/model/process/Get.md)                 |
| models.<模型名称\>.Paginate            | 按条件查询, 分页                                                           | [查看](https://github.com/YaoApp/docs-yao/blob/main/model/process/Paginate.md)            |
| models.<模型名称\>.Create              | 创建单条记录, 返回新创建记录 ID                                            | [查看](https://github.com/YaoApp/docs-yao/blob/main/model/process/Create.md)              |
| models.<模型名称\>.Update              | 更新单条记录                                                               | [查看](https://github.com/YaoApp/docs-yao/blob/main/model/process/Update.md)              |
| models.<模型名称\>.Save                | 保存单条记录, 不存在创建记录, 存在更新记录, 返回记录 ID                    | [查看](https://github.com/YaoApp/docs-yao/blob/main/model/process/Save.md)                |
| models.<模型名称\>.Delete              | 删除单条记录(标记删除)                                                     | [查看](https://github.com/YaoApp/docs-yao/blob/main/model/process/Delete.md)              |
| models.<模型名称\>.Destroy             | 删除单条记录(真删除)                                                       | [查看](https://github.com/YaoApp/docs-yao/blob/main/model/process/Destroy.md)             |
| models.<模型名称\>.Insert              | 插入多条记录, 返回插入行数                                                 | [查看](https://github.com/YaoApp/docs-yao/blob/main/model/process/Insert.md)              |
| models.<模型名称\>.UpdateWhere         | 按条件更新记录, 返回更新行数                                               | [查看](https://github.com/YaoApp/docs-yao/blob/main/model/process/UpdateWhere.md)         |
| models.<模型名称\>.DeleteWhere         | 按条件删除数据, 返回删除行数(标记删除)                                     | [查看](https://github.com/YaoApp/docs-yao/blob/main/model/process/DeleteWhere.md)         |
| models.<模型名称\>.DestroyWhere        | 按条件删除数据, 返回删除行数(真删除)                                       | [查看](https://github.com/YaoApp/docs-yao/blob/main/model/process/DestroyWhere.md)        |
| models.<模型名称\>.EachSave            | 保存多条记录, 不存在创建记录, 存在更新记录, 返回记录 ID 集合               | [查看](https://github.com/YaoApp/docs-yao/blob/main/model/process/EachSave.md)            |
| models.<模型名称\>.EachSaveAfterDelete | 删除一组给定 ID 的记录后，保存多条记录, 不存在创建, 存在更新, 返回 ID 集合 | [查看](https://github.com/YaoApp/docs-yao/blob/main/model/process/EachSaveAfterDelete.md) |

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

<Notice type="success">
  提示：<strong>option.timestamps</strong> 为 true, 自动创建
  <strong>created_at</strong> 和 <strong>updated_at</strong> 字段, 用于保存数据记录的创建时间和更新时间。
  <strong>option.soft_deletes</strong> 为 true, 自动创建
  <strong>deleted_at</strong> 字段, 用于标记删除记录。
</Notice>

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

数据迁移执行 `yao migrate -n XXX`，比如这个模型应该执行 `yao migrate -n category`

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
