"use client"
import { ArrowBendDoubleUpLeft } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Header = ({ title }) => {

    const router = useRouter()

    const handleBack = () => {
        event.preventDefault()
        router.back()
    }

    return (
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl text-color-primary">
                {title}
            </h3>
            <button onClick={handleBack} className="text-color-accent"><ArrowBendDoubleUpLeft size={32} /></button>
        </div>
    )
}
export default Header