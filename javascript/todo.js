// new - Add a todo
// list - list all todo
// delete -  remove specific todo
// quit - quit app

let eventName = prompt("Enter an event: ");
const todo = [];

while(eventName !== 'quit' && eventName !== 'q')
{
    if(eventName === "new")
    {
        const task = prompt("Enter a new todo: ");
        todo.push(task);
        console.log("Task has been added to the list.");
    }

    else if(eventName === "list")
    {
        console.log("-----------------------------------------")
        for(let i=0; i < todo.length; i++)
        {
            console.log(`${i}: ${todo[i]}`);
        }
        console.log("-----------------------------------------")
    }

    else if(eventName === "delete")
    {
        const indexNo = parseInt(prompt("Enter the index number to delete: "));
        if(!Number.isNaN(index))
        {
            const deleted = todo.splice(index, 1);
            console.log("Task deleted");
        }

        else
        {
            console.log("Invalid index");
        }
    }

    else
    {
        eventName = prompt("Enter a proper event: ");
    }

    eventName = prompt("What would you like to do: ");
}

console.log("Good Bye!!!");