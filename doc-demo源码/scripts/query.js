/**
 * 查询产品信息
 */
function Product() {
  let res = Process(
    "models.product.Insert",
    ["name", "remark", "user_id"],
    [
      ["手艺里的中国：指尖", "李武望 著 时代华语", 2],
      ["（限时包邮）在印度", "随水 著，书田文化", 2],
    ]
  );

  let products = Process("models.product.Get", {
    select: ["id", "name", "remark", "user_id"],
    wheres: [{ column: "user_id", value: 2 }],
  });

  let result = [];
  products.forEach((item) => {
    result.push(`${item.id} - ${item.name} ( ${item.remark} )`);
  });
  return result;
}
/**
 * 传参演示
 */
function Args(...args) {
  return args;
}
