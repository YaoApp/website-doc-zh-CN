# 使用 Query DSL 查询数据

Query DSL(Domain Specific Language) 用来描述数据查询条件，适用基于数据库实现的数据分析引擎，如 `Xu` 等。

## 1. 文档结构

数据查询的数据类型为 `Object QueryDSL`，通过 `select`, `wheres` 等字段描述查询条件，解析器将其转换为对应的 `SQL语句`。

数据表 `service` :

| id  | industries       | city | score | created_at          | updated_at |
| --- | ---------------- | ---- | ----- | ------------------- | ---------- |
| 1   | ["旅游", "教育"] | 北京 | 99    | 2021-10-03 13:40:52 | NULL       |
| 2   | ["旅游", "教育"] | 上海 | 68    | 2021-10-03 13:40:52 | NULL       |
| 3   | ["旅游", "教育"] | 北京 | 92    | 2021-10-03 13:40:52 | NULL       |
| 4   | ["旅游", "教育"] | 上海 | 87    | 2021-10-03 13:40:52 | NULL       |
| 5   | ["旅游", "教育"] | 北京 | 71    | 2021-10-03 13:46:06 | NULL       |

Query DSL:

```json
{
  "comment": "统计各行业最高分",
  "select": ["@industries", "city", ":MAX(score) as high_score"],
  "from": "service",
  "wheres": [
    { "field": "created_at", "op": ">=", "value": "2021-01-01" },
    { "field": "created_at", "op": "<=", "value": "{'2021-12-31'}" },
    { "field": "{updated_at}", "op": "null" },
    {
      "wheres": [
        { "field": "type", "value": 1 },
        { "or": true, "field": "type", "value": 2 }
      ]
    }
  ],
  "orders": [{ "field": "high_score", "sort": "desc" }],
  "limit": 100,
  "groups": ["@industries", "city"]
}
```

解析后的 `SQL语句` 为 (MySQL 8):

```sql
SELECT `@industries`.`industries`,`city`, MAX(`score`) AS `high_score`
FROM `service`
JOIN JSON_TABLE(`service`.`industries`, '$[*]' columns (`industries` varchar(50) path '$') ) as `@industries`
WHERE `created_at` >= '2021-01-01'
  AND `created_at` <= '2021-12-31'
  AND `updated_at` IS NULL
  AND ( `type` = 1 OR `type` = 2)
GROUP BY `@industries`.`industries`, `city`
ORDER BY `high_score` DESC
```

返回结果:

| industries | city | high_score |
| ---------- | ---- | ---------- |
| 旅游       | 北京 | 99         |
| 教育       | 北京 | 99         |
| 旅游       | 上海 | 87         |
| 教育       | 上海 | 87         |

### Object QueryDSL 数据结构

| 字段      | 类型                      | 说明                                                                                                                                                                                                                        | 必填项 |
| --------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| select    | Array\<Field Expression\> | 选择字段列表 [查看文档](#1.1%20选择字段%20select)                                                                                                                                                                           | 是     |
| from      | String                    | 查询数据表名称或数据模型 [查看文档](#1.2%20选择数据表%20from)                                                                                                                                                               | 否     |
| wheres    | Array\<Object Where\>     | 数据查询条件 [查看文档](#1.3%20查询条件%20wheres)                                                                                                                                                                           | 否     |
| orders    | Array\<Object Order\>     | 排序条件 [查看文档](#1.4%20排序条件%20orders)                                                                                                                                                                               | 否     |
| offset    | Int                       | 记录开始位置 [查看文档](#1.5%20数量限定%20limit,%20offset,%20page,%20pagesize,%20data-only)                                                                                                                                 | 否     |
| limit     | Int                       | 读取数据的数量 [查看文档](#1.5%20数量限定%20limit,%20offset,%20page,%20pagesize,%20data-only)                                                                                                                               | 否     |
| page      | Int                       | 分页查询当前页面页码 [查看文档](#1.5%20数量限定%20limit,%20offset,%20page,%20pagesize,%20data-only)                                                                                                                         | 否     |
| pagesize  | Int                       | 每页读取记录数量 [查看文档](#1.5%20数量限定%20limit,%20offset,%20page,%20pagesize,%20data-only)                                                                                                                             | 否     |
| data-only | Bool                      | 设定为 `true`, 查询结果为 Array\<Object Record\>; 默认为 `false`, 查询结果为 Array\<Object Paginate\>, 仅在设定 `page` 或 `pagesize`时有效。 [查看文档](#1.5%20数量限定%20limit,%20offset,%20page,%20pagesize,%20data-only) | 否     |
| groups    | Array\<Object Group\>     | 聚合字段和统计层级设置。 [查看文档](#1.6.1%20使用示例)                                                                                                                                                                      | 否     |
| havings   | Array\<Object Having\>    | 聚合查询结果筛选, 仅在设定 `groups` 时有效。 [查看文档](#1.8.3%20用于%20HAVING%20场景)                                                                                                                                      | 否     |
| unions    | Array\<Object QueryDSL\>  | 联合查询。多个查询将结果合并为一张表 [查看文档](#1.7%20联合查询%20unions)                                                                                                                                                   | 否     |
| query     | Object QueryDSL           | 子查询。按 QueryDSL 描述查询逻辑，生成一张二维数据表或数值。 [查看文档](#1.8.1%20用于%20SELECT%20场景)                                                                                                                      | 否     |
| joins     | Array\<Object Join\>      | 表连接。连接数据量较大的数据表时 **不推荐使用**。 [查看文档](#Object%20Join%20数据结构)                                                                                                                                     | 否     |
| sql       | Object SQL                | SQL 语句。**非必要，勿使用**。 [查看文档](#2.1%20表达式)                                                                                                                                                                    | 否     |
| comment   | String                    | 查询条件注释，用于帮助理解查询条件逻辑和在开发平台中呈现。                                                                                                                                                                  | 否     |

### 1.1 选择字段 `select`

`select` 用来描述选择字段列表，数据类型为字段表达式字符串数组 `Array<Field Expression>` ，支持数据表字段名称、常量和函数；可以使用 `as` 对字段设置别名，别名视为主表字段名称，可在 `wheres`, `order`, `having` 中直接使用。

```json
{
  "select": [
    "name",
    "short_name as short",
    "*mobile",
    ":MAX(score) as high_score",
    "$extra",
    "$extra.sex as sex",
    "@prices",
    "@prices[0] as price",
    "@addresses[0].id as address_id",
    "t2.name as t2_name",
    "t2.short_name as t2_short",
    "0.618 as 黄金分割",
    "'enable' as 状态"
  ]
}
```

[查看字段表达式文档](#2-字段表达式-Field-Expression)

### 1.2 选择数据表 `from`

`form` 用来指定查询数据表名称或数据模型，数据类型为 `String`；

| 示例         | 表达式                  | 说明                                                                                                          |
| ------------ | ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| `goods`      | `数据表名称`            | 在 `goods` 数据表中查询                                                                                       |
| `goods as g` | `数据表名称 as 别名`    | 在 `goods` 数据表中查询, 设置别名为 `g`, `g.字段名称` 与 `goods.字段名称` 等价                                |
| `$user`      | `$数据模型名称`         | 在数据模型 `models.user` 关联的数据表(`xxx`)中查询，设置别名为 `user`, `user.字段名称` 与 `xxx.字段名称` 等价 |
| `$user as u` | `$数据模型名称 as 别名` | 在数据模型 `models.user` 关联的数据表(`xxx`)中查询， 设置别名为 `u`, `u.字段名称` 与 `xxx.字段名称` 等价      |

**说明**

- 可以使用 `$` 标识符，指定数据模型绑定的数据表。
- 可以使用 `as` 对数据表设置别名，别名支持中文，在表连接、字段引用等场景可以使用别名代替数据表名称。
- 如设置子查询 `query`([文档](#1.8.1%20用于%20SELECT%20场景))，解释器优先响应子查询逻辑，忽略 `from` 设定。 `query`和`from` 必填其一。

### 1.3 查询条件 `wheres`

`wheres` 用于描述数据查询条件，数据结构为 `Array<Object Where>`。

Gou Query DSL:

```json
{
  "wheres": [
    { "field": "created_at", "op": ">=", "value": "2020-01-01" },
    { "field": "created_at", "op": "<=", "value": "{'2020-12-31'}" },
    { "field": "created_at", "op": "<=", "value": "{updated_at}" },
    {
      "wheres": [
        { "field": "type", "value": 1 },
        { "or": true, "field": "type", "value": 2 }
      ]
    },
    {
      "comment": "限定范围: 仅列出有效厂商",
      "field": "manu_id",
      "op": "in",
      "query": {
        "select": ["id"],
        "from": "$manu",
        "wheres": [{ "field": "status", "value": "enabled" }]
      }
    }
  ]
}
```

解析后的 `SQL语句` 为:

```sql
  WHERE `created_at` >=  '2020-01-01'
    AND `created_at` <=  '2020-12-31'
    AND `created_at` <=  `updated_at`
    AND (
      `type` = 1 OR `type` = 2
    )
    AND `manu_id` IN (SELECT `id` FROM `manu` WHERE `status` = 'enabled' )
```

#### Object Where 数据结构

| 字段    | 类型                  | 说明                                                                                         | 必填项 |
| ------- | --------------------- | -------------------------------------------------------------------------------------------- | ------ |
| field   | Field Expression      | 字段表达式，不支持设置别名 `as`                                                              | 是     |
| value   | Any                   | 匹配数值。如果数据类型为 `Field Expression`, 用 `{}` 包括，如 `{updated_at}`                 | 否     |
| op      | String                | 匹配关系运算符。许可值 `=`,`like`,`in`,`>` 等，默认为 `=`                                    | 否     |
| or      | Bool                  | `true` 查询条件逻辑关系为 `or`, 默认为 `false` 查询条件逻辑关系为 `and`                      | 否     |
| wheres  | Array\<Object Where\> | 分组查询。用于 `condition 1` `and` ( `condition 2` OR `condition 3`) 的场景                  | 否     |
| query   | Object QueryDSL       | 子查询；如设定 `query` 则忽略 `value` 数值。 [查看子查询文档](#1.8.1%20用于%20SELECT%20场景) | 否     |
| comment | String                | 查询条件注释，用于帮助理解查询条件逻辑和在开发平台中呈现。                                   | 否     |

##### 匹配关系运算符

| 运算符    | 说明                             |
| --------- | -------------------------------- |
| `=`       | 默认值 等于 WHERE 字段 = 数值    |
| `>`       | 大于 WHERE 字段 > 数值           |
| `>=`      | 大于等于 WHERE 字段 >= 数值      |
| `<`       | 小于 WHERE 字段 < 数值           |
| `<=`      | 小于等于 WHERE 字段 <= 数值      |
| `like`    | 匹配 WHERE 字段 like 数值        |
| `match`   | 模糊匹配 WHERE 字段 match 数值   |
| `null`    | 为空 WHERE 字段 IS NULL          |
| `notnull` | 不为空 WHERE 字段 IS NOT NULL    |
| `in`      | 列表包含 WHERE 字段 IN (数值...) |











## 3. 查询结果

### 3.1 数据记录数组 `Array<Object Record>`

```json
[
  {
    "id": 2,
    "name": "象传高新（北京）数字科技有限公司"
  },
  {
    "id": 3,
    "name": "象传智慧（北京）软件科技有限公司"
  }
]
```


### 3.2 带分页信息的数据记录数组 `Object Paginate`

```json
{
  "data": [
    {
      "id": 2,
      "name": "象传高新（北京）数字科技有限公司"
    },
    {
      "id": 3,
      "name": "象传智慧（北京）软件科技有限公司"
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

| 字段     | 类型                   | 说明                          |
| -------- | ---------------------- | ----------------------------- |
| data     | Array\<Object Record\> | 数据记录集合                  |
| next     | Integer                | 下一页，如没有下一页返回 `-1` |
| prev     | Integer                | 上一页，如没有上一页返回 `-1` |
| page     | Integer                | 当前页码                      |
| pagesize | Integer                | 每页记录数量                  |
| pagecnt  | Integer                | 总页数                        |
| total    | Integer                | 总记录数                      |

### 3.3 数据记录数据结构 `Object Record`

Object Record 数据结构为:`[key:String]Any`

```json
{
  "id": 2,
  "link": {
    "label": "象传智慧",
    "url": "https://www.iqka.com"
  },
  "logo": null,
  "name": "象传高新（北京）数字科技有限公司",
  "rank": 9999999,
  "short_name": "象传高新",
  "status": "enabled",
  "summary": null,
  "type": "服务商",
  "updated_at": null
}
```
