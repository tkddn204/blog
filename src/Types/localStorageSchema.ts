/**
 * 지역 상태
 *
 * @type 'ko' | 'en'
 */
export type LocaleState = 'ko' | 'en'

/**
 * 테마 상태
 *
 * @type 'default' | 'light' | 'dark'
 */
export type ThemeState = 'default' | 'light' | 'dark'

export interface EditorData {
  title?: string
  summary?: string
  content?: string
}
