import Image from 'next/image';

const Card = ({ post }) => {

    const imageUrl = `${post.image}?lock=${post.id}`
    const formattedCreatedAt = post.createdAt.substr(0, 10);

    return (
        <>
            <div className="flex justify-center w-full my-5 mx-5 
                md:w-2/5 xl:w-1/3 xl:mx-0">
                <div className="max-w-md overflow-hidden border-b border-black">
                    <Image
                        src={imageUrl}
                        alt={post.title}
                        width={640}
                        height={480}
                    />
                    
                    <div className="pr-6 py-4">
                        <span className="tracking-widest text-[10px] title-font font-medium 
                            text-gray-500 mb-1">
                            {formattedCreatedAt}
                        </span>

                        <div className="title-font text-lg font-medium text-gray-700">
                            {post.title}
                        </div>
                    </div>

                    <div className="pr-6 py-2 mb-3">
                        <button className="bg-[#4e4ed4] text-white px-5 py-2 text-sm
                            font-semibold mb-3 cursor-pointer tracking-wide rounded
                            hover:bg-[#5770ff]">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;