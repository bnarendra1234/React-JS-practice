import React from "react";

export default function Profile() {
  const styles = {
    body: {
      overflowY: "hidden",
      fontFamily: "Arial",
    },
    bg: {
      width: "100%",
      height: "270px",
      backgroundImage:
        'linear-gradient(45deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://xautonomous.ai/wp-content/uploads/unlimited_elements/Software2-copy-2.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
    },
    profileImg: {
      borderRadius: "50%",
      position: "absolute",
      left: "43%",
      top: "190px",
      boxShadow: "0 0 10px red",
      width: "150px",
      height: "150px",
    },
    text: {
      margin: "100px 0px 20px",
      textAlign: "center",
    },
    name: {
      color: "green",
    },
    subtitle: {
      marginTop: "1%",
      marginBottom: "2%",
    },
    paragraph: {
      fontFamily: "cursive",
      fontWeight: "bold",
      color: "gray",
    },
    icons: {
      width: "300px",
      margin: "10px auto",
      display: "flex",
      justifyContent: "space-evenly",
    },
    iconImg: {
      width: "50px",
      height: "50px",
    },
  };

  return (
    <div style={styles.body}>
      <section>
        <div style={styles.bg}>
          <img
            src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png"
            alt="profile"
            style={styles.profileImg}
          />
        </div>

        <div style={styles.text}>
          <h2 style={styles.name}>Narendra Reddy Bareddy</h2>
          <h5 style={styles.subtitle}>Fullstack Engineer</h5>
          <p style={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            officiis qui molestiae saepe laborum expedita autem, reiciendis
            alias aliquam aliquid totam id iusto, dolor ab. Saepe, voluptas
            error modi minus nostrum fugiat possimus ipsum quam. Libero cum
            perferendis dolorem? Repellendus nulla eveniet blanditiis qui omnis,
            quibusdam ipsum ipsam dicta aliquid!
          </p>
        </div>

        <div style={styles.icons}>
          <img
            src="https://as2.ftcdn.net/v2/jpg/05/48/20/25/1000_F_548202514_guTUlcPMdSWqhJGOTLTOftughXf03lKK.jpg"
            alt="icon1"
            style={styles.iconImg}
          />
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.rxnqAZG-oSjM8lqt2LGMMgHaHa?w=512&h=512&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="icon2"
            style={styles.iconImg}
          />
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.nA7LdySDIjqKK8INiisqwQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="icon3"
            style={styles.iconImg}
          />
        </div>
      </section>
    </div>
  );
}