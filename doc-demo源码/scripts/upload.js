/**
 * 上传文件
 * @param {*} temp
 * @returns
 */
function File(temp) {
  temp = temp || {};
  if (!temp.tempFile) {
    throw new Exception("参数错误", 400);
  }

  var fs = new FS("system");
  let tempFile = temp.tempFile || null;
  console.log([tempFile, temp]);
  var data = fs.ReadFile(tempFile);
  let now = new Date().getTime();
  let file = `/texts/${temp.name}`;
  fs.WriteFile(file, data, 0644);
  return file;
}

function Find() {
  return {};
}

function UploadSave(payload) {
  console.log(payload);
  if (payload.file && payload.file.length) {
    var excel = payload.file[0];
    var file = excel.split("?name=")[1];
    var post = Mapping();
    post.file = file;
    var res = Process("yao.import.Run", "ticket", file, post.mapping);
    console.log(res);
  }
}

function Mapping() {
  return {
    file: "20220330/2A485CDC767576FA1A0BCD7EFF66331C.xlsx",
    mapping: {
      sheet: "Sheet1",
      colStart: 1,
      rowStart: 1,
      data: [
        {
          label: "昵称",
          field: "name",
          name: "昵称",
          axis: "A1",
          value: "昵称",
          rules: [],
        },
        {
          label: "手机",
          field: "phone",
          name: "手机",
          axis: "B1",
          value: "15000000000",
          rules: [],
        },
        {
          label: "性别",
          name: "性别",
          field: "gender",
          axis: "C1",
          rules: [],
        },
        {
          label: "地区",
          name: "地区",
          axis: "D1",
          field: "area",
          rules: [],
        },
      ],
      autoMatching: true,
      templateMatching: false,
    },
  };
}
