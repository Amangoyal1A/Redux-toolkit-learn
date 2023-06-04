import React, { useEffect, useState } from "react";
import Product from "../Component/Product";
import "../Component/Navbar.css";



const Home = () => {
  const url = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchProductData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log("Error:", error.message);
      setPosts([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div style={styles.product}>
      {loading ? (
        <div className="spinner"></div>
      ) : posts.length > 0 ? (
        posts.map((post) => <Product key={post.id} post={post} />)
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

const styles = {
  product: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "60px",
     backgroundImage:"linear-gradient(to right, rgb(234 181 181), rgb(249 255 249))"
   
  },
};

export default Home;
