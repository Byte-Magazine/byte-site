const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

/**
 * Script to generate authors.yml from authors.json
 * This ensures the blog system can use the centralized authors.json file
 */

function generateAuthorsYml() {
  try {
    // Read authors.json
    const authorsJsonPath = path.join(__dirname, '..', 'mags', 'authors.json');
    const authorsData = JSON.parse(fs.readFileSync(authorsJsonPath, 'utf8'));

    // Convert JSON format to YAML format for blog
    const authorsYmlData = {};
    
    Object.entries(authorsData).forEach(([key, author]) => {
      authorsYmlData[key] = {
        name: author.name || " ",
        title: author.title || " ",
        image_url: author.image_url,
        page: true, // Enable author pages
        socials: {}
      };

      // Convert social links to the format expected by authors.yml
      if (author.socials) {
        Object.entries(author.socials).forEach(([platform, url]) => {
          // Extract handle from URL if it's a full URL
          if (typeof url === 'string' && url.startsWith('http')) {
            // Extract handle from common social media URLs
            const handleMatch = url.match(/\/([^\/]+)\/?$/);
            if (handleMatch) {
              authorsYmlData[key].socials[platform] = handleMatch[1];
            } else {
              authorsYmlData[key].socials[platform] = url;
            }
          } else {
            authorsYmlData[key].socials[platform] = url;
          }
        });
      }
    });

    // Convert to YAML
    const yamlContent = yaml.dump(authorsYmlData, {
      indent: 2,
      lineWidth: -1,
      noRefs: true,
      sortKeys: false
    });

    // Write to blog/authors.yml
    const blogDir = path.join(__dirname, '..', 'blog');
    if (!fs.existsSync(blogDir)) {
      fs.mkdirSync(blogDir, { recursive: true });
    }

    const authorsYmlPath = path.join(blogDir, 'authors.yml');
    fs.writeFileSync(authorsYmlPath, yamlContent, 'utf8');

    console.log('✅ Successfully generated authors.yml from authors.json');
    console.log(`📁 Generated file: ${authorsYmlPath}`);
    console.log(`👥 Processed ${Object.keys(authorsData).length} authors`);

  } catch (error) {
    console.error('❌ Error generating authors.yml:', error.message);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  generateAuthorsYml();
}

module.exports = { generateAuthorsYml };
