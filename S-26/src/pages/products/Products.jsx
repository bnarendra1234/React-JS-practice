import { useState, useEffect } from "react";
import "./Products.css";
import { Link } from "react-router-dom";
import { getAllProducts, getCategorySpecificProducts,addProductInReduxStore } from "./Products.js";
function Products() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    getAllProducts(setProducts);
  }, []);
  return (
    <div className="products-container">
      <div className="brand">
        <h1>All Products Section</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut
          reiciendis assumenda corrupti nihil, repellendus quaerat alias
          deleniti accusamus ipsa aspernatur culpa laboriosam! Ducimus assumenda
          quam, veniam sint facilis sed sapiente ipsum delectus nisi fugiat ad,
          mollitia vero soluta rerum
        </p>
      </div>

      <section id="categories">
        <div
          className="category"
          onClick={() => {
            getAllProducts(setProducts);
          }}
        >
          <img
            src="https://cdn.textstudio.com/output/sample/normal/9/2/0/5/all-logo-321-5029.png"
            alt=""
            width={70}
            height={70}
          />
          <h3>ALL</h3>
        </div>

        <div
          className="category"
          onClick={() => {
            getCategorySpecificProducts(setProducts, "electronics");
          }}
        >
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.EE_ndsO6kcX6VmcLnBW97gHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt=""
            width={70}
            height={70}
          />
          <h3>Electronics</h3>
        </div>

        <div
          className="category"
          onClick={() => {
            getCategorySpecificProducts(setProducts, "jewelery");
          }}
        >
          <img
            src="https://cdn.pixabay.com/photo/2018/02/27/03/15/gold-3184582_1280.jpg"
            alt=""
            width={70}
            height={70}
          />
          <h3>Jewelery</h3>
        </div>
        <div
          className="category"
          onClick={() => {
            getCategorySpecificProducts(setProducts, "men's clothing");
          }}
        >
          <img
            src="https://th.bing.com/th/id/R.daf855d4d8236832c22bac688a028efe?rik=7yuz474wLdPhJQ&riu=http%3a%2f%2fwrightwaybeautysupply.com%2fcdn%2fshop%2fcollections%2fmen_hair_care_1200x1200.jpg%3fv%3d1676256394&ehk=MKO%2b9%2fJcUvJPb%2fX18u8mpVSq%2fRHScC%2b%2bkC%2bg%2ft9nbqU%3d&risl=&pid=ImgRaw&r=0"
            alt=""
            width={70}
            height={70}
          />
          <h3>
            Men's
            <br /> Clothing
          </h3>
        </div>
        <div
          className="category"
          onClick={() => {
            getCategorySpecificProducts(setProducts, "women's clothing");
          }}
        >
          <img
            src="https://th.bing.com/th/id/R.c1e8b76ccc9fc699358fe0a0bdb63b34?rik=JqSIy9p9u%2b91WA&riu=http%3a%2f%2fell.h-cdn.co%2fassets%2f16%2f14%2f1600x800%2flandscape-1459974569-female-designers.jpg&ehk=EOoMjqEdxSRwLj9M64KsGEl1tQ59k469zvcYSvYTRpc%3d&risl=&pid=ImgRaw&r=0"
            alt=""
            width={70}
            height={70}
          />
          <h3>
            Women's <br /> Clothing
          </h3>
        </div>

        <div
          className="category"
          onClick={() => {
            setProducts("Kids Products are Out of Stocks");
          }}
        >
          <img
            src="https://www.cantechonline.com/wp-content/uploads/group-of-kids-with-cans-Tim-Tam-Tummy.jpeg"
            alt=""
            width={70}
            height={70}
          />
          <h3>Kid's</h3>
        </div>

        <div
          className="category"
          onClick={() => {
            setProducts("Cosmetic Products are Out of Stocks");
          }}
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/028/099/987/large_2x/beauty-cosmetic-makeup-product-brushes-lipstick-nail-polish-collection-on-white-background-generative-ai-free-photo.jpg"
            alt=""
            width={70}
            height={70}
          />
          <h3>Cosmetics</h3>
        </div>
      </section>

      <section id="products">
        {products ? (
          typeof products === "string" ? (
            <h1 className="outOfStock">{products}</h1>
          ) : (
            products.map((product) => {
              return (
                <div key={product.title} className="product-card">
                  <img src={product.image} alt="" width={"100%"} height={270} />
                  <h3>{product.title.slice(0, 20)}</h3>
                  <p>${product.price}</p>
                  <p>{product.description.slice(0, 80)}...</p>

                  <Link to="/productdetails">
                    <button id="pd" onClick={() => {
                        addProductInReduxStore(mystore, setProducts)(product);
                      }}
                    >Product Details</button>
                  </Link>
                  <button id="addcart">Add to Cart</button>
                </div>
              );
            })
          )
        ) : (
          <h1 style={{ color: "red", textAlign: "center" }}>
            No Products To Display
          </h1>
        )}
      </section>
    </div>
  );
}

export default Products;