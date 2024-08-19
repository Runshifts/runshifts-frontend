
export default function Header({children}) {
    return (
        <div className="text-center text-2xl not-italic font-semibold rounded-full text-[#36322F] my-2 md:text-5xl md:my-4 ">
            <p>
                {children}
            </p>
        </div>
    )
}