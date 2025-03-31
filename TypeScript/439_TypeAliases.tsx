////////////////
//439. Type Aliases

interface Image {
    src: string;
}

type LoggableValue = string | number | string | Image;

function logValue(value: LoggableValue){

}
