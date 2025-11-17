/**
 * Script to download official SVG logos from Simple Icons
 * Run with: node scripts/download-logos.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Simple Icons CDN base URL
const SIMPLE_ICONS_CDN = 'https://cdn.simpleicons.org';

// Logo mapping: { filename: simpleIconsSlug }
const logos = {
  frontend: {
    'react.svg': 'react',
    'nextdotjs.svg': 'nextdotjs',
    'typescript.svg': 'typescript',
    'tailwindcss.svg': 'tailwindcss',
    'vuedotjs.svg': 'vuedotjs',
    'javascript.svg': 'javascript',
    'html5.svg': 'html5',
    'css3.svg': 'css3',
  },
  backend: {
    'nodedotjs.svg': 'nodedotjs',
    'nestjs.svg': 'nestjs',
    'postgresql.svg': 'postgresql',
    'mysql.svg': 'mysql',
    'php.svg': 'php',
    'express.svg': 'express',
  },
  devops: {
    'docker.svg': 'docker',
    'amazonaws.svg': 'amazonaws',
    'git.svg': 'git',
    'linux.svg': 'linux',
    'nginx.svg': 'nginx',
    'github.svg': 'github',
    'githubactions.svg': 'githubactions',
  }
};

// Color overrides for better visibility (Simple Icons supports hex colors)
const colorOverrides = {
  'react': '61DAFB',
  'nextdotjs': '000000',
  'typescript': '3178C6',
  'tailwindcss': '06B6D4',
  'vuedotjs': '4FC08D',
  'javascript': 'F7DF1E',
  'nodedotjs': '339933',
  'nestjs': 'E0234E',
  'postgresql': '4169E1',
  'mysql': '4479A1',
  'php': '777BB4',
  'docker': '2496ED',
  'amazonaws': 'FF9900',
  'git': 'F05032',
  'linux': 'FCC624',
  'nginx': '009639',
  'github': '181717',
  'githubactions': '2088FF',
  'html5': 'E34F26',
  'css3': '1572B6',
  'express': '000000',
};

function downloadLogo(category, filename, slug) {
  return new Promise((resolve, reject) => {
    const color = colorOverrides[slug] || '';
    const url = `${SIMPLE_ICONS_CDN}/${slug}${color ? `/${color}` : ''}`;
    const outputPath = path.join(__dirname, '..', 'public', 'logos', category, filename);

    console.log(`Downloading ${slug} to ${category}/${filename}...`);

    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${slug}: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(outputPath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`✓ Downloaded ${category}/${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function downloadAllLogos() {
  console.log('Starting logo download from Simple Icons CDN...\n');

  for (const [category, logoMap] of Object.entries(logos)) {
    console.log(`\nDownloading ${category} logos...`);

    for (const [filename, slug] of Object.entries(logoMap)) {
      try {
        await downloadLogo(category, filename, slug);
      } catch (error) {
        console.error(`✗ Error downloading ${category}/${filename}:`, error.message);
      }
    }
  }

  console.log('\n✓ Logo download complete!');
  console.log('\nTotal logos downloaded:');
  console.log(`  - Frontend: ${Object.keys(logos.frontend).length}`);
  console.log(`  - Backend: ${Object.keys(logos.backend).length}`);
  console.log(`  - DevOps: ${Object.keys(logos.devops).length}`);
}

downloadAllLogos().catch(console.error);
