/**
 * 处理器
 * @param []any args 数据流参数表 $in
 * @param any out  数据流节点处理器或QueryDSL返回值
 * @param [key:string]any res 数据流各个节点返回值
 */
function main(args, out, res) {
  var data = out || {};
  data["color"] = "#FEFEFE";
  return data;
}

const Color = (kind) => {
  if (kind == "猫") {
    return "#FEFEFE";
  } else if (kind == "够") {
    return "#55555";
  }
};
