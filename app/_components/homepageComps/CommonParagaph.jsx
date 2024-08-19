
export default function Header({children}) {
    return (
        <div className="text-center text-sm not-italic font-medium leading-6 md:text-xs">
            <p>
                {children}
            </p>
        </div>
    )
}