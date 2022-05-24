import { useRouter } from 'next/router';
import { useContext } from "react";
import PostContext from '../components/PostContext';
import Layout from "../components/Layout";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddForm = () => {

    const router = useRouter();
    const [state, setState] = useContext(PostContext);

    const handleSubmit = (event) => {    
        
        event.preventDefault();
        const {title, description, image} = event.target;

        const storedPostsInString = localStorage.getItem("storedPosts");
        let storedPosts = [];

        if(storedPostsInString == null){
            // Do nothing
        } else {
            storedPosts = JSON.parse(storedPostsInString);
        }

        const fileReader = new FileReader();

        fileReader.onload = (e) => {

            let newStoredPosts;
            let newId;
    
            if(storedPosts.length != 0){
                newStoredPosts = storedPosts;
                newId = parseInt(storedPosts.at(-1).id) + 1;
            } else {
                newStoredPosts = [];
                newId = state.posts.length + 1;
            }

            const newImage = e.target.result;
            const createdAt = new Date();
    
            const newPost = {
                createdAt: createdAt.toISOString(),
                title: title.value,
                article: description.value,
                slug: "",
                image: newImage,
                id: newId.toString()
            }
    
            newStoredPosts.push(newPost);
            localStorage.setItem('storedPosts', JSON.stringify(newStoredPosts));

            if(!state.posts.length){

                setState({
                    posts: newStoredPosts
                });

            } else {

                let updatedPosts = state.posts;
                updatedPosts.push(newPost);
                
                setState({
                    posts: updatedPosts
                });
            }

            event.target.reset();   // Reset form inputs

            toast.success('Post added successfully!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

        fileReader.readAsDataURL(image.files[0]);
    };

    return (
        <Layout>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="flex flex-col my-5 md:w-3/5 
                md:mx-auto md:max-w-[724px]">
                <form onSubmit={handleSubmit} className="mx-5">

                    <h1 className="text-2xl text-center text-[#4e4ed4] font-black
                        md:my-3 md:text-4xl xl:text-5xl xl:my-5">
                        Add a Post
                    </h1>
                    
                    <div className="flex flex-col my-3 text-lg font-semibold
                        md:text-2xl xl:text-3xl">
                        <label htmlFor="title" className="text-[#4e4ed4]">Title:</label>
                        <input
                            type="text" 
                            id="title" 
                            name="title"
                            minLength="3"
                            maxLength="30"
                            required
                            className="border border-[#4e4ed4] my-1 md:my-3"
                        />
                    </div>

                    <div className="flex flex-col my-3 text-lg font-semibold
                        md:text-2xl xl:text-3xl xl:my-5">
                        <label htmlFor="image" className="text-[#4e4ed4]">Image:</label>
                        <input 
                            type="file"
                            id="image"
                            name="image"
                            accept=".png, .jpg, .jpeg"
                            required
                            className="my-1 text-base md:my-3 md:text-lg"
                        />
                    </div>

                    <div className="flex flex-col my-3 text-lg font-semibold
                        md:text-2xl xl:text-3xl">
                        <label htmlFor="description" className="text-[#4e4ed4]">Description:</label>
                        <textarea
                            type="text"
                            id="description"
                            name="description"
                            minLength="50"
                            maxLength="800"
                            required
                            className="border border-[#4e4ed4] h-60 my-1
                                md:h-72 md:my-3 xl:h-80"
                        />
                    </div>

                    <div className="flex flex-row my-3 text-lg font-semibold
                        md:text-2xl xl:text-3xl">

                        <button onClick={() => router.back()}
                                className="bg-white text-[#4e4ed4]
                                px-0 p-2 mb-3 mr-5 w-40 tracking-wide rounded font-normal
                                border-[#4e4ed4] border cursor-pointer hover:bg-[#4e4ed4]
                                hover:text-white md:my-3 md:w-64 xl:mr-7">

                                ← Back to Home
                                
                        </button>

                        <button 
                            type="submit"
                            className="bg-[#4e4ed4] text-white
                            px-5 p-2 mb-3 w-24 tracking-wide rounded font-normal cursor-pointer
                            hover:bg-[#5770ff] md:w-28 md:my-3 md:text-2xl xl:text-3xl"
                        >
                            Add
                        </button>

                    </div>

                </form>
            </div>
        </Layout>
    );
}
  
export default AddForm;