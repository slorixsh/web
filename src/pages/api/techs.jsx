export default async(req, res) => { 
    const techs = [
        {
            "name": "HTML",
            "src": "/static/techs/html.svg"
        },
        {
            "name": "Bootstrap",
            "src": "/static/techs/bootstrap.svg"
        },
        {
            "name": "CSS",
            "src": "/static/techs/css.svg"
        },
        {
            "name": "Javascript",
            "src": "/static/techs/javascript.svg"
        },
        {
            "name": "Node.js",
            "src": "/static/techs/nodejs.svg"
        },
        {
            "name": "Mongo DB",
            "src": "/static/techs/mongodb.svg"
        },
        {
            "name": "TailwindCSS",
            "src": "/static/techs/tailwindcss.svg"
        },
        {
            "name": "Next.js",
            "src": "/static/techs/nextjs.svg"
        },
        {
            "name": "Fastify",
            "src": "/static/techs/fastify.svg"
        },
        {
            "name": "Git",
            "src": "/static/techs/git.svg"
        },
        {
            "name": "Github",
            "src": "/static/techs/github.svg"
        },
        {
            "name": "Heroku",
            "src": "/static/techs/heroku.svg"
        },
        {
            "name": "Iconscout",
            "src": "/static/techs/iconscout.png"
        },
        {
            "name": "Typescript",
            "src": "/static/techs/typescript.svg"
        },
        {
            "name": "Nest.js",
            "src": "/static/techs/nestjs.svg"
        },

    ]
    res.status(200).json(techs)
}
