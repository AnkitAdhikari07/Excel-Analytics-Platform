// import bcrypt from "bcryptjs"
// import jwt from "jsonwebtoken";
// import User from "../models/User.js";


// export const register = async(req, res)=>{
//     try{
//         const { username, email, password, role} = req.body

//         const existingUser = await User.findOne({ email })
//         if(existingUser){
//             return res.status(400).json({ message: 'User already exists'})
//         }


//         const salt = await bcrypt.genSalt(10)
//         const hashedPassword = await bcrypt.hash(password, salt);

//         const newUser = new User({
//             username,
//             email,
//             password : hashedPassword,
//             role
//         })

//         await newUser.save()

//         res.status(201).json({message: 'User registered successfully'})
//     }
//     catch(error){
//         res.status(500).json('There is some server error')
//     }
// }

// export const login = async(req, res)=>{
//     try {
//         const {email, password} = req.body

//         const user = await User.findOne({email})
//         if(!user){
//             return res.status(400).json({message: 'Invalid Credentials'})
//         }

//         const isMatch = await bcrypt.compare(password, user.password)

//         if(!isMatch){
//             return res.status(400).json({message: 'Invalid Credentials'})
//         }
//     } catch (error) {
        
//     }
// }




import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const register = async(req, res) => {
    console.log('Register endpoint hit with body:', req.body)
    
    try {
        const { username, email, password, role } = req.body

        // Basic validation
        if (!username || !email || !password) {
            console.log('Validation failed: Missing required fields')
            return res.status(400).json({ message: 'Please provide username, email, and password' })
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email })
        if(existingUser) {
            console.log('User already exists')
            return res.status(400).json({ message: 'User already exists' })
        }

        // Hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            role: role || 'user' // Default to 'user' if not provided
        })

        await newUser.save()
        console.log('User saved successfully')

        res.status(201).json({ message: 'User registered successfully' })
    }
    catch(error) {
        console.error('Registration error details:', error)
        res.status(500).json({ 
            message: 'There is some server error',
            error: error.message 
        })
    }
}

export const login = async(req, res) => {
    console.log('Login endpoint hit with body:', req.body)
    
    try {
        const { email, password } = req.body

        // Basic validation
        if (!email || !password) {
            return res.status(400).json({ message: 'Please provide email and password' })
        }

        // Find user by email
        const user = await User.findOne({ email })
        if(!user) {
            return res.status(400).json({ message: 'Invalid credentials' })
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' })
        }

        // Generate JWT token
        const token = jwt.sign(
            { 
                userId: user._id, 
                email: user.email, 
                role: user.role 
            },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        )

        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        })

    } catch (error) {
        console.error('Login error:', error)
        res.status(500).json({ message: 'There is some server error' })
    }
}