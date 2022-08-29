# 使用 JS 编写处理器

<blockquote>
  使用 JavaScript 将复杂业务逻辑，封装成处理器，在多场景下复用。建议在阅读前学习
  JavaScript 基础语法。
</blockquote>

## 编写处理器

创建一个 `day.js` 脚本，放置在应用 `scripts` 目录下。

day.js :

```javascript
function Tomorrow(today) {
  let tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  return tomorrow.toISOString().slice(0, 19).replace("T", " ");
}
```

**在命令行中运行处理器:**

```bash
yao run scripts.day.Tomorrow '2022-01-24'
```

## 在其他 JS 中调用其他处理器

可以使用 `Process` 函数调用其他处理器，相当于调用其他函数，以便于代码的复用。

创建一个 `format.js` 脚本，放置在应用 `scripts/pet/` 目录下。

format.js :

```javascript
/**
 * 添加用户信息
 */
function WithUsers() {
  var data = {};
  data["tommorrow"] = Process("scripts.day.Tomorrow", new Date());
  data["users"] = Process("models.xiang.user.Get", {
    limit: 2,
    select: ["id", "name"],
  });
  return data;
}
```

**运行处理器:**

```bash
yao run scripts.pet.format.WithUsers
```

<Div style={{ display: "flex", justifyContent: "space-between" }}>
  <Link
    type="prev"
    title="复杂数据查询"
    link="c.高级特性/c.复杂数据查询"
  ></Link>
  <Link
    type="next"
    title="表格数据预处理"
    link="c.高级特性/e.表格数据预处理"
  ></Link>
</Div>
