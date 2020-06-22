// 获取当前文件文件夹名称
//
const fs = require('fs');
const path = require('path');
const fileFun = require('../utils/file-fun');
const app_path = path.resolve();
const sub_apps = fs.readdirSync(app_path).filter(i => /^xianzhi|micro-app-main/.test(i));

// console.log(sub_apps)
for (let i = 0; i < sub_apps.length; i++) {
    let from = path.join(__dirname, `../${sub_apps[i]}/dist`)
    let to = path.resolve(__dirname, `../deploy/${sub_apps[i]}`)
    fs.mkdirSync(to)
    fileFun.copyFolder(from,to)
}

