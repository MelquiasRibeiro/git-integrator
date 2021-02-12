/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { Container, Owner, ListIssues, IssueFilter, List } from './styles';
import api from '../../services/api';

export default function Repos({ match }) {
    const [repositories, setRepositories] = useState([]);

    const user = {
        login: 'MelquiasRibeiro',
        id: 54459438,
        node_id: 'MDQ6VXNlcjU0NDU5NDM4',
        avatar_url: 'https://avatars.githubusercontent.com/u/54459438?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/MelquiasRibeiro',
        html_url: 'https://github.com/MelquiasRibeiro',
        followers_url: 'https://api.github.com/users/MelquiasRibeiro/followers',
        following_url:
            'https://api.github.com/users/MelquiasRibeiro/following{/other_user}',
        gists_url:
            'https://api.github.com/users/MelquiasRibeiro/gists{/gist_id}',
        starred_url:
            'https://api.github.com/users/MelquiasRibeiro/starred{/owner}{/repo}',
        subscriptions_url:
            'https://api.github.com/users/MelquiasRibeiro/subscriptions',
        organizations_url: 'https://api.github.com/users/MelquiasRibeiro/orgs',
        repos_url: 'https://api.github.com/users/MelquiasRibeiro/repos',
        events_url:
            'https://api.github.com/users/MelquiasRibeiro/events{/privacy}',
        received_events_url:
            'https://api.github.com/users/MelquiasRibeiro/received_events',
        type: 'User',
        site_admin: false,
        name: 'Melquias Ribeiro',
        company: null,
        blog: 'https://melquiasribeiro.github.io/Perfil/',
        location: 'São Luis MA',
        email: null,
        hireable: null,
        bio:
            'Entusiasta das áreas de ciência/engenharia de dados e desenvolvimento web/mobile',
        twitter_username: null,
        public_repos: 42,
        public_gists: 0,
        followers: 15,
        following: 37,
        created_at: '2019-08-24T00:25:26Z',
        updated_at: '2021-02-09T21:35:33Z',
    };

    const userName = decodeURIComponent(match.params.userName);

    async function getRepositories() {
        const response = await api.get(`/users/${userName}/repos`);

        const { data } = response;
        console.log(data);
        setRepositories(data);
    }
    useEffect(() => {
        getRepositories();
    }, []);
    return (
        <Container>
            <Owner>
                <Link to="/">
                    <FaArrowLeft />
                    Voltar
                </Link>
                <img src={user.avatar_url} alt={user.login} />
                <h1>{user.login}</h1>
                <p>{user.bio}</p>
            </Owner>
            <ListIssues>
                <IssueFilter>
                    <span>{`Respositórios: ${user.public_repos}`}</span>
                    <span>{`Seguindo: ${user.following}`}</span>
                    <span>{`Seguidores: ${user.followers}`}</span>
                </IssueFilter>
                <List>
                    {repositories.map((repository) => (
                        <li key={repository.id}>
                            <strong>{repository.name}</strong>
                            <span>{repository.description}</span>
                            <Link
                                to={`/repository/${encodeURIComponent(
                                    repository.name
                                )}`}
                            >
                                Detalhes
                            </Link>
                        </li>
                    ))}
                </List>
            </ListIssues>
            {/* <PageActions>
                <button
                    type="button"
                    disabled={page < 2}
                    onClick={() => this.handlePage('back')}
                >
                    Anterior
                </button>
                <span>Página {page}</span>
                <button type="button" onClick={() => this.handlePage('next')}>
                    Próximo
                </button>
            </PageActions> */}
        </Container>
    );
}
