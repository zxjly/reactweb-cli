/**
 * Created by JamesZhang on 2017/6/17.
 */
import React from 'react'

class Hello extends React.Component {
  // constructor(props, context) {
  //   super(props, context);
  // }

  render () {
    return (
      <div className="text-center hello">
        <div>
          <img src={require('../assets/imgs/logo.png')} width="auto" height="200px"/>
        </div>
        <h2>
          恭喜!!!
        </h2>
        <h3>
          React Web工程已经创建成功!
        </h3>
        <p href="#">
          现在开始在代码的世界里傲游吧!<br/>
        </p>
        <h4>
          欢迎使用reactweb-cli, 更多资料请点击 ->
          <a href="https://github.com/zxjly/reactweb-cli.git">
            https://github.com/zxjly/reactweb-cli.git
          </a>
        </h4>
      </div>
    )
  }
}
export default Hello
