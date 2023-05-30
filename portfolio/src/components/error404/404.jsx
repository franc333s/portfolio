import ButtonPrimary from '../button/ButtonPrimary';
import './404.scss'

function Error404() {

    return (
        <>
        <div className='main--padding error404'>
            <p className='error404__intro'>Ooops!</p>
            <div className='error404__404'>
                <p className='error404__404__item'>4</p>
                <p className='error404__404__item'>0</p>
                <p className='error404__404__item'>4</p>
            </div>
            <h1 className='error404__text'>This page could not be found</h1>
            <div className='error404__button'>
                <ButtonPrimary to="/portfolio" text="Return to portfolio"/>
            </div>
        </div>


        
        </>
    )
    
}

export default Error404
