import ReactDOM from 'react-dom';

export const LargeImagePortal = ({children}) => {
    return ReactDOM.createPortal(
        children,
        document.getElementById('img-portal')
    )
}