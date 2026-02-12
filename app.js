// Import and configure dotenv
import dotenv from 'dotenv';
dotenv.config();

// Check if GITHUB_TOKEN exists in environment variables
if (!process.env.GITHUB_TOKEN) {
  console.error('❌ GITHUB_TOKEN is missing! Please create a .env file with the following content:');
  console.error('GITHUB_TOKEN=your_personal_access_token');
  console.error('🔗 You can generate a token at: https://github.com/settings/tokens');
  process.exit(1); // Exit the process with an error code
}

// Define the main async function
async function main() {
  console.log('🚀 Starting the LangChain AI Agent Application...');

  // Add your LangChain logic here
}

// Call the main function and handle errors
main().catch(console.error);
