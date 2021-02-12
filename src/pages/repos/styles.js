import styled from 'styled-components';

export const Container = styled.div`
    max-width: 700px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(8, 8, 0, 0.1);
    padding: 30px;
    margin: 80px auto;
    h1 {
        font-size: 20px;
        display: flex;
        align-items: center;
        flex-direction: row;
    }
    svg {
        margin-right: 10px;
    }
`;

export const Loading = styled.div`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-size: 24px;
        margin-top: 10px;
    }
    img {
        width: 128px;
        border-radius: 50%;
        margin-top: 20px;
    }
    p {
        margin-top: 5px;
        font-size: 14px;
        color: #666;
        line-height: 1.4;
        text-align: center;
        max-width: 480px;
    }
    a {
        color: #141419;
        font-size: 16px;
        text-decoration: none;
        display: flex;
        align-items: center;
    }
`;

export const ListRepos = styled.ul`
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid #eee;
    list-style: none;
    li {
        display: flex;
        padding: 15px 10px;
        border: 1px solid #eee;
        border-radius: 4px;
        & + li {
            margin-top: 10px;
        }
        img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: 2px solid #eee;
            background-color: #333;
        }
        div {
            flex: 1;
            margin-left: 15px;
            strong {
                font-size: 16px;
                a {
                    text-decoration: none;
                    color: #333;
                    &:hover {
                        color: #7159c1;
                    }
                }
                span {
                    background: #eee;
                    color: #333;
                    border-radius: 2px;
                    font-size: 12px;
                    font-weight: 600;
                    height: 20px;
                    padding: 3px 4px;
                    margin-left: 10px;
                }
            }
            p {
                margin-top: 5px;
                font-size: 12px;
                color: #999;
            }
        }
    }
`;
export const Info = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 15px;
    span {
        border-radius: 4px;
        outline: 0;
        border: 0;
        padding: 8px;
        margin: 0 0.25rem;
        background-color: #141419;
    }
`;

export const PageActions = styled.div`
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    button {
        transition: opacity 0.25s ease-out;
        border-radius: 4px;
        outline: 0;
        border: 0;
        padding: 8px;
        &:disabled {
            opacity: 0.35;
            cursor: not-allowed;
        }
    }
`;
export const List = styled.ul`
    list-style: none;
    margin-top: 30px;
    li {
        color: #141419;
        padding: 15px 8px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        & + li {
            border-top: 1px solid #eee;
        }
    }
    a {
        color: #7159c1;
        text-decoration: none;
    }
`;
