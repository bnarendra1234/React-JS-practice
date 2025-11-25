import React from "react";

function Home() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#e9f5ff",
    fontFamily: "Arial, sans-serif",
  };

  const cardStyle = {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "28px",
    color: "#007BFF",
    marginBottom: "10px",
  };

  const textStyle = {
    fontSize: "16px",
    color: "#555",
    marginBottom: "20px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>Welcome Home!</h1>
        <p style={textStyle}>You have successfully logged in.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          iusto nulla corrupti, aperiam nemo voluptates. Quidem autem animi
          praesentium quis magnam hic molestias vel aspernatur ullam fuga minima
          ratione ex architecto assumenda, commodi tempore asperiores itaque
          dolorem, culpa nesciunt odio a ea. Minus earum laborum explicabo,
          nesciunt natus soluta rem voluptatem adipisci sequi illum eveniet
          nostrum aliquam sapiente quo, eos maiores accusantium cupiditate sit!
          Quia laboriosam odit quaerat, eligendi, blanditiis modi nemo explicabo
          animi tenetur neque aperiam fugit officiis suscipit eius asperiores,
          vero tempora quos rem fuga! Ex quidem tempora quasi molestias
          quibusdam culpa, dolores iste consequatur vel nemo autem voluptatibus
          exercitationem laboriosam, amet ipsa recusandae! Cumque blanditiis,
          numquam, consequuntur corrupti velit illo porro voluptatibus magnam
          quae ducimus ab veniam voluptatum sed adipisci id veritatis, sit fuga
          architecto ad minus possimus illum quos sapiente? Possimus in dolor
          porro consectetur recusandae, commodi, voluptatibus totam mollitia
          labore expedita voluptatem, quae facilis. Ipsa ratione minima, soluta
          quibusdam officia suscipit facilis dolorum quam tenetur at dolor
          incidunt, quae a dolore earum, perspiciatis quo cum sunt. Facere,
          impedit ipsum. Qui, nobis. Numquam a dolores, placeat adipisci dolor
          porro debitis quidem, distinctio illum hic, assumenda itaque molestiae
          ipsam aliquam! Dolorem assumenda et aperiam nulla asperiores
          reprehenderit?
        </p>
      </div>
    </div>
  );
}

export default Home;
