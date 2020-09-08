import { useSelector } from 'react-redux'
import {
  isEmpty,
  isLoaded,
  ReduxFirestoreQuerySetting,
  useFirestoreConnect,
} from 'react-redux-firebase'
import { About, FetchState } from '../Types/firestore.schema'
import { RootState } from '../Application/Store'
import { isExistObjectKey } from '../Utils'

type AboutQueryType = () => ReduxFirestoreQuerySetting[]
const aboutQuery: AboutQueryType = () => {
  return [{ collection: 'about' }]
}

const selector = ({ firestore }: RootState) => {
  const { data } = firestore
  const about = {}

  if (isExistObjectKey(data)) {
    if (isExistObjectKey(data.about)) {
      return data.about[Object.keys(data.about)[0]]
    }
  }

  return about
}

type AboutReturnType = [About, FetchState]
type AboutFunctionReturnType = () => AboutReturnType

const useAbout: AboutFunctionReturnType = () => {
  useFirestoreConnect(aboutQuery())
  const about = useSelector(selector)

  let fetchState: FetchState
  if (isLoaded(about)) {
    if (isEmpty(about)) {
      fetchState = FetchState.empty
    } else {
      fetchState = FetchState.loaded
    }
  } else {
    fetchState = FetchState.loading
  }

  return [about, fetchState] as AboutReturnType
}

export default useAbout
