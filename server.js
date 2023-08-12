import app from './app.js'
import { connectDB } from './config/database.js'
import Razorpay from 'razorpay'

connectDB()

export const instance = new Razorpay({
    key_id: "rzp_test_3yhYH5K4FbUHpj",
    key_secret: "GtnQhrp1VslYuLBYzNz8dvtp"

})

app.get("/",(req,res,next) => {
    res.send("<h1> Working </h1>")
})

app.listen(process.env.PORT, ()=> console.log(`Server is working on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`))