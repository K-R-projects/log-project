import jwt from 'jsonwebtoken'
import config from './config'

const getToken = (user) =>{
    
    return jwt.sign({
            _id:user.id,
            fullname:user.fullname,
            email:user.email,
            
    }, config.JWT_SECRET, {
    expiresIn: '24h'
    })
}
export {
    getToken
}