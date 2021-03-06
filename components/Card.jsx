import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';

const Card = ({ post }) => {

    return (
        <>
            <div className="flex justify-center w-full my-5 mx-5 
                md:w-2/5 xl:w-1/3 xl:mx-0">
                <div className="max-w-md overflow-hidden border-b border-black">
                    <Image
                        src={post.image}
                        alt={post.title}
                        width={640}
                        height={480}
                    />
                    
                    <div className="pr-6 py-4">
                        <span className="tracking-widest text-xs title-font font-medium 
                            text-gray-500 mb-1">
                            {moment(post.createdAt).format('MMM DD, YYYY')}
                        </span>

                        <div className="title-font text-xl font-medium text-gray-700">
                            {post.title}
                        </div>
                    </div>

                    <div className="pr-6 py-2 mb-3">
                        <Link href={`/posts/${post.id}`}>
                            <a>
                                <button className="bg-[#4e4ed4] text-white px-5 py-2 text-sm
                                    font-semibold mb-3 cursor-pointer tracking-wide rounded
                                    hover:bg-[#5770ff]">
                                    Read More
                                </button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;