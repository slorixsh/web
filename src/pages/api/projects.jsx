export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://i.imgur.com/Cj4yb0X.png",
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
      image: "https://i.imgur.com/EKgstHj.png",
      name: "Files",
      description: "A modern file explorer that pushes the boundaries of the platform.",
      link: "https://files.community/",
      language: "Next.js",
      languageIcon: "./static/techs/nextjs.svg",
    }
  ];
  res.status(200).json(data);
};
