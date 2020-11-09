const express = require("express")
const bodyParser = require("body-parser")

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

// Route to /

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res){
    let num1 = Number(req.body.num1)
    let num2 = Number(req.body.num2)
    let result = num1 + num2

    res.send(`<p>The result is :</p><h1>${result}</h1>`)
})

// Route to /bmicalculator

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalc.html")
})

app.post("/bmicalculator", function(req, res){
    let height = Number(req.body.height)
    let weight = Number(req.body.weight)
    let bmi = (weight / Math.pow(height, 2)) * 10000
    bmi = bmi.toFixed(1)

    res.send(`<p>Your BMI is :</p><h1>${bmi}</h1>`)
})

app.listen(3000, function(){
    console.log("Server is listen on port 3000.")
})