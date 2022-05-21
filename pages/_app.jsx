import Layout from '../components/Layout';
import { PostProvider } from '../components/PostContext';
import '../styles/globals.css'; 

const MyApp = ({ Component, pageProps }) => {

  return (
    <PostProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PostProvider>
  );
}

export default MyApp;
