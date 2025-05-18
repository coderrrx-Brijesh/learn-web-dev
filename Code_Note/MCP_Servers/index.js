import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Create an MCP server
const server = new McpServer({
  name: "get_weather",
  version: "1.0.0"
});

// function to get weather
async function getWeather(city) {
    if(city === "Gwalior") {
        return `The weather in ${city} is sunny`;
    } else if(city === "Lucknow") {
        return `The weather in ${city} is cloudy`;
    } else {
        return `The weather in ${city} is Rainy`;
    }
}

// Add an addition tool
server.tool("get_weather_data",
  { city: z.string() },
  async ({ city }) => ({
    content: [{ type: "text", text: await getWeather(city) }]
  })
);

// Wrap connect in an async IIFE
(async () => {
  const transport = new StdioServerTransport();
  await server.connect(transport);
})();
