export const cards = [
    {name: 'Участок 21M', type: 'warning', message: 'Possible flood'},
    {name: 'Участок 22M', type: 'danger', message: 'Possible flood'},
    {name: 'Участок 23M', type: 'success', message: 'Possible flood'},
    {name: 'Участок 24M', type: 'success', message: 'Possible flood'},
    {name: 'Участок 25M', type: 'success', message: 'Possible flood'},
    {name: 'Участок 26M', type: 'danger', message: 'Possible flood'},
    {name: 'Участок 27M', type: 'warning', message: 'Possible flood'},
    {name: 'Участок 28M', type: 'danger', message: 'Possible flood'},
    {name: 'Участок 29M', type: 'success', message: 'Possible flood'},
    {name: 'Участок 30M', type: 'success', message: 'Possible flood'},
    {name: 'Участок 31M', type: 'success', message: 'Possible flood'},
    {name: 'Участок 32M', type: 'success', message: 'Possible flood'},
    {name: 'Участок 33M', type: 'warning', message: 'Possible flood'},
    {name: 'Участок 34M', type: 'warning', message: 'Possible flood'},
];

export const pipes = [
    {id: 'Участок Северный', children: [2, 1, 3]},
    {id: 'Участок Южный', children: [2, 18, 16, 14]},
    {id: 'Участок Западный', children: [2, 15, 14]},
    {id: 'Участок Восточный', children: [2, 8, 11, 10]},
    {id: 'Участок Юго-западный', children: [1, 7, 8]},
    {id: 'Участок Юго-восточный', children: [2, 6, 9]},
    {id: 'Участок Северо-западный', children: [2, 5, 12]},
    {id: 'Участок Северо-восточный', children: [2, 7, 11]},
];
