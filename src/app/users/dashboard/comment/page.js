import { authUserSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"

const Page = async() => {
    const user = await authUserSession()

    const comments = await prisma.findMany({ where: { user_email: user.user_email} })
    console.log(comments)

    return(
        <div className="grid grid-cols-1">
            <div></div>
        </div>
    )
}
export default Page