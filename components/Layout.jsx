import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, home }) => {
    return (
        <>
            <Header home={home}/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    );
};

export default Layout;