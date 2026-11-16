// Page ka HTML + CSS ek JSON dump file mein nikalne wala script
// Istemal: jis page ka code chahiye usay browser mein kholein,
// F12 -> Console -> (pehli dafa "allow pasting" type karke Enter) -> yeh script paste karke Enter.
// Ek file download hogi: page-dump.json

(async () => {
  const dump = {
    url: location.href,
    title: document.title,
    downloadedAt: new Date().toISOString(),
    html: '<!DOCTYPE html>\n' + document.documentElement.outerHTML,
    css: [] // har stylesheet alag entry: { source, type, content }
  };

  for (const sheet of document.styleSheets) {
    const source = sheet.href || 'inline <style> tag';
    const type = sheet.href ? 'external' : 'inline';
    try {
      const content = Array.from(sheet.cssRules).map(r => r.cssText).join('\n');
      dump.css.push({ source, type, content });
    } catch (e) {
      // Doosre domain ki CSS (CDN waghera) - fetch se try karein
      try {
        const res = await fetch(sheet.href);
        dump.css.push({ source, type, content: await res.text() });
      } catch (err) {
        dump.css.push({ source, type, content: null, error: 'CORS ki wajah se nahi parh saka' });
      }
    }
  }

  const json = JSON.stringify(dump, null, 2);
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([json], { type: 'application/json' }));
  a.download = 'page-dump.json';
  document.body.appendChild(a);
  a.click();
  a.remove();

  console.log(`Ho gaya! page-dump.json download ho gayi (${dump.css.length} stylesheets, ${json.length} characters)`);
})();
