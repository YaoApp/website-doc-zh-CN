function DD() {
  let qb = new Query();
  return qb.Get({
    debug: true,
    select: ["id", "name", "name as label", "id as value", "parent_id"],
    wheres: [{ ":deleted_at": "删除", "=": null }],
    from: "category",
    limit: 1000,
  });
}

function Debug() {
  console.log("Hello", { foo: "bar" }); // 在控制台打印
  log.Info("Foo %d %s", 1, "hello");
  log.Debug("Foo");
  log.Trace("Foo");
  log.Error("Foo");
}

function Validate(password) {
  let hash = "$2a$04$TS/rWBs66jADjQl8fa.w..ivkNAjH8d4sI1OPGvEB9Leed6EpzIF2";
  return Process("xiang.helper.PasswordValidate", password, hash);
}

function Bar() {
  return $L("Pet");
}

function test() {
  var user = Process("models.user.get", {
    withs: {
      supplier: {
        query: {
          select: ["name", "id"],
        },
      },
    },
    wheres: [{ column: "supplier_id", value: 1, op: "=" }],
    orders: [{ column: "id", option: "desc" }],
    limit: 1,
  });
  return user;
}

function Pet(online) {
  var query = new Query();
  var data = query.Get({
    select: ["id", "name", "online", "created_at"],
    wheres: [
      { ":deleted_at": "删除", "=": null },
      { ":online": "类型", "=": online },
    ],
    orders: "created_at desc",
    from: "$pet",
  });
  return data;
}

function cacheOperation() {
  var cache = new Store("cache");

  cache.Set("key", "for bar .....");

  var cache_info = cache.Get("key");
  return cache_info;
}

function Compute(row) {
  console.log(row);
  return row;
}

function AfterSearch(data) {
  var temp = data.data;
  for (var i in temp) {
    temp[i]["name"] = "111";
  }
  data.data = temp;
  console.log(data);
  return data;
}

function BefofreSearch(data, page, pagesize) {
  console.log([data, page, pagesize]);
}
