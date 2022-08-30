# Paginate

按条件查询数据记录, 返回符合条件、带有分页信息的数据对象

## `Paginate` 按条件查询, 不分页

### 处理器

`models.模型名称.Paginate`

### 参数表

| 参数    | 类型              | 说明         | 示例                                                                 |
| ------- | ----------------- | ------------ | -------------------------------------------------------------------- |
| args[0] | Object QueryParam | 查询条件     | `{"wheres":[{"column":"name", "value":"张三"}],"withs":{"manu":{}}}` |
| args[1] | Integer           | 当前页码     | `1`                                                                  |
| args[2] | Integer           | 每页记录数量 | `15`                                                                 |

### 返回值

`Object Paginate` 带有分页信息的数据对象

返回符合条件带有分页信息的数据对象, 其中数据记录集合 JSON 类型字段自动解析, AES 字段自动解密。 关联模型作为一个独立字段，字段名称为关联关系名称； hasOne 关联为数据记录 Object , hasMany 关联为数据记录数组 Array\<Object\>。

**Object Paginate 数据结构**

| 字段     | 类型                | 说明                          |
| -------- | ------------------- | ----------------------------- |
| data     | Array\<Object Row\> | 数据记录集合                  |
| next     | Integer             | 下一页，如没有下一页返回 `-1` |
| prev     | Integer             | 上一页，如没有上一页返回 `-1` |
| page     | Integer             | 当前页码                      |
| pagesize | Integer             | 每页记录数量                  |
| pagecnt  | Integer             | 总页数                        |
| total    | Integer             | 总记录数                      |

## 示例

### 数据模型

| 模型              | 模型定义                                 |
| ----------------- | ---------------------------------------- |
| user `主`         | [模型描述文件](../examples/user.json)    |
| manu `hasOne`     | [模型描述文件](../examples/manu.json)    |
| address `hasMany` | [模型描述文件](../examples/address.json) |

### 处理器

```json
models.user.Paginate
```

### 参数表

```json
[
  {
    "select": ["id", "name", "mobile", "status", "extra"],
    "withs": { "manu": {}, "mother": {}, "addresses": {} },
    "wheres": [{ "column": "status", "value": "enabled" }],
    "limit": 2
  },
  1,
  2
]
```

### 返回值

```json
{
  "data": [
    {
      "addresses": [
        {
          "city": "丰台区",
          "created_at": "2021-09-15T08:34:19+08:00",
          "deleted_at": null,
          "id": 2,
          "location": "北京国家数字出版基地A103",
          "province": "北京市",
          "status": "enabled",
          "updated_at": null,
          "user_id": 1
        }
      ],
      "extra": {
        "sex": "男"
      },
      "id": 1,
      "manu": {
        "contact_mobile": null,
        "contact_name": null,
        "created_at": "2021-09-15T08:34:14+08:00",
        "deleted_at": null,
        "desc": null,
        "id": 1,
        "link": null,
        "logo": null,
        "name": "北京云道天成科技有限公司",
        "rank": 9999999,
        "short_name": "云道天成",
        "status": "enabled",
        "summary": null,
        "type": "服务商",
        "updated_at": null
      },
      "mobile": "13900001111",
      "mother": {
        "extra": {
          "sex": "女"
        },
        "friends": {
          "friend_id": 2,
          "status": "enabled",
          "type": "monther"
        },
        "id": 2,
        "name": "员工",
        "secret": "wBeYjL7FjbcvpAdBrxtDFfjydsoPKhRN",
        "status": "enabled",
        "type": "staff"
      },
      "name": "管理员"
    },
    {
      "addresses": [
        {
          "city": "海淀区",
          "created_at": "2021-09-15T08:34:20+08:00",
          "deleted_at": null,
          "id": 3,
          "location": "华严北里7号楼7单元7层2048室",
          "province": "北京市",
          "status": "enabled",
          "updated_at": null,
          "user_id": 2
        }
      ],
      "extra": {
        "sex": "女"
      },
      "id": 2,
      "manu": {
        "contact_mobile": null,
        "contact_name": null,
        "created_at": "2021-09-15T08:34:14+08:00",
        "deleted_at": null,
        "desc": null,
        "id": 1,
        "link": null,
        "logo": null,
        "name": "北京云道天成科技有限公司",
        "rank": 9999999,
        "short_name": "云道天成",
        "status": "enabled",
        "summary": null,
        "type": "服务商",
        "updated_at": null
      },
      "mobile": "13900002222",
      "mother": {
        "extra": null,
        "friends": {
          "friend_id": null,
          "status": null,
          "type": null
        },
        "id": null,
        "name": null,
        "secret": null,
        "status": null,
        "type": null
      },
      "name": "员工"
    }
  ],
  "next": 2,
  "page": 1,
  "pagecnt": 2,
  "pagesize": 2,
  "prev": -1,
  "total": 3
}
```

## 外部引用

### 在业务逻辑(`Flow`) 中调用:

```json
{
  "nodes": [
    {
      "name": "users",
      "process": "models.user.Paginate",
      "args": [
        {
          "select": ["id", "name", "mobile", "status", "extra"],
          "withs": { "manu": {}, "mother": {}, "addresses": {} },
          "wheres": [{ "column": "status", "value": "enabled" }],
          "limit": 2
        },
        1,
        2
      ],
      "outs": ["{{$out.data}}"]
    }
  ]
}
```

### 在服务接口(`API`) 中调用:

```json
{
  "paths": [
    {
      "path": "/paginate",
      "method": "GET",
      "process": "models.user.Paginate",
      "in": [":params", "$params.page", "$params.pagesize"],
      "out": {
        "status": 200,
        "type": "application/json"
      }
    }
  ]
}
```

```bash
GET /api/user/paginate?withs=manu,mother,addresses&where.status.eq=enabled&&select=id,name,mobile,status,extra&page=1&pagesize=2
```
