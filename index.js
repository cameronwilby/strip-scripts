function stripScripts(markup) {
  return markup.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
}

module.exports = stripScripts;