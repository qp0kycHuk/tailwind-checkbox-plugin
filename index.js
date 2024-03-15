const plugin = require('tailwindcss/plugin')
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')
const { parseColor, formatColor } = require('tailwindcss/lib/util/color')

const sizeName = '--tw-checkbox-size'
const colorName = '--tw-checkbox-color'
const sizeVar = 'var(--tw-checkbox-size)'
const colorVar = 'var(--tw-checkbox-color)'

const defaultOptions = {
  className: 'checkbox',
  radioClassName: 'radio',
  disabledOpacity: 0.6,
  border: "1px solid theme('colors.black / 40%')",
  baseCss: {},
  checkboxBackground: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e"), ${colorVar}`,
  radioBackground: `url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='4'/%3E%3C/svg%3E"), ${colorVar}`,
  focusStyle: {
    borderColor: colorVar,
    boxShadow: '0 0 0 1px ' + colorVar,
    zIndex: 2,
  },
  hoverStyle: {
    borderColor: colorVar,
  }, 
  checkedStyle: {
    borderColor: colorVar,
    boxShadow: 'none',
  }
}

module.exports = plugin.withOptions(
  (opts) =>
    function ({ addComponents, matchUtilities, addBase, theme }) {
      const options = {
        ...defaultOptions,
        ...opts,
      }
      options.className = options.className.trim()

      addBase({
        ':root': {
          [sizeName]: theme('checkboxSize.base'),
          [colorName]: theme('colors.primary'),
        },
      })

      addComponents({
        [`.${options.className}, .${options.radioClassName}`]: {
          display: 'block',
          appearance: 'none',
          height: sizeVar,
          width: sizeVar,
          border: options.border,
          outline: 'none !important',
          transition: 'border .1s, box-shadow .1s, background .1s',
          boxShadow: '0 0 0 0px ' + colorVar,
          ...options.baseCss,


          '&:focus, &:focus-within': options.focusStyle,

          '@media(hover) ': {
            '&:hover': options.hoverStyle,
          },

          '&:checked': options.checkedStyle,

          '&:disabled': {
            opacity: options.disabledOpacity,
          },
        },
        [`.${options.className}:checked`]: {
          background: options.checkboxBackground,

        },
        [`.${options.radioClassName}:checked`]: {
          background: options.radioBackground,
        },
      })

      // size
      matchUtilities(
        {
          [options.className]: (size) => {
            // check is not color
            let string = size.DEFAULT || size[500] || size

            if (typeof size == 'function') {
              string = size({});
            }

            const parsed = parseColor(string)
            if (!!parsed?.color) return null

            return { [sizeName]: size }
          },
        },
        { values: theme('checkboxSize') }
      )

      // colors
      matchUtilities(
        {
          [options.className]: (color) => {
            // check is color
            let string = color.DEFAULT || color[500] || color

            if (typeof color == 'function') {
              string = color({});
            }

            const parsed = parseColor(string)
            if (!parsed?.color) return null

            return {
              [colorName]: string,

            }
          },
        },
        {
          values: flattenColorPalette(theme('colors')),
          type: 'color',
        }
      )
    },
  (options) => ({
    theme: {
      extend: {
        checkboxSize: {
          xs: '16px',
          sm: '20px',
          base: '24px',
          lg: '32px',
          xl: '40px',
        },
      },
    },
  })
)
