// @ts-ignore
const fs = require('fs')
const nodeVersion = 'node 10.11'

const staticPath = `./node_modules`
let folderNames = fs.readdirSync(staticPath)

for(let folderName of folderNames){
    let stats = fs.statSync(staticPath + '/' + folderName)
    if(! stats.isDirectory()) continue

    try{
        let packageFilePath = `node_modules/${folderName}/package.json`
        let browserListFilePath = `node_modules/${folderName}/.browserslistrc`
        let packageFileData = JSON.parse(fs.readFileSync(packageFilePath))
        packageFileData['browserslist'] = nodeVersion
        // fs.writeFileSync(browserListFilePath, nodeVersion)
        if(fs.existsSync(browserListFilePath))
            fs.unlinkSync(browserListFilePath)

        fs.writeFileSync(packageFilePath, JSON.stringify(packageFileData, null, 2))
        console.log(`Fixed browserlist in ${packageFilePath}`)
    }catch(e) {}
}

console.log(`All browserlist has been modified.`)