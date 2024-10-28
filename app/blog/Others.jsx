import Frame4 from "./../_assets/img/Frame4.png";
import Frame6 from "./../_assets/img/Frame6.png";
import Frame7 from "./../_assets/img/Frame7.png";
import bruce1 from "./../_assets/img/bruce1.svg";
import pexels from "./../_assets/img/pexels.svg";
import Image from "next/image";

const blogPosts = [
    {
        image: Frame4,
        title: "Do's & Don't Of Creating Your team schedule",
        category: "Operations",
    },
    {
        image: bruce1,
        title: "How To Manage Customer Feedback??",
        category: "Business",
    },
    {
        image: Frame6,
        title: "30 Best Team Management Tools for 2024",
        category: "Tech",
    },
    {
        image: Frame7,
        title: "What are other companies doing to function with ease?",
        category: "Operations",
    },
    {
        image: bruce1,
        title: "How to make your business run on its own.",
        category: "Business",
    },
    {
        image: pexels,
        title: "What are other companies doing to function with ease?",
        category: "Tech",
    },
];

export default function Others() {
    return (
        <div className="my-10">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            {blogPosts.map((post, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center justify-center xl:flex-row"
                >
                    <div className="max-w-[350px] w-full bg-white rounded-lg">
                        <div className="w-full h-[217px] overflow-hidden rounded-xl mb-4">
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={350}
                                height={300}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="px-4">
                            <h5 className="mb-2 text-start text-[21px] font-bold tracking-tight text-gray-900">
                                {post.title}
                            </h5>
                            <p className="text-[#5BC62D] text-xs not-italic font-medium leading-5">
                                {post.category}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    
    
    )
}