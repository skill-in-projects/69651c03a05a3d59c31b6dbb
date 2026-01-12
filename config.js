// API Configuration
// Backend service URL (automatically configured)
const CONFIG = {
    API_URL: "https://webapi69651c03a05a3d59c31b6dbb-production.up.railway.app"
};

// Ensure CONFIG is globally accessible
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
