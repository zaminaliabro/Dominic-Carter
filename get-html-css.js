// Page ka HTML aur CSS nikalne wala script
// Istemal: jis page ka code chahiye usay browser mein kholein,
// F12 dabayein -> Console tab -> yeh poora script paste karke Enter dabayein.
// Do files download hongi: page.html aur styles.css

(async () => {
  // 1) Poora HTML (JavaScript ke baad wali current state)
  const html = '<!DOCTYPE html>\n' + document.documentElement.outerHTML;

  // 2) Saari CSS: <style> tags + external .css files
  let css = '';
  for (const sheet of document.styleSheets) {
    const source = sheet.href || 'inline <style> tag';
    try {
      const rules = Array.from(sheet.cssRules).map(r => r.cssText).join('\n');
      css += `/* ===== ${source} ===== */\n${rules}\n\n`;
    } catch (e) {
      // Doosre domain ki CSS (CDN waghera) - fetch se try karein
      try {
        const res = await fetch(sheet.href);
        css += `/* ===== ${source} ===== */\n${await res.text()}\n\n`;
      } catch (err) {
        css += `/* ===== ${source} (CORS ki wajah se nahi parh saka) ===== */\n\n`;
      }
    }
  }

  // 3) Files download karein
  const download = (name, content, type) => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([content], { type }));
    a.download = name;
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  download('page.html', html, 'text/html');
  download('styles.css', css, 'text/css');

  console.log(`Ho gaya! HTML: ${html.length} characters, CSS: ${css.length} characters`);
})();
