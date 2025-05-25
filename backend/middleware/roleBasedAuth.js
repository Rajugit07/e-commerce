//Role based Authenticate
export const authorizeRole  =  (requiredRole) => {
    return (req,res,next) => {
        if(req.user.role !== requiredRole){
            return res.status(401).json({
                message:`Access denied: requires ${requiredRole} role`,
                success:false
            })
        }
        next();
    };
};


//*  Example protected route

// import express from 'express';
// import { authenticate, authorizeRole } from './middleware/auth.js';

// const router = express.Router();

// router.get('/admin/dashboard',
//     authenticate,
//     authorizeRole('admin'), // only admins can access
//     (req, res) => {
//         res.json({
//             message: `Welcome to the admin dashboard, ${req.user.userId}`,
//             success: true
//         });
//     }
// );
