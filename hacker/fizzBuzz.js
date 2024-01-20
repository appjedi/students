
function fizzBuzz(n) {
    // Write your code here
   
    for (let i = 1; i <= n;i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i)
        }
    }
}
function testIt()
{
    const commands = [
        ["Insert", "Hello"],
        ["Left", "3"],
        ["Delete", "1"],
        ["Right", "2"],
        ["Backspace", "1"],
        ["Print", "4"]
    ]
    const result = parseCommands(commands);
    console.log(result);
}
function parseCommands(commands)
{
    
    // Write your code here
        const len = commands.length;
      
    let str="";
    try {
        for (let i=0;i<len;i++)
        {
            const cmd = commands[i][0];
            const val = commands[i][1];
            let cursor=0;
            switch (cmd)
            {
                case "Insert":
                    str=str.substring(0,cursor)+val+str.substring(cursor);
                    cursor=str.length -1;
                    break;
                case "Left":
                    cursor -= parseInt(val);
                    break;
                case "Right":
                    cursor += parseInt(val);
                    break;
                case "Backspace":
                    const bs=parseInt(val);
                    str = str.substring(0, cursor-bs)+str.substr(cursor+bs);
                    break;
                case "Delete":
                    const d=parseInt(val);
                    str = str.substring(0, cursor)+str.substr(cursor+d);
                    break;
                case "Print":
                    const x=parseInt(val);
                    console.log (str.substring(cursor-x,cursor+x));
            }
            console.log(str);
        }
    }catch (e){
        return "";
    }
    return str;
}

testIt();

