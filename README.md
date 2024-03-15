# Input Plugin for Tailwind CSS

Предоставляет классы для создания checkbox|radio, включая эффекты при наведении, фокусе

## Установка

```bash
npm install @qpokychuk/tailwind-checkbox-plugin --save-dev
```

```js
// tailwind.config.js
{    
  plugins: [
    require('@qpokychuk/tailwind-checkbox-plugin'),
  ],
}
```
## Основа использования

Добавьте обязательный класс `checkbox` или `radio`, затем добавьте дополнительные классы для настройки отображения

```html
<input type="checkbox" class="checkbox" />
<input type="checkbox" class="radio" />
```

## Установка цвета поля

Управляйте цветом поля с помощью утилит `input-{color}` (color - цвета вашей темы).

```html
<input class="checkbox checkbox-indigo ..." />
<input class="checkbox checkbox-blue ..." />
<input class="checkbox checkbox-red ..." />
```

Если вам нужно использовать одноразовое значение `color`, которое не имеет смысла включать в вашу тему, используйте квадратные скобки, чтобы сгенерировать свойство "на лету", используя любое произвольное значение.

```html
<input class="checkbox checkbox-[#B33771] ..." />
```

## Установка размера поля

Управляйте размером поля с помощью утилит `checkbox-{checkboxSize}`.

```html
<input class="checkbox checkbox-xs ..." />
<input class="checkbox checkbox-sm ..." />
<input class="checkbox checkbox-base ..." /> <!-- Вариант по умолчанию -->
<input class="checkbox checkbox-lg ..." />
<input class="checkbox checkbox-xl ..." />
<input class="checkbox checkbox-2xl ..." />
```

Если вам нужно использовать одноразовое значение `inputSize`, которое не имеет смысла включать в вашу тему, используйте квадратные скобки, чтобы сгенерировать свойство "на лету", используя любое произвольное значение.

```html
<input class="checkbox checkbox-[50px] ..." />
```


## Установка закругления поля

Управляйте закруглением поля с помощью утилит `rounded` из tailwind.

```html
<input class="checkbox ..." />
<input class="checkbox rounded ..." />
<input class="checkbox rounded-xl ..." />
<input class="checkbox rounded-full ..." />
```

## Настройка вашей темы

По умолчанию плагин предоставляет размеры поля, вы можете их расширить

```js
// tailwind.config.js
{
  theme: {
    checkboxSize: {
      xs: '16px',
      sm: '20px',
      base: '24px',
      lg: '32px',
      xl: '40px',
    },
  }
}
```


## Конфигурация

Вы можете настроить плагин с помощью опций
Используйте вызов плагина с объектом конфигурации:
```js
// tailwind.config.js
{    
  plugins: [
    require('@qpokychuk/tailwind-input-plugin')({
      className: 'checkbox',
      radioClassName: 'radio',
      disabledOpacity: 0.6,
      border: "1px solid theme('colors.black / 40%')",
      baseCss: {},
      checkboxBackground: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e"), 'var(--tw-checkbox-color)'`,
      radioBackground: `url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='4'/%3E%3C/svg%3E"), 'var(--tw-checkbox-color)'`,
      focusStyle: {
        borderColor: 'var(--tw-checkbox-color)',
        boxShadow: '0 0 0 1px var(--tw-checkbox-color)',
        zIndex: 2,
      },
      hoverStyle: {
        borderColor: 'var(--tw-checkbox-color)',
      }, 
      checkedStyle: {
        borderColor: 'var(--tw-checkbox-color)',
        boxShadow: 'none',
      }
    }),
  ],
}
```

| Параметр | Значение по умолчанию | Описание |
|---|---|---|
| className | `'checkbox'` | Базовый класс для checkbox поля. Вы можете использовать свой, например `'ui-checkbox'`, тогда ваши классы будут выглядеть так: `ui-checkbox ui-checkbox-indigo ui-checkbox-xl ...` |
| radioClassName | `'radio'` | Базовый класс для radio поля. Вы можете использовать свой, например `'ui-radio'`, тогда ваши классы будут выглядеть так: `ui-radio ui-radio-indigo ui-radio-xl ...` |
| disabledOpacity | `0.6` | Определяет непрозрачность неактивного поля  |
| border | `1px solid theme('colors.black / 40%')` | Обводка по умолчанию используется `color.black` - если вы не переопределяете этот параметр в вашей теме должен быть цвет `black` |
| baseCss | `{}` | Дополнительные бызовые стили |
| checkboxBackground | См. выше | `background` в состояии `checked` для checkbox поля |
| radioBackground | См. выше | `background` в состояии `checked` для radio поля |
| focusStyle | См. выше | Переопределит стили поля в фокусе |
| hoverStyle | См. выше | Переопределит стили поля при наведении |
| checkedStyle | См. выше | Переопределит стили поля в состояии `checked` |


[Поддержать автора](https://www.tinkoff.ru/rm/yuferov.sergey18/NC17C11734)
