const bold = (string) => {
  if (string.substring(0, 2) === '**') {
    return string.substring(2, string.length - 2);
  }
  return `**${string}**`;
};

const italic = (string) => {
  if (string.substring(0, 1) === '_') {
    return string.substring(1, string.length - 1);
  }
  return `_${string}_`;
};

const code = (string) => {
  if (string.substring(0, 1) === '`') {
    return string.substring(1, string.length - 1);
  }
  return '`' + string + '`'; // eslint-disable-line
};

const link = (string) => {
  if (string.substring(0, 1) === '[') {
    return string.substring(1, string.length - 6);
  }
  return `[${string}](url)`;
};

const ul = (string) => {
  const linebreaks = (string.match(/\n/g) || []).length;
  let list = '';
  if (string.substring(0, 1) === '-') {
    if (linebreaks > 0) {
      const words = string.split('\n');
      words.forEach(w => {
        list += `${w.substring(2, w.length)} \n`;
      });
    } else {
      return string.substring(2, string.length);
    }
  } else {
    if (linebreaks > 0) {
      const words = string.split('\n');
      words.forEach(w => {
        list += `- ${w} \n`;
      });
    } else {
      return `- ${string}`;
    }
  }
  return list;
};

const ol = (string) => {
  const linebreaks = (string.match(/\n/g) || []).length;
  let list = '';
  if (string.substring(0, 2) === '1.') {
    if (linebreaks > 0) {
      const words = string.split('\n');
      words.forEach(w => {
        list += `${w.substring(2, w.length)} \n`;
      });
    } else {
      return string.substring(2, string.length);
    }
  } else {
    if (linebreaks > 0) {
      const words = string.split('\n');
      let counter = 1;
      words.forEach(w => {
        list += `${counter}. ${w} \n`;
        counter++;
      });
    } else {
      return `1. ${string}`;
    }
  }
  return list;
};

const mention = (string) => {
  if (string.substring(0, 1) === '@') {
    return string.substring(1, string.length);
  }
  return `@${string}`;
};

const quote = (string) => {
  if (string.substring(0, 2) === '> ') {
    return string.substring(2, string.length);
  }
  return `> ${string}`;
};

const bigHeading = (string) => {
  if (string.substring(0, 2) === '# ') {
    return string.substring(2, string.length);
  }
  return `# ${string}`;
};

const mediumHeading = (string) => {
  if (string.substring(0, 3) === '## ') {
    return string.substring(3, string.length);
  }
  return `## ${string}`;
};

const smallHeading = (string) => {
  if (string.substring(0, 4) === '### ') {
    return string.substring(4, string.length);
  }
  return `### ${string}`;
};

export default function formatText(type, string) {
  let formattedString = '';
  switch (type) {
    case 'bold':
      formattedString = bold(string);
      break;
    case 'italic':
      formattedString = italic(string);
      break;
    case 'code':
      formattedString = code(string);
      break;
    case 'link':
      formattedString = link(string);
      break;
    case 'ul-list':
      formattedString = ul(string);
      break;
    case 'ol-list':
      formattedString = ol(string);
      break;
    case 'mention':
      formattedString = mention(string);
      break;
    case 'quote':
      formattedString = quote(string);
      break;
    case 'header-big':
      formattedString = bigHeading(string);
      break;
    case 'header-medium':
      formattedString = mediumHeading(string);
      break;
    case 'header-small':
      formattedString = smallHeading(string);
      break;
    default:
      formattedString = string;
  }
  return formattedString;
}
