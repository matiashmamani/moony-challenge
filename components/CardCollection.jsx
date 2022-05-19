import Card from "./Card";


const CardCollection = ({ posts }) => {

    const cardCollection = posts.map(post => {
        return (
            <Card key={post.id} post={post} />
        );
    });

    return (
        <div className="flex flex-row flex-wrap justify-center 
            md:w-full md:mx-auto">
            {cardCollection}
        </div>
    ); 
};

export default CardCollection;