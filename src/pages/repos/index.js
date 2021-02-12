/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Container, Owner, ListRepos, Info, List } from './styles';
import api from '../../services/api';

export default function Repos({ match }) {
    const [repositories, setRepositories] = useState([]);
    const [login, setLogin] = useState('');
    const [bio, setBio] = useState('');
    const [picture, setPicture] = useState('');
    const [repos, setRepos] = useState('');
    const [following, setFollowing] = useState('');
    const [followers, setFollowes] = useState('');

    const users = useSelector((state) => state.users);

    const userName = decodeURIComponent(match.params.userName);

    async function getRepositories() {
        const response = await api.get(`/users/${userName}/repos`);

        const { data } = response;
        setRepositories(data);
    }

    useEffect(() => {
        getRepositories();
        const user = users.find((u) => u.login === userName);
        setLogin(user.login);
        setRepos(user.public_repos);
        setBio(user.bio);
        setPicture(user.avatar_url);
        setFollowes(user.followers);
        setFollowing(user.following);
    }, []);

    return (
        <Container>
            <Owner>
                <Link to="/">
                    <FaArrowLeft />
                    Voltar
                </Link>
                <img src={picture} alt={login} />
                <h1>{login}</h1>
                <p>{bio}</p>
            </Owner>
            <ListRepos>
                <Info>
                    <span>{`Respositórios: ${repos}`}</span>
                    <span>{`Seguindo: ${following}`}</span>
                    <span>{`Seguidores: ${followers}`}</span>
                </Info>
                <List>
                    {repositories.map((repository) => (
                        <li key={repository.id}>
                            <strong>{repository.name}</strong>
                            <a target="_black" href={repository.html_url}>
                                Detalhes
                            </a>
                        </li>
                    ))}
                </List>
            </ListRepos>
        </Container>
    );
}
