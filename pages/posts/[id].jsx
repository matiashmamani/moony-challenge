import { useContext } from 'react';
import PostContext from '../../components/PostContext';
import { useRouter } from 'next/router';

/* export async function getServerSideProps({ params }){

    const [state, setState] = useContext(PostContext);

    if(params.id > state.posts.length){
        return {
            notFound: true,
        }
    }
  
    const post = state.posts.find(post => post.id == params.id);
  
    return {
      props: {
        post
      }
    };
  } */
  
  const PostById = () => {

    const router = useRouter();
    const [state, setState] = useContext(PostContext);

    console.log(state);

/*     const post = state.posts.find(post => post.id == router.query.id);

    console.log('post: ', post); */

    return (
        <p>hola</p>
    );

  }

  export default PostById;