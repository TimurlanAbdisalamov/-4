let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
];
users.forEach(user => {
    user.admin = false;
});


users.forEach(user => {
    if (user.name === "Маша") {
        user.admin = true;
    }
});


function displayUsers() {
    let output = document.getElementById("output");
    users.forEach(user => {
        let userInfo = document.createElement("p");
        userInfo.textContent = `ID: ${user.id}, Name: ${user.name}, Admin: ${user.admin}`;
        output.appendChild(userInfo);
    });
}


window.onload = function() {
    displayUsers();
};