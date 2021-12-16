function arraysExercise5(){
    var people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
    console.log(people); // Write a command that prints out all of the people in the list.

    var value = people.indexOf("Dani"); //Write the command to remove "Dani" from the array.
    people.splice(value,1);
    console.log(people);

    value = people.indexOf("Juan"); //Write the command to remove "Juan" from the array.
    people.splice(value,1);
    console.log(people);

    value = people.indexOf("Luis"); //Write the command to add "Luis" to the front of the array.
    people.splice(value,1);
    people.unshift("Luis");
    console.log(people);

    people.push("Carlos");  //Write the command to add your name to the end of the array
    console.log(people);

    for (var i=0;i<people.length;i++){ //Using a loop, iterate through this array and after console.log-ing "Maria", exit from the loop.
        console.log(people[i]); 
        if(people[i]=="Maria"){
            break;
        }
    }

    value = people.indexOf("Maria"); //Write the command that gives the indexOf where "Maria" is located.
    console.log(value);

    return;
    }
    arraysExercise5();