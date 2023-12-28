module.exports = {
    apps: [{
        name: "cocktails-machine",
        script: "./app.js",
        watch: true,
        ignore_watch : ["node_modules", "public"],
        env: {
            "NODE_ENV": "development",
        },
        env_production: {
            "NODE_ENV": "production",
        }
    }]
};