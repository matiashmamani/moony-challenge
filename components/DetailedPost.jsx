import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import PostContext from './PostContext';
import { MdThumbUpOffAlt, MdThumbUp, MdArrowBack } from 'react-icons/md';
import moment from 'moment';

const DetailedPost = ({ post }) => {

    const imageUrl = `${post.image}?lock=${post.id}`;

    const router = useRouter();

    const [state, setState] = useContext(PostContext);

    const handleLike = (id) => {

        const updatedPosts = state.posts.map(updatedPost => {
        
            if(updatedPost.id == id){
                return {
                    ...updatedPost,
                    like: !post.like
                };
            }
    
            return updatedPost;
        });

        setState({
            posts: updatedPosts
        });
    }

    return (
        <>
            <div className="flex justify-center my-5 md:w-3/5 md:mx-auto md:max-w-[724px]">
                <div className="max-w-md overflow-hidden mx-5 md:max-w-none
                    md:border-x-2 md:border-black md:px-5">
                    <Image
                        src={imageUrl}
                        alt={post.title}
                        width={640}
                        height={480}
                    />
                    <div className="py-4">
                        <span className="tracking-widest text-xs title-font font-medium 
                            text-gray-500 mb-1 md:text-sm">
                            {moment(post.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a")}
                        </span>

                        <div className="title-font text-xl font-medium text-gray-700 md:text-2xl">
                            {post.title}
                        </div>

                        <p className="text-gray-700 text-base md:text-lg">
                            {post.article}
                        </p>
                    </div>

                    <div className="py-2 mb-3 flex text-sm md:text-base">

                        <button onClick={() => router.back()}
                            className="bg-white text-[#4e4ed4] flex justify-around
                            px-0 p-2 mb-3 mr-5 w-32 tracking-wide rounded font-normal
                            border-[#4e4ed4] border cursor-pointer hover:bg-[#4e4ed4]
                            hover:text-white md:w-36">

                            ← Back to Home
                            
                        </button>

                        <button onClick={() => handleLike(post.id)}
                            className={`bg-[#4e4ed4] text-white flex justify-around
                            px-5 p-2 mb-3 w-24 tracking-wide rounded
                            ${post.like? 'font-extrabold' : 'font-normal'} 
                            cursor-pointer hover:bg-[#5770ff] md:w-28`}>

                            Like {post.like? <MdThumbUp /> : <MdThumbUpOffAlt />}
                            
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailedPost;