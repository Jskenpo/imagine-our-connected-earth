
# The Changing World 

The Changing World project is a web-based platform that aims to provide engaging and accessible information about Earth's systems, their global interconnections, and the impact of climate change. The platform includes interactive features, multimedia content, and real-world examples from NASA's Earth-observing satellites.

## Proyect result

<a href='https://imagine-our-connected-earth.web.app'>Link de página web</a>


## Project Structure

### Components:
- **About Section**: Describes the mission and vision of The Changing World, and introduces the team.
- **Air Quality Section**: Showcases videos and information on the causes and effects of air pollution and how it impacts human health, ecosystems, and climate change.
- **Before and After (BandA) Section**: Provides before-and-after comparisons of environmental changes using a slider for visualizing the effects of climate change.
- **Home Section**: Includes a dynamic title with a liquid effect and a video to welcome users to the platform.
- **Climate Vital Signs**: Includes various videos showing how the world has changed over the years due to climate change.

## Technologies Used

- **React.js**: For building the user interface.
- **PrimeReact**: UI library for React, used for components like Fieldset.
- **React-Before-After-Slider**: A package for creating before-and-after sliders.
- **CSS**: For styling and responsive design.
- **HTML5 Video**: For displaying climate-related videos in various sections.


## Requirements

To run and develop this project, you will need to have the following tools installed:

### Main Tools

- **Node.js** (Recommended version: `18.x.x`)
  - The project uses `react`, `webpack`, and `babel` dependencies, which require Node.js for the development and build environment.

### Main Dependencies

These are the key project dependencies, which will be automatically installed when you run the `npm install` command:

- **React** (`^18.3.1`): Main library for building the user interface.
- **Webpack** (`^5.91.0`): Bundler for JavaScript modules and other resources.
- **Babel** (`^7.24.x`): Transpiles modern JavaScript code for compatibility with older browsers.
- **Sass** (`^1.75.0`): CSS preprocessor for styling the application.
- **Bootstrap** (`^5.3.3`): CSS framework for responsive design and UI components.
- **@mui/material** (`^5.15.15`): Material-UI components for React.
- **PrimeReact** (`^10.8.3`): UI component library for React.
- **JQuery** (`^3.7.1`): Library for DOM manipulation (used in some modules).

### Development Dependencies

- **Babel CLI** (`^7.24.1`): Used to run Babel tasks from the command line.
- **Webpack Dev Server** (`^4.15.2`): Development server with hot-reloading for quick iteration.
- **CSS Loader** (`^7.1.1`): Loads CSS files into JavaScript.
- **Sass Loader** (`^14.2.0`): Loads and compiles `.scss` files to CSS.

### NPM Scripts

The main NPM scripts defined in the project are:

- `npm start`: Starts the development server using `react-scripts`.
- `npm run build`: Creates an optimized production build of the project.
- `npm run test`: Runs the tests defined in the project.
- `npm run eject`: Ejects the default `react-scripts` configurations for advanced customization.
- `npm run start-webpack`: Starts Webpack in watch mode.

To install all dependencies, run:

```bash
npm install
```

## Pages

### Home
The homepage features a liquid-text animation and an embedded video. The text scales dynamically based on the window size for responsive design.

### About
The About page gives an overview of the Earth Information Center’s mission, the work being done, and introduces the team. It also includes a background gif of Earth and a structured layout using PrimeReact Fieldsets.

### Air Quality
This page highlights the impact of air pollution through videos and information on both causes and effects. It presents data on pollutants and their adverse effects on health and the environment.

### Before and After (BandA)
The Before and After section allows users to compare visual representations of environmental changes, such as glaciers and volcanic activity, using an interactive slider.

### Climate vital Signs
This page features a series of impactful videos that illustrate the transformation of Earth's climate over the past century.

## Team

- **Project Manager**: Manuel Salvador Rodas
- **Lead Developer**: Jose Santiesteban
- **Designer**: Sebastian Solorzano
- **Developer**: Diego Valdez
- **Developer**: Sebastian Estrada

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Jskenpo/imagine-our-connected-earth.git
   ```
2. Navigate to the project directory:
   ```bash
   cd space-app
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```
4. Run the project:
   ```bash
   npm start
   ```

