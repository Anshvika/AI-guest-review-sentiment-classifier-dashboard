const corsOptions = {
  origin: [
    "http://localhost:3000", // React (Create React App)
    "http://localhost:5173", // React (Vite)
  ],

  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],

  allowedHeaders: ["Content-Type", "Authorization"],

  credentials: true,

  optionsSuccessStatus: 200,
};

module.exports = corsOptions;