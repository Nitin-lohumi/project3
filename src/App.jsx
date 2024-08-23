import React, {
  useEffect,
  useState,
} from "react";
import "./App.css";
function App() {
  const [name, setname] = useState('');
  const [ammount, setAmount] = useState(0);
  const [Type, setType] = useState('+');
  const [S_no,setS_no] = useState(1);
  const [store,setStore] = useState([]);
  const[count,setCount] = useState(0);
  const[income,setIncome]= useState(0);
  const[expences,setExpences] = useState(0);
  const [isset,setIsset]= useState(false);
  const[displayData,SetDisplayData] = useState([]);
  useEffect(()=>{
    setCount((e)=>{
      let store=0;
      if(Type=='+'){
        store =e+Number(ammount);
        setIncome(store);
      }else{
        store = e-Number(ammount);
      }
      return store;
    })
      SetDisplayData(JSON.parse(localStorage.getItem('Data')));
      setExpences(store.length);
      localStorage.setItem('s_no',JSON.stringify(S_no));
      if(isset){
        localStorage.setItem('currentbalance',JSON.stringify(count));
        localStorage.setItem('income',JSON.stringify(income));
        localStorage.setItem('expense',JSON.stringify(expences));
        localStorage.setItem('Data', JSON.stringify(store));
        }
      setAmount('');
      setname('');
  },[S_no,store,income,expences,isset]);
  function deletevalue(value){
    const updatedTransactions = store.filter((v) => v.id !== value.id);
    setCount((e)=>{
      let store=0;
      if(value.type=='+'){
         store = e-Number(value.ammount);
         setIncome(store);
       }else{
        store = e+Number(value.ammount);
       }
       return store;
    });
    setExpences(prev=>prev-1);
    setS_no(pre=>pre-1);
    setStore(updatedTransactions);
    localStorage.setItem('currentbalance',JSON.stringify(count));
    localStorage.setItem('income',JSON.stringify(income));
    localStorage.setItem('expense',JSON.stringify(expences));
    localStorage.setItem('Data',JSON.stringify(updatedTransactions));
    SetDisplayData(updatedTransactions);
  }
  function Add(){
    setS_no(pre => pre + 1);
    localStorage.setItem('s_no',JSON.stringify(S_no));
    setStore([...store,{id:Math.floor(Math.random()*1000000000),s_n:S_no,name:name,ammount:ammount,type:Type}]);
    setIsset(true);
  }
   return (
    <>
      {/* *************************************************************** */}
      <h1> Expense tracker </h1>
      <div className="Box1">
        <div className="Balance">
          <h2>balance</h2>
          <h2>Rs.{JSON.parse(localStorage.getItem('currentbalance'))}</h2>
          <div className="income">
            <div className="left">
              <h2>total income</h2>
              <h2>Rs.{JSON.parse(localStorage.getItem('income'))}</h2>
            </div>
            <div className="right">
              <h2>total Expenses</h2>
              <h2>{JSON.parse(localStorage.getItem('expense'))}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* *********************************************************** */}
      <div className="box2">
        <div className="expences">
          <h2> Entry type </h2>
          <table>
            <thead>
              <tr>
                <th>s.no</th>
                <th>Name</th>
                <th>Amount</th>
                <th>type</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {displayData?displayData.map((value)=>{
           return<tr key={value.id}>
                <td>{value.s_n}</td>
                <td>{value.name}</td>
                <td>{value.ammount}</td>
                <td>{value.type}</td>
                <td><button className="deletebtn" onClick={()=>deletevalue(value)}>Delete</button></td>
                </tr>
              }):""}
            </tbody>
          </table>
        </div>
        <div className="new_add">
          <div className="inner_new">
            <h2> Entry type </h2>
            <select onClick={(e) => setType(e.target.value)} >
              <option value="+">Profit(+)</option>
              <option value="-">loss(-)</option>
            </select>
            <input
              type="text"
              placeholder="Enter your expences"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
            <input
              type="number"
              value={ammount}
              placeholder="Enter your ammount"
              onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={Add}>Add Expense</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
