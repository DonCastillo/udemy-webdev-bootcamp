const staff = [
    {
        name: 'Michael Scott',
        position: 'Manager',
        branch: 'Scranton',
    },
    {
        name: 'Holly Fax',
        position: 'HR',
        branch: 'Nashua',
    },
    {
        name: 'Karen Filippelli',
        position: 'Manager',
        branch: 'Utica',
    },
    {
        name: 'Oscar Martinez',
        position: 'Accountant',
        branch: 'Scranton',
    },
    {
        name: 'Toby Flenderson',
        position: 'HR',
        branch: 'Scranton',
    }  
];

const x = staff.map(x => {
    const {name: characterName} = x;
    return characterName;
});


/**
 * ['Michael Scott', 'Holly Flax', 'Karen Filippelli', 'Oscar Martinez', 'Toby Flenderson']
 */
console.log(x);