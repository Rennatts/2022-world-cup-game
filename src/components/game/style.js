import styled from 'styled-components';


export const FlexBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    .title{
        position: absolute;
        z-index:2;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        padding-bottom:10px;
        background-color: #ffff;
        padding: 0px 20px;
        margin-top: 15px;
        text-transform; uppercase;
        text-align: center;
    }

    .flex-1{
        flex:1;
        min-width: 500px;
        overflow: hidden;
        position: relative;
    } 
    .image{
        width: 100%;
        height: 100%;
        transition: 0.5s;
        cursor: pointer;
        position: relative
    }
    .image:hover{
        transform: scale(1.1);
        opacity: 0.8s;
    }

    .final{
        width: 100%;
        height: 100%;
        position: relative;
        text-align: center;
        color: white;
        background-color: #e03ad0;
    } 

    .centered {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

    }

    .final h1{
        margin-bottom: 25px;
        font-size: 50px;

    } 

    .final h5{
        margin-top: 25px;
        font-size: 30px;
    }

    @media(max-width: 820px){
        .title{
            font-size: 20px;
        }
        .centered h1{

        }

        .image{
            width: 80%;
            height: 80%;

        }
    }


`;