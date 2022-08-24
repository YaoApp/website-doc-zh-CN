# 复用 JSON 描述

<blockquote>
  <p> 数据表格的组件描述、过滤器描述可以在多张数据表格间复用。</p>
  <p>
    常见的数据模型，数据流，JS编写的处理器，可以在<a href="#">创意工坊</a>
    中找到相应模板，不用重头编写。
  </p>
</blockquote>

## JSON 片段复用

可以将多次使用的 JSON 描述片段，放置到应用 `libs` 目录，使用时通过 `@` 载入。

### 组件描述复用

编写 `c.json`， 添加表格组件描述， 放置到 `libs` 目录。

<Detail title="查看源码">

```json
{
  "Label": {
    "__comment": "{ '@': 'c.Label', 'in': ['更新时间',':updated_at']}",
    "label": "{{$in.0}}",
    "view": {
      "name": "label",
      "props": {
        "value": "{{$in.1}}"
      }
    }
  },
  "单品弹窗": {
    "__comment": "{ '@': 'c.单品弹窗'}",
    "label": "单品",
    "view": {
      "type": "formModal",
      "props": {
        "type": "view",
        "value": ":sku_name",
        "formId": ":sku.id",
        "formName": "material.sku"
      }
    }
  },
  "所属单品": {
    "__comment": "{ '@': 'c.所属单品'}",
    "label": "单品",
    "view": {
      "name": "label",
      "props": {
        "value": ":material.name"
      }
    },
    "edit": {
      "type": "select",
      "props": {
        "value": ":sku_id",
        "allowClear": true,
        "searchable": true,
        "remote": {
          "api": "/api/sku/select",
          "query": {
            "select": ["id", "unit"],
            "limit": 500,
            "name": "unit"
          }
        }
      }
    }
  }
}
```

</Detail>

在数据表格描述文件中引用：

**描述文件内容:**

<Detail title="查看源码">

```json
{
  "name": "宠物",
  "version": "1.0.0",
  "decription": "宠物管理表格",
  "bind": { "model": "pet" },
  "apis": {},
  "columns": {
    "ID": { "@": "c.Label", "in": ["编号", ":id"] },
    "所属单品": { "@": "c.所属单品" },
    "单品弹窗": { "@": "c.单品弹窗" }
  },
  "list": {
    "primary": "id",
    "layout": {
      "columns": [
        { "name": "ID", "width": 80 },
        { "name": "所属单品", "width": 100 },
        { "name": "单品弹窗", "width": 200 }
      ],
      "filters": []
    }
  }
}
```

</Detail>

### 过滤器复用

编写 `f.json`， 添加表格组件描述， 放置到 `libs` 目录。

<Detail title="查看源码">

```json
{
  "关键词": {
    "__comment": "{ '@': 'f.关键词', 'in': ['where.name.match']}",
    "label": "关键词",
    "bind": "{{$in.0}}",
    "input": {
      "type": "input",
      "props": {
        "placeholder": "请输入关键词"
      }
    }
  }
}
```

</Detail>

在数据表格描述文件中引用：

**描述文件内容:**

<Detail title="查看源码">

```json
{
  "name": "宠物",
  "version": "1.0.0",
  "decription": "宠物管理表格",
  "bind": { "model": "pet" },
  "apis": {},
  "columns": {
    "ID": { "@": "c.Label", "in": ["编号", ":id"] },
    "所属单品": { "@": "c.所属单品" },
    "单品弹窗": { "@": "c.单品弹窗" }
  },
  "filters": {
    "关键词": { "@": "f.关键词", "in": ["where.name.match"] }
  },
  "list": {
    "primary": "id",
    "layout": {
      "columns": [
        { "name": "ID", "width": 80 },
        { "name": "所属单品", "width": 100 },
        { "name": "单品弹窗", "width": 200 }
      ],
      "filters": [{ "name": "关键词" }]
    }
  }
}
```

</Detail>

<Div style={{ display: "flex", justifyContent: "space-between" }}>
  <Link
    type="prev"
    title="使用会话数据"
    link="c.高级特性/g.使用会话数据"
  ></Link>
  <Link
    type="next"
    title="编写第三方插件"
    link="c.高级特性/i.编写第三方插件"
  ></Link>
</Div>
