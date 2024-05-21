import React, {createElement, useEffect, useInsertionEffect, useRef, useState } from "react";
import './App.css';
function App(){
  return(
    <>
    {/* *************************************************************** */}
        <h1> Expense tracker </h1>
      <div className="Box1"> 
        <div className="Balance"> 
          <h2>
            balance
          </h2>
          <h2></h2>
          <div className="income"> 
               <div className="left">
                 <h2>total income</h2>
                 <h2>100</h2>
               </div>

               <div className="right">
               <h2>total Expenses</h2>
                 <h2>100</h2>
               </div>
          </div>
        </div>
      </div>
      {/* *********************************************************** */}
      <div className="box2">
        <div className="expences">
        <h2> Entry type </h2> 
            <table>
               <th>s .no</th>
               <th>Name</th>
               <th>Ammount</th>
               <th>type</th>
               <th>delete</th>

             <tr>
              <td>1</td>
              <td>{}</td>
              <td>{}</td>
              <td>{}</td>
              <td><button>Delete</button></td>
             </tr>
            </table>
        </div>
        <div className="new_add">
           <div className="inner_new">
            <h2> Entry type </h2> 
            <select>
            <option value="positive">positive</option>
            <option value="negative">negative</option>
            </select>
            <input type="text " placeholder="Enter your name "/>
            <input type="text" placeholder="Enter your ammount"/>
            <button>
              Add Expense
            </button>
           </div>
        </div>
      </div>
    </>
  )
}
export default App;