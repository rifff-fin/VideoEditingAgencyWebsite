# Artographica - Project Documentation

## Project Overview

**Artographica** is a modern, interactive portfolio website for a creative services agency specializing in video editing, audio editing, 2D/3D animation, graphic design, digital marketing, UI/UX design, web development, and podcast production. The website showcases the company's services, portfolio, client reviews, and provides a contact form for potential clients.

---

## Tech Stack

### Core Technologies
- **Framework**: React 18.3.1
- **Build Tool**: Vite 6.0.1
- **Language**: JavaScript (ES6+)
- **Package Manager**: npm

### Dependencies
- **framer-motion** (v12.23.25): Animation library for smooth transitions and effects
- **react-scroll** (v1.9.3): Smooth scrolling navigation between sections
- **react-dom** (v18.3.1): React DOM rendering

### Development Tools
- **ESLint**: Code linting with React-specific rules
- **@vitejs/plugin-react**: Official React plugin for Vite
- **TypeScript Types**: Type definitions for React and React DOM

---

## Project Structure

```
artographica1.0/
├── src/
│   ├── assets/              # Static assets (images, videos, icons)
│   │   ├── about.mp4
│   │   ├── about.png
│   │   ├── logo.png
│   │   ├── hero.png
│   │   ├── user-*.jpg       # Client review photos
│   │   ├── program-*.png    # Project thumbnails
│   │   └── [various icons]
│   │
│   ├── Components/          # React components
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.css
│   │   ├── Campus/
│   │   │   ├── Campus.jsx
│   │   │   └── Campus.css
│   │   ├── Carousel/
│   │   │   ├── Carousel.jsx
│   │   │   └── Carousel.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.css
│   │   ├── CursorFollow/
│   │   │   ├── CursorFollow.jsx
│   │   │   └── CursorFollow.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.css
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── ParticleBackground/
│   │   │   ├── ParticleBackground.jsx
│   │   │   └── ParticleBackground.css
│   │   ├── Project/
│   │   │   ├── Project.jsx
│   │   │   └── Project.css
│   │   ├── Reviews/
│   │   │   ├── Reviews.jsx
│   │   │   └── Reviews.css
│   │   └── Title/
│   │       ├── Title.jsx
│   │       └── Title.css
│   │
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
│
├── public/                  # Public static files
├── index.html              # HTML template
├── package.json            # Project dependencies
├── vite.config.js          # Vite configuration
└── eslint.config.js        # ESLint configuration
```

---

## Component Breakdown

### 1. **App.jsx** (Main Application)
The root component that orchestrates all other components in a single-page layout.

**Structure:**
- ParticleBackground (background effect)
- CursorFollow (custom cursor)
- Navbar (navigation)
- Hero (landing section)
- Carousel (statistics/features)
- About (company information)
- Title (section headers)
- Project (services showcase)
- Campus (portfolio gallery)
- Reviews (client testimonials)
- Contact (contact form)
- Footer (footer information)

---

### 2. **Navbar** Component
A sticky navigation bar with smooth scrolling to different sections.

**Features:**
- Fixed position that becomes sticky on scroll
- Logo click navigates to hero section
- Mobile responsive with hamburger menu
- Smooth scroll navigation to sections:
  - Home (Hero)
  - Projects
  - Services (What We Provide)
  - About (Who We Are)
  - Contact Us button
- Animated slide-down effect on page load
- Glassmorphism backdrop effect when sticky

**Key Interactions:**
- Scroll detection: Adds sticky class after 50px scroll
- Mobile menu toggle for responsive design
- Hover effects on navigation items with underline animation

---

### 3. **Hero** Component
The landing section with eye-catching animation and call-to-action.

**Features:**
- Typewriter effect for main heading: "Your all-in-one video editing solution."
- Animated gradient background
- Blinking cursor effect during typing
- Floating "Explore More" button with glow effect
- Smooth scroll to contact section on button click
- Radial gradient background with pulse animation
- Text gradient animation shifting colors

**Visual Effects:**
- Gradient text with webkit background clip
- Pulse gradient animation (8s cycle)
- Floating button animation (3s cycle)
- Glow effect on button hover
- Fade-in animation for title

---

### 4. **Carousel** Component
An auto-scrolling statistics carousel showcasing key metrics.

**Content:**
- VIRAL EDITS: 200% VIEWS INCREASE
- THUMBNAILS: 15% CTR INCREASE
- ENGAGING TITLE: 10% MORE CLICKS
- SEO: 30% MORE REACH
- FIRE HOOKS: 5x MORE ENGAGEMENT

**Features:**
- Auto-scroll with smooth animation
- Pause on hover
- Infinite loop (cards duplicated)
- Responsive card design
- Scroll speed: 1.5px per frame at 15ms interval

---

### 5. **About** Component
Company description with video showcase and typewriter effect.

**Features:**
- Typewriter effect for company description (20ms character delay)
- Video player with custom play/pause controls
- Play icon overlay when video is paused
- Click outside video to pause functionality
- Intersection Observer for scroll-triggered visibility
- Blinking cursor animation on text border

**Content:**
Describes Artographica's expertise in:
- Video Editing
- Audio Editing
- 2D/3D Animation
- Graphic Design
- Digital Marketing
- UI/UX Design
- Web Development
- Podcast Production

**Animations:**
- Fade in and slide up when section becomes visible
- Video slides in from right
- Text appears with typewriter effect
- Cursor blinks on text border

---

### 6. **Title** Component
Reusable section header component used throughout the page.

**Props:**
- `subTitle`: Small heading text
- `title`: Main description text

**Usage Examples:**
```javascript
<Title 
  subTitle='Your Global Partner for Creative Excellence' 
  title="You can access Artographica's services..."
/>
```

Used for:
- Services section introduction
- Projects section introduction
- Reviews section header
- Contact section header

---

### 7. **Project** Component
Services showcase with hover effects.

**Services Displayed:**
1. **Podcast** (with program-1.png and program-icon-1.png)
2. **Video Editing** (with program-2.png and program-icon-2.png)
3. **Graphic Design** (with program-3.png and program-icon-3.png)

**Features:**
- Image cards with caption overlay
- Caption appears on hover with smooth transition
- Icon and text displayed in caption
- 4:3 aspect ratio maintained
- Rounded corners with hover transform effect
- Dark green overlay with white text

**Hover Behavior:**
- Overlay fades in with opacity transition
- Transforms from translateY(20%) to 0
- 0.4s ease transition

---

### 8. **Campus** Component
Portfolio gallery with auto-scrolling YouTube video thumbnails.

**Video Categories:**

**Big Format Videos** (5 videos):
- h4kBWO37-g0
- 6IKz8daYvkw
- BJMo9j_Yjuc
- fTpxLqv7h84
- Us3jBiHTf9Q

**Short Format Videos** (3 videos):
- 8E8WTyvF0jE
- Lmff5UgXlhY
- M9dXzWCAWgM

**Features:**
- Two separate rows: big format and short format
- Auto-scroll animation (15s linear infinite)
- Videos duplicated for infinite loop
- Hover to scale thumbnails (1.1x)
- Links to actual YouTube videos
- Uses YouTube thumbnail API for image loading
  - Big videos: maxresdefault.jpg
  - Short videos: hqdefault.jpg

**Animation:**
- Continuous scroll from right to left
- Smooth transform transition on hover

---

### 9. **Reviews** Component
Client testimonial carousel with auto-scroll.

**Featured Clients:**
1. **Anthony Cassarino** - Content creator, Founder of Chronometer Check
2. **Bryan Villarosa** - Licensed Realtor and Digital Marketer
3. **Rocco Leo Gaglioti** - Actor and TV Director, Founder/CEO of FNL Network
4. **Praline Patisserie** - Pastry Shop
5. **Dan Korsby** - Content Creator and Online Coach
6. **Gavi Wolf** - CEO and Founder at Indiewalls
7. **Ayus Paudel** - Founder and Entrepreneur

**Features:**
- Auto-scrolling review cards (50s scroll duration)
- Glowing border animation on all cards
- Hover to enlarge and see full review text
- User profile images displayed
- Card duplicated for infinite loop
- Responsive min/max width (500px-600px)

**Card Design:**
- Dark semi-transparent background
- White border with glowing animation
- User avatar (120px circular)
- Name and location displayed
- Review text with ellipsis (expands on hover)

**Hover Effects:**
- Scale to 1.1x
- Expands max-width to 700px
- Full review text revealed
- Higher z-index to stay on top
- Background becomes more opaque

---

### 10. **Contact** Component
Contact form with Web3Forms integration.

**Form Fields:**
- Name (text input)
- Phone number (tel input)
- Message (textarea, 6 rows)

**Contact Information:**
- **Email**: artographicateam@gmail.com
- **Phone**: 012334567
- **Location**: 123 Gulshan Avenue, Dhaka 1212, Bangladesh

**Features:**
- Real-time form state management with React hooks
- Integration with Web3Forms API (access key embedded)
- Form submission with async/await
- Success/error message display
- Auto-clear form after successful submission
- Message disappears after 5 seconds
- Responsive two-column layout

**Visual Design:**
- Glassmorphism background with backdrop blur
- Green glowing border (#90EE90)
- Rotating gradient background animation
- Slide-in animations for both columns
- Icon bounce animation
- Hover effects on contact info items

**Form Validation:**
- Required fields marked
- Focus effects with glow
- Submit button with shimmer effect on hover
- Arrow icon slides on hover

---

### 11. **Footer** Component
Simple footer with copyright and links.

**Content:**
- Copyright: "© 2024 Artographica. All rights reserved."
- Links: Terms of Services, Privacy Policy

**Features:**
- Gradient background (black to dark gray)
- Top border with green tint
- Shimmer animation on top border
- Hover effects on links with underline animation
- Responsive flexbox layout
- Color transitions on hover

---

### 12. **ParticleBackground** Component
Animated particle system for background ambiance.

**Features:**
- Canvas-based particle animation
- 60 particles with random properties
- Green particle color (#90EE90) with varying opacity
- Continuous movement with wrapping at canvas edges
- Window resize handling
- Particles range in size: 1-3px
- Speed range: -0.25 to 0.5 px/frame
- Opacity range: 0.2-0.7

**Technical Implementation:**
- Uses HTML5 Canvas API
- Particle class with update and draw methods
- requestAnimationFrame for smooth animation
- Responsive to window resize events

---

### 13. **CursorFollow** Component
Custom cursor effect that follows mouse movement.

**Features:**
- Glow effect following cursor position
- Smooth tracking with CSS transitions
- "Moving" class added during mouse movement
- Timeout to detect when cursor stops (100ms)
- Positioned absolutely to follow mouse coordinates

**Visual Effect:**
- Circular glow that trails the cursor
- Changes appearance when moving vs stationary
- Creates an immersive, modern user experience

---

## Styling Approach

### Global Styles (index.css)

**Design Tokens:**
- **Font**: 'Poppins' from Google Fonts (weights: 300, 400, 500, 600, 700)
- **Primary Color**: #90EE90 (Light Green)
- **Secondary Color**: #2b3105 (Dark Green)
- **Background**: #000000 (Black)
- **Text Color**: White

**Global Features:**
- Box-sizing: border-box on all elements
- Smooth scrolling enabled
- Custom scrollbar with green gradient
- Dark theme throughout
- Overflow-x hidden to prevent horizontal scroll

**Custom Scrollbar:**
- Width: 10px
- Track: Black background
- Thumb: Green gradient (#90EE90 to #2b3105)
- Hover: Solid green (#90EE90)

### Component-Specific Styling

Each component has its own CSS file with:
- Scoped styles for component-specific layouts
- Responsive media queries
- Animations and transitions
- Hover effects
- Keyframe animations

**Common Design Patterns:**
1. **Glassmorphism**: Backdrop blur effects with semi-transparent backgrounds
2. **Gradient Backgrounds**: Linear and radial gradients with green tones
3. **Animation**: Smooth transitions, transforms, and keyframe animations
4. **Hover Effects**: Scale transforms, color changes, underlines
5. **Responsive Design**: Flexbox and mobile-first breakpoints
6. **Green Theme**: Consistent use of #90EE90 for accents

---

## Key Features & Functionality

### 1. **Smooth Scroll Navigation**
- Uses `react-scroll` for smooth scrolling
- Manual implementation with `scrollIntoView` behavior
- All navigation links scroll to corresponding sections

### 2. **Sticky Navigation**
- Navbar becomes sticky after 50px scroll
- Adds glassmorphism effect when sticky
- Smooth transition between states

### 3. **Interactive Animations**
- **Typewriter Effects**: Hero and About sections
- **Auto-Scroll Carousels**: Statistics, Campus videos, Reviews
- **Hover Animations**: All interactive elements
- **Particle Background**: Ambient animated particles
- **Custom Cursor**: Glowing cursor follower

### 4. **Responsive Design**
- Mobile hamburger menu for Navbar
- Flexible layouts that stack on smaller screens
- Responsive typography with clamp()
- Media queries for tablets and mobile devices

### 5. **Form Handling**
- React state management for form inputs
- Web3Forms API integration
- Async form submission with error handling
- Success/error message display
- Auto-clear after submission

### 6. **Video Integration**
- Embedded YouTube video thumbnails
- Custom video player controls in About section
- Click to play/pause functionality
- Click outside to pause feature

### 7. **Intersection Observer**
- Scroll-triggered animations
- About section visibility detection
- Performance-optimized element loading

---

## Animation Catalog

### Keyframe Animations

1. **slideDown** (Navbar)
   - Duration: 0.5s
   - From: translateY(-100%), opacity 0
   - To: translateY(0), opacity 1

2. **pulseGradient** (Hero background)
   - Duration: 8s infinite
   - Opacity oscillates between 0.5 and 0.8

3. **gradientShift** (Hero title)
   - Duration: 4s infinite
   - Background position shifts for gradient effect

4. **blink** (Cursor)
   - Duration: 0.8s infinite
   - 50% opacity at 50% keyframe

5. **floatButton** (Hero CTA)
   - Duration: 3s infinite
   - Vertical translation: 0 to -10px

6. **blinkCursor** (About text)
   - Duration: 0.8s infinite
   - Border color alternates with transparent

7. **rotateGlow** (Contact background)
   - Duration: 10s infinite
   - Full 360° rotation

8. **iconBounce** (Contact icons)
   - Duration: 2s infinite
   - Vertical bounce: 0 to -8px

9. **scroll** (Campus & Reviews)
   - Duration: 15s (Campus) / 50s (Reviews)
   - Horizontal translation for infinite scroll

10. **glowing-border** (Review cards)
    - Duration: 2s infinite
    - Box-shadow pulses between 5px and 15px

11. **shimmer** (Footer border)
    - Duration: 3s infinite
    - Opacity oscillates between 0.5 and 1

12. **fadeIn** (Contact result message)
    - Duration: 0.5s
    - From: opacity 0, translateY(-10px)
    - To: opacity 1, translateY(0)

### Transition Effects

- Most hover effects: 0.3s ease
- Form focus effects: 0.3s ease
- Button hover: 0.4s cubic-bezier(0.4, 0, 0.2, 1)
- Scroll animations: 1s ease-out
- Transform changes: 0.3s - 0.4s ease

---

## Assets & Resources

### Images
- **Logo**: logo.png (180px desktop, 120px mobile)
- **Icons**: Various navigation and UI icons
- **Project Images**: program-1.png, program-2.png, program-3.png
- **Project Icons**: program-icon-1/2/3.png
- **User Photos**: user-1.jpg through user-7.jpg (client reviews)

### Videos
- **About Video**: about.mp4 (company introduction)
- **YouTube Embeds**: Thumbnail links to external YouTube videos

### Fonts
- **Google Fonts**: Poppins (300, 400, 500, 600, 700)
- Applied globally via @import in index.css

### External APIs
- **Web3Forms**: Contact form submission
  - Endpoint: https://api.web3forms.com/submit
  - Access Key: e6102dce-b54a-4724-89d8-ce255e3a1de8

- **YouTube Thumbnails**: 
  - Big format: https://img.youtube.com/vi/{videoId}/maxresdefault.jpg
  - Short format: https://img.youtube.com/vi/{videoId}/hqdefault.jpg

---

## Development Setup

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Runs on Vite's default port (usually http://localhost:5173)

### Build for Production
```bash
npm run build
```
Outputs to `dist/` directory

### Linting
```bash
npm run lint
```
Uses ESLint with React-specific rules

### Preview Production Build
```bash
npm run preview
```

---

## Browser Compatibility

The application uses modern web features:
- ES6+ JavaScript
- CSS Grid and Flexbox
- CSS Custom Properties (Variables)
- CSS Animations and Transitions
- Canvas API
- Intersection Observer API
- RequestAnimationFrame

**Recommended Browsers:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## Performance Considerations

### Optimizations
1. **Lazy Loading**: Video thumbnails loaded on demand
2. **RequestAnimationFrame**: Smooth canvas animations
3. **Intersection Observer**: Scroll-triggered effects
4. **CSS Animations**: GPU-accelerated transforms
5. **Component Structure**: Modular design for code splitting

### Potential Improvements
1. Image optimization (WebP format)
2. Lazy loading for below-fold content
3. Code splitting for large components
4. Service worker for offline support
5. CDN for static assets

---

## Color Palette

### Primary Colors
- **Light Green**: #90EE90 (rgb(144, 238, 144))
- **Dark Green**: #2b3105 (rgb(43, 49, 5))
- **Black**: #000000 (rgb(0, 0, 0))
- **White**: #FFFFFF (rgb(255, 255, 255))

### Accent Colors
- **Dark Gray**: #0a0a0a
- **Light Gray**: rgba(255, 255, 255, 0.7)
- **Semi-transparent Green**: rgba(144, 238, 144, 0.2-0.8)

### Gradient Combinations
1. Linear: #90EE90 to #2b3105
2. Linear: #4CAF50 to #2e7d32
3. Linear: #66BB6A to #4CAF50
4. Radial: rgba(50, 255, 50, 0.15) to rgba(0, 10, 0, 1)

---

## Responsive Breakpoints

### Desktop
- Default styles (no media query)
- Navbar: Full horizontal menu

### Tablet
- 850px and below: Navbar becomes mobile menu
- 968px and below: Contact section stacks vertically

### Mobile
- 768px and below: Footer stacks vertically
- 650px and below: Projects stack vertically
- 1024px and below: About section stacks vertically

---

## Future Enhancement Ideas

1. **Multilingual Support**: Add language switcher
2. **Dark/Light Mode**: Theme toggle option
3. **Blog Section**: Add blog/articles
4. **Case Studies**: Detailed project showcases
5. **Team Page**: Meet the team section
6. **Service Pages**: Individual pages for each service
7. **Testimonial Form**: Allow clients to submit reviews
8. **Analytics**: Google Analytics or similar
9. **SEO Optimization**: Meta tags, schema markup
10. **Accessibility**: ARIA labels, keyboard navigation
11. **Loading Spinner**: Page load indicator
12. **Error Boundaries**: React error handling
13. **404 Page**: Custom not found page
14. **Newsletter**: Email subscription
15. **Social Media Integration**: Share buttons, feeds

---

## Credits & Acknowledgments

### Technologies
- React Team (Facebook)
- Vite Team
- Framer Motion developers
- Web3Forms API

### Design Inspiration
- Modern portfolio websites
- Creative agency aesthetics
- Glassmorphism design trend

### Assets
- Google Fonts (Poppins)
- YouTube video platform
- Client-provided photos and videos

---

## License & Copyright

**Copyright © 2024 Artographica. All rights reserved.**

This project and its contents are proprietary to Artographica.

---

## Contact Information

For inquiries about this project or Artographica's services:

- **Email**: artographicateam@gmail.com
- **Phone**: 012334567
- **Location**: 123 Gulshan Avenue, Dhaka 1212, Bangladesh
- **Website**: [Deployed URL]

---

## Project Statistics

- **Total Components**: 13
- **Total Lines of Code**: ~1,500+ (JavaScript + CSS)
- **Total Assets**: 25+ images/videos
- **Dependencies**: 3 production, 8 development
- **Animation Count**: 12 keyframe animations
- **Responsive Breakpoints**: 4 major breakpoints

---

## Document Version

- **Version**: 1.0
- **Last Updated**: 2024
- **Created By**: Kombai AI Assistant
- **Purpose**: Complete project documentation for developers and stakeholders

---

## Summary

Artographica is a well-crafted, modern portfolio website that showcases a creative agency's services through engaging animations, smooth user interactions, and a cohesive dark theme with green accents. The project demonstrates proficiency in React, modern CSS techniques, and thoughtful UX design. The modular component structure makes it maintainable and scalable for future enhancements.