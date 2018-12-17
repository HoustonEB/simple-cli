var inquirer = require('inquirer');
var options = [
    {
        type: 'input',
        name: 'name',
        message: 'your name',
        default: 'cary'
    },
    {
        type: 'confirm',
        name: 'appearance', // 返回对象的key值
        message: 'Are you handsome?',
        default: 'true'
    },
    {
        type: 'checkbox',
        name: 'gender',
        message: 'gender',
        choices: [
            {
                name: 'man'
            },
            {
                name: 'women',
                checked: 'true' // 默认值
            }
        ]
    },
    {
        type: 'list',
        name: 'hobby',
        message: 'favorite fruits',
        choices: [
            {
                name: 'apple'
            },
            {
                name: 'orange'
            },
            {
                name: 'strawberry',
                checked: 'true'
            }
        ]
    }
]
inquirer.prompt(options).then(
    answers => {
        console.log(answers, '回应');
    },
    error => {
        console.log(error);
    }
)
