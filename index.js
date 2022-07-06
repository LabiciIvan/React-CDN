function Navbar() {
    return (
        <nav className="navbar">
            <a className="nav-link">NAVIGATION</a>
            <div className="nav-menu">
                <i className="fa-solid fa-bars"></i>

                <div className="nav-burger">
                    <a className="nav-link">HOME</a>
                    <a className="nav-link">ABOUT</a>
                    <a className="nav-link">PRODUCTS</a>
                </div>
            </div>
        </nav>
    );
}

function MainPageDescription() {
    return (
        <h1 className="main-description">
            <h1 className="main-description-content">
                <h1 className="content">Welcome to REACT application!</h1>
            </h1>
        </h1>
    );
}


ReactDOM.render(
    <React.Fragment>
        <Navbar/>

        <MainPageDescription/>
    </React.Fragment>


, document.getElementById('root'));

document.querySelector('.fa-solid.fa-bars').addEventListener('click', expandBurger);
document.querySelector('.nav-burger').addEventListener('mouseleave', hideBurger);


function expandBurger() {
    
    let navMenu =  document.querySelector('.nav-burger');

    if (navMenu.style.opacity === '1') {
        navMenu.style.opacity = '0';
        navMenu.style.transition = '0.4s';
        // navMenu.style.display = 'none';
    } 
    else  {
       
        navMenu.style.transition = '0.4s';
        navMenu.style.opacity = '1';
        // navMenu.style.display = 'grid';
    }
}

function hideBurger() {

    let navMenu =  document.querySelector('.nav-burger');
    navMenu.style.opacity = '0';
    navMenu.style.transition = '0.4s';

}