const express = require('express')
const app = express()
const path = require('path')

app.use(require('body-parser').json())
app.use(require('cors')())

//serve static files
app.use('/statics', express.static(path.join(__dirname, 'statics')))


app.get('/get-template', (req, res)=>{

    //example template
    res.json([{
        baseImg: "/statics/images/base_layer.jpg",
        baseWidth: 1500,
        baseHeight: 1500,
        texts: [
            {
                default: "Hello",
                maxChars: 8,
                font: {
                    color: "white",
                    name: "Amatic-Bold",
                    size: 225,
                    path: "/statics/fonts/Amatic-Bold.ttf",
                    position: {
                        x: 730,
                        y: 280,
                        textAlign: "center",
                        textBaseline: "top"
                    }
                }
            },
            {
                default: "Friends",
                maxChars: 8,
                font: {
                    color: "white",
                    name: "Wreath_Haftone",
                    path: "/statics/fonts/wreath_halftone.otf",
                    size: 362,
                    position: {
                        x: 750,
                        y: 400,
                        textAlign: "center",
                        textBaseline: "top"
                    }
                }
            }
        ]
    },
    {
        baseImg: "/statics/images/base_layer_2.jpg",
        baseWidth: 2000,
        baseHeight: 2000,
        texts: [
            {
                default: "Add Your",
                maxChars: 16,
                font: {
                    color: "white",
                    name: "Good-Vibes",
                    size: 312,
                    path: "/statics/fonts/good_vibes.ttf",
                    position: {
                        x: 1000,
                        y: 662,
                        textAlign: "center",
                        textBaseline: "bottom"
                    }
                }
            },
            {
                default: "Custom Text Here",
                maxChars: 16,
                font: {
                    color: "white",
                    name: "Good-Vibes",
                    path: "/statics/fonts/good_vibes.ttf",
                    size: 312,
                    position: {
                        x: 1000,
                        y: 1032,
                        textAlign: "center",
                        textBaseline: "bottom"
                    }
                }
            }
        ]
    }
    ])
})



app.listen(3333)