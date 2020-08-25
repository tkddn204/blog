import { RootState } from '../Application/Store'
import { LocaleState } from './locale/localeSlice'

/**
 * 지역 셀렉터
 * @param state RootState
 */
interface LocaleSelector {
  (state: RootState): LocaleState
}
const locale: LocaleSelector = (state) => state.locale

export default {
  locale,
}
