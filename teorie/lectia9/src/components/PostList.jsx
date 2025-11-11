import {useState, useEffect} from 'react';
import { api } from '../services/api';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [loader, setLoader] = useState(true);

    useEffect(()=>{
        api.get("/posts")
           .then( res=>setPosts(res.data.posts) )
           .catch( err => setError("Eroare la incarcarea datelor!") )
           .finally( () => setLoader(false) );
    }, []);
    return (
        <div>
            
        </div>
    );
}

export default PostList;
