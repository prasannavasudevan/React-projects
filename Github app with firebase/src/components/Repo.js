import React, {useState, useEffect} from "react";
import  Axios  from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

const Repos = ({repo_url}) => {

    const [repos, setRepos] = useState();

    const fetchRepos = async () => {
        const {data} = await Axios.get(repo_url)
        setRepos(); 
    }

    useEffect(() => {
        fetchRepos()
    }, [repo_url])

    return(
        <ListGroup>
            {
                repos?.map(repo => {
                    <ListGroupItem key={repos.id}>
                        <div className="text-primary">{repo.name}</div>
                        <div className="text-secondary">{repo.language}</div>
                        <div className="text-info">{repo.description}</div>
                    </ListGroupItem>
                })
            }
        </ListGroup>
    )
}

export default Repos;