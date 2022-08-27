# 数据表格

编写 JSON 页面描述，将其放置在 `tables`
目录中，即可实现一套数据列表、数据展示和数据编辑的界面。

## 示例

### 新建书籍分类表格 `tables/category.tab.json`代码:

```json
{
  "name": "分类列表",
  "version": "1.0.0",
  "decription": "分类列表",
  "bind": {
    "model": "category",
    "withs": {
      "parent": {}
    }
  },
  "apis": {},
  "columns": {
    "ID": {
      "label": "ID",
      "view": { "type": "label", "props": { "value": ":id" } }
    },

    "父类": {
      "label": "父类",
      "view": {
        "type": "label",
        "props": {
          "value": ":parent.name"
        }
      },
      "edit": {
        "type": "input",
        "props": {
          "value": ":parent_id"
        }
      }
    },
    "分类名称": {
      "label": "分类名称",
      "view": {
        "type": "label",
        "props": {
          "value": ":name"
        }
      },
      "edit": {
        "type": "input",
        "props": {
          "value": ":name"
        }
      }
    }
  },
  "filters": {
    "分类名称": {
      "label": "分类名称",
      "bind": "where.name.match",
      "input": {
        "type": "input",
        "props": { "placeholder": "分类名称" }
      }
    }
  },
  "list": {
    "primary": "id",
    "layout": {
      "columns": [
        { "name": "ID", "width": 80 },
        { "name": "父类", "width": 200 },
        { "name": "分类名称", "width": 200 }
      ],
      "filters": [{ "name": "分类名称" }]
    },
    "actions": {
      "pagination": { "props": { "showTotal": true } },
      "create": {
        "props": { "label": "添加分类" }
      }
    },
    "option": { "operation": { "unfold": true } }
  },
  "edit": {
    "primary": "id",
    "layout": {
      "fieldset": [
        {
          "columns": [
            { "name": "父类", "width": 200 },
            { "name": "分类名称", "width": 200 }
          ]
        }
      ]
    },
    "actions": {
      "cancel": {},
      "save": {},
      "delete": { "type": "button", "props": { "label": "Delete" } }
    },
    "option": { "dev": false }
  }
}
```

## 命名规范

### 每一个表格应当都包含以下结构

```json
{
  "name": "表格标题",
  "version": "1.0.0",
  "decription": "表格描述",
  "bind": {
    "model": "绑定模型",
    "withs": {}
  },
  "apis": {},
  "columns": {},
  "filters": {},
  "list": {
    "primary": "id",
    "layout": {
      "columns": [],
      "filters": []
    },
    "actions": {
      "pagination": { "props": { "showTotal": true } },
      "create": {
        "props": { "label": "添加分类" }
      }
    },
    "option": { "operation": { "unfold": true } }
  },
  "edit": {
    "primary": "id",
    "layout": {
      "fieldset": [
        {
          "columns": []
        }
      ]
    },
    "actions": {
      "cancel": {},
      "save": {},
      "delete": { "type": "button", "props": { "label": "Delete" } }
    },
    "option": { "dev": false }
  }
}
```

## DSL 结构

| 字段       | 说明                                                     |
| ---------- | -------------------------------------------------------- |
| name       | 名称                                                     |
| decription | 描述                                                     |
| bind.model | 绑定对应数据库表名称                                     |
| bind.withs | 关联关系                                                 |
| apis       | 重写 search,save,delete 的时候，可以把指定的方法写在这里 |
| columns    | 组件描述                                                 |
| filters    | 筛选条件组件描述                                         |
| list       | 列表页面设置                                             |
| edit       | 详情页面描述                                             |

## 处理器清单

### 列表搜索：`xiang/table/表格名称/search`

### 保存/新增搜索：`xiang/table/表格名称/save`

### 删除`xiang/table/表格名称/delete`
