import inquirer from 'inquirer'
let todos=[]
let condition=true;


while(condition) {
    
    let addTask=await inquirer.prompt(
        [
            {
                name:'todo',
                type:'input',
                message:'pulao me kia kia dalta hai',

            },
            {
                name:'addMore',
                type:'confirm',
                message:'or kia dalega',
                default:'false',
                
            }
        


        ]
        

    );
    todos.push(addTask.todo);
    condition=addTask.addMore
    console.log(todos)
}