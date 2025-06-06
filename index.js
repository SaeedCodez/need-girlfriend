#!/usr/bin/env node

const messages = [
  // NPM/Package Manager themed
  "Error 404: Girlfriend not found in npm registry",
  "npm install girlfriend - Error: No package found, try searching in real life",
  "Package 'girlfriend' requires dependency 'social-skills' which is not installed",
  "Warning: Running this command repeatedly won't increase your chances",
  "npm WARN deprecated: Using npm to find love has been deprecated since forever",
  "npm ERR! 404 You're looking in the wrong repository, buddy",
  "npm audit found 99 vulnerabilities in your personality",
  "This package is incompatible with OS 'Basement Dweller Edition'",
  "npm install girlfriend --save-dev won't work either, this is production only",
  "girlfriend requires a peer of real-life@^1.0.0 but none is installed",
  "Package 'girlfriend' has been unpublished by reality",
  "npm ERR! code EREALITY - This package exists only in actual reality",
  "Cannot resolve 'girlfriend' - did you mean 'loneliness'?",
  "This package requires manual installation outside your terminal",
  "npm WARN girlfriend@latest has unmet peer dependency 'shower@daily'",
  
  // Programming/Dev themed
  "Syntax Error: 'girlfriend' is not defined. Did you mean 'undefined'?",
  "Permission denied: You need sudo access to real life first",
  "Module 'girlfriend' can't be imported from 'basement'",
  "fatal: No girlfriends found in your git history",
  "Cannot GET /girlfriend... maybe try POST /effort instead?",
  "Connection timeout: Server 'real-world' is not responding",
  "Build failed: Missing required attribute 'personality'",
  "Uncaught Exception: Life.goOutside() is not a function in your case",
  "ENOENT: no such file or directory, open './social-life'",
  "Error: Cannot find module 'social-interaction'. Did you forget to install it?",
  "Segmentation fault: Trying to access memory location 'heart' which is empty",
  "FATAL ERROR: Allocation failed - not enough charisma in heap",
  "ReferenceError: 'confidence' is not defined at line 1",
  "TypeError: Cannot read property 'love' of undefined",
  "Breaking change: girlfriend@2.0.0 requires major version upgrade of 'yourself'",
  "This package has been blocked by your firewall (social anxiety)",
  "Maximum call stack exceeded: recursively searching in wrong places",
  "Access denied: Authentication failed. Try refreshing your appearance token",
  "Rate limit exceeded: You've tried too many times. Touch grass instead",
  "Circular dependency detected: loneliness -> npm -> loneliness",
  "Build step 'Find girlfriend' failed with exit code 404",
  "Could not resolve dependency: girlfriend requires sunshine (not found)",
  "EPERM: operation not permitted, access '/outside/world'",
  "Unhandled Promise Rejection: getGirlfriend() will always reject in this environment",
  "Stack overflow: Too much recursion in self.pity()",
  "Memory leak detected in your.hopes.and.dreams[]",
  "Null pointer exception: girlfriend is null",
  "Index out of bounds: trying to access girlfriend[0]",
  "Infinite loop detected in while(single) { searchNpm(); }",
  
  // Tech/Internet themed
  "HTTP 404: The girlfriend you're looking for doesn't exist here",
  "403 Forbidden: You don't have permission to access this relationship",
  "500 Internal Server Error: Your internal state is not ready",
  "Connection refused: The target server (her heart) is not accepting connections",
  "DNS lookup failed: Cannot resolve 'girlfriend' in this domain",
  "Proxy error: You're looking through the wrong gateway",
  "SSL certificate expired: Your charm needs renewal",
  "Bandwidth exceeded: You've exhausted your social quota",
  "Cookies disabled: No sweet connections for you",
  "Cache miss: No girlfriends found in your history",
  "Request timeout: Taking too long to make a move",
  "CORS error: Cross-Origin Romance Sharing blocked",
  
  // Database themed
  "SELECT * FROM girlfriends WHERE interested_in_you = true; -- 0 rows returned",
  "Database connection failed: No matches found in your area",
  "Table 'girlfriends' doesn't exist in your database",
  "Foreign key constraint: girlfriend_id references nothing",
  "Transaction rolled back: Insufficient confidence balance",
  "Deadlock detected: You're blocking yourself",
  "Query timeout: Search taking too long, try narrowing your criteria",
  "No index found on 'personality' - full table scan required",
  
  // Git themed
  "git: 'girlfriend' is not a git command. See 'git --help'",
  "fatal: repository 'love-life' does not exist",
  "You have no commits in your relationship history",
  "error: failed to push some refs to 'reality'",
  "Your branch is behind 'origin/social-skills' by 99 commits",
  "Merge conflict: your expectations vs reality",
  "Nothing to commit, working tree empty (like your DMs)",
  "fatal: refusing to merge unrelated histories (yours and hers)",
  
  // Operating System themed
  "Kernel panic: Unable to handle romance at address 0x00000000",
  "File system corrupted: Please run confidence.check",
  "Device not ready: /dev/heart is not responding",
  "Out of memory: Cannot allocate space for feelings",
  "Blue screen of death: LONELY_DEVELOPER_EXCEPTION",
  "Boot failure: Social skills driver not found",
  "System halted: Critical lack of human interaction",
  
  // Game/Fun themed
  "Achievement Locked: 'Find a Girlfriend' - 0/1 completed",
  "Game Over: You've run out of lives searching in the wrong place",
  "Tutorial not found: Life doesn't come with instructions",
  "Difficulty level: Impossible (while searching in npm)",
  "No save game found: You can't reload and try again",
  "Quest failed: 'Find love in npm registry'",
  "XP required: You need more experience points in real life",
  "Character stats too low: Upgrade charisma and confidence",
  "Wrong server: You're playing on 'localhost' instead of 'real-world'",
  
  // Savage/Funny ones
  "You can't import what you've never exported",
  "Even AI girlfriends would reject this request",
  "Your code has bugs, and so does your approach to dating",
  "She's not in your package.json, and never will be",
  "Try 'npm uninstall virginity' first... oh wait, that's permanent",
  "Your pull request to her heart has been rejected",
  "Even Stack Overflow can't help you with this one",
  "Have you tried turning yourself off and on again? Maybe stay off",
  "This feature is not available in your current subscription to life",
  "Error: Your charm is deprecated and no longer supported",
  "Maybe if you spent less time coding and more time... who am I kidding",
  "Plot twist: The girlfriend was inside you all along. Just kidding, it's emptiness",
  "Your search returned 0 results. This is not a bug, it's a feature",
  "Congratulations! You've successfully failed at using npm for dating",
  "This package works perfectly - it found exactly what you deserve: nothing",
  "Installing girlfriend... ████████████████ 99% - Installation failed: Reality check",
  "Fun fact: You have better chances of finding a bug-free JavaScript framework",
  "Maybe the real girlfriend was the error messages we got along the way",
  "Your loneliness has been successfully compiled with 0 errors and 0 warnings",
  "Roses are red, violets are blue, you're searching in npm, no girlfriend for you"
];

// ANSI color codes for terminal styling
const colors = {
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

// ASCII art header
const header = `
${colors.magenta}╔═══════════════════════════════════════════╗
║     ${colors.bold}💔 need-girlfriend v1.0.0 💔${colors.reset}${colors.magenta}        ║
╚═══════════════════════════════════════════╝${colors.reset}
`;

// Get random message
const randomMessage = messages[Math.floor(Math.random() * messages.length)];

// Display the message with styling
console.log(header);
console.log(`${colors.red}${colors.bold}ERROR: ${colors.reset}${colors.yellow}${randomMessage}${colors.reset}\n`);
console.log(`${colors.cyan}💡 Suggestion:${colors.reset} Maybe try 'npm uninstall loneliness' first?\n`);

// Random exit code between 1-404 (because why not)
process.exit(Math.floor(Math.random() * 404) + 1);