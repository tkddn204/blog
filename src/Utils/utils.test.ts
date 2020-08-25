import { isColor } from './utils'

describe('Test Utils/utils.ts', () => {
  describe('isColor function', () => {
    test('should be passed', () => {
      const colorStrings = [
        'black',
        'white',
        'red',
        'gray',
        'blue',
        'pink',
        'yellow',
      ]
      const hexColors = [
        '#123',
        '#020',
        '#123456',
        '#132435',
        '#abcdfa00',
        '#aaaaaa33',
      ]
      const rgbColors = [
        'rgb(0, 0, 0)',
        'rgb(255, 255, 255)',
        'rgb(12%, 34, 56%)',
        'rgb(1, 255, 1)',
      ]
      const rgbaColors = [
        'rgba(32, 123, 43, 1)',
        'rgba(255, 255, 255, 0.5)',
        'rgba(0, 0, 0, 0)',
      ]

      const compose = [
        ...colorStrings,
        ...hexColors,
        ...rgbColors,
        ...rgbaColors,
      ]

      compose.forEach((str) => {
        expect(str).toBeString().toSatisfy(isColor)
      })
    })

    test('should be not passed', () => {
      const colorStrings = [
        'some',
        'weird',
        'names',
        'Im',
        'so',
        'happy',
        'now',
      ]
      const hexColors = ['#', '#1', '#23', '#0000000000000', '#a', '#7777777']
      const rgbColors = [
        'rgb(-1, 0, 0)',
        'rgb(-332, 255, 255)',
        // 'rgb(357, 357, 357)',
      ]
      const rgbaColors = [
        'rgba(32, 123, 43, -1)',
        'rgba(0, 0, 0)',
        'rgba(-3, 0, 0, 255)',
      ]

      const compose = [
        ...colorStrings,
        ...hexColors,
        ...rgbColors,
        ...rgbaColors,
      ]

      compose.forEach((str) => {
        expect(str).toBeString().not.toSatisfy(isColor)
      })
    })
  })
})
