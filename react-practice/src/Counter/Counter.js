import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const incrementHandler = () => {
    setCount(count + 1);
  };

  const decrementHandler = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    // fetch("https://randomuser.me/api")
    //   .then((res) => res.json())
    //   .then((result) => {
    //     setData(result.results);
    //   });
    axios.get("https://randomuser.me/api").then((res) => {
      setData(res.data.results);
    });
  }, []);

  const appendUserHandler = () => {
    // fetch(`https://randomuser.me/api?page=${pageNo + 1}`)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setData([...data, ...res.results]);
    //     setPageNo(res.info.page);
    //   });
    axios.get(`https://randomuser.me/api?page=${pageNo + 1}`).then((res) => {
      setData([...data, ...res.data.results]);
      setPageNo(res.data.info.page);
    });
  };

  const closeHandler = (id) => {
    alert(id);
    setData(
      data.filter((list) => {
        return list.phone !== id;
      }),
    );
  };

  return (
    <div>
      <h3>Count {count}</h3>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={appendUserHandler}>Append User</button>
      {/* <p>{JSON.stringify(data)}</p> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px",
          flexWrap: "wrap",
        }}
      >
        {data?.map((li, ind) => (
          <div key={ind} className="card">
            <span className="closeContainer">
              <img src={li.picture.large} alt="user" />
              <span className="close" onClick={() => closeHandler(li.phone)}>
                X
              </span>
            </span>
            <div className="container">
              <h4>{li.name.title}</h4>
              <p>
                {li.name.first} {li.name.last}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
