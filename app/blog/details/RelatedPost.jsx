import bruce from "../../_assets/img/bruce.svg";
import bruce1 from "../../_assets/img/bruce1.svg";
import pexels from "../../_assets/img/pexels.svg";
import Image from "next/image";

const blogPosts = [
    {
        image: bruce,
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

export default function HomeBlog() {
    return (
        <div className="">
            <div className="flex flex-col gap-6 items-center justify-center xl:flex-row xl:gap-12">
                {blogPosts.map((post, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center xl:flex-row"
                    >
                        <div className="max-w-sm bg-white rounded-lg  ">
                            <Image
                                src={post.image}
                                alt={post.title}
                                height={300}
                                width={350}
                                className="rounded-xl mb-4 w-full h-[217px]"
                            />
                            <div className="">
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