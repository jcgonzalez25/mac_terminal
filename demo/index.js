import React from 'react';
import ReactDOM from 'react-dom';
import Terminal from '../src/index';

const extensions = {
    sudo: {
        exec: ({ structure, history, cwd }) => {
            return { structure, cwd,
                history: history.concat({ value: 'JC Says No Sudo For You haha' }),
            };
        },
    },
};

const history = [
    { value: 'Note From Juan: Welcome To The Term (--  __  ---)' },
    {value: 'Run $git visit'},
    {value: 'to see my github, Enjoy!'},
    { value: 'Type `help` to begin' }
];

const structure = {
    '.hidden': {
        file1: { content: 'The is the content for file1 in the <.hidden> directory.' },
        file2: { content: 'The is the content for file2 in the <.hidden> directory.' },
        dir2: {
            file: { content: 'The is the content for <file> in the <.hidden> directory.' },
        },
        '.secrets': { content: 'I\'m still afraid of the dark...' },
    },
    public: {
        file1: { content: 'The is the content for file1 in the <public> directory.' },
        file2: { content: 'The is the content for file2 in the <public> directory.' },
        file3: { content: 'The is the content for file3 in the <public> directory.' },
    },
    'README.md': { content: '✌⊂(✰‿✰)つ✌ Thanks for checking it out!' },
};

const Root = <Terminal history={history} structure={structure} extensions={extensions} />;
ReactDOM.render(Root, document.getElementById('app'));
