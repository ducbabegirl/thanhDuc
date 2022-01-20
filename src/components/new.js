import data from "../data";

const News = {
    render() {
        return /* html */`
        <h2 class="font-semibold text-blue-900 my-4 uppercase text-2xl">Tin tức học tập</h2>
        <div class="grid grid-cols-3 gap-8">
            ${data.map((post) => `
            <div class="border p-3">
              <a href="/product/${post.id}">
              <img src="${post.img}" alt=""/>
              <h3 class="my-3"><a href="" class="font-semibold text-orange-500 text-lg">${post.title}</a></h3>
              <p>${post.desc}</p>
              </a>
            </div>
            `).join("")}
            
        </div>
       
        
        `;
    },
};
export default News;
