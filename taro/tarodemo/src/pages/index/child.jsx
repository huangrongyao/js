import Taro, { useState } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

export default function Child (props) {
  return (
    <View>
      <Text>
        child.props:{props.useName}
      </Text>
    </View>
  )
}