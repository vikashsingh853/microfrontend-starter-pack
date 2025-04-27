export const mfConfig = {
  name: "remote2",
  filename: "remoteEntry.js",
  exposes: {
    "./LandingPageRemote2": "./src/pages/LandingPage",
  },
  shared: ["react", "react-dom"],
};
