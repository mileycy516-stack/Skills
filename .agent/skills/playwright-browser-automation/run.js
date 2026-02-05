const fs = require('fs');
const path = require('path');
const { chromium, firefox, webkit } = require('playwright');
const helpers = require('./lib/helpers');

// Inject global functions for ease of use in inline scripts
global.chromium = chromium;
global.firefox = firefox;
global.webkit = webkit;
global.helpers = helpers;
global.getContextOptionsWithHeaders = helpers.getContextOptionsWithHeaders;

async function execute() {
    const arg = process.argv[2];
    if (!arg) {
        console.error('Usage: node run.js <file-path|code-string>');
        process.exit(1);
    }

    // Check if it's a file
    if (fs.existsSync(arg)) {
        console.log(`Executing file: ${arg}`);
        try {
            // Use absolute path for require
            const absolutePath = path.resolve(arg);
            // We clear cache in case of re-runs in the same process (unlikely but good practice)
            delete require.cache[absolutePath];

            // If the file is a module that exports a function, run it.
            // Otherwise, just requiring it will execute it if it has top-level await (unlikely in CommonJS)
            // or just top-level code.
            require(absolutePath);
        } catch (error) {
            console.error('❌ Execution error:', error);
            process.exit(1);
        }
    } else {
        // Assume it's a code string
        console.log('Executing inline code...');
        try {
            // Wrap in async IIFE
            const code = `(async () => {\n${arg}\n})().catch(err => { console.error("❌ Inline Error:", err); process.exit(1); });`;
            eval(code);
        } catch (error) {
            console.error('❌ Evaluation error:', error);
            process.exit(1);
        }
    }
}

execute();
