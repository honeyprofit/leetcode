///////////////////////////
// 428. Using Interfaces to Annotate Props

import React from 'react';

interface TaskShowProps{
    title: string;
    completed: boolean;
}

function TaskShow({title, completed}: TaskShowProps){
    return <div>
        {title} - {completed ? 'Done':'Need to be complete' }
    </div>;
}

<TaskShow title="Write an interface" completed={true}/>
