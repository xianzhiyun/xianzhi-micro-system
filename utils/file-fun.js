/**
 * 和文件操作相关函数
 *
 * */
const fs = require('fs');
const path = require('path');
// copy 文件夹
function copyFolder(from, to) {        // 复制文件夹到指定目录
    let files = [];
    if (fs.existsSync(to)) {           // 文件是否存在 如果不存在则创建
        files = fs.readdirSync(from);
        files.forEach(function (file, index) {
            let targetPath = from + "/" + file;
            let toPath = to + '/' + file;
            if (fs.statSync(targetPath).isDirectory()) { // 复制文件夹
                copyFolder(targetPath, toPath);
            } else {                                    // 拷贝文件
                fs.copyFileSync(targetPath, toPath);
            }
        });
    } else {
        fs.mkdirSync(to);
        copyFolder(from, to);
    }

}

// 清空文件
/**
 *
 * @param path 当前要删除路径
 * @param selfPath 如果有标识不删除自己
 */
function deleteFolderRecursive(path, selfPath) {
    if (fs.existsSync(path)) {
        if (fs.statSync(path).isDirectory()) {
            let files = fs.readdirSync(path)
            files.forEach((file) => {
                let curPath = path + '/' + file
                if (fs.statSync(curPath).isDirectory()) {
                    deleteFolderRecursive(curPath, selfPath)
                } else {
                    fs.unlinkSync(curPath)
                }
            })
            if (path !== selfPath) fs.rmdirSync(path)
        } else {
            fs.unlinkSync(path)
        }
    }
}
module.exports = {
    copyFolder,
    deleteFolderRecursive
}

