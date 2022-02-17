import { getAll } from '../../api/product';

import Footer from '../../components/footer';
import Header from '../../components/header';
const ProductPage = {
    async render() {
        const response = await getAll()
        return /* html */`
        <div id="header">
                ${Header.render()}
            </div>
        <div class="container_fullwidth">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <div class="category leftbar">
                <h3 class="title">
                  Categories
                </h3>
                <ul>
                  <li>
                    <a href="#">
                      Men
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Women
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Salon
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      New Trend
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Living room
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Bed room
                    </a>
                  </li>
                </ul>
              </div>
              <div class="clearfix">
              </div>
              <div class="branch leftbar">
                <h3 class="title">
                  Branch
                </h3>
                <ul>
                  <li>
                    <a href="#">
                      New
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Sofa
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Salon
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      New Trend
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Living room
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Bed room
                    </a>
                  </li>
                </ul>
              </div>
              <div class="clearfix">
              </div>
              <div class="price-filter leftbar">
                <h3 class="title">
                  Price
                </h3>
                <form class="pricing">
                  <label>
                    $ 
                    <input type="number">
                  </label>
                  <span class="separate">
                    - 
                  </span>
                  <label>
                    $ 
                    <input type="number">
                  </label>
                  <input type="submit" value="Go">
                </form>
              </div>
              <div class="clearfix">
              </div>
              <div class="clolr-filter leftbar">
                <h3 class="title">
                  Color
                </h3>
                <ul>
                  <li>
                    <a href="#" class="red-bg">
                      light red
                    </a>
                  </li>
                  <li>
                    <a href="#" class=" yellow-bg">
                      yellow"
                    </a>
                  </li>
                  <li>
                    <a href="#" class="black-bg ">
                      black
                    </a>
                  </li>
                  <li>
                    <a href="#" class="pink-bg">
                      pink
                    </a>
                  </li>
                  <li>
                    <a href="#" class="dkpink-bg">
                      dkpink
                    </a>
                  </li>
                  <li>
                    <a href="#" class="chocolate-bg">
                      chocolate
                    </a>
                  </li>
                  <li>
                    <a href="#" class="orange-bg">
                      orange-bg
                    </a>
                  </li>
                  <li>
                    <a href="#" class="off-white-bg">
                      off-white
                    </a>
                  </li>
                  <li>
                    <a href="#" class="extra-lightgreen-bg">
                      extra-lightgreen
                    </a>
                  </li>
                  <li>
                    <a href="#" class="lightgreen-bg">
                      lightgreen
                    </a>
                  </li>
                  <li>
                    <a href="#" class="biscuit-bg">
                      biscuit
                    </a>
                  </li>
                  <li>
                    <a href="#" class="chocolatelight-bg">
                      chocolatelight
                    </a>
                  </li>
                </ul>
              </div>
              <div class="clearfix">
              </div>
              <div class="product-tag leftbar">
                <h3 class="title">
                  Products 
                  <strong>
                    Tags
                  </strong>
                </h3>
                <ul>
                  <li>
                    <a href="#">
                      Lincoln us
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      SDress for Girl
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Corner
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Window
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      PG
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Oscar
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Bath room
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      PSD
                    </a>
                  </li>
                </ul>
              </div>
              <div class="clearfix">
              </div>
              <div class="others leftbar">
                <h3 class="title">
                  Others
                </h3>
              </div>
              <div class="clearfix">
              </div>
              <div class="others leftbar">
                <h3 class="title">
                  Others
                </h3>
              </div>
              <div class="clearfix">
              </div>
              <div class="fbl-box leftbar">
                <h3 class="title">
                  Facebook
                </h3>
                <span class="likebutton">
                  <a href="#">
                    <img src="images/fblike.png" alt="">
                  </a>
                </span>
                <p>
                  12k people like Flat Shop.
                </p>
                <ul>
                  <li>
                    <a href="#">
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    </a>
                  </li>
                </ul>
                <div class="fbplug">
                  <a href="#">
                    <span>
                      <img src="images/fbicon.png" alt="">
                    </span>
                    Facebook social plugin
                  </a>
                </div>
              </div>
              <div class="clearfix">
              </div>
              <div class="leftbanner">
                <img src="images/banner-small-01.png" alt="">
              </div>
            </div>
            <div class="col-md-9">
              <div class="banner">
                <div class="bannerslide" id="bannerslide">
                  <ul class="slides">
                    <li>
                      <a href="#">
                        <img src="images/banner-01.jpg" alt=""/>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="images/banner-02.jpg" alt=""/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="clearfix">
              </div>
              <div class="products-grid">
                <div class="toolbar">
                  <div class="sorter">
                    <div class="view-mode">
                      <a href="" class="list">
                        List
                      </a>
                      <a href="#" class="grid active">
                        Grid
                      </a>
                    </div>
                    <div class="sort-by">
                      Sort by : 
                      <select name="" >
                        <option value="Default" selected>
                          Default
                        </option>
                        <option value="Name">
                          Name
                        </option>
                        <option value="Price">
                          Price
                        </option>
                      </select>
                    </div>
                    <div class="limiter">
                      Show : 
                      <select name="" >
                        <option value="3" selected>
                          3
                        </option>
                        <option value="6">
                          6
                        </option>
                        <option value="9">
                          9
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="pager">
                    <a href="#" class="prev-page">
                      <i class="fa fa-angle-left">
                      </i>
                    </a>
                    <a href="#" class="active">
                      1
                    </a>
                    <a href="#">
                      2
                    </a>
                    <a href="#">
                      3
                    </a>
                    <a href="#" class="next-page">
                      <i class="fa fa-angle-right">
                      </i>
                    </a>
                  </div>
                </div>
                <div class="clearfix">
                </div>
                <div class="row">
                ${response.data.map((product) => /*html*/`
            <div class="col-md-4 col-sm-6">
                <div class="products">
                  <div class="offer">
                    New
                  </div>
                  <div class="thumbnail">
                    <a href="/products/${product.id}">
                      <img src="${product.img}" alt="Product Name">
                    </a>
                  </div>
                  <div class="productname">
                  ${product.title}
                  </div>
                  <h4 class="price">
                  ${product.price}
                  </h4>
                  <div class="rating" style="text-align: center;">
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star-o"></i>
              </div>
                  <div class="button_group">
                    <button class="button add-cart" type="button">
                      Add To Cart
                    </button>
                    <button class="button compare" type="button">
                      <i class="fa fa-exchange">
                      </i>
                    </button>
                    <button class="button wishlist" type="button">
                      <i class="fa fa-heart-o">
                      </i>
                    </button>
                  </div>
                </div>
            </div>
            `).join("")}
            </div>


                <div class="clearfix">
                </div>
                <div class="toolbar">
                  <div class="sorter bottom">
                    <div class="view-mode">
                      <a href="productlitst.html" class="list">
                        List
                      </a>
                      <a href="#" class="grid active">
                        Grid
                      </a>
                    </div>
                    <div class="sort-by">
                      Sort by : 
                      <select name="">
                        <option value="Default" selected>
                          Default
                        </option>
                        <option value="Name">
                          Name
                        </option>
                        <option value="
<strong>
#
</strong>
">
  Price
                        </option>
                      </select>
                    </div>
                    <div class="limiter">
                      Show : 
                      <select name="" >
                        <option value="3" selected>
                          3
                        </option>
                        <option value="6">
                          6
                        </option>
                        <option value="9">
                          9
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="pager">
                    <a href="#" class="prev-page">
                      <i class="fa fa-angle-left">
                      </i>
                    </a>
                    <a href="#" class="active">
                      1
                    </a>
                    <a href="#">
                      2
                    </a>
                    <a href="#">
                      3
                    </a>
                    <a href="#" class="next-page">
                      <i class="fa fa-angle-right">
                      </i>
                    </a>
                  </div>
                </div>
                <div class="clearfix">
                </div>
              </div>
            </div>
          </div>
          <div class="clearfix">
          </div>
          <div class="our-brand">
            <h3 class="title">
              <strong>
                Our 
              </strong>
              Brands
            </h3>
            <div class="control">
              <a id="prev_brand" class="prev" href="#">
                &lt;
              </a>
              <a id="next_brand" class="next" href="#">
                &gt;
              </a>
            </div>
            <ul id="braldLogo">
              <li>
               
              </li>
              <li>
                <ul class="brand_item">
                  <li>
                    <a href="#">
                      <div class="brand-logo">
                        <img src="images/envato.png" alt="">
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="brand-logo">
                        <img src="images/themeforest.png" alt="">
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="brand-logo">
                        <img src="images/photodune.png" alt="">
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="brand-logo">
                        <img src="images/activeden.png" alt="">
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="brand-logo">
                        <img src="images/envato.png" alt="">
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
   
    </div>
</main>
${Footer.render()}
       
        `;
    },
};
export default ProductPage;