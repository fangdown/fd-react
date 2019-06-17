import {TreeSelect} from 'antd'
import React from 'react'

const TreeNode = TreeSelect.TreeNode;
const data = [
  {
      "deptName":"庄树锋test部门1",
      "deptId":15654564654,
      "parentId":null,
      "employeeVoList":null,
      "subDepartmentList":[
          {
              "deptName":"庄树锋test部门2",
              "deptId":15654564655,
              "parentId":15654564654,
              "employeeVoList":null,
              "subDepartmentList":[
                  {
                      "deptName":"庄树锋test部门3",
                      "deptId":15654564656,
                      "parentId":15654564655,
                      "employeeVoList":null,
                      "subDepartmentList":[

                      ]
                  }
              ]
          }
      ]
  }
]
class DeptTree extends React.Component {
  state = {
    value: undefined,
  };

  onChange = value => {
    console.log(value);
    this.setState({ value });
  };
  listToDomTree = (
    departmentList,
  ) => {
    const reactNodeList= departmentList.map(
      (item, index) => {
        if (item.subDepartmentList.length) {
          return (
            <TreeNode
              value={item.deptId}
              title={item.deptName}
              key={item.deptId}>
              {this.listToDomTree(
                item.subDepartmentList)}
            </TreeNode>
          );
        } else {
          return (
            <TreeNode
              value={item.deptId}
              title={item.deptName}
              key={`${item.deptId}-${index}`}
            />
          );
        }
      }
    );
    // console.log('reactNodeList', reactNodeList)
    return reactNodeList;
  };
  render() {

    return (
      <TreeSelect
        showSearch
        style={{ width: 300 }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="Please select"
        allowClear
        treeDefaultExpandAll
        onChange={this.onChange}
      >
        {
          this.listToDomTree(data)
        }
        {/* <TreeNode value="parent 1" title="parent 1-文本" key="0-1">
          <TreeNode value="parent 1-0" title="parent 1-0-文本" key="0-1-1">
            <TreeNode value="leaf1" title="my leaf-文本" key="random" />
            <TreeNode value="leaf2" title="your leaf-文本" key="random1" />
          </TreeNode>
          <TreeNode value="parent 1-1" title="parent 1-1-文本" key="random2">
            <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
          </TreeNode>
        </TreeNode> */}
      </TreeSelect>
    );
  }
}
export default DeptTree
