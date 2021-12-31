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
    },
    {
        id: 6,
        name: 'PostgreSQL',
        img: './img/elephant.png'
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
                id: 1,
                name: 'Jason Lammers',
                github: 'https://github.com/citrus77'
            }
        ],
        description: `This solo frontend project served as my introduction to React.js. It was built with a pre-made API and is intended to be somewhat of a Craig's List clone.`
    },
    {
        id: 2,
        project: `Awesome Shoe Store`,
        img: './img/screenshots/awesomeshoestore.png',
        url: 'https://joyful-nodes.herokuapp.com/',
        github: 'https://github.com/2105-SJS/joyful-nodes',
        contributers: [
            {
                id: 1,
                name: 'Jason Lammers',
                github: 'https://github.com/citrus77'
            },
            {
                id: 2,
                name: 'Carlos Escamilla',
                github: 'https://github.com/carlos-escamilla33'
            },
            {
                id: 3,
                name: 'Juan Soto',
                github: 'https://github.com/juansotojs'
            }
        ],
        description: 'An ecommerce site built with React.js, Node.js and PostgreSQL. This fullstack project was completed in an agile environment with a team of 3. This was my first real experience collaborating with other people on the same project.'
    },
];

const getProjects = () => {
    return projects;
};

const aboutMe = {
    name: 'Jason Lammers',
    email: 'jason.lammers@outlook.com',
    github: 'https://github.com/citrus77',
    linkedIn: 'https://www.linkedin.com/in/jason-lammers/',
    description: 'Web Developer seeking employment with a dynamic tech team. Known as an analytical, problem-solving professional with strong time-management skills and the ability to learn concepts quickly.  5+ years of experience working directly in customer service and 10+ years working in fast-paced team environments.'
};

const getAboutMe = () => {
    return aboutMe;
};

//Education
const education = [
    {
        id: 1,
        name: 'Fullstack Academy',
        location: 'San Jose State University',
        startMonth: 'May',
        startYear: '2021',
        endMonth: 'November',
        endYear: '2021',
        description: 'Certificate in Web Development- Powered by Fullstack Academy. Rigorous coding bootcamp focused on fullstack development. Emphasis on paired programming in an agile environment.'
    }
];

const getEducation = () => {
    return education;
};

//Exports
const dataExports = { 
    getAboutMe, 
    getProjects, 
    getSkills, 
    getEducation
};
export default dataExports;