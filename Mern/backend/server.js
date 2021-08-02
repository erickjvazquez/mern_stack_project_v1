import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

//Our app server variable
const app = express()

//What modules will be using with our application
app.use(cors())
//able to read a POST or GET request from our app body in the form of json
app.use(express.json())
//The route url for our api
app.use("/api/v1/restaurants", restaurants)
// * means wildcard url, when somebody tries to go to some other url other than the correct one. Then we return a 404 page with the string "Not found"
app.use("*",(req, res) => res.status(404).json ({error: "Not found."}))

//export app as a module. This allows us to run our server by separating our server code from our database code

export default app
