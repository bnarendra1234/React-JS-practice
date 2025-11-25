import { useState } from "react";
import "./Products.css";

import { getAllProducts } from "./Products.js";
function Products() {
  const [products, setProducts] = useState(null);
  return (
    <div className="products-container">
      <section style={{ padding: "20px" }}>
        <h1 style={{ margin: "15px 0px", color: "green" }}>
          Products Information
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          repellat quae, sint rem, distinctio velit maiores nemo voluptates
          impedit natus saepe! Ex dicta eveniet iusto illum qui? Ea omnis,
          dolorem accusantium tenetur mollitia enim obcaecati aspernatur ex cum,
          vero unde pariatur ducimus, quas soluta nemo! Ex perferendis animi
          totam ullam, voluptate velit ipsa enim reprehenderit! Rerum quod
          tempora placeat dolores quas voluptatibus laboriosam odit unde
          praesentium consequatur, necessitatibus blanditiis maxime ratione.
          Impedit aut earum aperiam nostrum laudantium omnis cumque deleniti
          labore inventore, eius ipsam culpa harum voluptatum sequi, beatae
          soluta illum dolores cupiditate in explicabo. Tenetur, a odit eaque
          nostrum doloribus modi soluta, voluptatibus corporis ex pariatur
          beatae natus quam? Necessitatibus consequatur mollitia porro
          accusantium impedit soluta ducimus laudantium architecto autem
          sapiente asperiores iusto obcaecati earum tempore dolorum corrupti
          facilis nihil cumque dolore, voluptatibus excepturi amet nam ullam
          ratione. Quas eveniet explicabo, aliquid non dolorum unde eius illo
          sequi vitae.
        </p>
        <button
          style={{
            marginTop: "20px",
            padding: "15px 30px",
            border: "3px solid green",
            color: "green",
          }}
          onClick={() => {
            getAllProducts(setProducts);
          }}
        >
          Get Products
        </button>
      </section>

      {products && (
        <section id="categories">
          <div className="category">
            <img
              src="https://cdn.textstudio.com/output/sample/normal/9/2/0/5/all-logo-321-5029.png"
              alt=""
              width={70}
              height={70}
            />
            <h3>ALL</h3>
          </div>
          <div className="category">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.EE_ndsO6kcX6VmcLnBW97gHaEJ?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt=""
              width={70}
              height={70}
            />
            <h3>Electronics</h3>
          </div>
          <div className="category">
            <img
              src="https://cdn.pixabay.com/photo/2018/02/27/03/15/gold-3184582_1280.jpg"
              alt=""
              width={70}
              height={70}
            />
            <h3>Jewelery</h3>
          </div>
          <div className="category">
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
          <div className="category">
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

          <div className="category">
            <img
              src="https://www.cantechonline.com/wp-content/uploads/group-of-kids-with-cans-Tim-Tam-Tummy.jpeg"
              alt=""
              width={70}
              height={70}
            />
            <h3>Kid's</h3>
          </div>

          <div className="category">
            <img
              src="https://static.vecteezy.com/system/resources/previews/028/099/987/large_2x/beauty-cosmetic-makeup-product-brushes-lipstick-nail-polish-collection-on-white-background-generative-ai-free-photo.jpg"
              alt=""
              width={70}
              height={70}
            />
            <h3>Cosmetics</h3>
          </div>
        </section>
      )}

      <section id="products">
        {products ? (
          products.map((product) => {
            return (
              <div className="product-card">
                <img src={product.image} alt="" width={"100%"} height={270} />
                <h3>{product.title.slice(0, 21)}</h3>
                <p>${product.price}</p>
                <p>{product.description.slice(0, 80)}...</p>

                <button id="pd">Product Details</button>
                <button id="addcart">Add to Cart</button>
              </div>
            );
          })
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