const { chromium } = require('playwright');
const net = require('net');

/**
 * Detects running dev servers on common ports.
 * @returns {Promise<string[]>} List of detected URLs
 */
async function detectDevServers() {
    const commonPorts = [3000, 3001, 5173, 8080, 4200, 3002, 5000, 5001];
    const detected = [];

    const checkPort = (port) => {
        return new Promise((resolve) => {
            const socket = new net.Socket();
            const timeout = 200;

            socket.setTimeout(timeout);
            socket.on('connect', () => {
                socket.destroy();
                resolve(true);
            });
            socket.on('timeout', () => {
                socket.destroy();
                resolve(false);
            });
            socket.on('error', () => {
                socket.destroy();
                resolve(false);
            });

            socket.connect(port, '127.0.0.1');
        });
    };

    for (const port of commonPorts) {
        if (await checkPort(port)) {
            detected.push(`http://localhost:${port}`);
        }
    }

    return detected;
}

/**
 * Gets context options with custom headers from environment variables.
 * @param {Object} options Existing context options
 * @returns {Object} Context options with headers merge
 */
function getContextOptionsWithHeaders(options = {}) {
    const headers = {};

    if (process.env.PW_HEADER_NAME && process.env.PW_HEADER_VALUE) {
        headers[process.env.PW_HEADER_NAME] = process.env.PW_HEADER_VALUE;
    }

    if (process.env.PW_EXTRA_HEADERS) {
        try {
            Object.assign(headers, JSON.parse(process.env.PW_EXTRA_HEADERS));
        } catch (e) {
            console.error('Error parsing PW_EXTRA_HEADERS:', e.message);
        }
    }

    return {
        ...options,
        extraHTTPHeaders: {
            ...(options.extraHTTPHeaders || {}),
            ...headers
        }
    };
}

/**
 * Creates a browser context with standard config and headers.
 * @param {import('playwright').Browser} browser 
 * @param {Object} options 
 */
async function createContext(browser, options = {}) {
    return await browser.newContext(getContextOptionsWithHeaders(options));
}

/**
 * Safe click with wait and retry.
 */
async function safeClick(page, selector, options = { retries: 3 }) {
    await page.waitForSelector(selector, { state: 'visible', timeout: 5000 });
    await page.click(selector);
}

/**
 * Safe type with clear and wait.
 */
async function safeType(page, selector, text) {
    await page.waitForSelector(selector, { state: 'visible' });
    await page.fill(selector, '');
    await page.type(selector, text);
}

/**
 * Takes a screenshot with a timestamp.
 */
async function takeScreenshot(page, name) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const path = `/tmp/screenshot-${name}-${timestamp}.png`;
    await page.screenshot({ path, fullPage: true });
    console.log(`📸 Screenshot saved to ${path}`);
    return path;
}

/**
 * Attemps to find and click common "Accept Cookies" buttons.
 */
async function handleCookieBanner(page) {
    const selectors = [
        'button:has-text("Accept")',
        'button:has-text("Allow all")',
        'button:has-text("Agree")',
        '#onetrust-accept-btn-handler',
        '.cookie-banner__accept',
        '[aria-label="Accept cookies"]'
    ];

    for (const selector of selectors) {
        try {
            if (await page.isVisible(selector)) {
                await page.click(selector);
                console.log(`Clicked cookie banner: ${selector}`);
                return;
            }
        } catch (e) { }
    }
}

/**
 * Extracts data from a table element.
 */
async function extractTableData(page, selector) {
    return await page.$$eval(`${selector} tr`, rows => {
        return rows.map(row => {
            const cells = Array.from(row.querySelectorAll('td, th'));
            return cells.map(cell => cell.innerText.trim());
        });
    });
}

module.exports = {
    detectDevServers,
    getContextOptionsWithHeaders,
    createContext,
    safeClick,
    safeType,
    takeScreenshot,
    handleCookieBanner,
    extractTableData
};
