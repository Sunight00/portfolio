import './nav.css';
export default function Nav() {
    return(
        <>
            <nav className='container-fluid'>
            <h3 className='text-light'>Logo</h3>
                <div className='container'></div>
                <a href='#' className='menu'><i className="bi bi-three-dots-vertical"></i></a>
                <ul className='container navbar'>
                    <a href="#">Profile</a>
                    <a href="#">Projects</a>
                    <a href="#">Contact</a>
                </ul>
            </nav>
        </>
    )
}