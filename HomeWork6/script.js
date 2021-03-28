const adminUser = {
    userName: 'patroni',
    password: '123456',
    role: 'admin',
};

const regularUser1 = {
    userName: 'kyle',
    password: 'hunter2',
    role: 'user',
}

const regularUser2 = {
    userName: 'bomba',
    password: 'drakula',
    role: 'user',
}

const moderatorUser = {
    userName: 'mod',
    password: 'asdasd',
    role: 'moderator',
}

const usersDatabase = [adminUser, regularUser1, regularUser2, moderatorUser];

start();
function start(){
    let operation = prompt('login or register');
    switch(operation){
        case 'login':
            login();
            break;
        case 'register':
            register();
            break;
        default:
            console.log('უცნობი ოპერაცია');
            break;
    }
}

function createNewUser(name, password, role){
    // ზემოთ აღწერილი ობიექტების მსგავსად შექმენით ახალი ობიექტი
    // ეს ობიექტი და-push-ეთ usersDatabase-ში
    const newUser = { 
        userName: name,
        Password: password,
        Role: role
    }
    usersDatabase.push(newUser);
}
console.log(usersDatabase);

function register(){
    const signName = prompt("Enter name");
    const signPassword = prompt("Make password");
    const signRole = prompt("what will be your role");
    createNewUser(signName, signPassword, signRole);

    login();
    // გამოიძახეთ 3 prompt-ი და შეინახეთ ცვლადებში
    // შემდეგ გამოიძახეთ createNewUser() - და გადააწოდეთ თქვენი შემოტანილი ცვლადები
    // შემდეგ გამოიძახეთ login();
}

function login(){
    // გამოიძახეთ 2 prompt userName, password
    // შეამოწმეთ ყველა მომხამრებელი usersDatabase-ში
    // თუ მომხმარებლის სახელი და პაროლი ემთხვევა:
    // დაბეჭდეთ 'გამარჯობა: ' + მომხმარებლის username
    // გამოიძახეთ runApp-და გადააწოდეთ ამ ფუნქციას usersDatabase-ში ნაპოვნი ობიექტი
    const loginUserName = prompt('Enter Username');
    const loginPassword = prompt('Enter Password');

    for (const user of usersDatabase) {
        if(user.userName === loginUserName && user.password === loginPassword){
            console.log(`Hi : ${user.userName}`);
            runApp(user);

            return;
        }
    }
}

function runApp(currentUser){
    // switch-case-ის მეშვეობით შეამოწმეთ მომხმარებლის role-ი
    // გამოიტანეთ სხვადასხვა ტექსტები
    switch (currentUser.role) {
        case 'user':
            console.log('Hi User');
            break;
        case 'admin':
            console.log('Whats up captain');
            break;
        case 'moderator':
            console.log("How it's cowboy");
            break;
        default:
            alert("WHO IS this ???????");
            break;
    }
}

// challenge 1:
// createNewUser-ფუნქციაში შეამოწმეთ მოცემული მომხმარებელი არსებობს თუ არა.
// შექმენით ახალი მომხმარებელი მხოლოდ იმ შემთხვევაში თუ მომხმარებელი თავისუფალია

// bonus 1:
// დაწერეთ ფუნქცია compareObjects - გადმოგეცემეთ 2 უცნობი ობიექტი
// Object.keys()-ის გამოყენებით 
// შეამოწმეთ ემთხვევა თუ არა ორივე ობიექტის ყველა key-value ერთმანეთს

// bonus 2:
// დაწერეთ ფუნქცია compareObjectValues - გადმოგეცემეთ 2 უცნობი ობიექტი
// Object.values()-ის გამოყენებით 
// შეამოწმეთ ემთხვევა თუ არა ორივე ობიექტის ყველა value ერთმანეთს
// გაითვალისწინეთ key-ები შეიძლება განსხვავებული იყოს
// მაგალითად
let obj1 = {
    name: 'Giorgi',
    lastName: 'Andriadze',
    age: 45,
}

let obj2 = {
    goalsScored: 45, 
    fathersName: 'Giorgi',
    surName: 'Andriadze',
}
// თქვენმა ფუნქციამ უნდა დააბრუნოს true-რახან value-ები ერთმანეთს ემთხვევა
// 1 value მაინც თუ არ ემთხვევა დააბრუნეთ false