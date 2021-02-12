import styled, { keyframes, css } from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FormContainer = styled.div`
    max-width: 700px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(8, 8, 0, 0.1);
    padding: 30px;
    margin: 80px auto;
    width: 100%;
    svg {
        margin-right: 10px;
    }
`;
export const Form = styled.form`
    display: flex;
    flex-direction: row;

    input {
        flex: 1;
        border: 1px solid ${(props) => (props.error ? '#ff6b6b' : '#eee')};
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 16px;
        transition: border 0.25s ease-out;
        color: #141419;
        font-weight: bold;
    }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg)
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
    type: 'submit',
    disabled: props.loading,
}))`
    background: #141419;
    border: 0;
    padding: 0 5px 0 15px;
    margin-left: 10px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    &[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }
    ${(props) =>
        props.loading &&
        css`
            svg {
                animation: ${rotate} 2s infinite;
            }
        `}
`;
export const UserList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    list-style: none;
    grid-gap: 20px;
    li {
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 4px;
        padding: 20px;
        img {
            align-self: center;
            max-width: 200px;
            background-color: #333;
        }
        > strong {
            font-size: 16px;
            line-height: 20px;
            color: #333;
            margin-top: 5px;
            text-align: center;
        }
        > span {
            font-size: 21px;
            font-weight: bold;
            margin: 5px 0 28px;
        }
        button {
            background: #141419;
            color: #fff;
            border: 0;
            border-radius: 4px;
            overflow: hidden;
            margin-top: auto;
            align-items: center;
            display: flex;
            transition: background;
            &:hover {
                background: ${lighten(0.05, '#141419')};
            }
            div {
                display: flex;
                align-items: center;
                padding: 12px;
                background: rgba(0, 0, 0, 0.1);
                svg {
                    margin-right: 5px;
                }
            }
            span {
                flex: 1;
                text-align: center;
                font-weight: bold;
            }
        }
    }
`;
