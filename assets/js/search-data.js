// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "projects-can-cpp",
          title: '🔗 can-cpp',
          description: "A C++ library for CAN bus packet handling, including support for higher level protocols CANopen and NMEA 2000.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/can-cpp.html";
            },},{id: "projects-clippership-v0",
          title: 'Clippership v0',
          description: "building an autonomous sailboat",
          section: "Projects",handler: () => {
              window.location.href = "/projects/clippership_v0.html";
            },},{id: "projects-clippership-v1",
          title: 'Clippership v1',
          description: "building another autonomous sailboat",
          section: "Projects",handler: () => {
              window.location.href = "/projects/clippership_v1.html";
            },},{id: "projects-cloth-estimation",
          title: 'Cloth Estimation',
          description: "state estimation of cloth",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cloth.html";
            },},{id: "projects-greensteam",
          title: 'Greensteam',
          description: "developing conceptual engine designs",
          section: "Projects",handler: () => {
              window.location.href = "/projects/greensteam.html";
            },},{id: "projects-hyperxite",
          title: 'HyperXite',
          description: "designing and building a linear induction motor",
          section: "Projects",handler: () => {
              window.location.href = "/projects/hyperxite.html";
            },},{id: "projects-optimal-sailboat",
          title: 'Optimal Sailboat',
          description: "optimal control and planning for a sailboat",
          section: "Projects",handler: () => {
              window.location.href = "/projects/optimal_sailboat.html";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
