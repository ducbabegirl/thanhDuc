const Header = {
    render() {
        return /* html */`
        <div class="header_top bg-[#272f54] py-[13px]">
        <a href=""><img src="https://i.imgur.com/5EK1lFm.png" alt="" class="m-auto"></a>
    </div>
        <div class="bg-orange-500 flex ">
            <ul class="flex">
            <li><a href="/" class="block px-4 ml-4 py-5 hover:bg-indigo-500 hover:text-orange-700 text-white">Trang chủ</a></li>
            <li><a href="/about" class="block px-4 ml-4 py-5 hover:bg-indigo-500 hover:text-orange-700 text-white">Tuyển sinh</a></li>
            <li><a href="/product" class="block px-4 py-5 hover:bg-indigo-500 hover:text-orange-700 text-white">Chương trình đào tạo</a></li>
            <li><a href="/product" class="block px-4 py-5 hover:bg-indigo-500 hover:text-orange-700 text-white">Góc sinh viên</a></li>
            <li><a href="/admin/dashboard" class="block px-6 py-5 hover:bg-indigo-500 hover:text-orange-700 text-white">Admin</a></li>
            </ul>
            <form action="" class="from-search  pt-1">
            <input type="text" class="">
            <input type="submit" value="Tìm kiếm " class="mt-4  gap-8 bg-indigo-900">
          </form>
          
          <ul class="flex">
          <li><a href="/signin" class="block px-4 ml-4 py-5 hover:bg-indigo-500 hover:text-orange-700 text-white">Dang nhap</a></li>
          <li><a href="/signup" class="block px-4 py-5 hover:bg-indigo-500 hover:text-orange-700 text-white">Dang ky</a></li>
          </ul>
          
        </div>
       

        `;
    },
};
export default Header;
