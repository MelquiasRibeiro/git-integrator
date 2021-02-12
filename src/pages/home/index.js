import React, { useState } from 'react';
import { FaSpinner, FaSearch } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';
import { useHistory } from 'react-router-dom';
import {
    Container,
    Form,
    SubmitButton,
    FormContainer,
    UserList,
} from './styles';
import api from '../../services/api';

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [newUser, setNewUser] = useState('');
    const [users, setUsers] = useState([]);

    const history = useHistory();

    function HandleNavigate(user) {
        history.push(`/repos/${encodeURIComponent(user)}`);
    }

    async function handleSearch(e) {
        e.preventDefault();
        setLoading(true);

        try {
            if (newUser === '')
                throw new Error('Você precisa indicar um usuário');

            const hasUser = users.find((r) => r.login === newUser);

            if (hasUser) throw new Error('Repositório duplicado');

            const response = await api.get(`/users/${newUser}`);

            const { data } = response;

            setUsers([...users, data]);
            setNewUser('');
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Container>
            <FormContainer>
                <Form error={error} onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Pesquise um usuário"
                        value={newUser}
                        onChange={(e) => setNewUser(e.target.value)}
                    />
                    <SubmitButton loading={loading}>
                        {loading ? (
                            <FaSpinner color="#fff" size={14} />
                        ) : (
                            <FaSearch color="#fff" size={14} />
                        )}
                    </SubmitButton>
                </Form>
            </FormContainer>
            <UserList>
                {users.map((user) => (
                    <li key={String(user.id)}>
                        <img src={user.avatar_url} alt={user.login} />
                        <strong>{user.login}</strong>
                        <button
                            type="button"
                            onClick={() => HandleNavigate(user.login)}
                        >
                            <div>
                                <ImBooks size={16} color="#fff" />
                            </div>
                            <span>VER INFORMAÇÕES</span>
                        </button>
                    </li>
                ))}
            </UserList>
        </Container>
    );
}
