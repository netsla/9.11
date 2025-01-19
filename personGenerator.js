const personGenerator = {
    //Фамилии
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    //Мужские имена
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    //Женские имена
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Любовь",
            "id_2": "Татьяна",
            "id_3": "Ефросинья",
            "id_4": "Валентина",
            "id_5": "Евгения",
            "id_6": "Елена",
            "id_7": "Наталья",
            "id_8": "Доминика",
            "id_9": "Есения",
            "id_10": "Маргарита"
        }
    }`,

    //Мужские проффессии
    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Автослесарь",
            "id_2": "Тракторист",
            "id_3": "Столяр",
            "id_4": "Плотник",
            "id_5": "Такелажник",
            "id_6": "Электромеханик",
            "id_7": "Комбайнер",
            "id_8": "Нефтяник",
            "id_9": "Подводник",
            "id_10": "Сантехник"
        }
    }`,

    //Женские проффесии
    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Швея",
            "id_2": "Закройщица",
            "id_3": "Медсестра",
            "id_4": "Стюардесса",
            "id_5": "Социальный работник",
            "id_6": "Уборщица",
            "id_7": "Делопроизводитель",
            "id_8": "Парикмахер",
            "id_9": "Маникюрша",
            "id_10": "Визажист"
        }
    }`,

    //Месяцы = 31 день
    month31Json: `{
        "count": 7,
        "list": {     
            "id_1": "Января",
            "id_2": "Марта",
            "id_3": "Мая",
            "id_4": "Июля",
            "id_5": "Августа",
            "id_6": "Октября",
            "id_7": "Декабря"
        }
    }`,

    //Месяцы = 30 дней
    month30Json: `{
        "count": 4,
        "list": {     
            "id_1": "Апреля",
            "id_2": "Июня",
            "id_3": "Сентября",
            "id_4": "Ноября"
        }
    }`,
    //Месяцы = 28 дней
    month28Json: `{
        "count": 2,
        "list": {     
            "id_1": "Февраля",
            "id_2": "Февраля",
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomGender: function() {
        return Math.floor(Math.random() * 2) == 0 ? this.GENDER_MALE : this.GENDER_FEMALE;
     },

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    // Генерация имени 
    randomFirstName: function() {
      if (this.person.gender == 'Мужчина') {
        return this.randomValue(this.firstNameMaleJson);
      } 
      else {
        return this.randomValue(this.firstNameFemaleJson);
       }
    },

    // Генерация фамилии 
     randomSurName: function() {
        if (this.person.gender == 'Мужчина') {
          return this.randomValue(this.surnameJson);
        }
        else {
          return this.randomValue(this.surnameJson) + 'а';
        }  
    },

    //Генерация Отчества
    randomPatronymName: function() { 
        patronymName = this.randomValue(this.firstNameMaleJson);
        if (this.person.gender == 'Мужчина') {
            if (patronymName.includes('й')) {
                patronymName = patronymName.replace("й", "евич");
            } else
            if (patronymName.includes('Никита')) {
                patronymName = patronymName.replace("а", "ич");
            } else
                patronymName = patronymName + "ович";
        } else
 
        if (this.person.gender == 'Женщина') {
            if (patronymName.includes('й')) {
                patronymName = patronymName.replace("й", "евна");
            } else
            if (patronymName.includes('Никита')) {
                patronymName = patronymName.replace("а", "ична");
            } else
                patronymName = patronymName + "овна"; 
        }
        return patronymName;
    },

    //Генерация года рождения
    randomBirthday: function() { 
        if (Math.floor(Math.random() * 3) == 0) {
            year = this.randomIntNumber(2008, 1917);
            month = this.randomValue(this.month31Json);
            day = this.randomIntNumber(31, 1);
        } else 
        if (Math.floor(Math.random() * 3) == 1) {
            year = this.randomIntNumber(2008, 1917);
            month = this.randomValue(this.month30Json);
            day = this.randomIntNumber(30, 1);
        } else
        if (Math.floor(Math.random() * 2) == 1) {
            year = this.randomIntNumber(2008, 1917);
            month = this.randomValue(this.month28Json);
            day = this.randomIntNumber(28, 1);
        }
        birthday = day + ' ' + month + ' ' + year + " года рождения"; 
        return birthday;
      },

    //Генерация профессии
      randomProfession: function() {
        if (this.person.gender == 'Мужчина') {
          return this.randomValue(this.professionMaleJson);
        }
        else {
          return this.randomValue(this.professionFemaleJson);
        }  
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurName();
        this.person.patronymName = this.randomPatronymName();
        this.person.birthday = this.randomBirthday();
        this.person.profession = this.randomProfession();
        return this.person;
    }
};
