const swaggerUi = require("swagger-ui-express");
const config = require("./config");
const { SwaggerTheme, SwaggerThemeNameEnum } = require('swagger-themes');
const theme = new SwaggerTheme();
const inurl = 'Please Input URL!'
const inquery = 'Please Input Query!'

var options = {
    customSiteTitle: config.options.webname,
    customfavIcon: config.options.favicon,
    customCss: theme.getBuffer(SwaggerThemeNameEnum.DARK) + `.topbar { display: none; }`,
    swaggerOptions: {
      displayRequestDuration: true,
    },
  };

const swaggerDocument = {
  swagger: "2.0",
  info: {
    version: "5.0.0",
    title: config.options.name,
    description: config.options.description,
    "x-logo": {
      url: config.options.favicon,
      altText: config.options.name,
    },
  },
  host: config.host.BASE_URL,
  basePath: "/",
  tags: [{ name: "AI", description: "API endpoints for artificial inteligence content from various platforms." },
         { name: "Downloader",
description: "API endpoints for downloading content from various platforms."},
         { name: "Tools",
description: "API endpoints for content tools from multiple platforms."}],
paths: {
"/api/ai/chatgpt": {
      get: {
        tags: ["AI"],
        summary: "Chat with gpt AI",
        parameters: [
          {
            in: "query",
            name: "query",
            type: "string",
            required: true,
            description: `${inquery}`,
          },
        ],
        responses: {
          200: {
            description: "Result Successfully",
          },
        },
      },
    },

  "/api/ai/gptlogic": {
      get: {
        tags: ["AI"],
        summary: "Chat with gpt Logic",
        parameters: [
          {
            in: "query",
            name: "query",
            type: "string",
            required: true,
            description: `${inquery}`,
          },
            {
            in: "query",
            name: "prompt",
            type: "string",
            required: true,
            description: `${inquery}`,
          },
        ],
        responses: {
          200: {
            description: "Result Successfully",
          },
        },
      },
    },

    "/api/ai/virtualgirl": {
      get: {
        tags: ["AI"],
        summary: "Chat with Virtual Girlfriend",
        parameters: [
          {
            in: "query",
            name: "query",
            type: "string",
            required: true,
            description: `${inquery}`,
          },
        ],
        responses: {
          200: {
            description: "Result Successfully",
          },
        },
      },
    },

    "/api/ai/dystopia": {
      get: {
        tags: ["AI"],
        summary: "Dystopia AI",
        parameters: [
          {
            in: "query",
            name: "query",
            type: "string",
            required: true,
            description: `${inquery}`,
          },
        ],
        responses: {
          200: {
            description: "Result Successfully",
          },
        },
      },
    },

  "/api/ai/ersgan": {
      get: {
        tags: ["AI"],
        summary: "Ersgan filter on the image",
        parameters: [
          {
            in: "query",
            name: "url",
            type: "string",
            required: true,
            description: `${inurl}`,
          },
        ],
        responses: {
          200: {
            description: "Result Successfully",
          },
        },
      },
    },
    "/api/ai/luminai": {
      post: {
        tags: ["AI"],
        summary: "Chat ai created by siputzx",
        parameters: [
          {
            in: "query",
            name: "query",
            type: "string",
            required: true,
            description: `${inquery}`,
          },
          {
            in: "query",
            name: "username",
            type: "string",
            required: true,
            description: `${inquery}`,
          },
        ],
        responses: {
          200: {
            description: "Result Successfully",
          },
        },
      },
    },
          "/api/downloader/tiktok": {
      get: {
        tags: ["Downloader"],
        summary: "Downloading video tiktok",
        parameters: [
          {
            in: "query",
            name: "url",
            type: "string",
            required: true,
            description: `${inurl}`,
          },
        ],
        responses: {
          200: {
            description: "Result Successfully",
          },
        },
      },
    },

"/api/downloader/igdl": {
      get: {
        tags: ["Downloader"],
        summary: "Download instagram video",
        parameters: [
          {
            in: "query",
            name: "url",
            type: "string",
            required: true,
            description: `${inurl}`,
          },
        ],
        responses: {
          200: {
            description: "Result Successfully",
          },
        },
      },
    },
  
  "/api/downloader/spotify": {
      get: {
        tags: ["Downloader"],
        summary: "Downloading spotify music",
        parameters: [
          {
            in: "query",
            name: "url",
            type: "string",
            required: true,
            description: `${inurl}`,
          },
        ],
        responses: {
          200: {
            description: "Result Successfully",
          },
        },
      },
    },
  "/api/tools/remini": {
      get: {
        tags: ["Tools"],
        summary: "HD enhancer using Remini",
        parameters: [
          {
            in: "query",
            name: "url",
            type: "string",
            required: true,
            description: `${inurl}`,
          },
        ],
        responses: {
          200: {
            description: "Result Successfully",
          },
        },
      },
    },
  },
  
  "x-request-time": new Date().toISOString(),
};

module.exports = { swaggerDocument, options }