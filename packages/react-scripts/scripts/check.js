/*
 * @Author: guoquan.yang 
 * @Date: 2017-12-07 11:05:52 
 * @Last Modified by: guoquan.yang
 * @Last Modified time: 2017-12-07 11:06:36
 * @Des: build 之前检查当前version是否打成tag（公司内部流程机制）
 */

'use strict';
const execSync = require('child_process').execSync;
const cwd = process.cwd();
const version = process.env.npm_package_version;
let exitCode = 0;
try {
  execSync(`git ls-remote --exit-code --tags origin ${version}`, {
    cwd,
  });
} catch (e) {
  exitCode = e.status;
} finally {
  if (exitCode === 0) {
    console.log('当前工程版本号已经被打成tag');
    process.exit(1);
  } else if (exitCode !== 2) {
    console.log('获取远程仓库tag失败, 或者还未建立远端对应git仓库');
    process.exit(1);
  } else {
    console.log('版本检测通过');
  }
}