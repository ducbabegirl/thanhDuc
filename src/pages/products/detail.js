import { get } from '../../api/product';
import Footer from '../../components/footer';
import { addToCart } from '../../utils/cart';
import toastr from "toastr";
import CmtPage from '../../components/cmt';
import "toastr/build/toastr.min.css";

import Header from '../../components/header';
const ProductDetailPage = {
    async render(id) {
        const { data: product } = await get(id)
        return /* html */`

        ${Header.render()}
        
        <div class="container">
        <div class="row">
          <div class="col-md-9">
            <div class="products-details">
              <div class="preview_image">
                <div class="preview-small" style="margin-left: 30%;">
                  <img id="zoom_03" src="${product.img}" data-zoom-image="images/products/Large/products-01.jpg" alt="">
                </div>
                <div class="thum-image">
                  <ul id="gallery_01" class="prev-thum">
                    <li>
                      <a href="#" data-image="images/products/medium/products-01.jpg" data-zoom-image="images/products/Large/products-01.jpg">
                        <img src="${product.img}" alt="">
                      </a>
                    </li>
                    <li>
                      <a href="#" data-image="images/products/medium/products-02.jpg" data-zoom-image="images/products/Large/products-02.jpg">
                        <img src="${product.img}" alt="">
                      </a>
                    </li>
                    <li>
                      <a href="#" data-image="images/products/medium/products-03.jpg" data-zoom-image="images/products/Large/products-03.jpg">
                        <img src="${product.img}" alt="">
                      </a>
                    </li>
                    <li>
                      <a href="#" data-image="images/products/medium/products-04.jpg" data-zoom-image="images/products/Large/products-04.jpg">
                        <img src="${product.img}" alt="">
                      </a>
                    </li>
                   
                  </ul>
                  <a class="control-left" id="thum-prev" href="javascript:void(0);">
                    <i class="fa fa-chevron-left">
                    </i>
                  </a>
                  <a class="control-right" id="thum-next" href="javascript:void(0);">
                    <i class="fa fa-chevron-right">
                    </i>
                  </a>
                </div>
              </div>
              <div class="products-description">
                <h5 class="name">
                ${product.title}
                </h5>
                <p>
                  <img alt="" src="images/star.png">
                 
                </p>
                <p>
                  Availability: 
                  <span class=" light-red">
                    In Stock
                  </span>
                </p>
                <p>
                ${product.desc}
                </p>
                <hr class="border">
                <div class="price">
                  Price : 
                  <span class="new_price">
                  ${product.price}
                    <sup>
                      $
                    </sup>
                  </span>
                  <span class="old_price">
                  ${product.price}
                    <sup>
                      $
                    </sup>
                  </span>
                </div>
                <hr class="border">
                <div class="wided" style="padding: 10px;">
                  <div class="qty">
                    Qty &nbsp;&nbsp;: 
                    <input type="number" id="inputValue" class="border border-black" min="1" max="5"/>
                  </div>
                  <div class="button_group">
                  <button data-id="${product.id}" id="btnAddToCart" class="button">Add to Cart</button>
                   
                    <button class="button compare">
                      <i class="fa fa-exchange">
                      </i>
                    </button>
                    <button class="button favorite">
                      <i class="fa fa-heart-o">
                      </i>
                    </button>
                    <button class="button favorite">
                      <i class="fa fa-envelope-o">
                      </i>
                    </button>
                  </div>
                </div>
                <div class="clearfix">
                </div>
                <hr class="border">
                <img src="images/share.png" alt="" class="pull-right" style="margin-top: 30px;">
              </div>
            </div>
            <div class="clearfix">
            </div>
            <div class="tab-box">
              <div id="tabnav">
                <ul>
                  <li>
                    <a href="#Descraption">
                      DESCRIPTION
                    </a>
                  </li>
                  <li>
                    <a href="#Reviews">
                      REVIEW
                    </a>
                  </li>
                  <li>
                    <a href="#tags">
                      PRODUCT TAGS

                    </a>
                  </li>
                </ul>
              </div>
              <div class="tab-content-wrap">
                <div class="tab-content" id="Descraption">
                  <p>
                  ${product.desc}
                  </p>
                </div>
                <div class="tab-content" id="Reviews">
                  <form>
                    <table>
                  
                    
                 
                    </table>
                  </form>
                </div>
                
              
              </div>
            </div>
            <div class="clearfix">
            </div>
            <div class="clearfix">
            </div>
          </div>
          <div class="col-md-3">
            <div class="special-deal leftbar">
              <h4 class="title">
                Special 
                <strong>
                  Deals
                </strong>
              </h4>
              <div class="special-item">
                <div class="product-image">
                  <a href="#">
                    <img src="${product.img}" alt="">
                  </a>
                </div>
                <div class="product-info">
                  <p>
                  ${product.title}
                  </p>
                  <h5 class="price">
                  ${product.price}
                  </h5>
                </div>
              </div>
              <div class="special-item">
                <div class="product-image">
                  <a href="#">
                    <img src="${product.img}" alt="">
                  </a>
                </div>
                <div class="product-info">
                  <p>
                  ${product.title}
                  </p>
                  <h5 class="price">
                  ${product.price}
                  </h5>
                </div>
              </div>
              <div class="special-item">
                <div class="product-image">
                  <a href="#">
                    <img src="${product.img}" alt="">
                  </a>
                </div>
                <div class="product-info">
                  <p>
                  ${product.title}
                  </p>
                  <h5 class="price">
                  ${product.price}
                  </h5>
                </div>
              </div>
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
            <div class="get-newsletter leftbar">
              <h3 class="title">
                Get 
                <strong>
                  newsletter
                </strong>
              </h3>
              <p>
                Casio G Shock Digital Dial Black.
              </p>
              <form>
                <input class="email" type="text" name="" placeholder="Your Email...">
                <input class="submit" type="submit" value="Submit">
              </form>
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
          </div>
        </div>
        <div class="clearfix">
        </div>
        
        </div>
      </div> 


      ${CmtPage.render()}
        
        ${Footer.render()}
        `;
      
    },
    afterRender(){
        const btnAddToCart = document.querySelector('#btnAddToCart');
        const id = btnAddToCart.dataset.id;
        const inputValue = document.querySelector('#inputValue');

        btnAddToCart.addEventListener('click', async function(){
            // console.log(inputValue.value)
            const { data } = await get(id);
            console.log(data);
            addToCart({...data, quantity: inputValue.value ? inputValue.value : 1}, function(){
                toastr.success(`Thêm sản phẩm ${data.title} vào giỏ hàng thành công!`);
            })
        })
    }
};
export default ProductDetailPage;