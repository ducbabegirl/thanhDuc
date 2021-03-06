import toastr from "toastr";
import { reRender } from "../utils";
import "toastr/build/toastr.min.css";

const Header = {
   render() {
       return /* html */ `
    <header>
       <div class="header">
       <div class="container">
          <div class="row">
             <div class="col-md-2 col-sm-2">
                <div class="logo"><a href="index.html"><img src="images/logo.png" alt="FlatShop"></a></div>
             </div>
             <div class="col-md-10 col-sm-10">
                <div class="header_top">
                   <div class="row">
                      <div class="col-md-3">
                         <ul class="option_nav">
                            <li class="dorpdown">
                               <a href="#">Eng</a>
                               <ul class="subnav">
                                  <li><a href="#">Eng</a></li>
                                  <li><a href="#">Vns</a></li>
                                  <li><a href="#">Fer</a></li>
                                  <li><a href="#">Gem</a></li>
                               </ul>
                            </li>
                            <li class="dorpdown">
                               <a href="#">USD</a>
                               <ul class="subnav">
                                  <li><a href="#">USD</a></li>
                                  <li><a href="#">UKD</a></li>
                                  <li><a href="#">FER</a></li>
                               </ul>
                            </li>
                         </ul>
                      </div>
                      <div class="col-md-6" style="margin-top: 10px;">
                         <ul class="topmenu">
                         ${localStorage.getItem("user") ? `<ul class="flex">
                         <li><a  id="account-email" class="block py-2  hover:text-white"></a></li>
                         <li><a  id="logout" class="block px-4 py-2 hover:text-white cursor-pointer">Logout</a></li>
                     </ul>` : ""}
                         </ul>
                      </div>
                      <div class="col-md-3">
                         <ul class="usermenu">
                            <li><a href="/signup" class="log">Login</a></li>
                            <li><a href="/signin" class="reg">Register</a></li>
                         </ul>
                      </div>
                   </div>
                </div>
                <div class="clearfix"></div>
                <div class="header_bottom">
                   <ul class="option">
                      <li id="search" class="search">
                         <form><input class="search-submit" type="submit" value=""><input class="search-input" placeholder="Enter your search term..." type="text" value="" name="search"></form>
                      </li>
                      <li class="option-cart">
                         <a href="/cart" class="cart-icon">cart <span class="cart_no">02</span></a>
                         <ul class="option-cart-item">
                            <li>
                               <div class="cart-item">
                                 
                               </div>
                            </li>
                            <li>
                               <div class="cart-item">
                                  <div class="image"><img src="images/products/thum/products-02.png" alt=""></div>
                                  <div class="item-description">
                                     <p class="name">Lincoln chair</p>
                                     <p>Size: <span class="light-red">One size</span><br>Quantity: <span class="light-red">01</span></p>
                                  </div>
                                  <div class="right">
                                     <p class="price">$30.00</p>
                                     <a href="#" class="remove"><img src="images/remove.png" alt="remove"></a>
                                  </div>
                               </div>
                            </li>
                            <li><span class="total">Total <strong>$60.00</strong></span><button class="checkout" onClick="location.href='checkout.html'">CheckOut</button></li>
                         </ul>
                      </li>
                   </ul>
                   <div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div>
                   <div class="navbar-collapse collapse">
                      <ul class="nav navbar-nav">
                         <li class="active dropdown">
                         <li><a href="/">HOME</a></li>
                            <div class="dropdown-menu">
                               <ul class="mega-menu-links">
                                  <li><a href="index.html">home</a></li>
                                  <li><a href="home2.html">home2</a></li>
                                  <li><a href="home3.html">home3</a></li>
                                  <li><a href="productlitst.html">Productlitst</a></li>
                                  <li><a href="productgird.html">Productgird</a></li>
                                  <li><a href="details.html">Details</a></li>
                                  <li><a href="cart.html">Cart</a></li>
                                  <li><a href="checkout.html">CheckOut</a></li>
                                  <li><a href="checkout2.html">CheckOut2</a></li>
                                  <li><a href="contact.html">contact</a></li>
                               </ul>
                            </div>
                         </li>
                         <li><a href="/#/about">men</a></li>
                         <li><a href="/products">women</a></li>
                         <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Fashion</a>
                            <div class="dropdown-menu mega-menu">
                               <div class="row">
                                  <div class="col-md-6 col-sm-6">
                                     <ul class="mega-menu-links">
                                        <li><a href="productgird.html">New Collection</a></li>
                                        <li><a href="productgird.html">Shirts & tops</a></li>
                                        <li><a href="productgird.html">Laptop & Brie</a></li>
                                        <li><a href="productgird.html">Dresses</a></li>
                                        <li><a href="productgird.html">Blazers & Jackets</a></li>
                                        <li><a href="productgird.html">Shoulder Bags</a></li>
                                     </ul>
                                  </div>
                                  <div class="col-md-6 col-sm-6">
                                     <ul class="mega-menu-links">
                                        <li><a href="productgird.html">New Collection</a></li>
                                        <li><a href="productgird.html">Shirts & tops</a></li>
                                        <li><a href="productgird.html">Laptop & Brie</a></li>
                                        <li><a href="productgird.html">Dresses</a></li>
                                        <li><a href="productgird.html">Blazers & Jackets</a></li>
                                        <li><a href="productgird.html">Shoulder Bags</a></li>
                                     </ul>
                                  </div>
                               </div>
                            </div>
                         </li>
                         <li><a href="/products/detail">gift</a></li>
                         <li><a href="productgird.html">kids</a></li>
                         <li><a href="productgird.html">blog</a></li>
                         <li><a href="/admin/dashboard">Admin</a></li>
                         <li><a href="contact.html">contact us</a></li>
                      </ul>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
    
</header>
       `;
   },
   afterRender() {
      const user = JSON.parse(localStorage.getItem("user"));
      const logout = document.querySelector("#logout");

      document.querySelector("#account-email").innerHTML = user.email;
      // logout
      logout.addEventListener("click", () => {
          toastr.success("Logout th??nh c??ng");
          localStorage.removeItem("user");
          reRender(Header, "#header");
      });
  },
};
export default Header;