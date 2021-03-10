import React, { useState } from "react";

const CustomInput = () => {
  
  const [query, setQuery] = useState({ q: "", beforeDate: "", beforeTime: "", afterDate: "", afterTime: "" });
  console.log(query);

  const submitHandler = (e) => {
    e.preventDefault();
    
    const getVidos = async () => {
        
        const url="#";

        fetch(url)
        .then((response) => {
          if(response.status === 200){
              return response.json();
          }
          else{
              throw new Error(response.statusText);
          }
        })
        .then((videos) => {
            console.log(videos);
        })
        .catch((error) => {
          console.log(error);
        })
    }


    setQuery({
      q: "",
      beforeDate: "",
      beforeTime: "",
      afterDate: "",
      afterTime: "",
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setQuery((query) => {
        return {...query, [name]:value};
    })
  };

  return (
    <>
      <h2>Custom Youtube Search</h2>
      <form className="form" onSubmit={submitHandler}>
        <div style={{ margin: "20px" }}>
          <input
            type="text"
            placeholder="search"
            name="q"
            onChange={handleChange}
            value={query.q}
            required
          ></input>
          <button type="submit">Search</button>
        </div>
        <div className="item">
          <div>
            <lable htmlFor="to">After:</lable>
            <input
              type="date"
              id="to"
              name="afterDate"
              value={query.afterDate}
              onChange={handleChange}
            ></input>
            <input
              type="time"
              id="to"
              name="afterTime"
              value={query.afterTime}
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <lable htmlFor="for">Before:</lable>
            <input
              type="date"
              id="for"
              name="beforeDate"
              value={query.beforeDate}
              onChange={handleChange}
            ></input>
            <input
              type="time"
              id="for"
              name="beforeTime"
              value={query.beforeTime}
              onChange={handleChange}
            ></input>
          </div>
        </div>
      </form>
    </>
  );
};

export default CustomInput;
