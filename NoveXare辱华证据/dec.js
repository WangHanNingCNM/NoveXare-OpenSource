const fs = require("fs");
const path = require("path");
const readline = require("readline");

function decodeUnicodeEscapes(str) {
  return str.replace(/\\u([0-9a-fA-F]{4})/g, (match, grp) => {
    try {
      return String.fromCharCode(parseInt(grp, 16));
    } catch {
      return match;
    }
  });
}

function replaceString(inputStr, oldString, newString) {
  return inputStr
    .replaceAll(oldString, "tmp_" + oldString)
    .replaceAll(newString, oldString)
    .replaceAll("tmp_" + oldString, newString);
}

function output(scriptContent) {
  const replacements = [
    ["(", "}"],
    ["{", ")"],
    ["&&", "and"],
    ["||", "or"],
    ["=", "≈"],
    ["!", "！"],
    ["?", "？"],
  ];
  for (const [oldStr, newStr] of replacements) {
    scriptContent = replaceString(scriptContent, oldStr, newStr);
  }
  return scriptContent;
}

function getUniqueFileName(filePath) {
  const dir = path.dirname(filePath);
  const ext = path.extname(filePath);
  const base = path.basename(filePath, ext);
  let newFile = path.join(dir, `${base}_dec${ext}`);
  let index = 1;

  while (fs.existsSync(newFile)) {
    newFile = path.join(dir, `${base}_dec_${index}${ext}`);
    index++;
  }
  return newFile;
}

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("请输入要转换的文件名: ", (fileName) => {
    if (!fs.existsSync(fileName)) {
      console.log(`文件 ${fileName} 不存在，请检查文件名。`);
      rl.close();
      return;
    }
    try {
      let content = fs.readFileSync(fileName, "utf-8");
      content = content.replace(/\\\\x/g, "\\x");
      content = decodeUnicodeEscapes(content);

      const newContent = output(content);
      const newFileName = getUniqueFileName(fileName);

      fs.writeFileSync(newFileName, newContent, "utf-8");
      console.log(`转换后的内容已保存为 ${newFileName}`);
    } catch (err) {
      console.error(`发生错误: ${err.message}`);
    }
    rl.close();
  });
}

main();
//解密