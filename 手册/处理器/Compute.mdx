# Compute

<blockquote>
  <p>
    内建 Compute 处理器。在 Table, Form, Chart, 等 Widget 中使用时,
    可忽略命名空间, 填写处理器名称即可。
  </p>
</blockquote>

**约定**

1. 示例中约定应用根目录为 `/data/app`, 实际编写时需替换为应用根目录。
2. 示例中约定服务器地址为 `http://127.0.0.1:5099`, 实际编写时需自行替换。
3. 使用 `<>` 标识自行替换的内容。 例如: `icon-<图标名称>`, 实际编写时应替换为: `icon-foo`, `icon-bar` ...

## 处理器

| 处理器   | 参数表              | 返回值             | 说明                                   |
| -------- | ------------------- | ------------------ | -------------------------------------- |
| Get      | `[<字符串参数>]`    | `<字符串参数>`     | 读取数值 [示例](#get)                  |
| Trim     | `[<字符串参数>]`    |                    | 过滤首尾空格 [示例](#trim)             |
| Concat   | `[...<字符串参数>]` | `"value1value2.."` | 连接字符串 [示例](#concat)             |
| Hide     | `[]`                | `""` 空字符串      | 返回空字符串 [示例](#hide)             |
| Download |                     |                    | 将路径转换为下载地址 [示例](#download) |
| Upload   |                     |                    | 将下载地址转换为路径 [示例](#upload)   |

## 示例

### Get

```jsonc
{
  // ...
  // fields.table
  "名称": {
    "bind": "name",
    "view": {
      "bind": "name_view",
      "type": "Text",
      "compute": { "process": "Get", "args": ["$C(row.type)"] },
      "props": {}
    },
    "edit": {
      "bind": "name",
      "type": "Input",
      "props": { "placeholder": "请输入宠物名称" }
    }
  }
  // ...
}
```

### Trim

```jsonc
{
  // ...
  // fields.filter
  "名称": {
    "bind": "where.name.like",
    "edit": {
      "type": "Input",
      "compute": "Trim",
      "props": { "placeholder": "请输入宠物名称" }
    }
  }
  // ...
}
```

### Concat

```jsonc
{
  // ...
  // fields.table
  "名称": {
    "bind": "name",
    "view": {
      "bind": "name_view",
      "type": "Text",
      "compute": {
        "process": "Concat",
        "args": [
          "$C(row.type)",
          "\\::",
          "$C(row.name)",
          "-",
          "$C(row.status)",
          "-",
          "$C(id)"
        ]
      },
      "props": {}
    },
    "edit": {
      "bind": "name",
      "type": "Input",
      "props": { "placeholder": "请输入宠物名称" }
    }
  }
  // ...
}
```

### Hide

```jsonc
{
  // ...
  // fields.form
  "密码": {
    "bind": "password",
    "view": { "compute": "Hide" },
    "edit": {
      "type": "Input",
      "props": { "placeholder": "请输入密码", "type": "password" }
    }
  }
  // ...
}
```
