# Vecotradiv 🌐✨  
Transforming Visual Concepts into Trade-Ready Experiences  

Vecotradiv is an interactive, modern web application that combines 3D experiences, localization, and creative job-service exploration. Designed with immersive animations, dual JSON APIs, and multilingual support, it’s a futuristic playground for visual interaction and digital trade.  

![hero](https://github.com/user-attachments/assets/7cb5588c-e5c3-4fee-b233-9c024ff24f49)

---

## 🚀 Key Features  

### 🧠 Smart Exploration  
- **Dual-API Integration**: Dynamically connects to separate JSON servers for services and jobs, allowing a modular and extendable architecture.  
- **Compare with Confidence**: Users can interact with visual comparisons via image sliders to explore product/service before/after effects using `react-compare-image`.  

### 🌍 Multilingual & Inclusive  
- **i18n Support**: Multilingual translation system powered by `i18next` and `react-i18next`.  
- **Ready for Global Use**: Language JSON files for instant expansion and accessibility.  

![services](https://github.com/user-attachments/assets/397af49b-82b4-48b9-9cd9-8371f40e8099)


### 🔭 Immersive 3D Experience  
- **React Three Fiber**: Render and animate 3D objects and post-processing effects.  
- **PMNDRS Assets + Drei Tools**: Seamlessly enhance scenes with lighting, models, and controls.  

### 🎨 Intuitive Design  
- **Framer Motion + Lottie Animations**: Smooth transitions and delightful motion-based UX.  
- **Responsive UI**: Fully responsive layout using Tailwind CSS & modern web best practices.  
- **Dark Mode Ready**: Eye-comfort theme for long browsing sessions.  

![career](https://github.com/user-attachments/assets/d36d9490-4743-41f5-a736-1ca2fd8b6d9d)


---

## 🛠️ Tech Stack  

| **Category**       | **Tools & Libraries**                                   |  
|---------------------|--------------------------------------------------------|  
| **Frontend**        | React 19, React Router DOM, Tailwind CSS               |  
| **3D & Animations** | React Three Fiber, Drei, PMNDRS, Framer Motion, Lottie React |  
| **Data & API**      | JSON Server (services/jobs), Concurrently              |  
| **Localization**    | i18next, react-i18next                                 |  
| **UX Enhancements** | react-modal, react-icons, react-compare-image          |  

---

## 🔧 Project Structure  

```plaintext
vecotradiv/
├── public/                     # Static assets  
├── src/  
│   ├── assets/                 # 3D models, icons, images  
│   ├── components/             # Modular UI components  
│   ├── i18n/                   # Localization config and language files  
│   ├── pages/                  # Page views  
│   ├── hooks/                  # Custom hooks  
│   ├── services/               # API interaction logic  
│   ├── style/                  # Tailwind + custom CSS  
│   └── App.jsx                 # Main component tree  
├── [jobs.json](http://_vscodecontentref_/0)                   # Mock jobs data API  
├── [services.json](http://_vscodecontentref_/1)               # Mock services data API  
├── [vite.config.js](http://_vscodecontentref_/2)              # Vite configuration  
└── [package.json](http://_vscodecontentref_/3)                # Project metadata and dependencies  
```
---

![contact](https://github.com/user-attachments/assets/2f9d3a5d-cda2-41f6-b355-fdaefb1e55c6)


## 📦 Local Development Setup

1. **Clone the repository**:
```bash
git clone https://github.com/Mohannad20/Vecotradiv.git
cd vecotradiv
```
2. **Install dependencies**:
```bash
npm install
```
3. **Start the development servers**:
```bash
npm run dev:all
```
This runs both the Vite dev server and two json-server instances:

JSON server for services at http://localhost:3001

JSON server for jobs at http://localhost:3002

## 🌐 Internationalization
The app supports French and English through JSON files located in src/i18n/locales/. To add a new language:

Create a new directory for your language code (e.g., fr for French)

Add a translation.json file with the same structure:

json
{
  "welcome": "Welcome to Vecotradiv",
  "services": "Services",
  "jobs": "Jobs"
  // Add all other translation keys here
}
Register the new language in the i18n configuration

![footer1](https://github.com/user-attachments/assets/7e4c58c3-b4b5-4f61-8cfd-e9511d42bb01)


## 🤝 Contributions
We welcome all contributions to make Vecotradiv better! Here's how you can help:

## 🐞 Reporting Bugs
Open an issue with detailed reproduction steps

Include screenshots or screen recordings if possible

Specify your device/browser information

## 💡 Suggesting Features
Explain the use case and benefits

Provide examples or references if applicable

Flag if you'd like to implement it yourself

## 🛠️ Making Pull Requests
Fork the repository

Create a feature branch (git checkout -b feature/amazing-feature)

Commit your changes (git commit -m 'Add amazing feature')

Push to the branch (git push origin feature/amazing-feature)

Open a pull request

## 📝 Code Guidelines
Follow existing code style and patterns

Include relevant documentation updates

Add tests for new features when applicable

## 🧑‍💻 Developer
Mohannad




## Credits

- ["Zeppelin - VFX Minor"](https://sketchfab.com/3d-models/zeppelin-vfx-minor-18f35bd45cc040bbb596cbbe595717ff) by [lorenzomartinelli](https://sketchfab.com/lorenzomartinelli) is licensed under [Creative Commons Attribution (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/).

- ["Brutalist Building"](https://sketchfab.com/3d-models/brutalist-building-0a3594ee4b9644ebb98f9f5c83f12a7f) by [moth3r](https://sketchfab.com/moth3r) is licensed under [Creative Commons Attribution (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/).

- ["Lowpoly Black Bird SR-71 Spy Aircraft"](https://sketchfab.com/3d-models/lowpoly-black-bird-sr-71-spy-aircraft-1fc717f07c6441ffa271c1832acf9ce4) by [1An20](https://sketchfab.com/1An20) is licensed under [Creative Commons Attribution (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/).

- ["Futuristic Jet"](https://sketchfab.com/3d-models/futuristic-jet-99418e747ba545e6a8a2d8a455e9b5ed) by [Colin Reid](https://sketchfab.com/colin_reid) is licensed under [Creative Commons Attribution (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/).

- ["Space Fighter Aircraft with Animated Wings"](https://sketchfab.com/3d-models/space-fighter-aircraft-with-animated-wings-5a01a2fc03cf4b53b530cdcca5a8582b) by [Jeremiah](https://sketchfab.com/imperialhobbies) is licensed under [Creative Commons Attribution (CC BY 4.0)](http://creativecommons.org/licenses/by/4.0/).
