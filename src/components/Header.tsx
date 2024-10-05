import { Image, View } from 'react-native'
import styles from './Header.module.css'

export function Header() {
  return (
    <View style={{display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      //padding: '5rem 0.625rem',
      //backgroundColor: var(--gray-700)
    }}>
      <Image src="/images/logo.svg" />
    </View>
  )
}