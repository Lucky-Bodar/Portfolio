const fs = require('fs');
let html = fs.readFileSync('/Users/lucky/Downloads/Portfolio/index.html', 'utf8');

// The replacement duplicated the Tailwind script because `<!-- Tailwind CSS -->` might have been present twice.
// Let's just find the first occurrence of `<!-- Tailwind CSS -->` up to `</script>` and keep it, and remove the second one.

const lines = html.split('\n');
let newLines = [];
let foundTailwind = false;
let inTailwind = false;

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('<!-- Tailwind CSS -->')) {
        if (!foundTailwind) {
            foundTailwind = true;
            newLines.push(lines[i]);
            // push next lines until </script> for tailwind config is done
            let j = i + 1;
            while(j < lines.length) {
                newLines.push(lines[j]);
                if (lines[j].includes('</script>') && lines[j-1] && lines[j-1].includes('}')) {
                    i = j;
                    break;
                }
                j++;
            }
        } else {
            // Skip this block
            let j = i + 1;
            while(j < lines.length) {
                if (lines[j].includes('</script>') && lines[j-1] && lines[j-1].includes('}')) {
                    i = j;
                    break;
                }
                j++;
            }
        }
    } else {
        newLines.push(lines[i]);
    }
}

fs.writeFileSync('/Users/lucky/Downloads/Portfolio/index.html', newLines.join('\n'));
