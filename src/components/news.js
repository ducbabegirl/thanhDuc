import { getAll } from "../api/post";

const News = {
    async render() {
        const { data } = await getAll();
        return /* html */ `
        <h3 class="title"><strong>Hot</strong> Products</h3>
                    <div class="">
                        ${data.map((post) => /*html*/`
                        <div class="col-md-3 col-sm-6">
                        <div class="products">
                           <div class="thumbnail"><a href="/#/news/${post.id}"><img src="${post.img}" alt="Product Name"></a></div>
                           <div class="productname">${post.title}</div>
                           <h4 class="price">${post.price}</h4>
                         
                           <div class="rating" style="text-align: center;">
                           <i class="fa fa-star"></i>
                           <i class="fa fa-star"></i>
                           <i class="fa fa-star"></i>
                           <i class="fa fa-star"></i>
                           <i class="fa fa-star-o"></i>
                       </div>
                           <div class="button_group"><button class="button add-cart" type="button">Add To Cart</button><button class="button compare" type="button"><i class="fa fa-exchange"></i></button><button class="button wishlist" type="button"><i class="fa fa-heart-o"></i></button></div>
                        </div>
                     </div>
                        `).join("")}
                        
                        
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
                    
          `;
    },
};
export default News;