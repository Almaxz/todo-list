import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      groceries: [
        "Marrow Bones",
        "Napa Cabbage",
        "Sweet Corn",
        "Celeries",
        "Carrots",
        "Onions",
        "Ginger",
      ]
    }
  }

  addToList = e => {
    e.preventDefault();
    if(this.state.item.length < 1) 
      return
    else if(this.state.item.length > 15)
      return
    // let items = [...this.state.groceries];
    // items.push(this.state.item);
    // this.setState({groceries: [item]});
    this.setState({
      groceries: [...this.state.groceries, this.state.item],
      item: ""
    }, () => {
      console.log(this.state.groceries);
    });
  }

  addToItem = e => {
    // console.log(e.target.value);
    this.setState({item: e.target.value});
  }
  
  render () {
    return (
      <div className="App">
        <div className="jumbotron">
          <h1 style={{ fontSize: "7rem", textAlign: "center", }} >Grocery List</h1>
        </div>
        <form onSubmit={this.addToList}>
          <div className="form-group">
            <label>Grocery Item: </label>
            <input 
              className="form-control" 
              type="text" 
              name="item"
              value={this.state.item}
              onChange={this.addToItem}
            />
          </div>
          <input type="submit" className="btn btn-info" style={{ textAlign: "center" }}/>
        </form>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Items</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.groceries.map( (item, i) =>
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>{item}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
