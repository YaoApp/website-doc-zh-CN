function Import(columns, data) {
  // todo 处理导入逻辑

  // 打印隐射关系
  console.log(columns);

  // 打印获取的数据
  console.log(data);
  // todo 把数据保存

  for (var i in data) {
    Process("models.ticket.save", {
      name: data[i][0],
      phone: data[i][1],
      gender: data[i][2],
      area: data[i][3],
    });
  }

  var success = 0;
  var fail = 0;

  return [success, fail];
}
function Output(data) {
  // todo 处理导入后的逻辑，导入后会自动调用这个函数："output": "scripts.imports.ticket.Output",
  return data;
}
