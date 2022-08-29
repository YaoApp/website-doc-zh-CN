# 编写 Socket 服务

<blockquote>
  编写一个服务描述文件，启动一个Socket 服务，指定一个处理器响应客户端请求。
</blockquote>

<Notice type="warning">
  注意：编写 Socket
  服务为实验性功能，服务描述JSON结构可能会根据使用反馈变更。启动服务时需带
  <strong>alpha</strong>参数。
</Notice>

## 编写服务

编写一个服务文件 `rfid.sock.json` 放置在应用 `servers` 目录下。

```json
{
  "name": "RFID接收器",
  "description": "用来接收并处理RIFD",
  "version": "0.0.1",
  "protocol": "tcp",
  "host": "0.0.0.0",
  "port": "3019",
  "process": "scripts.rfid.Read"
}
```

编写 Rfid 处理器:

```javascript
/**
 * 接收 RFID
 * @param {*} data
 */
function Read(data) {
  sn = getSN(data);
  if (sn != "") {
    Process("models.rfid.Create", { sn: sn, uptime: new Date().toISOString() });
  }
}

function getSN(data) {
  // 100000012021128798321101 15 2d 02 f2 96 72 1e 52 b9 cd
  var idstr = data || "";
  if (idstr.length != 36) {
    return "";
  }
  return BigInt(
    "0x" + idstr.substring(8, idstr.length - 8).toUpperCase()
  ).toString(10);
}
```

## 启动服务

```bash
yao start alpha
```
