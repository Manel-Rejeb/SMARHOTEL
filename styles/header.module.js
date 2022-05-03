import styled from 'styled-components'
import { Platform, StatusBar } from 'react-native'

import {
  widthPixel,
  heightPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from 'utils/normalization'

export const SafeAreaHeader = styled.View`
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.primary.accent_200};
  padding-top: ${Platform.OS === 'ios'
    ? pixelSizeVertical(42)
    : StatusBar.currentHeight}px;
`

export const ViewHeader = styled.View`
  width: 100%;
  /* align-items: center; */
  justify-content: center;
  height: ${heightPixel(62)}px;
  padding: 0px ${pixelSizeHorizontal(14)}px;
`

export const BackButton = styled.TouchableOpacity`
  border-radius: 14px;
  justify-content: center;
  background: transparent;
  width: ${widthPixel(35)}px;
  height: ${heightPixel(35)}px;
  margin-right: ${pixelSizeHorizontal(10)}px;
`

export const StackViewHeader = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  height: ${heightPixel(62)}px;
  padding: 0px ${pixelSizeHorizontal(14)}px;
`