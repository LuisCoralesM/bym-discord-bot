const { Client, Collection, Events, GatewayIntentBits } = require('discord.js')

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.commands = new Collection()

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`)
})

// Log in to Discord with your client's token
client.login(process.env.DISCORD_BOT_TOKEN)
