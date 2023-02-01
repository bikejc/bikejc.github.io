#!/usr/bin/env node

const fs = require("fs")
const { entries } = Object

const redirects = JSON.parse(fs.readFileSync("redirects.json").toString())
console.log(redirects)

const dir = 'out'

entries(redirects).map(([ src, dst ]) => {
    const outDir = `${dir}${src}`
    const outPath = `${outDir}/index.html`
    const content = `<meta http-equiv=Refresh content="0; url=${dst}" />`
    if (!fs.existsSync(outDir)) {
        console.log(`mkdir: ${outDir}`)
        fs.mkdirSync(outDir, {recursive: true})
    }
    console.log(`Writing ${outPath}: ${content}`)
    fs.writeFileSync(outPath, content)
})
