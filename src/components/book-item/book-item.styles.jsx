import styled from 'styled-components';

export const StyledBookItem = styled.article`
    width: fit-content;
    max-width: 170px;
    margin: 0 auto;
    padding: 10px 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    flex-direction: column;
    .image {
        position: relative;
        display: flex;
        margin-bottom: 20px;
        cursor: pointer;
        .overlay {
            width: 100%;
            height: 100%;
            position: absolute;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: rgba(255,255,255,0.7);
            opacity: 0;
            transition: opacity 0.2s;
            .details-btn {
                padding: 7px 15px;
                border-radius: 15px;
                font-weight: bold;
                color: #fff;
                background-color: #28282d;
            }
        }
        img {
            width: 160px;
            cursor: pointer;
        }
        
        &:hover {
            .overlay {
                opacity: 1;
            }
        }
    }

    .info {
        .title {
            font-size: 1.15rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
           line-clamp: 2;
   -webkit-box-orient: vertical;
            &:hover {
                text-decoration: underline;
            }
        }

        .specs {
            font-size: 0.8rem;
            margin-bottom: 15px;
        }

        .author {
            display: block;
            font-size: 0.9rem;
            margin-bottom: 15px;
            color: #0074c3;
            &:hover {
                text-decoration: underline;
            }
        }

        .price {
            margin-bottom: 15px;
            font-size: 1.8rem;
            font-weight: 400;
            color: #28282d;
        }

        .buy-btn {
            background-color: #1d7673;
            font-size: 0.8rem;
            font-weight: 900;
            color: #fff;
            border: 0px;
            border-radius: 15px;
            padding: 7px 15px;
            cursor: pointer;
        }
    }
    `