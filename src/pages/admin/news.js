import newList from "../../components/admin/newList";

const AdminNewPage = {
    render() {
        return `
        <h1 class ="text-center font-bold text-2xl my-9 uppercase"> Quản lý bài viết</h1>
        ${newList.render()}
        `;
    },
};
export default AdminNewPage;
