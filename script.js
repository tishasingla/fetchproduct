(async()=>{
const productContainerEl=document.getElementById("productContainer")
const url="https://fakestoreapi.com/products"
const fetchproducts=async()=>{
 try{
    const res=await fetch(url);
    return await res.json();
 }
 catch(error)
 {
    return error;
 }
}
const products=await fetchproducts();
const generateProducts=(id)=>{
    return`  <div class="product_card">
    <div class="image_section">
        <img src="${id.image}">
    </div>
    <div class="product_content">
        <h2>"${id.title}"</h2>
        <p>"${id.description.split(" ").slice(0,20).join(" ")}"</p>
        <button>${id.price}</button>
        
    </div>

</div>`
};
const renderProducts=(products)=>{
    productContainerEl.innerHTML="";
    products.forEach((id)=>{
        productContainerEl.innerHTML+=generateProducts(id)

    })
};
renderProducts(products)

})();