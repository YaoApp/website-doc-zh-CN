# 编写 Widget

YAO 将通用功能模块抽象为 Widget，通过 YAO DSL 描述差异，快速复制各种功能。
在开发中，如果开发一个相似的功能模块，需要将已有的功能复制粘贴，批量替换差异内容。

**YAO 内建了一组 Widgets** 涵盖大部分应用程序开发常见功能。

Widget 支持自定义，在服务启动时，应用引擎根据 Widget 逻辑，将其解析为一组 API 接口和一组处理器, 本文介绍如何使用 JavaScript 脚本添加 Widget。

| **内建 Widget** | **功能**     |
| --------------- | ------------ |
| model           | 数据结构建模 |
| flow            | 数据逻辑编排 |
| api             | RESTFul API  |
| table           | 表格 CURD    |
| chart           | 数据图表     |
| login           | 用户登录     |
| register        | 用户注册     |
| task            | 并发任务     |
| schedule        | 计划任务     |
| socket          | Socket       |
| websocket       | WebSocket    |

相关教程: [使用 YAO Widget 自建云表格](../教程/使用%20YAO%20Widget%20自建云表格)

## 第一步: 设计 Widge DSL 数据结构

根据业务逻辑特征，设计 DSL 结构，本例中，不同表格间的差异为 表格字段、搜索器以及表格名称。

示例:

```json
{
  "name": "TEST",
  "decription": "A TEST DYFORM",
  "columns": [
    {
      "title": "First Name",
      "name": "name",
      "type": "input",
      "search": true,
      "props": {
        "placeholder": "Please input your first name"
      }
    },
    {
      "title": "Amount",
      "name": "amount",
      "type": "input",
      "search": true,
      "props": {
        "placeholder": "Please input amount"
      }
    },
    {
      "title": "Description",
      "name": "desc",
      "type": "textArea",
      "props": {
        "placeholder": "Please input Description"
      }
    }
  ]
}
```

## 第二步: 创建 Widget

以 dyform 为例创建 widget:

```bash
cd /your/project/root
mkdir -p widgets/dyform

# 创建 widget 文件
touch widgets/dyform/widget.json  # Widget 基本信息
touch widgets/dyform/compile.js   # dyform DSL 编译器
touch widgets/dyform/process.js   # dyform 处理器
touch widgets/dyform/export.js    # dyform 导出内建 Widget 定义
```

提示: YAO 自定义 widget 放置在 widgets 目录，需要手动创建这个目录。

使用编辑器打开 ** dyform/widget.json** 填写 dyform widget 基本信息

```json
{
  "label": "Dynamic Form",
  "description": "A form widget. users can design forms online",
  "version": "0.1.0",
  "root": "dyforms",
  "extension": ".form.json",
  "modules": ["Models", "Tables"]
}
```

**字段说明: **

| **配置项**  | **说明**                                                                                                                                      |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| label       | Widget 名称，在可视化编辑器显示。                                                                                                             |
| description | Widget 介绍, 在可视化编辑器显示。                                                                                                             |
| version     | 版本号                                                                                                                                        |
| root        | DSL 文件保存路径(相对于项目根目录)                                                                                                            |
| extension   | DSL 文件扩展名                                                                                                                                |
| modules     | 需要导出的模块。 在 export.js 中根据 DSL 描述，转换的 YAO 内建 widgets。 如 model, table 等。这些 widgets 与保存在项目目录中的 DSL 文件等效。 |

## 第三步: 编写处理器

编写 **dyform/process.js **脚本，实现 **Model, Table **处理器，将自定义 DSL 转换为 YAO 数据模型 widget 和 表格 widget。

编写 Export 函数，声明要导出的处理器， [查看源码](https://github.com/YaoApp/demo-widget/blob/main/widgets/dyform/process.js#L311)

```javascript
function Export() {
  return { Model: "Model", Table: "Table" };
}
```

实现 Model & Table 处理器逻辑

| **处理器** | **说明**                                                                                 | **源码链接**                                                                              |
| ---------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Model      | 将 dyform DSL 转换为 model DSL, 等效于在 models 文件夹手动编写一个 xxx.mod.json DSL 文件 | [查看源码](https://github.com/YaoApp/demo-widget/blob/main/widgets/dyform/process.js#L11) |
| Table      | 将 dyform DSL 转换为 table DSL, 等效于在 tables 文件夹手动编写一个 xxx..json DSL 文件    | [查看源码](https://github.com/YaoApp/demo-widget/blob/main/widgets/dyform/process.js#L27) |

提示: 建议使用 yao run 命令调试处理器，参考源码注释文档。

## 第四步: 导出为 Model & Table widget

编写 **dyform/export.js** 脚本, 实现 Models, Tables 函数，导出为 YAO model & table widgets.

| **导出函数** | **说明**                                                                                       | **源码链接**                                                                             |
| ------------ | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Models       | 调用 Model 处理器，导出 Yao model widget, 数据结构为 {MODEL_NAME:String: Model_DSL:Object}     | [查看源码](https://github.com/YaoApp/demo-widget/blob/main/widgets/dyform/export.js#L10) |
| Tables       | 调用 Table 处理器, 导出为 Yao table widget , 数据结构为: {TABLE_NAME:String: Table_DSL:Object} | [查看源码](https://github.com/YaoApp/demo-widget/blob/main/widgets/dyform/export.js#L24) |

## 效果预览

在 dyforms 文件夹下，添加 **xxx.form.json **文件, 编写 dyform DSL 描述文件，即可快速创建一组表格管理模块、表格 API、表格处理器和模型处理器。

![demo.png](https://release-sv-1252011659.cos.na-siliconvalley.myqcloud.com/docs/%E4%B8%93%E5%AE%B6/demo%20%281%29.png)

使用 **yao migrate** 命令创建数据表结构，**yao start** 命令启动服务，登录管理界面，即可使用表格管理功能。
路由地址: http://127.0.0.1:5099/xiang/table/dyform.xxx

<Div style={{ display: "flex", justifyContent: "right" }}>
  <Link type="next" title="源码编译" link="专家/源码编译"></Link>
</Div>
