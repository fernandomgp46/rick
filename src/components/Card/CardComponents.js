import styled from 'styled-components';


export const CardBase = styled.div`
    margin-left:20px;
    margin-top: 3em;
    border:5px dotted #569DAA;
    border-radius: 10px;
    background-color: #97DECE;
    display: flex;
    flex-direction: column;
    `;

export const Imagen = styled.img`
    border-radius:10px;
`;

export const Button = styled.button`
    width: 8%;
    z-index:2;
    margin-bottom: -20px;
    margin-left: 275px;
    border: 2px inset #F05454;
    border-radius: 10px;
    background-color: #F05454;
    font-weight: bold;
    &:hover{
        cursor:pointer;
    }
`;

export const Titulo2 = styled.h2`
    margin-top: 3px;
    margin-bottom: 3px;
`;

export const TituloNombre = styled.h2`
    margin: 10px 0px;
    color: #000;
    
`;

export const Contenedor2 = styled.div`
    display:flex;
    justify-content: space-around;
    margin-bottom: 10px;
    color: #D61355;
`;