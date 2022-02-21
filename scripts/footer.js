const createFooter = () => {
    let footer = document.querySelector('.footer');
    footer.innerHTML = `
        <div class="footer-content">
        <img src="./img/brand-logo.png" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">Help</li>
                    <li><a href="#" class="footer-link">Payment</a></li>
                    <li><a href="#" class="footer-link">Shipping</a></li>
                    <li><a href="#" class="footer-link">Report</a></li>
                    <li><a href="#" class="footer-link">FAQ</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">Policy</li>
                    <li><a href="#" class="footer-link">Return Policy</a></li>
                    <li><a href="#" class="footer-link">Term of Use</a></li>
                    <li><a href="#" class="footer-link">Site Map</a></li>
                    <li><a href="#" class="footer-link">Privacy</a></li>
                    <li><a href="#" class="footer-link">Security</a></li>
                </ul>
            </div>
        </div>

        <p class="footer-title">About Brand Factory</p>
        <p class="info">Brand Factory is a one stop shop for all your fashion and lifestyle needs. 
            Being large e-commerce store for fashion and lifestyle products, Brand Factory aims 
            at providing a hassle free and enjoyable shopping experience to shoppers across the 
            country with the widest range of brands and products on its portal. The brand is making
            a conscious effort to bring the power of fashion to shoppers with an array of the latest 
            and trendiest products available in the country.
        </p>
        <p class="info">support emails - help@brandfactory.com, customersupport@brandfactory.com</p>
        <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
        <p class="footer-credit">Brand Factory, Best apparels online store.</p>
    `}

createFooter();