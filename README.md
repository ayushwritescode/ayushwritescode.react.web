# EasyGenerator Frontend

This repository contains the **React** frontend for the EasyGenerator application. It leverages:

- **Responsive Design** for cross device compatibility  
- **Redux Toolkit** for state management  
- **Tailwind CSS** for styling  
- **Axios** for secure API calls  
- **AOS** for scroll-based animations  
- **JWT-based authentication** (access token in Redux, refresh token in HTTP-only cookie)  
- **CSRF Protection & Secure API Requests**  
- **Content Security Policy (CSP) Implementation to mitigate XSS attacks**  

---

![image](https://github.com/user-attachments/assets/2403e443-fa49-4a97-8088-a7cd9aed5837) ![image](https://github.com/user-attachments/assets/48f158c5-37c5-4062-8d5e-bc348d6c3af2)


---

## Key Highlights

1. **Modular Design**  
   - Organized by feature (e.g., `views/Login`, `views/Signup`), plus shared components in `/components`.

2. **Redux Toolkit for State Management**  
   - Uses slices (e.g. `authSlice`) and async thunks for API interactions (login, signup, refresh token).

3. **Tailwind CSS for Styling**  
   - Utility-first approach for rapid UI development, responsive design, and consistency.

4. **Animations & AOS Integration**  
   - Scroll animations, fade effects, and smooth transitions for an enhanced UX.

5. **Secure API Calls with Axios**  
   - Implements interceptors for automatic token handling (refresh, authorization headers).

6. **CSRF Protection & Secure Requests**  
   - Ensures all API requests follow CSRF protection mechanisms.

7. **Strict Content Security Policy (CSP) Implementation**  
   - Helps prevent XSS attacks by restricting content sources.

8. **Lazy Loading & Code Splitting**  
   - Improves performance by loading only required components and splitting large bundles.

---

## Project Structure

```
frontend/
├─ src/
│  ├─ components/
│  ├─ views/
│  ├─ store/
│  ├─ hooks/
│  ├─ utils/
│  ├─ assets/
│  └─ App.tsx
├─ package.json
└─ README.md
```

- **`store/`**: Redux slices (auth, user, etc.) + thunks.  
- **`components/`**: Reusable UI components (EGInput, EGButton, etc.).  
- **`views/`**: Page-level features (Login, Signup, Dashboard).  
- **`hooks/`**: Custom React hooks for better code abstraction.  
- **`utils/`**: Helper functions for API calls, validations, and configurations.  
- **`assets/`**: Static assets like images and icons.  
- **`App.tsx`**: Root component handling routes, global providers, etc.

---

## Local Development Setup

### Prerequisites

- **Node.js v16+**
- **npm** or **yarn**
- Running **Backend** API (NestJS, Express, etc.) to handle requests

### 1. Clone the Repository

```bash
git clone https://github.com/ayushwritescode/easygenerator.web.git
cd easygenerator.web
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment

Check for **`.env`** or `.env.development`:
```
VITE_API_BASE_URL=http://localhost:3000
```
Adjust if your backend is on a different host/port.

### 4. Run Locally

```bash
npm run dev
# or
yarn dev
```

Open the URL shown in the terminal (commonly `http://localhost:5173`) in your browser.

### 5. Production Build

```bash
npm run build
npm run preview
# or
yarn build
yarn preview
```

The compiled assets go into `dist/`. You can serve them with **Nginx** or any static file server.

---

## Platform Requirements

- Node.js **v16+**
- npm or yarn
- Access to the **Backend** API for authentication and data

---

## Contributing

1. **Fork** the repository  
2. **Create** a branch: `git checkout -b feature/my-feature`  
3. **Commit** changes: `git commit -m 'Add some feature'`  
4. **Push** to GitHub: `git push origin feature/my-feature`  
5. **Open** a Pull Request  

---

## License

[MIT](LICENSE) © 2025 ayushwritescode

