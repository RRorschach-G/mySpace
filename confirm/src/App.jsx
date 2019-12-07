import React from 'react';
import confirm  from './components/Confirm';

class App extends React.Component {

  async componentDidMount() {
    let res = await confirm("确定删除吗");
    if (res) {
      console.log("是");
    } else {
      console.log("否");
    }
  }
  render() {
    return <div>HELLO</div>;
  }
}
export default App
