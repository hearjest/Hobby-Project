function createHtmlPage(data) {
    const name = data && data.name ? data.name : 'Unnamed';
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <title>${name}</title>
            </head>
            <body>
                <h1>${name}</h1>
            </body>
        </html>
    `;
}

module.exports = createHtmlPage;