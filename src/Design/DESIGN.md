---
name: Alexandria Dark
colors:
  surface: '#0e131d'
  surface-dim: '#0e131d'
  surface-bright: '#343944'
  surface-container-lowest: '#090e18'
  surface-container-low: '#171c26'
  surface-container: '#1b202a'
  surface-container-high: '#252a35'
  surface-container-highest: '#303540'
  on-surface: '#dee2f1'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#dee2f1'
  inverse-on-surface: '#2b303b'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#b9c8de'
  on-secondary: '#233143'
  secondary-container: '#39485a'
  on-secondary-container: '#a7b6cc'
  tertiary: '#bec6de'
  on-tertiary: '#283043'
  tertiary-container: '#8990a7'
  on-tertiary-container: '#222a3c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#d4e4fa'
  secondary-fixed-dim: '#b9c8de'
  on-secondary-fixed: '#0d1c2d'
  on-secondary-fixed-variant: '#39485a'
  tertiary-fixed: '#dae2fb'
  tertiary-fixed-dim: '#bec6de'
  on-tertiary-fixed: '#131b2d'
  on-tertiary-fixed-variant: '#3f475a'
  background: '#0e131d'
  on-background: '#dee2f1'
  surface-variant: '#303540'
  syntax-keyword: '#c678dd'
  syntax-function: '#61afef'
  syntax-string: '#98c379'
  syntax-number: '#d19a66'
  syntax-comment: '#5c6370'
  feedback-suggestion: '#3b82f6'
  feedback-warning: '#ef4444'
  feedback-performance: '#10b981'
  border-muted: '#2e3c54'
typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Noto Serif
    fontSize: 18px
    fontWeight: '700'
    lineHeight: '1.4'
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Noto Serif
    fontSize: 11px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 24px
  element-gap: 16px
  gutter: 1px
  sidebar-width: 256px
  activity-bar-width: 48px
---

## Brand & Style

Alexandria AI is a sophisticated, developer-focused environment that blends the intellectual heritage of a library with the precision of modern engineering. The brand personality is authoritative yet approachable, aimed at senior developers who value focus and high-performance tools.

The design style is **Sophisticated Minimalism with Glassmorphic accents**. It utilizes a deep, multi-tonal dark palette to reduce eye strain, punctuated by crisp borders and vibrant functional accents. The interface relies on structural grid alignment and high-quality serif typography to evoke a sense of premium craftsmanship, contrasting the mechanical nature of code with the humanist touch of "the library."

## Colors

The color system is built on a "Deep Sea" dark mode architecture. 

- **Primary (#3b82f6):** An electric blue used for active states, primary actions, and brand highlights.
- **Background Tiers:** The UI uses three levels of depth: `#0f141e` for the foundation and editors, `#161d2b` for sidebars and secondary containers, and `#1e2638` for interactive hover states.
- **Semantic Feedback:** Critical information uses high-saturation reds, ambers (warnings), and emeralds (performance), often paired with low-opacity background tints to maintain visual harmony.
- **Syntax Highlighting:** A curated "One Dark" inspired palette ensures high legibility and semantic differentiation within the code editor.

## Typography

The system employs a dual-font strategy:
- **Noto Serif** is used for brand presence, headers, and UI navigation labels to instill a sense of traditional authority and clarity.
- **Inter** handles high-density data and secondary UI labels for maximum legibility.
- **JetBrains Mono** is reserved strictly for code and terminal output, optimized for long-term reading and character distinction.

Hierarchy is established through weight and color (e.g., `#e2e8f0` for primary text vs `#94a3b8` for secondary) rather than significant size jumps in the utility UI.

## Layout & Spacing

The layout follows a **Hybrid Workspace Model**:
- **Fixed Sidebar System:** Utility bars (Activity Bar, Explorer) have fixed widths to provide a stable anchor for the eye.
- **Fluid Editor & Panels:** The main workspace and terminal use a flexible container system that maximizes code visibility.
- **Standardized Rhythm:** A 4px/8px base unit controls all internal padding and margins. 
- **Mobile Adaptivity:** On small screens, sidebars collapse into a drawer or hidden state, and the AI Feedback panel moves to a bottom-sheet or full-screen overlay. The layout transitions from a multi-column desktop view to a single-column focused view at a 1024px breakpoint.

## Elevation & Depth

Alexandria avoids traditional heavy shadows in favor of **Tonal Layering and Border Definition**:
- **Layering:** Depth is conveyed by moving from darkest (background) to lighter (interactive containers).
- **Borders:** A consistent `1px` border (`#2e3c54`) is used to define every major interface module.
- **Shadows:** A very subtle `shadow-2xl` is applied only to the primary workspace container to create a "floating deck" effect above the background.
- **Active State:** The active line of code or selected tab is highlighted with a high-contrast `2px` border-accent in Primary Blue.

## Shapes

The interface uses a **Soft Geometry** approach:
- **Major Containers:** Workspace and Sidebar cards use `rounded-xl` (12px) to soften the industrial feel of the IDE.
- **Interactive Elements:** Buttons and tabs use `rounded-md` (6px) for a precise, clickable look.
- **Accent Details:** Status indicators and avatars are fully rounded (pill/circle) to differentiate them from functional containers.

## Components

- **Buttons:** 
  - **Primary:** Solid `#3b82f6` with white text; high-saturation hover.
  - **Ghost/Tertiary:** No background, `#94a3b8` icon/text, turns white on hover.
  - **Actionable Panels:** Integrated Accept/Ignore pairs using semantic colors (Blue/Red/Green) with reduced opacity for secondary actions.
- **Tabs:** Horizontal layout, `0f141e` background for active tab with a `2px` top-border accent.
- **Cards (AI Suggestions):** Use a 4px left-border accent corresponding to the suggestion type (Blue for refactors, Red for security).
- **Code Editor:** Features a distinct line-number gutter (`#64748b` text) and a subtly tinted line highlight (`rgba(59, 130, 246, 0.1)`) for the active cursor position.
- **Scrollbars:** Custom slimmed profile (8px) with `#2e3c54` thumbs to minimize visual noise.