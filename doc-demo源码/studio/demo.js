function GetProduct(id) {
  return Process("models.product.Find", id, { select: ["id", "name"] });
}

function AutoMake(name) {
  let fs = new FS("dsl");
  let data = fs.ReadFile(`/models/${name}.mod.yao`);
  let mod = JSON.parse(data);
  let title = mod.name || "未知";
  fs.WriteFile(`/flows/query/${name}.flow.yao`, makeFlow(name, title));
  fs.WriteFile(`/apis/${name}.http.yao`, makeApi(name, title));
  fs.WriteFile(`/tables/${name}.tab.yao`, makeTable(name, title));
  fs.WriteFile(`/forms/${name}.form.yao`, makeForm(name, title));
}

function makeForm(name, title) {
  return JSON.stringify({
    name: title,
    action: { bind: { model: name } },
  });
}

function makeTable(name, title) {
  return JSON.stringify({
    name: title,
    action: { bind: { model: name } },
  });
}

function makeFlow(name, title) {
  return JSON.stringify({
    label: "演示",
    version: "1.0.0",
    description: "数据查询",
    nodes: [
      {
        name: title,
        process: `models.${name}.Find`,
        args: ["{{$in[0]}}", { select: ["id", "name"] }],
      },
    ],
    output: `{{$res.${title}}}`,
  });
}

function makeApi(name, title) {
  return JSON.stringify({
    name: title,
    version: "1.0.0",
    description: `${title}接口`,
    guard: "-",
    group: name,
    paths: [
      {
        path: "/find/:id",
        method: "GET",
        process: `flows.query.${name}`,
        in: ["$param.id"],
        out: { status: 200, type: "application/json" },
      },
    ],
  });
}
