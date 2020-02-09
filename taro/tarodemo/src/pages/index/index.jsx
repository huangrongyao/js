import Taro, { useState } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Child from './child'
// import './index.less'

// export default class Index extends Component {

//   componentWillMount () { }

//   componentDidMount () { }

//   componentWillUnmount () { }

//   componentDidShow () { }

//   componentDidHide () { }

//   config = {
//     navigationBarTitleText: '首页'
//   }

//   render () {
//     return (
//       <View className='index'>
//         <Text>Hello world!</Text>
//       </View>
//     )
//   }
// }

export default function Index () {
  const [useName, setUseName] = useState('xujia')
  return (
    <View className='index'>
      <Text>Hello world!{useName}</Text>
      <Child useName={useName}></Child>
    </View>
  )
}
