import React from 'react';
// import StudentList from './components/StudentList/StudentList'
import DeptTree from './demo/deptTree'
import SelectUser from './demo/selectUser'
import HookDemo from './demo/hook'
import ToastDemo from './components/Toast/demo'
import './App.less';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      text: '111'
    }
  }
  render(){
    const {text} = this.state
    return (
      <div className="App">
        {/* <DeptTree></DeptTree>
        <SelectUser cancelListener={this.cancelListener}></SelectUser>
        <HookDemo /> */}
        <ToastDemo />
      </div>
    )
  }
  
}

export default App;
