import "./Product-Details.css";
import { useSelector } from "react-redux";
function ProductDetails() {
  const data = useSelector((storeData) => {
    return storeData.productDetails;
  });

  return (
    <div>
      <section className="product-details">
        <div className="image">
          <img src={data && data.image} alt="" width={"100%"} height={"100%"} />
        </div>
        <div className="content">
          <div className="col-2">
            <div>
              <dl>
                <dt>Product Name</dt>
                <dd>{data && data.title.slice(0, 21)}</dd>
              </dl>
            </div>
            <div>
              <dl>
                <dt>Price</dt>
                <dd>{data && data.price}</dd>
              </dl>
            </div>
          </div>
          <div className="col-2">
            <div>
              <dl>
                <dt>Category</dt>
                <dd>{data && data.category}</dd>
              </dl>
            </div>
            <div>
              <dl>
                <dt>Rating</dt>
                <dd>{data && data.rating.rate}</dd>
              </dl>
            </div>
          </div>
          <div>
            <dl>
              <dt>Description</dt>
              <dd>{data && data.description.slice(0, 500)}</dd>
            </dl>
          </div>
          <div>
            <button style={{ backgroundColor: "red" }}>Back to Products</button>
            <button>Add To Cart</button>
          </div>
        </div>
      </section>
      <section className="product-images">
        <div>
          <img
            src="https://media.istockphoto.com/id/475570206/photo/denim-jacket.jpg?s=612x612&w=0&k=20&c=-RlIxj6nOvJYyIMu_GS8MYUzRLw3IEVwDXen-x5JSKY="
            alt=""
          />
        </div>
        <div>
          {" "}
          <img
            src="https://image.s5a.com/is/image/TheBay/196805596760_alt7?wid=480&hei=640&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0"
            alt=""
          />
        </div>
        <div>
          {" "}
          <img src="https://www.kids-world.com/images/FC451.jpg" alt="" />
        </div>
        <div>
          {" "}
          <img
            src="https://media.tractorsupply.com/is/image/TractorSupplyCompany/2296604?wid=456&hei=456&fmt=webp&qlt=100,0&resMode=sharp2&op_usm=0.9,1.0,8,0"
            alt=""
          />
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;