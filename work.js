// Створюємо поп-ап
let age = prompt("Скільки тобі років?");

// Перевіряємо, чи користувач ввів дані
if (age !== null && age !== "") {
    // Перевіряємо, чи користувач ввів число та це число не є від'ємним
    if (!isNaN(age) && age >= 0) {
        let word;

        // Обираємо слово рік/роки/років
        if (age % 10 === 1 && age % 100 !== 11) {
            word = "рік";
        } else if (age % 10 >= 2 && age % 10 <= 4 && (age % 100 < 10 || age % 100 >= 20)) {
            word = "роки";
        } else {
            word = "років";
        }
        
        // Виводимо інформацію з правильним словом
        console.log(`${age} ${word}`);
    } else {
        console.log("Ви ввели некоректне значення року.");
    }
} else if (age === "") {
    console.log("Ви не ввели жодних даних.");
} else {
    console.log("Ви відмінили введення.");
}