window.function = function (arr, format, datecurrent) {
  // Array
  if (arr.value == undefined) return;
  let arrayTab = [...arr.value];

  // Array format
  glideDateTimeFormat = "short";
  format = format.value ?? "";
  if (format != "") glideDateTimeFormat = format;

  // Date current
  let dCurrent = glide2Date(datecurrent.value, "short");

  let dNew = new Date("2999-1-1");
  let sRet = "";
  let bFlag = false;

  // For Each Date in Array
  arrayTab.forEach(function (item) {
    let dItem = glide2Date(item, glideDateTimeFormat);

    if (dItem > dCurrent && dNew > dItem) {
      dNew = dItem;
      bFlag = true;
    }
  });

  if (bFlag) {
    sRet = dNew;
  }

  return sRet;
};
