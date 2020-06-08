const args = require('yargs').argv;
const fs = require('fs')
const { createCanvas, loadImage } = require('canvas')

const width = 1170
const height = 850
const canvas = createCanvas(width, height)
const context = canvas.getContext('2d')

loadImage('./certificate.png').then(image => {
    context.drawImage(image, 0, 0, width, height)
    context.fillStyle = '#424240'
    context.textAlign = 'center'
    context.font = '40px sans-serif'
    context.fillText(args.name , 566, 335)
    const buffer = canvas.toBuffer('image/png')
    fs.writeFileSync('./' + args.name + '- sertifikat.png', buffer)
})

