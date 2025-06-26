// import express from "express"
// import dotenv from "dotenv"
// import mongoose from "mongoose"
// import authRoutes from './routes/authRoutes.js'

// const app = express()
// dotenv.config()

// const port = process.env.PORT || 3001;
// const DB_URI = process.env.MONGO_URI

// app.use(express.json());

// // try {
// //     await mongoose.connect(DB_URI)
// //     console.log("Connected to MongoDB")
// // } catch (error) {
// //     console.log(error)
// // }


// mongoose.connect(DB_URI)
//     .then(() => console.log("Connected to MongoDB"))
//     .catch((error) => console.log("MongoDB connection error:", error));

// app.use('/api/auth', authRoutes)


// app.listen(port, ()=>{
//     console.log(`Server is running on port ${port}`)
// })




import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoutes from './routes/authRoutes.js'

const app = express()
dotenv.config()

const port = process.env.PORT || 8000;
const DB_URI = process.env.MONGO_URI

// Add logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`, req.body)
    next()
})

app.use(express.json());

// Add error handling middleware
app.use((err, req, res, next) => {
    console.error('Server Error:', err)
    res.status(500).json({ message: 'Internal Server Error', error: err.message })
})

mongoose.connect(DB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log("MongoDB connection error:", error));

app.use('/api/auth', authRoutes)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})