type RULE = { regex: RegExp; replace: string };

const rules: RULE[] = [
  //header rules
  // ...[0, 0, 0, 0, 0, 0].map<RULE>((_, i) => ({
  //   regex: new RegExp(`/#{${i}}\s?([^\n]+)/g`),
  //   replace: `<h${i}$1</h${i}>`,
  // })),
  { regex: /#{6}\s?([^\n]+)/g, replace: '<h6>$1</h6>' },
  { regex: /#{5}\s?([^\n]+)/g, replace: '<h5>$1</h5>' },
  { regex: /#{4}\s?([^\n]+)/g, replace: '<h4>$1</h4>' },
  { regex: /#{3}\s?([^\n]+)/g, replace: '<h3>$1</h3>' },
  { regex: /#{2}\s?([^\n]+)/g, replace: '<h2>$1</h2>' },
  { regex: /#{1}\s?([^\n]+)/g, replace: '<h1>$1</h1>' },

  //bold, italics and paragragh rules
  { regex: /\*\*\s?([^\n]+)\*\*/g, replace: '<b>$1</b>' },
  { regex: /\*\s?([^\n]+)\*/g, replace: '<i>$1</i>' },
  { regex: /__([^_]+)__/g, replace: '<b>$1</b>' },
  { regex: /_([^_`]+)_/g, replace: '<i>$1</i>' },
  { regex: /([^\n]+\n?)/g, replace: '<p>$1</p>' },

  //links
  {
    regex: /\[([^\]]+)\]\(([^)]+)\)/g,
    replace: '<a href="$2" style="color:#2A5DB0;text-decoration: none;">$1</a>',
  },

  //highlights
  {
    regex: /(`)(\s?[^\n,]+\s?)(`)/g,
    replace:
      '<a style="background-color:grey;color:black;text-decoration: none;border-radius: 3px;padding:0 2px;">$2</a>',
  },

  //Lists
  { regex: /([^\n]+)(\+)([^\n]+)/g, replace: '<ul><li>$3</li></ul>' },

  //Image
  {
    regex: /!\[([^\]]+)\]\(([^)]+)\s"([^")]+)"\)/g,
    replace: '<img src="$2" alt="$1" title="$3" />',
  },
];

const parseText = (text: string): string => {
  rules.forEach(({ regex, replace }) => {
    text = text.replace(regex, replace);
  });
  return text;
};

export default parseText;
