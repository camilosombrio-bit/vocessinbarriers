const searchInput = document.getElementById("searchPosts");
const categoryButtons = document.querySelectorAll(".category");

function filterPosts(){
    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const active = document.querySelector(".category.active");
    const category = active ? active.textContent.trim().toLowerCase() : "todos";

    if(typeof posts === "undefined") return;

    const filtered = posts.filter(post => {
        const matchesText = !query || [post.title,post.description,post.category,post.content].join(" ").toLowerCase().includes(query);
        const matchesCategory = category === "todos" || post.category.toLowerCase() === category;
        return matchesText && matchesCategory;
    });

    if(typeof renderPosts === "function") renderPosts(filtered);
}

if(searchInput) searchInput.addEventListener("input",filterPosts);
categoryButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        categoryButtons.forEach(item=>item.classList.remove("active"));
        button.classList.add("active");
        filterPosts();
    });
});
