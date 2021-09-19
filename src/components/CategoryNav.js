import React from "react";
import { Link } from "react-router-dom";
import { CategoryData } from "../components/CategoryData";

function CategoryNav() {
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h4 style={{ color: "#fff", textAlign: "left" }}>
                    Filter by Brands
                    </h4>
                <div
                className="border-div"
                style={{ borderBottom: "2px solid #f4c23d", width: "4%" }}
                ></div>
                <nav class="navbar navbar-expand-lg navbar-dark ">
                <div class="container-fluid">
                    <ul className="navbar-nav d-block category-ul">
                    {CategoryData.map((item, index) => {
                        return (
                        <li key={index} className={item.cName}>
                            <Link to={item.path} className={item.clName}>
                            <span style={{ color: "#fff" }}> {item.title} </span>
                            </Link>
                        </li>
                        );
                    })}
                    </ul>
                </div>
                </nav>
            </div>
            </div>
        </div>
    </div>
  );
}

export default CategoryNav;
