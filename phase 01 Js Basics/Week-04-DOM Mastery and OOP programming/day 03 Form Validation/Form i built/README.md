# Form Validation Project

A modern, accessible form validation system with real-time validation, password strength meter, and dark/light mode toggle.

---

## ✨ Features

### 📝 **Form Validation**
- **Real-time validation** for all input fields
- **Custom error messages** for each field type
- **Visual feedback** with color-coded error states
- **Pattern matching** for name, phone, zip code, and URL fields
- **Cross-field validation** (password confirmation)

### 🎨 **UI/UX Features**
- **Dark/Light mode toggle** with smooth transitions
- **Responsive design** for all screen sizes (mobile, tablet, desktop)
- **Password strength meter** with visual feedback (weak/medium/strong)
- **Accessible form** with ARIA labels and proper focus management
- **Hover and focus states** for better user interaction
- **Form grid layout** on larger screens for optimal spacing

### 🔒 **Validation Rules**
1. **Name**: Minimum 3 characters, letters and spaces only
2. **Email**: Valid email format required
3. **Password**: Minimum 8 characters with strength indicator
4. **Phone**: Pakistan format (11 digits starting with "03")
5. **Portfolio URL**: Must start with `http://` or `https://`
6. **Date of Birth**: Must be between 1900-01-01 and 2009-12-31
7. **Zip Code**: Exactly 5 digits
8. **Bio**: Maximum 200 characters
9. **Terms**: Must be agreed to

---

## 📁 File Structure

```
project/
├── index.html          # Main HTML structure
├── style.css           # Styling with CSS custom properties
└── app.js              # Form validation and interactivity logic
```

---

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with ARIA attributes
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript (ES6)**: Form validation, event handling, DOM manipulation
- **CSS Variables**: For theme switching

---

## 🌐 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

---

## 🚀 Installation & Usage

1. **Clone or download** the project files
2. **Open `index.html`** in any modern web browser
3. **No build process or dependencies** required

---

## 📖 How to Use

1. **Fill out the form** - validation happens in real-time
2. **Toggle theme** using the button in the top-right corner
3. **Watch password strength** as you type
4. **Submit** when all fields are valid (submit button enables automatically)

---

## 🔧 Validation Logic Details

### JavaScript Functions
- `validateInput()`: Validates individual inputs
- `getErrorMessage()`: Returns context-specific error messages
- `ValidateAll()`: Checks all form fields
- `ShowErrors()`: Displays errors with animation
- `passwordMeter()`: Calculates and displays password strength
- `updateSubmitBtn()`: Enables/disables submit button
- `setupEventListeners()`: Sets up event listeners for all inputs

### Event Handling
- **`blur`**: Validates when user leaves a field
- **`input`**: Clears errors and updates validation on typing
- **`change`**: For checkbox validation
- **`submit`**: Final validation before form submission

---

## ♿ Accessibility Features

- **ARIA labels** for screen readers
- **Proper focus management**
- **Error announcements** via aria-live regions
- **Keyboard navigable** form
- **Color contrast** compliant with WCAG standards

---

## 🎨 CSS Architecture

- **CSS Custom Properties** for theming
- **Mobile-first responsive design**
- **CSS Grid** for form layout on larger screens
- **Flexbox** for component alignment
- **CSS animations** for error states

---

## ⚡ Performance

- **Lightweight** (no external dependencies)
- **Efficient event delegation**
- **Optimized re-renders** with targeted DOM updates
- **Smooth animations** with CSS transforms

---

## 🎛️ Customization

### Theme Colors
Modify the `:root` and `.dark-theme` CSS variables in `style.css` to change colors.

### Validation Rules
Update patterns and validation logic in `app.js`:
- `validateInput()` function for field-specific rules
- `getErrorMessage()` for custom error messages
- `passwordMeter()` for password strength criteria

### Form Fields
Add/remove fields in `index.html` and update:
- Corresponding CSS grid areas
- JavaScript validation logic
- Event listeners in `setupEventListeners()`

---

## 📄 License

This project is open source and available for personal and commercial use.

---

## 🤝 Contributing

Feel free to fork and modify this project. Suggestions and improvements are welcome!

---

> **Note**: This is a front-end only project. Form submission would require backend integration for production use.