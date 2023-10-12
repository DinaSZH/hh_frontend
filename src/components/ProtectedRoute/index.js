import { useRouter } from "next/navigation"
import jwt_decode from 'jwt-decode'

export default function ProtectedRoute ({children}) {
    const router = useRouter()
    const token = localStorage.getItem("token")
    if(token) {
        let decodedToken = jwt_decode(token)
        if(decodedToken.exp * 1000 > Date.now()) {


            return (<>{children}</>)
        } else if(decodedToken.role.name === "employee"){
            router.push('/login')
        } else {
            router.push('/employer/signin')
        }
    } else {
        router.push('/login')
    }
}