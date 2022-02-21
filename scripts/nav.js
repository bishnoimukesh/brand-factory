const createNavbar = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
    <div class="nav">
        <a href="./index.html">
            <img src="./img/brand-logo.png" class="brand-logo" alt="">
        </a>
        
        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="search brand, product">
            </div>
        
            <div class="nav-hamburger">
            <i class="fa fa-solid fa-bars"></i>
        </div>  
        
        <div class="nav-user">
            <a class="login-btn" href="./login.html">
                <button class="btn success-link">Login/Logout</button>
            </a>
            <a href="./whishlist.html">
                <div class="icon-badge">
                    <i class="fas fa-heart icon-badge-img"></i>
                    <div class="icon-badge-count">2</div>
                </div>
            </a>
            <a href="./cart.html">
                <div class="icon-badge">
                    <i class="fas fa-shopping-cart icon-badge-img"></i>
                    <div class="icon-badge-count">2</div>
                </div> 
            </a>
            </div>
        </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="./index.html" class="link">Home</a></li>
        <li class="link-item"><a href="./product.html" class="link">Men</a></li>
        <li class="link-item"><a href="./product.html" class="link">Women</a></li>
    </ul>
    `;
}
createNavbar();

const navHamburger = document.querySelector('.nav-hamburger');
const navBar = document.querySelector('.nav');

navHamburger.addEventListener('click', () => {
    console.log("object");
    navBar.classList.toggle('active');
});