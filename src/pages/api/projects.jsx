export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://i.imgur.com/2XwKCNZ.png",
      name: "slorixsh.live",
      description:
        "My personal websites source code.",
      link: "https://github.com/slorixsh/web",
      language: "Next.js",
      languageIcon: "./static/techs/nextjs.svg",
    },
    {
      id: 2,
      image: "https://i.imgur.com/QzfJkt5.png",
      name: "AnimesWatch",
      description:
        "Provides Ad-free, Turkish anime watching experience.",
      link: "https://nustry.com",
      language: "Next.js",
      languageIcon: "./static/techs/nextjs.svg",
    },
    {
      id: 3,
      image: "https://i.imgur.com/9y8SNcO.png",
      name: "Files",
      description: "A modern file explorer that pushes the boundaries of the platform.",
      link: "https://files.community/",
      language: "Next.js",
      languageIcon: "./static/techs/nextjs.svg",
    }
  ];
  res.status(200).json(data);
};
