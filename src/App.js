import Logo from "../src/assets/images/logo-site.png"
import "../src/styles/style.css"
import "../src/styles/source/css/bootstrap.css"

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-top">
            <div className="header-left">
                <a href="index.html">
                    <img src={Logo} alt="Logo" className="logo"/>
                </a>
                <div className="city-switcher">
                  <div className="city-switcher-block" id="city-switcher">
                        <button className="btn city-switcher-border" id="city-switcher-border">
                            <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="switch-city-svg"><path d="M5 0C2.24299 0 0 2.11205 0 4.70809C0 7.92986 4.47451 12.6596 4.66502 12.8594C4.84395 13.047 5.15637 13.0467 5.33498 12.8594C5.52549 12.6596 10 7.92986 10 4.70809C9.99995 2.11205 7.75699 0 5 0ZM5 7.07686C3.61288 7.07686 2.4844 6.01423 2.4844 4.70809C2.4844 3.40194 3.6129 2.33934 5 2.33934C6.3871 2.33934 7.51557 3.40197 7.51557 4.70811C7.51557 6.01426 6.3871 7.07686 5 7.07686Z" fill="#8BD337"></path></svg>
                            <span id="k">Кропивницький</span>
                            <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg" className="city-select-img"><path d="M8 1L4.5 4L1 1" stroke="#8BD337" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </button>
                        <p className="p" id="p">
                            <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="switch-city-svg"><path d="M5 0C2.24299 0 0 2.11205 0 4.70809C0 7.92986 4.47451 12.6596 4.66502 12.8594C4.84395 13.047 5.15637 13.0467 5.33498 12.8594C5.52549 12.6596 10 7.92986 10 4.70809C9.99995 2.11205 7.75699 0 5 0ZM5 7.07686C3.61288 7.07686 2.4844 6.01423 2.4844 4.70809C2.4844 3.40194 3.6129 2.33934 5 2.33934C6.3871 2.33934 7.51557 3.40197 7.51557 4.70811C7.51557 6.01426 6.3871 7.07686 5 7.07686Z" fill="#8BD337"></path></svg>
                        
                            <span id="o">Олександрія</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="header-right">
                <div className="phone">
                    <a href="tel:0800330404" rel="nofollow" className="phone-number text-decoration-none">0800 33 04 04</a>
                    <small className="phone-information">Дзвінок безкоштовний</small>
                </div>
                <h1 className="btn btn-outline-success btn-login">Увiйти</h1>
                <div className="btn-cart">
                    <div className="store-element">
                        <svg viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="store-img"><path d="M12.9054 3.63351H11.2816L9.94387 0.791527C9.62135 0.106363 8.79629 -0.191093 8.10468 0.128367C7.41141 0.448618 7.11195 1.26355 7.43525 1.9504L8.22749 3.63351H5.77256L6.56481 1.9504C6.72103 1.61848 6.73744 1.24618 6.61102 0.90204C6.19026 -0.242927 4.57382 -0.308205 4.05618 0.791527L2.71845 3.63351H1.09465C0.385752 3.63351 -0.136566 4.29122 0.0317416 4.97436L1.4826 10.865C1.64717 11.5333 2.24705 12 2.94139 12H11.0586C11.753 12 12.3528 11.5333 12.5174 10.865L13.9683 4.97436C14.1364 4.29212 13.6152 3.63351 12.9054 3.63351ZM8.23349 1.58167C8.07823 1.25182 8.32261 0.872483 8.68881 0.872483C8.87845 0.872483 9.06036 0.979124 9.14565 1.16029L10.3098 3.63351H9.1993L8.23349 1.58167ZM4.8544 1.16029C4.97168 0.911147 5.27166 0.802979 5.52314 0.919164C5.77463 1.03535 5.88381 1.33253 5.76656 1.58167L4.80075 3.63351H3.69025L4.8544 1.16029ZM13.1126 4.76752L11.6618 10.6582C11.5937 10.9345 11.3457 11.1274 11.0586 11.1274H2.94139C2.65431 11.1274 2.40633 10.9345 2.33826 10.6582L0.8874 4.76752C0.854619 4.63451 0.955907 4.50605 1.09465 4.50605H12.9053C13.0441 4.50605 13.1454 4.63451 13.1126 4.76752Z" fill="white"></path><path d="M6.99995 5.83691C6.75672 5.83691 6.55957 6.03226 6.55957 6.27319V9.36068C6.55957 9.60161 6.75672 9.79695 6.99995 9.79695C7.24318 9.79695 7.44033 9.60161 7.44033 9.36068V6.27319C7.44033 6.03223 7.24318 5.83691 6.99995 5.83691V5.83691Z" fill="white"></path><path d="M10.0317 5.8475C9.79437 5.79498 9.55888 5.94296 9.50584 6.17809L8.8091 9.26558C8.74773 9.5376 8.95652 9.79712 9.23927 9.79712C9.44091 9.79712 9.62282 9.65902 9.66864 9.45593L10.3654 6.36844C10.4184 6.13331 10.269 5.90007 10.0317 5.8475V5.8475Z" fill="white"></path><path d="M4.49424 6.17762C4.44115 5.94247 4.20582 5.79444 3.9684 5.84704C3.73106 5.89961 3.58166 6.13285 3.63473 6.36797L4.33146 9.45547C4.37729 9.65855 4.55914 9.79666 4.76083 9.79666C5.04331 9.79666 5.25244 9.53735 5.191 9.26512L4.49424 6.17762Z" fill="white"></path></svg>
                    </div>
                    <div className="store-element-name" id="store-element-name"></div>
                </div>
            </div>
        </div>
    </header>
    </div>
  );
}

export default App;
