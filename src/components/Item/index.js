import React, { Component } from "react";
import "./Item.css";

function Item(props) {
  return (
    <div>
      {props.detail.length !== 0 ? (
        <div>
          <h3>Items in Category:({props.shortName})</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>

            <tbody>
              {props.detail.map(ele => (
                <tr>
                  <td>{ele.name}</td>
                  <td>{ele.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}
export default Item;
