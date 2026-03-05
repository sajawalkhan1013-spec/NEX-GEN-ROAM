# Travel eSIM Website Requirements Document

## 1. Application Overview

### 1.1 Application Name
esim-website

### 1.2 Application Description
A modern animated Travel eSIM website that allows users to browse and purchase eSIM data packages for global travel across 100+ countries. The platform offers country-specific, regional, and global eSIM plans with instant activation.

## 2. Core Features

### 2.1 Navigation System
- Multi-page navigation menu
- Mobile responsive menu toggle
- Links to: Home, Countries, Region Packages, Global eSIM

### 2.2 Home Page (index.html)
- Hero section with title: Global Travel eSIM
- Subtitle: Instant Data in 100+ Countries
- Three action buttons:
  - View Countries
  - Region Packages
  - Global eSIM
- Animated background effects

### 2.3 Countries Listing Page (countries.html)
- Grid layout displaying country cards
- Each card contains:
  - Country flag
  - Country famous picture
  - Country name
  - View Details button
- Featured countries: Turkey, France, Thailand, Malaysia
- Card hover animations with blue neon glow

### 2.4 Country Detail Pages
Separate pages for each country:
- turkey.html
- france.html
- thailand.html
- malaysia.html

Each page includes:
- Country title and flag display
- Three package options:
  - 5GB – 7 Days – Price
  - 10GB – 15 Days – Price
  - 20GB – 30 Days – Price
- Each package card features:
  - Add to Cart button
  - Order via WhatsApp button
- WhatsApp order link format: https://wa.me/923017480703?text=I want to buy Turkey eSIM 10GB please let me know whats info are you want from my side

### 2.5 Region Packages Page (region.html)
Region-based eSIM packages:
- Europe eSIM
- Asia eSIM
- Middle East eSIM
- Package details and pricing display

### 2.6 Global eSIM Page (global.html)
Global eSIM plans:
- Global 10GB – 30 Days
- Global 20GB – 60 Days
- Global Unlimited
- Premium visual highlighting for plans

## 3. Design Requirements

### 3.1 Color Scheme
- Background: Black
- Accent color: Gold
- Hover effect: Blue neon glow
- Text color: White

### 3.2 Visual Style
- Modern rounded cards
- Smooth animations throughout
- Responsive grid layout
- Fast loading optimization
- Mobile and desktop compatibility

### 3.3 Interactive Elements
- Card hover animations
- Blue neon glow on hover
- Smooth page transitions
- Animated background effects

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
│   ├── turkey.html
│   ├── france.html
│   ├── thailand.html
│   └── malaysia.html
│
├── css
│   └── style.css
│
├── js
│   └── script.js
│
└── images
    ├── turkey.png
    ├── france.png
    ├── thailand.png
    └── malaysia.png
```

### 4.2 JavaScript Functionality
- Animated card hover effects
- Navigation menu toggle for mobile devices
- WhatsApp order button functionality
- Smooth page transitions

### 4.3 CSS Implementation
- Centralized styling in css/style.css
- Responsive design breakpoints
- Animation keyframes
- Hover state transitions

## 5. Image Assets

### 5.1 Country Images
- turkey.png
- france.png
- thailand.png
- malaysia.png

These images will be used for country cards and detail pages.