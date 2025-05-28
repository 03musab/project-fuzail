# 👜 FZ Creation Bags – Official Website

This project is a modern, responsive website for **FZ Creation Bags**, a business specializing in high-quality bags and accessories for all occasions. The site is designed to provide a smooth browsing experience, showcase featured products, and allow customers to make enquiries seamlessly.

![FZ Creation Website](https://fzcreationbags.in)

[![Live Website](https://img.shields.io/badge/Live-Website-8B5A3C?style=for-the-badge&logo=google-chrome&logoColor=white)](https://fzcreationbags.in)

## 🌟 Features

- **🏠 Homepage with Hero Banner & Slider**  
  A visually engaging homepage with a hero section and a slider highlighting featured products (fetched dynamically from Firebase)

- **🛍️ Product Listings & Details**  
  Easy-to-navigate product listings and detailed product pages to help customers explore the catalog

- **🔥 Firebase Integration**  
  Real-time product data is pulled from Firebase, and customer enquiries are submitted and stored using Firebase backend services

- **📝 Interactive Forms**  
  - **Enquiry Form** – For product-specific questions
  - **Contact Form** – For general queries or feedback

- **📄 Informational Pages**  
  Includes dedicated pages for About Us, Privacy Policy, and Terms of Service

- **📱 Responsive Design**  
  Optimized for mobile and desktop, with smooth navigation using a responsive menu system

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Structure and content |
| CSS3 | Styling and responsive design |
| JavaScript | Interactive functionality |
| Firebase | Backend data storage |

## 📁 Project Structure

```
fz-creation-website/
├── index.html              # Main homepage
├── styles.css              # Global styles and responsive design
├── mobile-menu.js          # Mobile navigation functionality
├── pages/
│   ├── products.html       # Product catalog page
│   ├── about.html          # About us page
│   ├── contact.html        # Contact form page
│   ├── privacy.html        # Privacy policy
│   └── terms.html          # Terms of service
├── js/
│   ├── firebase-config.js  # Firebase configuration
│   ├── products.js         # Product display logic
│   └── forms.js            # Form handling
├── css/
│   ├── responsive.css      # Mobile-specific styles
│   └── components.css      # Component-specific styles
├── images/
│   ├── hero/               # Hero section images
│   ├── products/           # Product images
│   └── icons/              # Website icons
└── assets/
    └── favicon.ico         # Website favicon
```

## ⚙️ Getting Started

### Prerequisites
- Web browser
- Firebase project (for backend functionality)

### Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/fz-creation-website.git
   cd fz-creation-website
   ```

2. **Configure Firebase**
   Update `js/firebase-config.js` with your Firebase credentials:
   ```javascript
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project.appspot.com",
     messagingSenderId: "your-sender-id",
     appId: "your-app-id"
   };
   ```

3. **Launch the website**
   Open `index.html` in your web browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

## 🔧 Firebase Configuration

### Firestore Collections

**Products Collection:**
```javascript
{
  id: "product_id",
  name: "Product Name",
  description: "Product description",
  price: 999,
  images: ["image1.jpg", "image2.jpg"],
  category: "handbags",
  featured: true,
  inStock: true
}
```

**Enquiries Collection:**
```javascript
{
  id: "enquiry_id",
  name: "Customer Name",
  email: "customer@email.com",
  message: "Enquiry message",
  productId: "product_id",
  timestamp: "2024-01-01T00:00:00Z",
  status: "pending"
}
```

## 🚀 Live Demo

Visit the live website: **[fzcreationbags.in](https://fzcreationbags.in/)**

## 📱 Mobile Features

- Touch-friendly navigation
- Optimized image loading
- Responsive product grid
- Mobile-optimized forms
- Fast loading times

## 🎨 Design Features

- Clean, modern interface
- Consistent color scheme
- Smooth animations and transitions
- Professional typography
- Intuitive user experience

## 🔒 Security Considerations

- Form validation on both client and server side
- Firebase security rules implemented
- No sensitive data exposed in client code
- SSL/HTTPS encryption for secure data transmission

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software developed for FZ Creation Bags. All rights reserved.

## 🙏 Acknowledgments

- Firebase team for excellent backend services
- Design inspiration from modern e-commerce websites
- FZ Creation Bags team for requirements and feedback

---

**👜 FZ Creation Bags** – *Quality bags for every occasion*

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://javascript.info/)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com/)
