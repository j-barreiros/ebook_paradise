// Styled
import { StyledBookItem } from './book-item.styles';

import image from '../../assets/kaiju.webp'

const BookItem = (props) => {
    const {imageUrl, title, author, price} = props;
    return (
        <StyledBookItem>
            <div className='image'>
                <div className="overlay">
                    <span className='details-btn'>More details</span>
                </div>
                <img src={imageUrl} />
            </div>
            <div className='info'>
                <a href="#" className='title'>{title}</a>
                <p className='specs'>(English, Paperback)</p>
                <a href="#" className='author'>{author[0]}</a>
                <p className='price'>{`€${parseInt(price) > 0 ? price : "0.00"}`}</p>
                <button className='buy-btn'>Add to cart</button>
            </div>
        </StyledBookItem>
    )
}

export default BookItem;