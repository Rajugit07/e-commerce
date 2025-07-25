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

