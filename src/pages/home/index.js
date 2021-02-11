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

export default function Home() {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([
        {
            userId: 1,
            picture:
                'https://avatars.githubusercontent.com/u/54459438?s=460&u=adf45ec3c4f5b3660912163066a6d41a3aa11dde&v=4',
            userName: 'Melquias Riebriro',
        },
        {
            userId: 2,
            picture:
                'https://avatars.githubusercontent.com/u/54459438?s=460&u=adf45ec3c4f5b3660912163066a6d41a3aa11dde&v=4',
            userName: 'Melquias Riebriro',
        },
        {
            userId: 3,
            picture:
                'https://avatars.githubusercontent.com/u/54459438?s=460&u=adf45ec3c4f5b3660912163066a6d41a3aa11dde&v=4',
            userName: 'Melquias Riebriro',
        },
        {
            userId: 4,
            picture:
                'https://avatars.githubusercontent.com/u/54459438?s=460&u=adf45ec3c4f5b3660912163066a6d41a3aa11dde&v=4',
            userName: 'Melquias Riebriro',
        },
        {
            userId: 5,
            picture:
                'https://avatars.githubusercontent.com/u/54459438?s=460&u=adf45ec3c4f5b3660912163066a6d41a3aa11dde&v=4',
            userName: 'Melquias Riebriro',
        },
        {
            userId: 6,
            picture:
                'https://avatars.githubusercontent.com/u/54459438?s=460&u=adf45ec3c4f5b3660912163066a6d41a3aa11dde&v=4',
            userName: 'Melquias Riebriro',
        },
        {
            userId: 7,
            picture:
                'https://avatars.githubusercontent.com/u/54459438?s=460&u=adf45ec3c4f5b3660912163066a6d41a3aa11dde&v=4',
            userName: 'Melquias Riebriro',
        },
        {
            userId: 8,
            picture:
                'https://avatars.githubusercontent.com/u/54459438?s=460&u=adf45ec3c4f5b3660912163066a6d41a3aa11dde&v=4',
            userName: 'Melquias Riebriro',
        },
    ]);

    const history = useHistory();

    function HandleNavigate() {
        history.push('/repos');
    }

    return (
        <Container>
            <FormContainer>
                <Form>
                    <input type="text" placeholder="Pesquise um usuário" />

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
                    <li key={String(user.userId)}>
                        <img src={user.picture} alt={user.userName} />
                        <strong>{user.userName}</strong>
                        <button type="button" onClick={() => HandleNavigate()}>
                            <div>
                                <ImBooks size={16} color="#fff" />
                            </div>
                            <span>VER REPOSITÓRIOS</span>
                        </button>
                    </li>
                ))}
            </UserList>
        </Container>
    );
}
