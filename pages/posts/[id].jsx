import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { useContext } from 'react';
import Layout from '../../components/Layout';
import DetailedPost from '../../components/DetailedPost';
import PostContext from '../../components/PostContext';
  
  const PostById = () => {

    const router = useRouter();
    const [state, setState] = useContext(PostContext);

    const post = state.posts.find(post => post.id == router.query.id);

    if(post === undefined){
      return <ErrorPage statusCode={404} />;
    }

    return (
        <Layout>
          <DetailedPost post={post} />
        </Layout>
    );

  }

  export default PostById;