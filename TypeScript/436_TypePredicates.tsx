////////////////
//436. Type Predicates

interface Image {
    src: string;
}
interface User {
    username: string;
}

function isUser(value: Image | User): value is User {
    return 'username' in value;
}

function logOutput(value: Image | User) {
    if(isUser(value)) {
        console.log(value.username);
    }else {
        console.log(value.src);
    }
}

logOutput({src: 'img.jpg'});
logOutput({username: 'asldkfj'});
