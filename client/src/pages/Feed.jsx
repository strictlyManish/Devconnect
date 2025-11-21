import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import Card from "../components/Card";

function Feed() {
  const [data, setData] = useState([]); // Correct: use array

  const GetPost = async () => {
    try {
      const res = await axios.get("/post");
      if (res.data) {
        setData(res.data.post); // Set posts
      }
    } catch (error) {
      console.log("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    GetPost(); // Call API
  }, []);

  return (
    <div className="mt-5 px-10 py-15 min-h-screen">

      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        data.map((obj) => (
          <Card key={obj.id} data={obj} />  // Pass single post
        ))
      )}
    </div>
  );
}

export default Feed;
