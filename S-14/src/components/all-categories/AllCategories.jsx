import "./AllCategories.css";
import Categories from "../Categories/Categories";

function AllCategories() {
  return (
    <div className="all-categories">
      <Categories
        image={
          "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?cs=srgb&dl=pexels-luckysam-47261.jpg&fm=jpg"
        }
        title={"Mobiles"}
      />
      <Categories
        image={
          "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e730a834ad950bae.png?q=100"
        }
        title={"Grocery"}
      />
      <Categories
        image={
          "https://www.memorandum.com/wp-content/uploads/2018/07/best-paris-work-meeting-restaurants-cafes-clamato-septime-fragments-marais-pink-mama11.jpg"
        }
        title={"Fashion"}
      />
      <Categories
        image={
          "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/3c647c2e0d937dc5.png?q=100"
        }
        title={"Flight Booking"}
      />
      <Categories
        image={
          "https://tse3.mm.bing.net/th/id/OIP.9qj1PBhUnlsdC957_YyULwHaE0?rs=1&pid=ImgDetMain&o=7&rm=3"
        }
        title={"Home Furniture"}
      />
      <Categories
        image={
          "https://wallpapers.com/images/featured/toys-pictures-bn35tkcoayiccgve.jpg"
        }
        title={"Toys"}
      />

      <Categories
        image={
          "https://tse3.mm.bing.net/th/id/OIP.V56sd3-5lvhq-SxPkF175gHaLH?rs=1&pid=ImgDetMain&o=7&rm=3"
        }
        title={"Mens Clothing"}
      />
      <Categories
        image={
          "https://img.freepik.com/free-photo/television-houseplants-room-scene-generative-ai_188544-12145.jpg"
        }
        title={"Tv's"}
      />
      <Categories
        image={
          "https://tse4.mm.bing.net/th/id/OIP.kiGAK7uK2a9kCT10WfKlvwHaEo?rs=1&pid=ImgDetMain&o=7&rm=3"
        }
        title={"Kid's"}
      />
    </div>
  );
}

export default AllCategories;