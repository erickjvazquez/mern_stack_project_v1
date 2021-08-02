import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"

dotenv.config()
//set up a variable for our mongodb can be used
const MongoClient = mongodb.MongoClient
//This is for accesing an env variable and if by any chance could not be accessed we set it up to 8000 port
const port = process.env.PORT || 8000

// Connect to our database
MongoClient.connect(
  process.env.RESTREVIEWS_DB_URI,
  {
    poolSize: 50,
    wtimeout: 2500,
    useNewUrlParse: true},
)

//Catch the errors
.catch(err => {
  console.error(err.stack)
  process.exit(1)
})

.then(async client => {
// then we finally can connect our server to our database with:
    app.listen(port, () =>{
      console.log('listening on port ${port}')
    })

})
