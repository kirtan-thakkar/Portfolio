# Amiamie Font Family

This folder contains the complete Amiamie font family downloaded from [Ali-Sanati's awwwards-portfolio](https://github.com/Ali-Sanati/awwwards-portfolio).

## Font Structure

```
amiamie/
├── otf/          # OpenType fonts (preferred for print)
├── ttf/          # TrueType fonts (web compatible)
└── amiamie.css   # CSS with @font-face declarations
```

## Available Variants

### Regular Family (`font-family: 'Amiamie'`)
- **Regular** (400): `Amiamie-Regular`
- **Regular Italic** (400 italic): `Amiamie-Italic`
- **Light** (300): `Amiamie-Light`
- **Light Italic** (300 italic): `Amiamie-LightItalic`
- **Black** (900): `Amiamie-Black`
- **Black Italic** (900 italic): `Amiamie-BlackItalic`

### Round Family (`font-family: 'Amiamie Round'`)
- **Regular Round** (400): `Amiamie-RegularRound`
- **Italic Round** (400 italic): `Amiamie-ItalicRound`
- **Black Round** (900): `Amiamie-BlackRound`
- **Black Italic Round** (900 italic): `Amiamie-BlackItalicRound`

## Usage

### CSS Classes (Available)
```css
.font-amiamie        /* Regular Amiamie family */
.font-amiamie-round  /* Round variant family */
.font-amiamie-light  /* Light weight (300) */
.font-amiamie-black  /* Black weight (900) */
```

### Direct CSS Usage
```css
.my-text {
  font-family: 'Amiamie', sans-serif;
  font-weight: 400; /* or 300, 900 */
  font-style: normal; /* or italic */
}

.my-round-text {
  font-family: 'Amiamie Round', sans-serif;
}
```

### Tailwind Config (Add to tailwind.config.js)
```javascript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'amiamie': ['Amiamie', 'sans-serif'],
        'amiamie-round': ['Amiamie Round', 'sans-serif'],
      }
    }
  }
}
```

### Next.js Local Font Usage
```javascript
import localFont from 'next/font/local'

const amiamie = localFont({
  src: [
    {
      path: './public/fonts/amiamie/ttf/Amiamie-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './public/fonts/amiamie/ttf/Amiamie-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './public/fonts/amiamie/ttf/Amiamie-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-amiamie'
})
```

## Installation Complete ✅

The fonts are already imported in your `globals.css` and ready to use!