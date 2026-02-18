# Believe Yourself

A fun and interactive web experience. Offers a motivating and humorous flow for the user.

## 🌟 About the Project

This project is an animated web application developed using React and Framer Motion. It welcomes the user with a Shrek-themed driving scene and then transitions to an interactive Q&A section. It includes a humorous mechanism where "No" is not accepted, guiding the user to "Yes". Finally, it congratulates the user with celebration animations.

## 🚀 Features

- **Animated Intro:** A dynamic opening scene with Shrek driving.
- **Interactive Dialogue:** Question screen interacting with the user.
- **Fun Button Mechanics:** The "Yes" button grows when the "No" button is clicked.
- **Celebration Screen:** Confetti (flowers) and happy Shrek animation on success.
- **Responsive Design:** Mobile and desktop compatible layout.

## 🛠️ Technologies Used

- **[React](https://reactjs.org/)** - UI library
- **[Vite](https://vitejs.dev/)** - Fast development and build tool
- **[Framer Motion](https://www.framer.com/motion/)** - Powerful animation library

## 📱 Mobile Optimization

The project is optimized to provide a seamless experience, especially on mobile devices:

1.  **Dynamic Viewport Units (`dvh`):**
    Used `100dvh` instead of standard `vh` to adapt to screen size changes due to the address bar on mobile browsers. This ensures the app always looks full screen.

2.  **Responsive Typography with Clamp Function:**
    Text sizes are set using the `clamp(min, preferred, max)` function instead of fixed pixel values. This keeps text readable on small screens without becoming overly large on big screens.

3.  **Safe Area Support:**
    Safe areas are protected using `env(safe-area-inset-bottom)` for modern devices with notches or bottom bars (like iPhone). Prevents content (especially buttons) from overlapping with the OS interface.

4.  **Touch Action Management:**
    Default browser gestures like dragging, refreshing, or zooming are disabled with `touch-action: none` to give a "native app" feel.

5.  **Desktop Compatibility (Mobile-First):**
    On wide screens (desktop), the app is automatically contained within a mobile device frame (aspect-ratio: 9/19.5). This provides desktop users with the exact same mobile experience.

## ⚙️ Technical Details

- **State Management:**
  Application flow (Driving -> Interaction -> Success) is managed with `useState` and `useEffect` hooks. Transitions between scenes are triggered by timers and user interactions.

- **Animation Mechanics:**
  All visual transitions are provided by `Framer Motion`'s `<AnimatePresence>` and `motion.div` components.
  - **Driving Scene:** The car exiting and re-entering the screen is done with sequential animation of `x` coordinates (keyframes).
  - **Button Interaction:** When the "No" button is pressed, the "Yes" button's `scale` value is increased, implementing a humorous UX that forces the user to say "Yes".

## 📦 Installation

Follow these steps to run the project on your local machine:

1.  Clone the project:
    ```bash
    git clone https://github.com/mreylmz/believe-yourself.git
    cd believe-yourself
    ```

2.  Install necessary packages:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Go to the link opened in your browser (usually `http://localhost:5173`).

## 📝 License

This project is for personal use and educational purposes.
