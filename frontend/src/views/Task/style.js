import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Form = styled.div`
    width: 50%;
`

export const TypeIcons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    .inative{
        opacity: 0.5;
    }

    button{
        border: none;
        background: none;
        outline: none;
    }

    img{
        width: 50px;
        height: 50px;
        margin: 10px;
        cursor: pointer;

        &:hover{
            opacity: 0.5;
        }
    }

    span{
        color: #707070;
        margin-bottom: 5px;
        align-self: flex-start;
    }
`

export const Input = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span{
        color: #707070;
        margin-bottom: 5px;
    }

    input{
        font-size: 16px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #ee6b26;
        outline: none;
    }
`

export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px 0;

    span{
        color: #707070;
        margin-bottom: 5px;
    }

    input{
        font-size: 16px;
        padding: 15px;
        border: none;
        border-bottom: 1px solid #ee6b26;
        outline: none;
    }

    textarea{
        font-size: 16px;
        border: 1px solid #ee6b26;
        resize: none;
        outline: none;
        padding: 5px;
        border-radius: 5px;
    }
`

export const Options = styled.div`
    display: flex;
    justify-content: space-between;

    button{
        font-weight: bold;
        color :#20295f;
        border: none;
        background: none;
        font-size: 18px;
        outline: none;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }
    }

    div{
        display: flex;
        align-items: center;
        color: #ee6b26;
        font-weight: bold;
        font-size: 18px;
    }
`

export const Save = styled.div`
    width: 100%;
    margin-top: 20px;

    button{
        width: 100%;
        background: #ee6b26;
        cursor: pointer;
        outline: none;
        padding: 20px;
        border: none;
        font-size: 20px;
        color: #fff;
        font-weight: bold;
        border-radius: 30px;

        &:hover{
            opacity: 0.7;
        }
    }
`