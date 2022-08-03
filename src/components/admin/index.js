import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllPosts } from "../../service/actions/actions";
import User from "../../components/Users";
import '../../App.css';

function Admin() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllPosts());
    }, []);

    return (
        <div className="App">
            <h1>This is Admin Home</h1>
            <Users />
        </div>
    )
}

export default Admin;
