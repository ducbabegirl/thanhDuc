import axios from "axios";
import AdminNewsPage from ".";
import { get, update } from "../../../api/post";
import AdminNav from "../../../components/AdminNav";
import { reRender } from "../../../utils";

const AdminEditPost = {
    async render(id) {
        const { data } = await get(id);
        return /* html */`
        <div class="min-h-full">
            ${AdminNav.render()}
            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <!-- This example requires Tailwind CSS v2.0+ -->
                    <div class="lg:flex lg:items-center lg:justify-between">
                        <div class="flex-1 min-w-0">
                            <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                               Sản Phẩm : ${data.title}
                            </h2>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div class="px-4 py-6 sm:px-0">
                    <form id="form-edit">
                    Tên Sản Phẩm : <br> <br>
                    <input type="text" 
                            id="title-post" 
                            class="border border-black" 
                            placeholder="Title"  
                            value="${data.title}"
                            style="width: 100%;"
                            /> </br >
                            <br>
                            Giá Sản Phẩm : <br> <br>
                    <input type="text" 
                            id="price-post" 
                            class="border border-black" 
                            placeholder="Title"  
                            value="${data.price}"
                            style="width: 100%;"
                            /> </br >
                            <br>
                            Số Lượng Sản Phẩm : <br> <br>
                    <input type="text" 
                            id="kho-post" 
                            class="border border-black" 
                            placeholder="Title"  
                            value="${data.kho}"
                            style="width: 100%;"
                            /> </br >
                            <br>
                            Hình Ảnh  : <br> <br>
                    <input type="file" 
                            id="img-post" 
                            class="border border-black"  
                            placeholder="Image" 
                            /> </br >
                            <img src="${data.img}" id="img-preview"/>
                            <br>
                            Mô Tả Sản Phẩm : <br> <br>
                    <textarea name="" 
                            id="desc-post" 
                            cols="30" 
                            rows="10" 
                            class="border border-black"
                            style="width: 100%;"
                            >${data.desc}</textarea>
                            
                             <br> <br>
                             <button class="bg-blue-500 p-4 text-white">Cập Nhât Sản Phẩm</button>
                </form>
                    </div>
                    <!-- /End replace -->
                </div>
            </main>
        </div>
        
        `;
    },
    afterRender(id) {
        const formEdit = document.querySelector("#form-edit");
        const imgPost = document.querySelector("#img-post");
        const imgPreview = document.querySelector("#img-preview");
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dbgqzqeps/image/upload";
        const CLOUDINARY_PRESET = "maithanhduc";
        let imgLink = "";

        // Preview image
        imgPost.addEventListener("change", (e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });

        // Submit form
        formEdit.addEventListener("submit", async (e) => {
            e.preventDefault();
            // lấy giá trị input file
            const file = document.querySelector("#img-post").files[0];
            if (file) {
                // tạo object và gắn giá trị vào các thuộc tính của formData
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLOUDINARY_PRESET);

                // call API cloudinary để đẩy ảnh lên
                const { data } = await axios.post(CLOUDINARY_API, formData, {
                    headers: {
                        "Content-Type": "application/form-data",
                    },
                });
                imgLink = data.url;
            }

            // call api thêm bài viết
            update({
                id,
                title: document.querySelector("#title-post").value,
                //  Nếu imgLink có giá trị thì sẽ lấy giá trị của imgLink ngược lại thì rỗng
                img: imgLink || imgPreview.src,
                price: document.querySelector("#price-post").value,
                kho: document.querySelector("#kho-post").value,
                desc: document.querySelector("#desc-post").value,
            });
            window.location.href = "/#/admin/news";

            reRender(AdminNewsPage, "#app");
        });
    },
};
export default AdminEditPost;