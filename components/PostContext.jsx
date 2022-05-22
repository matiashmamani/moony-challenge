import { createContext, useState } from 'react';

const PostContext = createContext();

const PostConsumer = PostContext.Consumer;

const PostProvider = ({ children }) => {
    
    const [state, setState] = useState({
        posts: []
    });

    return (
        <PostContext.Provider value = {[state, setState]}>
            {children}
        </PostContext.Provider>
    );
}

export { PostProvider, PostConsumer };

export default PostContext;