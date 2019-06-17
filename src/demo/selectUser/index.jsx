import React from 'react'
import { Select, Spin, Input, Button  } from 'antd';
import debounce from 'lodash/debounce';

const { Option } = Select;
const Search = Input.Search;
export default class UserRemoteSelect extends React.Component {
  constructor(props) {
    super(props);
    this.lastFetchId = 0;
    this.fetchUser = debounce(this.fetchUser, 800);
  }

  state = {
    data: [],
    value: [],
    fetching: false,
  };

  fetchUser = value => {
    console.log('fetching user', value);
    this.lastFetchId += 1;
    const fetchId = this.lastFetchId;
    this.setState({ data: [], fetching: true });
    fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then(body => {
        if (fetchId !== this.lastFetchId) {
          // for fetch callback order
          return;
        }
        const data = body.results.map(user => ({
          text: `${user.name.first} ${user.name.last}`,
          value: user.login.username,
        }));
        this.setState({ data, fetching: false });
      });
  };

  handleUserChange = value => {
    console.log('value', value)
    this.setState({
      value,
      data: [],
      fetching: false,
    });
  };
  cancel= ()=>{
    this.props.cancelListener()
  }
  render() {
    const { fetching, data, value } = this.state;
    console.log('value', value)
    return (
      <div>

      
        <Select
          labelInValue
          showSearch={true}
          value={value}
          placeholder="Select users"
          notFoundContent={fetching ? <Spin size="small" /> : null}
          filterOption={false}
          onSearch={this.fetchUser}
          onChange={this.handleUserChange}
          style={{ width: '100%' }}
        >
          {data.map(d => (
            <Option key={d.value}>{d.text}</Option>
          ))}
        </Select>
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
      />
      <Button onClick={this.cancel}>取消关联</Button>
     </div>
/* <Select
// mode="multiple"
labelInValue={true}
showSearch={true}
value={model.relRabbitUser}
placeholder="请输入手机号搜索"
notFoundContent={
  model.fetching ? (
    <Spin size="small" />
  ) : (
    '查询无此账号，不可添加'
  )
}
filterOption={false}
onSearch={debounce(this.fetchUser, 500)}
onChange={this.handleUserChange}
size="large"
style={{ width: '300px' }}>
{model.userArr.map((d: Record<string, any>) => (
  <Option key={d.value}>{d.label}</Option>
))}
</Select>
{model.relRabbitUser.key && (
<span
  onClick={this.cancleRelated}
  className="cancel-related">
  取消关联
</span>
)}
{showErrorRabbitUser ? (
<span className="error-message">请输入正确的账号</span>
) : (
''
)} */
    );
  }
}
