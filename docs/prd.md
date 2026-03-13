# Travel eSIM Website Requirements Document

## 1. Application Overview

### 1.1 Application Name
esim-website

### 1.2 Application Description
A premium animated Travel eSIM website with modern UI/UX animations that allows users to browse and purchase eSIM data packages for global travel across 195+ countries. The platform offers country-specific, regional, and global eSIM plans with instant activation, featuring luxury black design with gold accents and blue neon glow effects.

## 2. Core Features

### 2.1 Navigation System
- Sticky navbar with smooth underline animation on hover
- Mobile responsive menu with slide animation
- Links to: Home, Countries, Region Packages, Global eSIM

### 2.2 Home Page (index.html)
- Hero section with animated title: Global Travel eSIM
  - Smooth fade-in and slide-up animation for headline
  - Animated subtitle text with slight delay
- Subtitle: Instant Data in 195+ Countries
- Three action buttons with animations:
  - View Countries
  - Region Packages
  - Global eSIM
  - Glowing hover effect with scale
  - Ripple click effect
  - Smooth transition 0.3s
- Animated background particles or subtle gradient motion

### 2.3 Countries Listing Page (countries.html)
- Grid layout displaying country cards for all 195+ countries
- Each card contains:
  - Country flag
  - Country famous picture
  - Country name
  - View Details button
- Card animations:
  - Lift slightly on hover
  - Blue neon border glow on hover
  - Smooth transition animations
  - Staggered fade-in animation when scrolling

### 2.4 Country Detail Pages
Separate detail pages for all 195+ countries, each following the same design structure.

Each country detail page includes:
- Country title and flag display
- Three package options:
  - 5GB – 7 Days – Price
  - 10GB – 15 Days – Price
  - 20GB – 30 Days – Price
- Each package card features:
  - Add to Cart button
  - Order via WhatsApp button
- WhatsApp order link format: https://wa.me/923017480703?text=I want to buy [Country Name] eSIM [Package Size] please let me know whats info are you want from my side

### 2.5 Region Packages Page (region.html)
Region-based eSIM packages:
- Europe eSIM
- Asia eSIM
- Middle East eSIM
- Package details and pricing display
- Animated pricing cards with hover glow effect

### 2.6 Global eSIM Page (global.html)
Global eSIM plans:
- Global 10GB – 30 Days
- Global 20GB – 60 Days
- Global Unlimited
- Premium visual highlighting for plans
- Floating animation for recommended plans

## 3. Design Requirements

### 3.1 Color Scheme
- Background: Black luxury background
- Primary color: Gold
- Hover effect: Blue neon glow
- Text color: White
- Premium tech style

### 3.2 Visual Style
- Glassmorphism cards
- Soft shadows and gradients
- Modern rounded cards
- Smooth animations throughout
- Responsive grid layout
- Fast loading optimization
- Mobile and desktop compatibility
- Consistent design across all 195+ country detail pages

### 3.3 Interactive Elements
- Card hover animations with lift effect
- Blue neon glow on hover
- Smooth page transitions with fade effect when navigating
- Animated background effects
- Scroll animations:
  - Animate sections when they enter viewport
  - Smooth fade-in + slide-up effect
  - Apply to cards, packages and sections

## 4. Technical Structure

### 4.1 Folder Structure
```
esim-website
│
├── index.html
├── countries.html
├── region.html
├── global.html
│
├── country
│   ├── [195+ country HTML files with same design structure]
│   ├── turkey.html
│   ├── france.html
│   ├── thailand.html
│   ├── malaysia.html
│   └── ...
│
├── css
│   └── style.css
│
├── js
│   └── script.js
│
└── images
    ├── [195+ country images]
    ├── turkey.png
    ├── france.png
    ├── thailand.png
    ├── malaysia.png
    └── ...
```

### 4.2 JavaScript Functionality
- Animated card hover effects
- Navigation menu toggle for mobile devices with slide animation
- WhatsApp order button functionality
- Smooth page transitions
- Scroll animation triggers
- Minimal JavaScript to ensure smooth performance

### 4.3 CSS Implementation
- Centralized styling in css/style.css
- Modern CSS animations and transitions
- Responsive design breakpoints
- Animation keyframes
- Hover state transitions with 0.3s smooth transition
- Reusable card design for all country detail pages
- Glassmorphism effects
- Gradient animations
- Lightweight animations for optimal performance

## 5. Image Assets

### 5.1 Country Images
Images required for all 195+ countries, including:
- turkey.png
- france.png
- thailand.png
- malaysia.png
- [Additional 191+ country images]

These images will be used for country cards and detail pages.

## 6. Performance Requirements
- Keep animations lightweight and smooth
- Ensure fast loading
- Fully responsive for mobile and desktop
- Animations run smoothly without lag