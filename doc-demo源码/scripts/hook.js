/**
 * Stat Hook
 * @param {*} args
 * @returns
 */
function FormatTime(args) {
  log.Trace("[FormatTime] %v", args);
  let range = args["range[]"] || [];
  let start = range[0] ? range[0].split("T")[1].split("+")[0] : "08:00";
  let end = range[1] ? range[1].split("T")[1].split("+")[0] : "18:00";
  return [{ range: [start, end] }];
}
