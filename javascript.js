let money = prompt("Ваш бюджет на месяц?", ''),
    time = promt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    buget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time, 
    savings: false 
};

for (let i = 0; i <2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

    appData.expenses[a] = b;
}

alert(appData.budjet / 30); 
    
    