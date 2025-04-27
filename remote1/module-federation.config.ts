export const mfConfig = {
  name: "remote1",
  filename: "remoteEntry.js",
  exposes: {
    "./LandingPageRemote1": "./src/pages/LandingPage",
  },
  shared: ["react", "react-dom"],
};
