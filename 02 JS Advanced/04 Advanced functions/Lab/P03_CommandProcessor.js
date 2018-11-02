function processCommands(commandsArr){
    let commandProccessor = (function (){
        let str = "";
    
        return {
            append: (newStr) => str += newStr,
            removeStart: (index) => str = str.slice(index),
            removeEnd: (count) => str = str.slice(0, str.length - count),
            print: () => console.log(str)
        }
    })();

    for (const command of commandsArr) {
        const [commandName, argument] = command.split(" ");
        commandProccessor[commandName](argument);
    }
}
