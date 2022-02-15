# 文档组件示例

主要展示文档支持哪些组件。

## headings 标题

headings 会被解析成文件标题树展示在右侧锚点导航栏中，目前支持 H1-H6，其中 H1-H4 代表正常层级，即标题大小大于正文，H5、H6 表示非正常层级，H1 通常为文档标题，H2 为节标题（H2 的上边距会大于其他），依次向下表示为不同层级的标题。

<Card>

# H1

## H2

### H3

#### H4

##### H5

###### H6

</Card>

## list 列表

### ul 无序列表

- element 1

- element 2

- element 3

### ol 有序列表

1. element 1

2. element 2

3. element 3

## code 代码

### inner 行内

`this is a inner code`

### block 块

```go
model User {
  id           Int              @id @default(autoincrement())
  name         String?
  email        String           @unique
  profileViews Int              @default(0)
  role         Role             @default(USER)
  coinflips    Boolean[]
  posts        Post[]
  city         String
  country      String
  profile      ExtendedProfile?
  pets         Json
}

model ExtendedProfile {
  id     Int     @id @default(autoincrement())
  userId Int?    @unique
  bio    String?
  User   User?   @relation(fields: [userId], references: [id])
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  published Boolean @default(true)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
  comments  Json
  views     Int     @default(0)
  likes     Int     @default(0)
}

enum Role {
  USER
  ADMIN
}
```

## blockquote 引用

<blockquote>
	Here is a long quotation here is a long quotation here is a long quotation here is a long
	quotation here is a long quotation here is a long quotation here is a long quotation here is a
	long quotation here is a long quotation.
</blockquote>

## table 表格

| 字段       | 类型       | 长度/参数                  | 默认值  | 说明                      |
| ---------- | ---------- | -------------------------- | ------- | ------------------------- |
| id         | ID         |                            |         | 数据表 ID                 |
| channel_id | bigInteger |                            |         | 客户来源                  |
| name       | string     | 80                         |         | 客户姓名                  |
| company    | string     | 200                        |         | 公司名称                  |
| gender     | integer    |                            | 0       | 性别 0, 未知，1 男，2，女 |
| birthday   | date       |                            |         | 生日                      |
| desc       | text       |                            |         | 简历                      |
| status     | enum       | ["enabled"], ["disabled"], | enabled | 状态                      |

## details 折叠

<details>
	<summary>折叠内容</summary>
	12312
</details>

## components 自定义组件

### Detail

该组件为 details 功能增强组件，目的是支持在 details 内部嵌入代码，并高亮显示，注意：要空行，否则会报错。

<Detail title="折叠代码块">

```js
// Highlighted

export default {
	data() {
		return {
			msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
			motd: 'VuePress is awesome',
			lorem: 'ipsum'
		}
	}
}
```

</Detail>

### Card

Card 通常用于说明内容,或用来优化文档结构。

<Notice type='warning'>
	注意：内部文本不要缩进，否则会被转换成code，最后一行以单独的段落结尾，否则会出现样式问题。
</Notice>

<Card>

大荒中有山，名曰明星，日月所出。

有白民之国。帝俊生帝鸿，帝鸿生白民，白民销姓，黍食，使四鸟：豹、虎、熊、罴。

有青丘之国，有狐，九尾。 有柔仆民，是维嬴土之国。 有黑齿之国。帝俊生黑齿，姜姓，囗食，使四鸟。

有夏州之国。 有盖余之国。 有神人，八首人面，虎身十尾，名曰天吴。

大荒之中，有山名曰鞠陵于天、东极、离瞀，日月所出。名曰折丹，东方曰折，来风曰俊。处东极以出入风。

</Card>

### Notice

Notice 常用于对正文的解释、提示或者是警告。

<Notice type='warning'>
	您在浏览的是 v2.x 及更早版本的文档。v3.x 的文档在这里。这是一个提示。
</Notice>

<Notice type='danger'>该API将会在下一个版本弃用，请谨慎使用。这是一个警告。</Notice>

<Notice type='success'>
	这段代码的含义是靠打卡上课打瞌睡看卡上课打卡上课卡开始打卡开始卡开始打卡上课开始打卡上课开始打卡上课开始打卡上课开始打卡上课开始打卡上课开始打卡上课开始打卡上课。这是一个解释。
</Notice>

### Badge

Badge 通常用来当作标记，以提示阅读者关键信息，或是危险操作。

#### 自定义主题<Badge type='warning'>v3.0.0</Badge>

#### Autoplay<Badge type='danger'>已弃用</Badge>

#### version 1.5.0<Badge type='success'>已通过测试</Badge>

### Icon

```ts
/** 图标组件，支持如下两种图标库：
 * feather icon https://feathericons.com/
 * material design icon https://fonts.google.com/icons
 */

import clsx from 'clsx'
import { useMemo } from 'react'

interface IProps {
	/** 图表样式类 */
	className?: string
	/** 图标名称，以`icon`开头为feather icon，以`outline/filled`结尾为material design icon */
	name: string
	/** 图标尺寸，单位px */
	size?: number
	/** 图标颜色，适用所有字体颜色 */
	color?: string
	/** 点击事件 */
	onClick?: () => void
}
```

icon-github <Icon name='icon-github'></Icon>

icon-github size={36} <Icon name='icon-github' size={36}></Icon>

icon-github size={48} color='blue' <Icon name='icon-github' size={36} color='blue'></Icon>

### Button

同 [Ant Design Button](https://ant-design.gitee.io/components/button-cn/)。

#### 常规用法

<Button type='primary' style={{ marginRight: 12 }}>
	Primary Button
</Button>

<Button style={{ marginRight: 12 }}>Default Button</Button>

<Button type='dashed'>Dashed Button</Button>

#### 和 Icon 搭配使用

<Button className='flex align_center' type='primary' size='large'>
	<Icon className='mr_8' name='icon-github' color='white' size={15}></Icon> Github
</Button>

### Tabs

对不分次序且目的一致的内容进行分栏显示。

<Tabs defaultActiveKey='1'>
<TabPane tab='Tab 1' key='1'>
      Content of Tab Pane 1
</TabPane>

<TabPane tab='Tab 2' key='2'>
	Content of Tab Pane 2
</TabPane>

<TabPane tab='Tab 3' key='3'>
	Content of Tab Pane 3
</TabPane>
</Tabs>
