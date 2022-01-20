import AdminProductList from "../../components/admin/products";

const AdminProductPage = {
    render() {
        return `<div>
            <h1>Quản lý product</h1>
            ${AdminProductList.render()}
        </div>`;
    },
};
export default AdminProductPage;
