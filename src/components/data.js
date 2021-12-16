//Skills
const skills = [
    {
        id: 1,
        name: 'HTML',
        img: './img/html.png'
    },
    {
        id: 2,
        name: 'CSS',
        img: './img/css.png'
    },
    {
        id: 3,
        name: 'JavaScript',
        img: './img/js.png'
    },
    {
        id: 4,
        name: 'Node.js',
        img: './img/node.png'
    },
    {
        id: 5,
        name: 'React',
        img: './img/react.png'
    }
]

const getSkills = () => {
    return skills;
};

//Portfolio
const projects = [
    {
        id: 1,
        project: `Stranger's Things`,
        img: './img/screenshots/strangersthings.png',
        url: 'https://stoic-raman-95405a.netlify.app/',
        github: 'https://github.com/citrus77/Strangers.Things.Project.git',
        contributers: [
            {
                name: 'Jason Lammers',
                github: 'https://github.com/citrus77'
            }
        ],
        description: 'under construction'
    },
    {
        id: 2,
        project: `Awesome Shoe Store`,
        img: './img/screenshots/awesomeshoestore.png',
        url: 'https://joyful-nodes.herokuapp.com/',
        github: 'https://github.com/2105-SJS/joyful-nodes',
        contributers: [
            {
                name: 'Jason Lammers',
                github: 'https://github.com/citrus77'
            },
            {
                name: 'Carlos Escamilla',
                github: 'https://github.com/carlos-escamilla33'
            },
            {
                name: 'Juan Soto',
                github: 'https://github.com/juansotojs'
            }
        ],
        description: 'under construction'
    },
];

const getProjects = () => {
    return projects;
};

//Exports
const dataExports = { getProjects, getSkills };
export default dataExports;