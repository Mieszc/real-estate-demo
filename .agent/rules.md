# Workspace Design Rules: Apex Horizon Realty

This document defines the mandatory design necessities for the project to ensure a modern, premium UI.

## 1. Typography
- **Primary Font**: 'Manrope', sans-serif (or 'Inter' as fallback).
- **Secondary Font**: 'Playfair Display' (Optional for Serif accents in Hero/Headline).
- **Base Font Size**: 18px (1.125rem).
- **Line Heights**:
    - Headings: 1.1 - 1.2
    - Body: 1.6
- **Weights**:
    - Regular: 400
    - Medium: 500
    - Bold: 700

## 2. Color Palette
- **Primary**: Deep Ink (#080808) - Used for major backgrounds and primary text contrast.
- **Secondary**: Soft Stone (#F5F5F5) - Used for section backgrounds to create depth.
- **Accent**: Electric Amber (#FFB800) - **Strictly reserved for CTA buttons.**
- **Glassmorphism**:
    - Background: `rgba(255, 255, 255, 0.05)` (Dark mode glass) / `rgba(0, 0, 0, 0.02)` (Light mode glass)
    - Border: `1px solid rgba(255, 255, 255, 0.1)`
    - Blur: `backdrop-filter: blur(12px)`

## 3. Padding & Spacing
- **Container Max-Width**: 1280px (Standard 12-column grid).
- **Section Spacing**: `padding-top/bottom: 8rem` (128px) for desktop, `4rem` (64px) for mobile.
- **Inner Padding (Cards)**: `2rem` (32px).
- **Grid Gap**: `2rem` (32px) for major components, `1rem` (16px) for inner layout.
- **Border Radius**: `12px` (Premium rounded look).

## 4. Interaction & Motion
- **Animations**: Use subtle `in-view` transitions (slide + fade).
- **Hover Effects**: All interactive elements (buttons, cards) must have a distinct hover transition (scale or subtle glow).
- **Transitions**: Global transition-duration: `300ms`, easing: `cubic-bezier(0.4, 0, 0.2, 1)`.

---
*Note: These rules are the single source of truth for all UI generation.*
