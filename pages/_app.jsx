import { PostProvider } from '../components/PostContext';
import '../styles/globals.css'; 

const MyApp = ({ Component, pageProps }) => {

  return (
    <PostProvider>
      <Component {...pageProps} />
    </PostProvider>
  );
}

export default MyApp;
