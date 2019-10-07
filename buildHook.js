const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const { exec } = require('child_process')
const cmdExec = promisify(exec)

export const buildHook = async () => {
  // console.log(`---------- remove re-theme ----------`)
  // await cmdExec('rm -rf ~/zerista/repos/sv-keg/node_modules/re-theme/src')
  // console.log(`---------- copy re-theme ----------`)
  // await cmdExec('cp -Rf ~/zerista/repos/re-theme/src ~/zerista/repos/sv-keg/node_modules/re-theme/src')
  
  // console.log(`---------- removing touch ----------`)
  // await cmdExec('rm -rf ~/zerista/repos/sv-keg/re-theme-touch.txt')
  // console.log(`---------- adding touch ----------`)
  // await cmdExec('touch ~/zerista/repos/sv-keg/re-theme-touch.txt')
}