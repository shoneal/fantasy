const players = {
  goalkeepers: {
    alisson: {
      firstName: "Алисон",
      lastName: "Бекер",
      team: "Ливерпуль",
      price: {
        ucl: 5.9,
      },
      stats: {
        ucl: {
          8: {
            teams: ["Ливерпуль", "Карабах"],
            result: "6-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            saves: [1, 0],
          },
        },
      },
    },
    carnesecchi: {
      firstName: "Марко",
      lastName: "Карнесекки",
      team: "Аталанта",
      price: {
        seriaA: 6,
      },
      stats: {
        seriaA: {
          16: {
            teams: ["Дженоа", "Аталанта"],
            result: "0-1",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            saves: [3, 1],
          },
          17: {
            teams: ["Аталанта", "Интер"],
            result: "0-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            saves: [3, 1],
          },
          18: {
            teams: ["Аталанта", "Рома"],
            result: "1-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            saves: [3, 1],
          },
          19: {
            teams: ["Болонья", "Аталанта"],
            result: "0-2",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            saves: [2, 0],
          },
          24: {
            teams: ["Аталанта", "Кремонезе"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            saves: [1, 0],
          },
        },
      },
    },
    chevalier: {
      firstName: "Люка",
      lastName: "Шевалье",
      team: "ПСЖ",
      price: {
        ucl: 4.5,
      },
      stats: {
        ucl: {
          5: {
            teams: ["ПСЖ", "Тоттенхэм"],
            result: "5-3",
            minutesOnField: [90, 2],
            saves: [2, 0],
            missedGoals: [3, -1],
          },
        },
      },
    },
    jGarcia: {
      firstName: "Жоан",
      lastName: "Гарсия",
      team: "Барселона",
      price: {
        laLiga: 6,
      },
      stats: {
        laLiga: {
          14: {
            teams: ["Барселона", "Депортиво Алавес"],
            result: "4-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            saves: [1, 0],
            yellowCard: [1, -1],
          },
          15: {
            teams: ["Бетис", "Барселона"],
            result: "3-5",
            minutesOnField: [90, 2],
            missedGoals: [3, -1],
            saves: [2, 0],
          },
          19: {
            teams: ["Барселона", "Атлетико"],
            result: "3-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            saves: [1, 0],
          },
        },
      },
    },
    junior: {
      firstName: "Луис",
      lastName: "Жуниор",
      team: "Вильярреал",
      price: {
        laLiga: 5,
      },
      stats: {
        laLiga: {
          19: {
            teams: ["Вильярреал", "Алавес"],
            result: "3-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            saves: [4, 1],
          },
        },
      },
    },
    maignan: {
      firstName: "Майк",
      lastName: "Меньян",
      team: "Милан",
      price: {
        seriaA: 5.5,
      },
      stats: {
        seriaA: {
          6: {
            teams: ["Ювентус", "Милан"],
            result: "0-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            saves: [3, 1],
          },
          7: {
            teams: ["Милан", "Фиорентина"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            saves: [1, 0],
          },
          8: {
            teams: ["Милан", "Пиза"],
            result: "2-2",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
          },
          9: {
            teams: ["Аталанта", "Милан"],
            result: "1-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            saves: [2, 0],
          },
          10: {
            teams: ["Милан", "Рома"],
            result: "1-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            saves: [7, 2],
            savingPenalty: [1, 5],
          },
          11: {
            teams: ["Парма", "Милан"],
            result: "2-2",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            saves: [3, 1],
          },
          12: {
            teams: ["Интер", "Милан"],
            result: "0-1",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            saves: [6, 2],
            savingPenalty: [1, 5],
          },
          13: {
            teams: ["Милан", "Лацио"],
            result: "1-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            saves: [4, 1],
          },
          14: {
            teams: ["Торино", "Милан"],
            result: "2-3",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            saves: [2, 0],
            yellowCard: [1, -1],
          },
          15: {
            teams: ["Милан", "Сассуоло"],
            result: "2-2",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
          },
          16: {
            teams: ["Комо", "Милан"],
            result: "1-3",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            saves: [8, 2],
          },
          20: {
            teams: ["Фиорентина", "Милан"],
            result: "1-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            saves: [6, 2],
          },
          21: {
            teams: ["Милан", "Лечче"],
            result: "1-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
          },
          22: {
            teams: ["Рома", "Милан"],
            result: "1-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            saves: [6, 2],
            yellowCard: [1, -1],
          },
          23: {
            teams: ["Болонья", "Милан"],
            result: "0-3",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            saves: [2, 0],
          },
          25: {
            teams: ["Пиза", "Милан"],
            result: "1-2",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            saves: [1, 0],
          },
        },
      },
    },
    mamardashvili: {
      firstName: "Георгий",
      lastName: "Мамардашвили",
      team: "Ливерпуль",
      price: {
        pl: 5.5,
      },
      stats: {
        pl: {
          7: {
            teams: ["Челси", "Ливерпуль"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            saves: [4, 1],
          },
        },
      },
    },
    milinkovicSavic: {
      firstName: "Ваня",
      lastName: "Милинкович-Савич",
      team: "Наполи",
      price: {
        ucl: 4.1,
      },
      stats: {
        ucl: {
          7: {
            teams: ["Копенгаген", "Наполи"],
            result: "1-1",
            minutesOnField: [90, 2],
            saves: [3, 1],
            savingPenalty: [1, 5],
            missedGoals: [1, 0],
          },
        },
      },
    },
    oblak: {
      firstName: "Ян",
      lastName: "Облак",
      team: "Атлетико",
      price: {
        laLiga: 6,
      },
      stats: {
        laLiga: {
          16: {
            teams: ["Атлетико", "Валенсия"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            saves: [1, 0],
          },
          17: {
            teams: ["Жирона", "Атлетико"],
            result: "0-3",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            saves: [2, 0],
          },
          18: {
            teams: ["Реал Сосьедад", "Атлетико"],
            result: "1-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            saves: [7, 2],
          },
          20: {
            teams: ["Атлетико", "Алавес"],
            result: "1-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
          },
          21: {
            teams: ["Атлетико", "Мальорка"],
            result: "3-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            saves: [1, 0],
          },
          22: {
            teams: ["Леванте", "Атлетико"],
            result: "0-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            saves: [2, 0],
          },
          23: {
            teams: ["Атлетико", "Бетис"],
            result: "0-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            saves: [3, 1],
          },
        },
      },
    },
    pope: {
      firstName: "Ник",
      lastName: "Поуп",
      team: "Ньюкасл",
      price: {
        pl: 5.5,
      },
      stats: {
        pl: {
          8: {
            teams: ["Брайтон", "Ньюкасл"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            saves: [3, 1],
          },
          9: {
            teams: ["Ньюкасл", "Фулхэм"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            saves: [4, 1],
          },
          10: {
            teams: ["Вест Хэм", "Ньюкасл"],
            result: "3-1",
            minutesOnField: [90, 2],
            missedGoals: [3, -1],
            saves: [7, 2],
          },
          11: {
            teams: ["Брентфорд", "Ньюкасл"],
            result: "3-1",
            minutesOnField: [77, 2],
            missedGoals: [1, 0],
            saves: [3, 1],
          },
          21: {
            teams: ["Ньюкасл", "Лидс"],
            result: "4-3",
            minutesOnField: [77, 2],
            missedGoals: [3, -1],
            saves: [3, 1],
          },
          22: {
            teams: ["Вулверхэмптон", "Ньюкасл"],
            result: "0-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            saves: [2, 0],
          },
          23: {
            teams: ["Ньюкасл", "Астон Вилла"],
            result: "0-2",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            saves: [6, 2],
          },
        },
      },
    },
    raya: {
      firstName: "Давид",
      lastName: "Райя",
      team: "Арсенал",
      price: {
        ucl: 5.5,
        pl: 6,
      },
      stats: {
        ucl: {
          1: {
            teams: ["Атлетик Бильбао", "Арсенал"],
            result: "0-2",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            saves: [2, 0],
          },
          2: {
            teams: ["Арсенал", "Олимпиакос"],
            result: "2-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            saves: [3, 1],
          },
          3: {
            teams: ["Арсенал", "Атлетико"],
            result: "4-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            saves: [1, 0],
          },
          4: {
            teams: ["Славия", "Арсенал"],
            result: "0-3",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            saves: [1, 0],
          },
          6: {
            teams: ["Брюгге", "Арсенал"],
            result: "0-3",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            saves: [7, 2],
          },
        },
        pl: {
          14: {
            teams: ["Арсенал", "Брентфорд"],
            result: "2-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            saves: [1, 0],
          },
          15: {
            teams: ["Астон Вилла", "Арсенал"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            saves: [4, 1],
          },
          16: {
            teams: ["Арсенал", "Вулверхэмптон"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            saves: [1, 0],
          },
          17: {
            teams: ["Эвертон", "Арсенал"],
            result: "0-1",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            saves: [1, 0],
          },
          18: {
            teams: ["Арсенал", "Брайтон"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            saves: [2, 0],
          },
          19: {
            teams: ["Арсенал", "Астон Вилла"],
            result: "4-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            saves: [2, 0],
          },
          20: {
            teams: ["Борнмут", "Арсенал"],
            result: "2-3",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            saves: [1, 0],
          },
          24: {
            teams: ["Лидс", "Арсенал"],
            result: "0-4",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            saves: [1, 0],
          },
          25: {
            teams: ["Арсенал", "Сандерленд"],
            result: "3-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            saves: [2, 0],
          },
          26: {
            teams: ["Брентфорд", "Арсенал"],
            result: "1-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            saves: [2, 0],
          },
        },
      },
    },
    simon: {
      firstName: "Унаи",
      lastName: "Симон",
      team: "Атлетик Бильбао",
      price: {
        laLiga: 6,
      },
      stats: {
        laLiga: {
          10: {
            teams: ["Атлетик Бильбао", "Хетафе"],
            result: "0-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            saves: [3, 1],
          },
        },
      },
    },
    szczesny: {
      firstName: "Войцех",
      lastName: "Щенсный",
      team: "Барселона",
      price: {
        laLiga: 5.5,
      },
      stats: {
        laLiga: {
          8: {
            teams: ["Севилья", "Барселона"],
            result: "4-1",
            minutesOnField: [90, 2],
            missedGoals: [4, -2],
            saves: [1, 0],
          },
          9: {
            teams: ["Барселона", "Жирона"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            saves: [3, 1],
          },
          11: {
            teams: ["Барселона", "Эльче"],
            result: "3-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            saves: [2, 0],
          },
          12: {
            teams: ["Сельта", "Барселона"],
            result: "2-4",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            saves: [1, 0],
          },
        },
      },
    },
    verbruggen: {
      firstName: "Барт",
      lastName: "Вербрюгген",
      team: "Брайтон",
      price: {
        pl: 5,
      },
      stats: {
        pl: {
          12: {
            teams: ["Брайтон", "Брентфорд"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            saves: [3, 1],
            savingPenalty: [1, 5],
            yellowCard: [1, -1],
          },
          13: {
            teams: ["Ноттингем Форест", "Брайтон"],
            result: "0-2",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            saves: [3, 1],
          },
        },
      },
    },
  },
  defenders: {
    ahanor: {
      firstName: "Онест",
      lastName: "Аханор",
      team: "Аталанта",
      price: {
        seriaA: 4,
      },
      stats: {
        seriaA: {
          22: {
            teams: ["Аталанта", "Парма"],
            result: "4-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
            shotAfterGoal: [1, 3],
          },
        },
      },
    },
    berchiche: {
      firstName: "Юри",
      lastName: "Берчиче",
      team: "Атлетик Бильбао",
      price: {
        laLiga: 5.5,
      },
      stats: {
        laLiga: {
          12: {
            teams: ["Атлетик Бильбао", "Реал Овьедо"],
            result: "3-1",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
          },
          13: {
            teams: ["Барселона", "Атлетик Бильбао"],
            result: "4-0",
            minutesOnField: [90, 2],
            missedGoals: [4, -2],
          },
        },
      },
    },
    bisseck: {
      firstName: "Янн",
      lastName: "Биссек",
      team: "Интер",
      price: {
        seriaA: 5,
      },
      stats: {
        seriaA: {
          22: {
            teams: ["Интер", "Пиза"],
            result: "6-2",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            shotAfterGoal: [1, 3],
          },
          23: {
            teams: ["Кремонезе", "Интер"],
            result: "0-2",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
          },
          24: {
            teams: ["Сассуоло", "Интер"],
            result: "0-5",
            minutesOnField: [90, 2],
            goals: [1, 6],
            cleanSheet: [true, 4],
          },
        },
      },
    },
    burn: {
      firstName: "Дэн",
      lastName: "Берн",
      team: "Ньюкасл",
      price: {
        pl: 5.5,
      },
      stats: {
        pl: {
          11: {
            teams: ["Брентфорд", "Ньюкасл"],
            result: "3-1",
            minutesOnField: [73, 2],
            missedGoals: [1, 0],
            redCard: [1, -3],
            concedingPenalty: [1, -2],
          },
          13: {
            teams: ["Эвертон", "Ньюкасл"],
            result: "1-4",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            assists: [1, 3],
          },
          14: {
            teams: ["Ньюкасл", "Тоттенхэм"],
            result: "2-2",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            tackles: [undefined, 1],
            earnedPenalty: [1, 3],
          },
          15: {
            teams: ["Ньюкасл", "Бернли"],
            result: "2-1",
            minutesOnField: [63, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
          16: {
            teams: ["Сандерленд", "Ньюкасл"],
            result: "1-0",
            minutesOnField: [42, 1],
          },
        },
      },
    },
    chalobah: {
      firstName: "Трево",
      lastName: "Чалоба",
      team: "Челси",
      price: {
        pl: 5,
      },
      stats: {
        pl: {
          25: {
            teams: ["Вулверхэмптон", "Челси"],
            result: "1-3",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 1],
          },
          26: {
            teams: ["Челси", "Лидс"],
            result: "2-2",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
          },
        },
      },
    },
    diLorenzo: {
      firstName: "Джованни",
      lastName: "Ди Лоренцо",
      team: "Наполи",
      price: {
        seriaA: 6,
      },
      stats: {
        seriaA: {
          6: {
            teams: ["Наполи", "Дженоа"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 1],
          },
          7: {
            teams: ["Торино", "Наполи"],
            result: "1-0",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 1],
          },
          8: {
            teams: ["Наполи", "Интер"],
            result: "3-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            yellowCard: [1, -1],
            tackles: [undefined, 1],
            earnedPenalty: [1, 3],
          },
        },
      },
    },
    dimarco: {
      firstName: "Федерико",
      lastName: "Димарко",
      team: "Интер",
      price: {
        seriaA: 6,
      },
      stats: {
        seriaA: {
          13: {
            teams: ["Пиза", "Интер"],
            result: "0-2",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
          17: {
            teams: ["Аталанта", "Интер"],
            result: "0-1",
            minutesOnField: [76, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
          18: {
            teams: ["Интер", "Болонья"],
            result: "3-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 2],
            shotAfterGoal: [1, 3],
          },
          19: {
            teams: ["Парма", "Интер"],
            result: "0-2",
            minutesOnField: [90, 2],
            goals: [1, 6],
            cleanSheet: [true, 4],
            tackles: [undefined, 3],
          },
          20: {
            teams: ["Интер", "Наполи"],
            result: "2-2",
            minutesOnField: [88, 2],
            goals: [1, 6],
            missedGoals: [2, -1],
            tackles: [undefined, 2],
          },
          21: {
            teams: ["Удинезе", "Интер"],
            result: "0-1",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
          23: {
            teams: ["Кремонезе", "Интер"],
            result: "0-2",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
            asssists: [1, 3],
          },
          24: {
            teams: ["Сассуоло", "Интер"],
            result: "0-5",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            yellowCard: [1, -1],
            assists: [3, 9],
          },
        },
      },
    },
    dumfries: {
      firstName: "Дензел",
      lastName: "Дюмфрис",
      team: "Интер",
      price: {
        ucl: 6.2,
        seriaA: 6,
      },
      stats: {
        ucl: {
          1: {
            teams: ["Аякс", "Интер"],
            result: "0-2",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [4, 1],
          },
          2: {
            teams: ["Интер", "Славия"],
            result: "3-0",
            minutesOnField: [76, 2],
            cleanSheet: [true, 4],
            goals: [1, 6],
            tackles: [2, 0],
          },
          3: {
            teams: ["Юнион", "Интер"],
            result: "0-4",
            minutesOnField: [77, 2],
            cleanSheet: [true, 4],
            goals: [1, 6],
            tackles: [10, 3],
            playerOfTheMatch: [true, 3],
          },
          4: {
            teams: ["Интер", "Кайрат"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [2, 0],
          },
        },
        seriaA: {
          6: {
            teams: ["Интер", "Кремонезе"],
            result: "4-1",
            minutesOnField: [53, 1],
          },
          7: {
            teams: ["Рома", "Интер"],
            result: "0-1",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
          8: {
            teams: ["Наполи", "Интер"],
            result: "3-1",
            minutesOnField: [73, 2],
            missedGoals: [2, -1],
          },
          9: {
            teams: ["Интер", "Фиорентина"],
            result: "3-0",
            minutesOnField: [77, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
          10: {
            teams: ["Верона", "Интер"],
            result: "1-2",
            minutesOnField: [35, 1],
          },
          11: {
            teams: ["Интер", "Лацио"],
            result: "2-0",
            minutesOnField: [56, 1],
            yellowCard: [1, -1],
            tackles: [undefined, 1],
          },
        },
      },
    },
    franca: {
      firstName: "Уэсли",
      lastName: "Франса",
      team: "Рома",
      price: {
        seriaA: 5.5,
      },
      stats: {
        seriaA: {
          11: {
            teams: ["Рома", "Удинезе"],
            result: "2-0",
            minutesOnField: [89, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
          12: {
            teams: ["Кремонезе", "Рома"],
            result: "1-3",
            minutesOnField: [80, 2],
            goals: [1, 6],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
          13: {
            teams: ["Рома", "Наполи"],
            result: "0-1",
            minutesOnField: [82, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 1],
          },
          15: {
            teams: ["Рома", "Комо"],
            result: "1-0",
            minutesOnField: [90, 2],
            goals: [1, 6],
            cleanSheet: [true, 4],
            yellowCard: [1, -1],
            tackles: [undefined, 1],
          },
          16: {
            teams: ["Ювентус", "Рома"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            tackles: [undefined, 2],
          },
          17: {
            teams: ["Рома", "Дженоа"],
            result: "3-1",
            minutesOnField: [85, 2],
            cleanSheet: [true, 4],
          },
          18: {
            teams: ["Аталанта", "Рома"],
            result: "1-0",
            minutesOnField: [45, 1],
            tackles: [undefined, 1],
          },
          19: {
            teams: ["Лечче", "Рома"],
            result: "0-2",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
          20: {
            teams: ["Рома", "Сассуоло"],
            result: "2-0",
            minutesOnField: [27, 1],
          },
          21: {
            teams: ["Торино", "Рома"],
            result: "0-2",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
          24: {
            teams: ["Рома", "Кальяри"],
            result: "2-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
        },
      },
    },
    gabriel: {
      firstName: "Магальяйнс",
      lastName: "Габриэл",
      team: "Арсенал",
      price: {
        pl: 6,
      },
      stats: {
        pl: {
          7: {
            teams: ["Арсенал", "Вест Хэм"],
            result: "2-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
          },
          8: {
            teams: ["Фулхэм", "Арсенал"],
            result: "0-1",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            assists: [1, 3],
          },
          9: {
            teams: ["Арсенал", "Кристал Пэлас"],
            result: "1-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
          },
          10: {
            teams: ["Бернли", "Арсенал"],
            result: "0-2",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            yellowCard: [1, -1],
            assists: [1, 3],
          },
          11: {
            teams: ["Сандерленд", "Арсенал"],
            result: "2-2",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            captain: true,
          },
          19: {
            teams: ["Арсенал", "Астон Вилла"],
            result: "4-1",
            minutesOnField: [77, 2],
            goals: [1, 6],
            cleanSheet: [true, 4],
          },
          20: {
            teams: ["Борнмут", "Арсенал"],
            result: "2-3",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            tackles: [undefined, 1],
          },
          22: {
            teams: ["Ноттингем Форест", "Арсенал"],
            result: "0-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
          },
          24: {
            teams: ["Лидс", "Арсенал"],
            result: "0-4",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
          },
          25: {
            teams: ["Арсенал", "Сандерленд"],
            result: "3-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
          },
          26: {
            teams: ["Брентфорд", "Арсенал"],
            result: "1-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            yellowCard: [1, -1],
            tackles: [undefined, 1],
          },
        },
      },
    },
    guehi: {
      firstName: "Марк",
      lastName: "Гехи",
      team: "Кристал Пэлас/Манчестер Сити",
      price: {
        pl: 5,
      },
      stats: {
        pl: {
          8: {
            teams: ["Кристал Пэлас", "Борнмут"],
            result: "3-3",
            minutesOnField: [90, 2],
            missedGoals: [3, -1],
            tackles: [undefined, 1],
            shotAfterGoal: [1, 3],
          },
          10: {
            teams: ["Кристал Пэлас", "Брентфорд"],
            result: "2-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
          12: {
            teams: ["Вулверхэмптон", "Кристал Пэлас"],
            result: "0-2",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            yellowCard: [1, -1],
            tackles: [undefined, 1],
          },
          13: {
            teams: ["Кристал Пэлас", "Манчестер Юнайтед"],
            result: "1-2",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            yellowCard: [1, -1],
            tackles: [undefined, 1],
          },
          14: {
            teams: ["Бернли", "Кристал Пэлас"],
            result: "0-1",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 2],
            assists: [1, 3],
          },
          15: {
            teams: ["Фулхэм", "Кристал Пэлас"],
            result: "1-2",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            goals: [1, 6],
            tackles: [undefined, 1],
          },
          17: {
            teams: ["Лидс", "Кристал Пэлас"],
            result: "4-1",
            minutesOnField: [90, 2],
            missedGoals: [4, -2],
            yellowCard: [1, -1],
            tackles: [undefined, 1],
          },
          18: {
            teams: ["Кристал Пэлас", "Тоттенхэм"],
            result: "0-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 4],
          },
          23: {
            teams: ["Манчестер Сити", "Вулверхэмптон"],
            result: "2-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
          24: {
            teams: ["Тоттенхэм", "Манчестер Сити"],
            result: "2-2",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            tackles: [undefined, 1],
          },
          26: {
            teams: ["Манчестер Сити", "Фулхэм"],
            result: "3-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
        },
      },
    },
    gvardiol: {
      firstName: "Йошко",
      lastName: "Гвардиол",
      team: "Манчестер Сити",
      price: {
        ucl: 5.5,
        pl: 6,
      },
      stats: {
        ucl: {
          3: {
            teams: ["Вильярреал", "Манчестер Сити"],
            result: "0-2",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [7, 2],
          },
          4: {
            teams: ["Манчестер Сити", "Вильярреал"],
            result: "4-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [14, 4],
          },
          6: {
            teams: ["Реал Мадрид", "Манчестер Сити"],
            result: "1-2",
            minutesOnField: [90, 2],
            assists: [1, 3],
            missedGoals: [1, 0],
            tackles: [7, 2],
          },
        },
        pl: {
          16: {
            teams: ["Кристал Пэлас", "Манчестер Сити"],
            result: "0-3",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
          17: {
            teams: ["Манчестер Сити", "Вест Хэм"],
            result: "3-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 2],
          },
          18: {
            teams: ["Ноттингем Форест", "Манчестер Сити"],
            result: "1-2",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            assists: [1, 3],
          },
          19: {
            teams: ["Сандерленд", "Манчестер Сити"],
            result: "0-0",
            minutesOnField: [33, 1],
          },
          20: {
            teams: ["Манчестер Сити", "Челси"],
            result: "1-1",
            minutesOnField: [51, 1],
          },
        },
      },
    },
    huijsen: {
      firstName: "Дин",
      lastName: "Хейсен",
      team: "Реал Мадрид",
      price: {
        ucl: 4.4,
        laLiga: 6,
      },
      stats: {
        ucl: {
          1: {
            teams: ["Реал Мадрид", "Марсель"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [3, 1],
          },
          2: {
            teams: ["Кайрат", "Реал Мадрид"],
            result: "0-5",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [14, 4],
          },
          7: {
            teams: ["Реал Мадрид", "Монако"],
            result: "6-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [9, 3],
          },
          8: {
            teams: ["Бенфика", "Реал Мадрид"],
            result: "4-2",
            minutesOnField: [79, 2],
            missedGoals: [3, -1],
            yellowCard: [1, -1],
            tackles: [7, 2],
          },
        },
        laLiga: {
          8: {
            teams: ["Реал Мадрид", "Вильярреал"],
            result: "3-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 1],
          },
          13: {
            teams: ["Эльче", "Реал Мадрид"],
            result: "2-2",
            minutesOnField: [90, 2],
            goals: [1, 6],
            missedGoals: [2, -1],
            tackles: [undefined, 1],
          },
          20: {
            teams: ["Реал Мадрид", "Леванте"],
            result: "2-0",
            minutesOnField: [61, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
          21: {
            teams: ["Вильярреал", "Реал Мадрид"],
            result: "0-2",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
          22: {
            teams: ["Реал Мадрид", "Райо Вальекано"],
            result: "2-1",
            minutesOnField: [77, 2],
          },
          23: {
            teams: ["Валенсия", "Реал Мадрид"],
            result: "0-2",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            assists: [1, 3],
          },
        },
      },
    },
    kalulu: {
      firstName: "Пьер",
      lastName: "Калулу",
      team: "Ювентус",
      price: {
        seriaA: 5.5,
      },
      stats: {
        seriaA: {
          21: {
            teams: ["Кальяри", "Ювентус"],
            result: "1-0",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
          },
        },
      },
    },
    khusanov: {
      firstName: "Абдукодир",
      lastName: "Хусанов",
      team: "Манчестер Сити",
      price: {
        pl: 4.5,
      },
      stats: {
        pl: {
          21: {
            teams: ["Манчестер Сити", "Брайтон"],
            result: "1-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 2],
          },
        },
      },
    },
    kounde: {
      firstName: "Жюль",
      lastName: "Кунде",
      team: "Барселона",
      price: {
        ucl: 5.5,
        laLiga: 6,
      },
      stats: {
        ucl: {
          5: {
            teams: ["Челси", "Барселона"],
            result: "3-0",
            minutesOnField: [90, 2],
            missedGoals: [3, -1],
            ownGoal: [1, -2],
            tackles: [9, 3],
          },
        },
        laLiga: {
          8: {
            teams: ["Севилья", "Барселона"],
            result: "4-1",
            minutesOnField: [90, 2],
            missedGoals: [4, -2],
            tackles: [undefined, 1],
          },
          9: {
            teams: ["Барселона", "Жирона"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 1],
          },
          10: {
            teams: ["Реал Мадрид", "Барселона"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
          },
          11: {
            teams: ["Барселона", "Эльче"],
            result: "3-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 1],
          },
          13: {
            teams: ["Барселона", "Атлетик Бильбао"],
            result: "4-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
          },
          14: {
            teams: ["Барселона", "Депортиво Алавес"],
            result: "4-1",
            minutesOnField: [45, 1],
          },
          15: {
            teams: ["Бетис", "Барселона"],
            result: "3-5",
            minutesOnField: [90, 2],
            missedGoals: [3, -1],
            yellowCard: [1, -1],
            tackles: [undefined, 1],
            assists: [1, 3],
            concedingPenalty: [1, -2],
          },
          16: {
            teams: ["Барселона", "Осасуна"],
            result: "2-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 2],
            assists: [1, 3],
          },
          17: {
            teams: ["Вильярреал", "Барселона"],
            result: "0-2",
            minutesOnField: [79, 2],
            cleanSheet: [true, 4],
          },
          18: {
            teams: ["Эспаньол", "Барселона"],
            result: "0-2",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
          19: {
            teams: ["Барселона", "Атлетико"],
            result: "3-1",
            minutesOnField: [90, 2],
          },
          20: {
            teams: ["Реал Сосьедад", "Барселона"],
            result: "2-1",
            minutesOnField: [85, 2],
            missedGoals: [2, -1],
            tackles: [undefined, 1],
          },
          21: {
            teams: ["Барселона", "Реал Овьедо"],
            result: "3-0",
            minutesOnField: [45, 1],
          },
          22: {
            teams: ["Эльче", "Барселона"],
            result: "1-3",
            minutesOnField: [84, 2],
            missedGoals: [1, 0],
          },
          23: {
            teams: ["Барселона", "Мальорка"],
            result: "3-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
        },
      },
    },
    leNormand: {
      firstName: "Робен",
      lastName: "Ле Норман",
      team: "Атлетико",
      price: {
        laLiga: 5.5,
      },
      stats: {
        laLiga: {
          8: {
            teams: ["Сельта", "Атлетико"],
            result: "1-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
          },
          9: {
            teams: ["Атлетико", "Осасуна"],
            result: "1-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
          10: {
            teams: ["Бетис", "Атлетико"],
            result: "0-2",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
          },
          23: {
            teams: ["Атлетико", "Бетис"],
            result: "0-1",
            minutesOnField: [45, 1],
            tackles: [undefined, 1],
          },
        },
      },
    },
    llorente: {
      firstName: "Маркос",
      lastName: "Льоренте",
      team: "Атлетико",
      price: {
        laLiga: 6,
      },
      stats: {
        laLiga: {
          8: {
            teams: ["Сельта", "Атлетико"],
            result: "1-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 3],
          },
          9: {
            teams: ["Атлетико", "Осасуна"],
            result: "1-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 2],
          },
          10: {
            teams: ["Бетис", "Атлетико"],
            result: "0-2",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 2],
          },
          11: {
            teams: ["Атлетико", "Севилья"],
            result: "3-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
          12: {
            teams: ["Атлетико", "Леванте"],
            result: "3-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            yellowCard: [1, -1],
            tackles: [undefined, 2],
            assists: [1, 3],
          },
          13: {
            teams: ["Хетафе", "Атлетико"],
            result: "0-1",
            minutesOnField: [14, 1],
          },
          21: {
            teams: ["Атлетико", "Мальорка"],
            result: "3-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
            shotAfterGoal: [1, 3],
          },
          22: {
            teams: ["Леванте", "Атлетико"],
            result: "0-0",
            minutesOnField: [59, 1],
          },
        },
      },
    },
    mitchell: {
      firstName: "Тайрик",
      lastName: "Митчелл",
      team: "Кристал Пэлас",
      price: {
        pl: 5,
      },
      stats: {
        pl: {
          12: {
            teams: ["Вулверхэмптон", "Кристал Пэлас"],
            result: "0-2",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 2],
          },
          22: {
            teams: ["Сандерленд", "Кристал Пэлас"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            yellowCard: [1, -1],
            tackles: [undefined, 1],
          },
          23: {
            teams: ["Кристал Пэлас", "Челси"],
            result: "1-3",
            minutesOnField: [65, 2],
            missedGoals: [2, -1],
          },
        },
      },
    },
    mourino: {
      firstName: "Сантьяго",
      lastName: "Моуриньо",
      team: "Вильярреал",
      price: {
        laLiga: 4.5,
      },
      stats: {
        laLiga: {
          10: {
            teams: ["Валенсия", "Вильярреал"],
            result: "0-2",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 3],
            yellowCard: [1, -1],
          },
          11: {
            teams: ["Вильярреал", "Райо Вальекано"],
            result: "4-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
          14: {
            teams: ["Реал Сосьедад", "Вильярреал"],
            result: "2-3",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            yellowCard: [1, -1],
            tackles: [undefined, 2],
          },
          20: {
            teams: ["Бетис", "Вильярреал"],
            result: "2-0",
            minutesOnField: [45, 1],
            missedGoals: [2, -1],
            yellowCard: [1, -1],
          },
        },
      },
    },
    natan: {
      firstName: "",
      lastName: "Натан",
      team: "Бетис",
      price: {
        laLiga: 5,
      },
      stats: {
        laLiga: {
          15: {
            teams: ["Бетис", "Барселона"],
            result: "3-5",
            minutesOnField: [60, 2],
            missedGoals: [5, -2],
            tackles: [undefined, 1],
          },
          16: {
            teams: ["Райо Вальекано", "Бетис"],
            result: "0-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
          },
          17: {
            teams: ["Бетис", "Хетафе"],
            result: "4-0",
            minutesOnField: [67, 2],
            cleanSheet: [true, 4],
          },
          18: {
            teams: ["Реал Мадрид", "Бетис"],
            result: "5-1",
            minutesOnField: [90, 2],
            missedGoals: [5, -2],
            tackles: [undefined, 1],
          },
          20: {
            teams: ["Бетис", "Вильярреал"],
            result: "2-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
        },
      },
    },
    ndicka: {
      firstName: "Эван",
      lastName: "Ндика",
      team: "Рома",
      price: {
        seriaA: 5.5,
      },
      stats: {
        seriaA: {
          9: {
            teams: ["Рома", "Парма"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 1],
          },
          11: {
            teams: ["Рома", "Удинезе"],
            result: "2-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 2],
          },
          12: {
            teams: ["Кремонезе", "Рома"],
            result: "1-3",
            minutesOnField: [80, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 1],
          },
          13: {
            teams: ["Рома", "Наполи"],
            result: "0-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            yellowCard: [1, -1],
            tackles: [undefined, 2],
          },
          14: {
            teams: ["Кальяри", "Рома"],
            result: "1-0",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
          },
          15: {
            teams: ["Рома", "Комо"],
            result: "1-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 2],
          },
        },
      },
    },
    nunoMendes: {
      firstName: "Нуну",
      lastName: "Мендеш",
      team: "ПСЖ",
      price: {
        ucl: 6.3,
      },
      stats: {
        ucl: {
          5: {
            teams: ["ПСЖ", "Тоттенхэм"],
            result: "5-3",
            minutesOnField: [45, 1],
            missedGoals: [1, 0],
            tackles: [2, 0],
          },
          7: {
            teams: ["Спортинг", "ПСЖ"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            tackles: [13, 4],
          },
          8: {
            teams: ["ПСЖ", "Ньюкасл"],
            result: "1-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [8, 2],
          },
        },
      },
    },
    pacho: {
      firstName: "Виллиан",
      lastName: "Пачо",
      team: "ПСЖ",
      price: {
        ucl: 5,
      },
      stats: {
        ucl: {
          5: {
            teams: ["ПСЖ", "Тоттенхэм"],
            result: "5-3",
            minutesOnField: [90, 2],
            goals: [1, 6],
            missedGoals: [3, -1],
            tackles: [4, 1],
          },
          6: {
            teams: ["Атлетик Бильбао", "ПСЖ"],
            result: "0-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [4, 1],
          },
          7: {
            teams: ["Спортинг", "ПСЖ"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            tackles: [9, 3],
          },
          8: {
            teams: ["ПСЖ", "Ньюкасл"],
            result: "1-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [9, 3],
          },
        },
      },
    },
    rudiger: {
      firstName: "Антонио",
      lastName: "Рюдигер",
      team: "Реал Мадрид",
      price: {
        laLiga: 6,
      },
      stats: {
        laLiga: {
          15: {
            teams: ["Реал Мадрид", "Сельта"],
            result: "0-2",
            minutesOnField: [66, 2],
            missedGoals: [2, -1],
            tackles: [undefined, 1],
          },
          16: {
            teams: ["Депортиво Алавес", "Реал Мадрид"],
            result: "1-2",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
          },
          17: {
            teams: ["Реал Мадрид", "Севилья"],
            result: "2-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
          },
          18: {
            teams: ["Реал Мадрид", "Бетис"],
            result: "5-1",
            minutesOnField: [89, 2],
            missedGoals: [1, 0],
          },
        },
      },
    },
    saliba: {
      firstName: "Вильям",
      lastName: "Салиба",
      team: "Арсенал",
      price: {
        pl: 6,
      },
      stats: {
        pl: {
          7: {
            teams: ["Арсенал", "Вест Хэм"],
            result: "2-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
          8: {
            teams: ["Фулхэм", "Арсенал"],
            result: "0-1",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
          9: {
            teams: ["Арсенал", "Кристал Пэлас"],
            result: "1-0",
            minutesOnField: [45, 1],
          },
          10: {
            teams: ["Бернли", "Арсенал"],
            result: "0-2",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
          11: {
            teams: ["Сандерленд", "Арсенал"],
            result: "2-2",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
          },
          12: {
            teams: ["Арсенал", "Тоттенхэм"],
            result: "4-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 1],
          },
          17: {
            teams: ["Эвертон", "Арсенал"],
            result: "0-1",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 3],
          },
          18: {
            teams: ["Арсенал", "Брайтон"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 1],
          },
          19: {
            teams: ["Арсенал", "Астон Вилла"],
            result: "4-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
          },
          20: {
            teams: ["Борнмут", "Арсенал"],
            result: "2-3",
            minutesOnField: [90, 2],
            goals: [1, 6],
            missedGoals: [2, -1],
          },
          22: {
            teams: ["Ноттингем Форест", "Арсенал"],
            result: "0-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 2],
          },
          24: {
            teams: ["Лидс", "Арсенал"],
            result: "0-4",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
          },
          25: {
            teams: ["Арсенал", "Сандерленд"],
            result: "3-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            yellowCard: [1, -1],
            tackles: [undefined, 1],
          },
        },
      },
    },
    schar: {
      firstName: "Фабиан",
      lastName: "Шер",
      team: "Ньюкасл",
      price: {
        pl: 5.5,
      },
      stats: {
        pl: {
          21: {
            teams: ["Ньюкасл", "Лидс"],
            result: "4-3",
            minutesOnField: [76, 2],
            missedGoals: [2, -1],
          },
        },
      },
    },
    spinazzola: {
      firstName: "Леонардо",
      lastName: "Спинаццола",
      team: "Наполи",
      price: {
        seriaA: 5.5,
      },
      stats: {
        seriaA: {
          6: {
            teams: ["Наполи", "Дженоа"],
            result: "2-1",
            minutesOnField: [40, 1],
            shotAfterGoal: [1, 3],
          },
          7: {
            teams: ["Торино", "Наполи"],
            result: "1-0",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 1],
          },
          8: {
            teams: ["Наполи", "Интер"],
            result: "3-1",
            minutesOnField: [89, 2],
            missedGoals: [1, 0],
            assists: [1, 3],
          },
          9: {
            teams: ["Лечче", "Наполи"],
            result: "0-1",
            minutesOnField: [29, 1],
            tackles: [undefined, 1],
          },
          10: {
            teams: ["Наполи", "Комо"],
            result: "0-0",
            minutesOnField: [45, 1],
          },
          14: {
            teams: ["Наполи", "Ювентус"],
            result: "2-1",
            minutesOnField: [20, 1],
            tackles: [undefined, 1],
          },
          17: {
            teams: ["Кремонезе", "Наполи"],
            result: "0-2",
            minutesOnField: [45, 1],
            tackles: [undefined, 1],
            assists: [1, 3],
          },
          18: {
            teams: ["Лацио", "Наполи"],
            result: "0-2",
            minutesOnField: [79, 2],
            goals: [1, 6],
            cleanSheet: [true, 4],
          },
          19: {
            teams: ["Наполи", "Верона"],
            result: "2-2",
            minutesOnField: [35, 1],
          },
          23: {
            teams: ["Наполи", "Фиорентина"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
          },
          24: {
            teams: ["Дженоа", "Наполи"],
            result: "2-3",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            tackles: [undefined, 2],
          },
        },
      },
    },
    tarkowski: {
      firstName: "Джеймс",
      lastName: "Тарковски",
      team: "Эвертон",
      price: {
        pl: 5.5,
      },
      stats: {
        pl: {
          16: {
            teams: ["Челси", "Эвертон"],
            result: "2-0",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            tackles: [undefined, 1],
          },
          19: {
            teams: ["Ноттингем Форест", "Эвертон"],
            result: "0-2",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
          },
          20: {
            teams: ["Эвертон", "Брентфорд"],
            result: "2-4",
            minutesOnField: [90, 2],
            missedGoals: [4, -2],
            tackles: [undefined, 1],
          },
          21: {
            teams: ["Эвертон", "Вулверхэмптон"],
            result: "1-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
          },
          23: {
            teams: ["Эвертон", "Лидс"],
            result: "1-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 1],
          },
        },
      },
    },
    timber: {
      firstName: "Юрриен",
      lastName: "Тимбер",
      team: "Арсенал",
      price: {
        ucl: 5,
        pl: 6,
      },
      stats: {
        ucl: {
          4: {
            teams: ["Славия", "Арсенал"],
            result: "0-3",
            minutesOnField: [73, 2],
            cleanSheet: [true, 4],
            tackles: [2, 0],
          },
          7: {
            teams: ["Интер", "Арсенал"],
            result: "1-3",
            minutesOnField: [64, 2],
            assists: [1, 3],
            missedGoals: [1, 0],
          },
        },
        pl: {
          12: {
            teams: ["Арсенал", "Тоттенхэм"],
            result: "4-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 1],
            assists: [1, 3],
          },
          13: {
            teams: ["Челси", "Арсенал"],
            result: "1-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 1],
          },
          14: {
            teams: ["Арсенал", "Брентфорд"],
            result: "2-0",
            minutesOnField: [46, 1],
            tackles: [undefined, 1],
          },
          15: {
            teams: ["Астон Вилла", "Арсенал"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            tackles: [undefined, 1],
          },
          16: {
            teams: ["Арсенал", "Вулверхэмптон"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
          },
          17: {
            teams: ["Эвертон", "Арсенал"],
            result: "0-1",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 2],
          },
        },
      },
    },
    toljan: {
      firstName: "Джереми",
      lastName: "Толян",
      team: "Леванте",
      price: {
        laLiga: 4.5,
      },
      stats: {
        laLiga: {
          14: {
            teams: ["Леванте", "Атлетик Бильбао"],
            result: "0-2",
            minutesOnField: [73, 2],
            missedGoals: [2, -1],
          },
          15: {
            teams: ["Осасуна", "Леванте"],
            result: "2-0",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            tackles: [undefined, 1],
          },
          17: {
            teams: ["Леванте", "Реал Сосьедад"],
            result: "1-1",
            minutesOnField: [74, 2],
            missedGoals: [1, 0],
          },
          18: {
            teams: ["Севилья", "Леванте"],
            result: "0-3",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            yellowCard: [1, -1],
            tackles: [undefined, 1],
            concedingPenalty: [1, -2],
          },
          19: {
            teams: ["Леванте", "Эспаньол"],
            result: "1-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 1],
          },
          21: {
            teams: ["Леванте", "Эльче"],
            result: "3-2",
            minutesOnField: [90, 2],
            missedGoals: [3, -1],
            tackles: [undefined, 2],
            assists: [1, 3],
          },
          22: {
            teams: ["Леванте", "Атлетико"],
            result: "0-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
          23: {
            teams: ["Атлетик", "Леванте"],
            result: "4-2",
            minutesOnField: [90, 2],
            missedGoals: [4, -2],
            yellowCard: [1, -1],
            tackles: [undefined, 1],
          },
        },
      },
    },
    tomori: {
      firstName: "Фикайо",
      lastName: "Томори",
      team: "Милан",
      price: {
        seriaA: 5,
      },
      stats: {
        seriaA: {
          6: {
            teams: ["Ювентус", "Милан"],
            result: "0-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
          },
        },
      },
    },
    upamecano: {
      firstName: "Дайо",
      lastName: "Упамекано",
      team: "Бавария",
      price: {
        ucl: 5,
      },
      stats: {
        ucl: {
          6: {
            teams: ["Бавария", "Спортинг"],
            result: "3-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [7, 2],
          },
          8: {
            teams: ["ПСВ", "Бавария"],
            result: "1-2",
            minutesOnField: [62, 2],
            cleanSheet: [true, 4],
            yellowCard: [1, -1],
            tackles: [3, 1],
          },
        },
      },
    },
    vanDijk: {
      firstName: "Вирджил",
      lastName: "ван Дейк",
      team: "Ливерпуль",
      price: {
        pl: 6,
      },
      stats: {
        pl: {
          7: {
            teams: ["Челси", "Ливерпуль"],
            result: "2-1",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            tackles: [undefined, 1],
          },
          9: {
            teams: ["Брентфорд", "Ливерпуль"],
            result: "3-2",
            minutesOnField: [90, 2],
            missedGoals: [3, -1],
            tackles: [undefined, 1],
            concedingPenalty: [1, -2],
          },
        },
      },
    },
    vandeVen: {
      firstName: "Микки",
      lastName: "ван де Вен",
      team: "Тоттенхэм",
      price: {
        ucl: 5,
      },
      stats: {
        ucl: {
          1: {
            teams: ["Тоттенхэм", "Вильярреал"],
            result: "1-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            yellowCard: [1, -1],
            tackles: [11, 3],
          },
          2: {
            teams: ["Буде-Глимт", "Тоттенхэм"],
            result: "2-2",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            goals: [1, 6],
            yellowCard: [1, -1],
            tackles: [4, 1],
          },
          3: {
            teams: ["Монако", "Тоттенхэм"],
            result: "0-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [8, 2],
          },
        },
      },
    },
    veiga: {
      firstName: "Ренату",
      lastName: "Вейга",
      team: "Вильярреал",
      price: {
        laLiga: 5.5,
      },
      stats: {
        laLiga: {
          12: {
            teams: ["Эспаньол", "Вильярреал"],
            result: "0-2",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
        },
      },
    },
    witsel: {
      firstName: "Аксель",
      lastName: "Витсель",
      team: "Жирона",
      price: {
        laLiga: 4.5,
      },
      stats: {
        laLiga: {
          16: {
            teams: ["Реал Сосьедад", "Жирона"],
            result: "1-2",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 2],
          },
          17: {
            teams: ["Жирона", "Атлетико"],
            result: "0-3",
            minutesOnField: [90, 2],
            missedGoals: [3, -1],
          },
          18: {
            teams: ["Мальорка", "Жирона"],
            result: "1-2",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 2],
          },
        },
      },
    },
    zappacosta: {
      firstName: "Давиде",
      lastName: "Дзаппакоста",
      team: "Аталанта",
      price: {
        seriaA: 5.5,
      },
      stats: {
        seriaA: {
          6: {
            teams: ["Аталанта", "Комо"],
            result: "1-1",
            minutesOnField: [90, 2],
            tackles: [undefined, 1],
          },
          7: {
            teams: ["Аталанта", "Лацио"],
            result: "0-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
          10: {
            teams: ["Удинезе", "Аталанта"],
            result: "1-0",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 1],
          },
          11: {
            teams: ["Аталанта", "Сассуоло"],
            result: "0-3",
            minutesOnField: [83, 2],
            missedGoals: [3, -1],
            tackles: [undefined, 1],
          },
          14: {
            teams: ["Верона", "Аталанта"],
            result: "3-1",
            minutesOnField: [61, 2],
            missedGoals: [2, -1],
            tackles: [undefined, 1],
          },
          15: {
            teams: ["Аталанта", "Кальяри"],
            result: "2-1",
            minutesOnField: [79, 2],
            missedGoals: [1, 0],
            tackles: [undefined, 1],
            assists: [1, 3],
          },
          16: {
            teams: ["Дженоа", "Аталанта"],
            result: "0-1",
            minutesOnField: [69, 2],
            cleanSheet: [true, 4],
          },
          20: {
            teams: ["Аталанта", "Торино"],
            result: "2-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
          21: {
            teams: ["Пиза", "Аталанта"],
            result: "1-1",
            minutesOnField: [34, 1],
          },
          22: {
            teams: ["Аталанта", "Парма"],
            result: "4-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [undefined, 1],
          },
          24: {
            teams: ["Аталанта", "Кремонезе"],
            result: "2-1",
            minutesOnField: [59, 1],
            goals: [1, 6],
          },
        },
      },
    },
  },
  midfielders: {
    ardaGuler: {
      firstName: "Арда",
      lastName: "Гюлер",
      team: "Реал Мадрид",
      price: {
        ucl: 6.1,
        laLiga: 8,
      },
      stats: {
        ucl: {
          2: {
            teams: ["Кайрат", "Реал Мадрид"],
            result: "0-5",
            minutesOnField: [80, 2],
            cleanSheet: [true, 1],
            assists: [1, 3],
            tackles: [2, 0],
          },
          3: {
            teams: ["Реал Мадрид", "Ювентус"],
            result: "1-0",
            minutesOnField: [74, 2],
            cleanSheet: [true, 1],
            tackles: [2, 0],
            playerOfTheMatch: [true, 3],
          },
          6: {
            teams: ["Реал Мадрид", "Манчестер Сити"],
            result: "1-2",
            minutesOnField: [32, 1],
            tackles: [1, 0],
          },
          7: {
            teams: ["Реал Мадрид", "Монако"],
            result: "6-1",
            minutesOnField: [76, 2],
            assists: [1, 3],
            tackles: [4, 1],
          },
          8: {
            teams: ["Бенфика", "Реал Мадрид"],
            result: "4-2",
            minutesOnField: [79, 2],
            assists: [1, 3],
            tackles: [2, 0],
          },
        },
        laLiga: {
          8: {
            teams: ["Реал Мадрид", "Вильярреал"],
            result: "3-1",
            minutesOnField: [90, 2],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
          9: {
            teams: ["Хетафе", "Реал Мадрид"],
            result: "0-1",
            minutesOnField: [25, 1],
            assists: [1, 3],
          },
          10: {
            teams: ["Реал Мадрид", "Барселона"],
            result: "2-1",
            minutesOnField: [66, 2],
          },
          11: {
            teams: ["Реал Мадрид", "Валенсия"],
            result: "4-0",
            minutesOnField: [45, 1],
            assists: [1, 3],
          },
          12: {
            teams: ["Райо Вальекано", "Реал Мадрид"],
            result: "0-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
          },
          13: {
            teams: ["Эльче", "Реал Мадрид"],
            result: "2-2",
            minutesOnField: [64, 2],
            tackles: [undefined, 1],
          },
          14: {
            teams: ["Жирона", "Реал Мадрид"],
            result: "1-1",
            minutesOnField: [45, 1],
          },
          15: {
            teams: ["Реал Мадрид", "Сельта"],
            result: "0-2",
            minutesOnField: [74, 2],
            tackles: [undefined, 1],
          },
          19: {
            teams: ["Атлетик Бильбао", "Реал Мадрид"],
            result: "0-3",
            minutesOnField: [21, 1],
          },
        },
      },
    },
    bellingham: {
      firstName: "Джуд",
      lastName: "Беллингем",
      team: "Реал Мадрид",
      price: {
        ucl: 8.4,
        laLiga: 9.5,
      },
      stats: {
        ucl: {
          5: {
            teams: ["Олимпиакос", "Реал Мадрид"],
            result: "3-4",
            minutesOnField: [29, 1],
            tackles: [2, 0],
          },
        },
        laLiga: {
          11: {
            teams: ["Реал Мадрид", "Валенсия"],
            result: "4-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 5],
            cleanSheet: [true, 1],
          },
          12: {
            teams: ["Райо Вальекано", "Реал Мадрид"],
            result: "0-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
          },
          22: {
            teams: ["Реал Мадрид", "Райо Вальекано"],
            result: "2-1",
            minutesOnField: [10, 1],
          },
        },
      },
    },
    buchanan: {
      firstName: "Тейджон",
      lastName: "Бьюкенен",
      team: "Вильярреал",
      price: {
        laLiga: 6,
      },
      stats: {
        laLiga: {
          9: {
            teams: ["Вильярреал", "Бетис"],
            result: "2-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 5],
            yellowCard: [1, -1],
            tackles: [undefined, 1],
          },
          10: {
            teams: ["Валенсия", "Вильярреал"],
            result: "0-2",
            minutesOnField: [2, 1],
          },
          11: {
            teams: ["Вильярреал", "Райо Вальекано"],
            result: "4-0",
            minutesOnField: [27, 1],
          },
          12: {
            teams: ["Эспаньол", "Вильярреал"],
            result: "0-2",
            minutesOnField: [83, 2],
            cleanSheet: [true, 1],
            yellowCard: [1, -1],
          },
          19: {
            teams: ["Вильярреал", "Алавес"],
            result: "3-1",
            minutesOnField: [67, 2],
            cleanSheet: [true, 1],
          },
          20: {
            teams: ["Бетис", "Вильярреал"],
            result: "2-0",
            minutesOnField: [75, 2],
            tackles: [undefined, 1],
          },
        },
      },
    },
    caicedo: {
      firstName: "Мойсес",
      lastName: "Кайседо",
      team: "Челси",
      price: {
        pl: 7,
      },
      stats: {
        pl: {
          8: {
            teams: ["Ноттингем Форест", "Челси"],
            result: "0-3",
            minutesOnField: [45, 1],
            tackles: [undefined, 1],
          },
          9: {
            teams: ["Челси", "Сандерленд"],
            result: "1-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 1],
          },
          11: {
            teams: ["Челси", "Вулверхэмптон"],
            result: "3-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            yellowCard: [1, -1],
            tackles: [undefined, 1],
          },
          25: {
            teams: ["Вулверхэмптон", "Челси"],
            result: "1-3",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 3],
          },
          26: {
            teams: ["Челси", "Лидс"],
            result: "2-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            yellowCard: [1, -1],
            tackles: [undefined, 1],
            concedingPenalty: [1, -2],
          },
        },
      },
    },
    calhanoglu: {
      firstName: "Хакан",
      lastName: "Чалханоглу",
      team: "Интер",
      price: {
        ucl: 7.1,
        seriaA: 8,
      },
      stats: {
        ucl: {
          1: {
            teams: ["Аякс", "Интер"],
            result: "0-2",
            minutesOnField: [86, 2],
            cleanSheet: [true, 1],
            assists: [2, 6],
            tackles: [5, 1],
          },
          2: {
            teams: ["Интер", "Славия"],
            result: "3-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 1],
            tackles: [4, 1],
          },
          3: {
            teams: ["Юнион", "Интер"],
            result: "0-4",
            minutesOnField: [59, 1],
            goals: [1, 5],
            tackles: [2, 0],
          },
          4: {
            teams: ["Интер", "Кайрат"],
            result: "2-1",
            minutesOnField: [19, 1],
            tackles: [1, 0],
          },
        },
        seriaA: {
          7: {
            teams: ["Рома", "Интер"],
            result: "0-1",
            minutesOnField: [62, 2],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
          8: {
            teams: ["Наполи", "Интер"],
            result: "3-1",
            minutesOnField: [73, 2],
            tackles: [undefined, 1],
            goals: [1, 5],
          },
          10: {
            teams: ["Верона", "Интер"],
            result: "1-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 2],
            assists: [1, 3],
            captain: true,
          },
          11: {
            teams: ["Интер", "Лацио"],
            result: "2-0",
            minutesOnField: [81, 2],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
            captain: true,
          },
          12: {
            teams: ["Интер", "Милан"],
            result: "0-1",
            minutesOnField: [78, 2],
            missingPenalty: [1, -2],
            yellowCard: [1, -1],
            captain: true,
          },
          13: {
            teams: ["Пиза", "Интер"],
            result: "0-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            tackles: [undefined, 2],
          },
          14: {
            teams: ["Интер", "Комо"],
            result: "4-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 5],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
        },
      },
    },
    camavinga: {
      firstName: "Эдуарду",
      lastName: "Камавинга",
      team: "Вильярреал",
      price: {
        laLiga: 6.5,
      },
      stats: {
        laLiga: {
          23: {
            teams: ["Валенсия", "Реал Мадрид"],
            result: "0-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
        },
      },
    },
    cristante: {
      firstName: "Брайан",
      lastName: "Кристанте",
      team: "Рома",
      price: {
        seriaA: 7,
      },
      stats: {
        seriaA: {
          24: {
            teams: ["Рома", "Кальяри"],
            result: "2-0",
            minutesOnField: [84, 2],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
        },
      },
    },
    cunha: {
      firstName: "Матеус",
      lastName: "Кунья",
      team: "Манчестер Юнайтед",
      price: {
        pl: 8,
      },
      stats: {
        pl: {
          10: {
            teams: ["Ноттингем Форест", "Манчестер Юнайтед"],
            result: "2-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 2],
          },
          18: {
            teams: ["Манчестер Юнайтед", "Ньюкасл"],
            result: "1-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            yellowCard: [1, -1],
            tackles: [undefined, 2],
          },
          19: {
            teams: ["Манчестер Юнайтед", "Вулверхэмптон"],
            result: "1-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 1],
          },
          24: {
            teams: ["Манчестер Юнайтед", "Фулхэм"],
            result: "3-2",
            minutesOnField: [89, 2],
            goals: [1, 5],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
          25: {
            teams: ["Манчестер Юнайтед", "Тоттенхэм"],
            result: "2-0",
            minutesOnField: [75, 2],
            cleanSheet: [true, 1],
          },
          26: {
            teams: ["Вест Хэм", "Манчестер Юнайтед"],
            result: "1-1",
            minutesOnField: [69, 2],
          },
        },
      },
    },
    danjuma: {
      firstName: "Арно",
      lastName: "Данжума",
      team: "Валенсия",
      price: {
        laLiga: 6.5,
      },
      stats: {
        laLiga: {
          11: {
            teams: ["Реал Мадрид", "Валенсия"],
            result: "4-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 2],
          },
          13: {
            teams: ["Валенсия", "Леванте"],
            result: "1-0",
            minutesOnField: [73, 2],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
          14: {
            teams: ["Райо Вальекано", "Валенсия"],
            result: "1-1",
            minutesOnField: [33, 1],
          },
          15: {
            teams: ["Валенсия", "Севилья"],
            result: "1-1",
            minutesOnField: [63, 2],
            tackles: [undefined, 1],
          },
          17: {
            teams: ["Валенсия", "Мальорка"],
            result: "1-1",
            minutesOnField: [14, 1],
          },
          18: {
            teams: ["Сельта", "Валенсия"],
            result: "4-1",
            minutesOnField: [24, 1],
          },
          19: {
            teams: ["Валенсия", "Эльче"],
            result: "1-1",
            minutesOnField: [25, 1],
          },
          20: {
            teams: ["Хетафе", "Валенсия"],
            result: "0-1",
            minutesOnField: [61, 2],
            cleanSheet: [true, 1],
          },
          21: {
            teams: ["Валенсия", "Эспаньол"],
            result: "3-2",
            minutesOnField: [63, 2],
            tackles: [undefined, 1],
            assists: [1, 3],
          },
        },
      },
    },
    deJong: {
      firstName: "Френки",
      lastName: "Де Йонг",
      team: "Барселона",
      price: {
        laLiga: 6.5,
      },
      stats: {
        laLiga: {
          12: {
            teams: ["Сельта", "Барселона"],
            result: "2-4",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            redCard: [1, -3],
            tackles: [undefined, 1],
          },
          21: {
            teams: ["Барселона", "Реал Овьедо"],
            result: "3-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
          22: {
            teams: ["Эльче", "Барселона"],
            result: "1-3",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            yellowCard: [1, -1],
            tackles: [undefined, 2],
            assists: [1, 3],
          },
        },
      },
    },
    doku: {
      firstName: "Жереми",
      lastName: "Доку",
      team: "Манчестер Сити",
      price: {
        pl: 7.5,
      },
      stats: {
        pl: {
          7: {
            teams: ["Брентфорд", "Манчестер Сити"],
            result: "0-1",
            minutesOnField: [14, 1],
          },
          8: {
            teams: ["Манчестер Сити", "Эвертон"],
            result: "2-0",
            minutesOnField: [59, 1],
          },
          15: {
            teams: ["Манчестер Сити", "Сандерленд"],
            result: "3-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
        },
      },
    },
    fermin: {
      firstName: "Фермин",
      lastName: "Лопес",
      team: "Барселона",
      price: {
        ucl: 6.7,
      },
      stats: {
        ucl: {
          5: {
            teams: ["Челси", "Барселона"],
            result: "3-0",
            minutesOnField: [62, 2],
          },
        },
      },
    },
    foden: {
      firstName: "Фил",
      lastName: "Фоден",
      team: "Манчестер Сити",
      price: {
        pl: 9,
      },
      stats: {
        pl: {
          15: {
            teams: ["Манчестер Сити", "Сандерленд"],
            result: "3-0",
            minutesOnField: [69, 2],
            goals: [1, 5],
            cleanSheet: [true, 1],
            assists: [1, 3],
          },
        },
      },
    },
    gravenberch: {
      firstName: "Райан",
      lastName: "Гравенберх",
      team: "Ливерпуль",
      price: {
        pl: 6.5,
      },
      stats: {
        pl: {
          7: {
            teams: ["Челси", "Ливерпуль"],
            result: "2-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 1],
          },
          12: {
            teams: ["Ливерпуль", "Ноттингем Форест"],
            result: "0-3",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            yellowCard: [1, -1],
            tackles: [undefined, 1],
          },
          18: {
            teams: ["Ливерпуль", "Вулверхэмптон"],
            result: "2-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 5],
            tackles: [undefined, 1],
          },
          20: {
            teams: ["Фулхэм", "Ливерпуль"],
            result: "2-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
          },
          21: {
            teams: ["Арсенал", "Ливерпуль"],
            result: "0-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
          22: {
            teams: ["Ливерпуль", "Бернли"],
            result: "1-1",
            minutesOnField: [78, 2],
            tackles: [undefined, 2],
          },
          24: {
            teams: ["Ливерпуль", "Ньюкасл"],
            result: "4-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 2],
          },
          25: {
            teams: ["Ливерпуль", "Манчестер Сити"],
            result: "1-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 2],
            shotAfterGoal: [1, 3],
          },
          26: {
            teams: ["Сандерленд", "Ливерпуль"],
            result: "0-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
        },
      },
    },
    gSimeone: {
      firstName: "Джулиано",
      lastName: "Симеоне",
      team: "Атлетико",
      price: {
        laLiga: 7,
      },
      stats: {
        laLiga: {
          15: {
            teams: ["Атлетик Бильбао", "Атлетико"],
            result: "1-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 2],
          },
          16: {
            teams: ["Атлетико", "Валенсия"],
            result: "2-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 1],
          },
          17: {
            teams: ["Жирона", "Атлетико"],
            result: "0-3",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            tackles: [undefined, 2],
          },
          18: {
            teams: ["Реал Сосьедад", "Атлетико"],
            result: "1-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 1],
            assists: [1, 3],
          },
          20: {
            teams: ["Атлетико", "Алавес"],
            result: "1-0",
            minutesOnField: [62, 2],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
            captain: true,
          },
          21: {
            teams: ["Атлетико", "Мальорка"],
            result: "3-0",
            minutesOnField: [79, 2],
            cleanSheet: [true, 1],
          },
          23: {
            teams: ["Атлетико", "Бетис"],
            result: "0-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
          },
        },
      },
    },
    guimaraes: {
      firstName: "Бруно",
      lastName: "Гимарайнс",
      team: "Ньюкасл",
      price: {
        pl: 6.5,
      },
      stats: {
        pl: {
          9: {
            teams: ["Ньюкасл", "Фулхэм"],
            result: "2-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 2],
            goals: [1, 5],
          },
          10: {
            teams: ["Вест Хэм", "Ньюкасл"],
            result: "3-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            yellowCard: [1, -1],
            tackles: [undefined, 2],
            assists: [1, 3],
          },
          11: {
            teams: ["Брентфорд", "Ньюкасл"],
            result: "3-1",
            minutesOnField: [89, 2],
            tackles: [undefined, 1],
          },
          15: {
            teams: ["Ньюкасл", "Бернли"],
            result: "2-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 5],
            tackles: [undefined, 2],
          },
          16: {
            teams: ["Сандерленд", "Ньюкасл"],
            result: "1-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            yellowCard: [1, -1],
            tackles: [undefined, 1],
          },
          17: {
            teams: ["Ньюкасл", "Челси"],
            result: "2-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 2],
          },
          18: {
            teams: ["Манчестер Юнайтед", "Ньюкасл"],
            result: "1-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 1],
          },
          19: {
            teams: ["Бернли", "Ньюкасл"],
            result: "1-3",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 5],
          },
          20: {
            teams: ["Ньюкасл", "Кристал Пэлас"],
            result: "2-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 5],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
          21: {
            teams: ["Ньюкасл", "Лидс"],
            result: "4-3",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 5],
            assists: [1, 3],
          },
          22: {
            teams: ["Вулверхэмптон", "Ньюкасл"],
            result: "0-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
          },
        },
      },
    },
    iWilliams: {
      firstName: "Иньяки",
      lastName: "Уильямс",
      team: "Атлетик Бильбао",
      price: {
        laLiga: 8,
      },
      stats: {
        laLiga: {
          8: {
            teams: ["Атлетик Бильбао", "Мальорка"],
            result: "2-1",
            minutesOnField: [53, 1],
            goals: [1, 5],
          },
          9: {
            teams: ["Эльче", "Атлетик Бильбао"],
            result: "0-0",
            minutesOnField: [45, 1],
          },
        },
      },
    },
    kThuram: {
      firstName: "Хефрен",
      lastName: "Тюрам",
      team: "Ювентус",
      price: {
        ucl: 5.5,
        seriaA: 7,
      },
      stats: {
        ucl: {
          1: {
            teams: ["Ювентус", "Боруссия Дортмунд"],
            result: "4-4",
            minutesOnField: [90, 2],
            tackles: [7, 2],
          },
        },
        seriaA: {
          6: {
            teams: ["Ювентус", "Милан"],
            result: "0-0",
            minutesOnField: [21, 1],
          },
          7: {
            teams: ["Комо", "Ювентус"],
            result: "2-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
          },
          12: {
            teams: ["Фиорентина", "Ювентус"],
            result: "1-1",
            minutesOnField: [66, 2],
          },
          15: {
            teams: ["Болонья", "Ювентус"],
            result: "0-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
          16: {
            teams: ["Ювентус", "Рома"],
            result: "2-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 2],
          },
          17: {
            teams: ["Пиза", "Ювентус"],
            result: "0-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            tackles: [undefined, 2],
          },
          18: {
            teams: ["Ювентус", "Лечче"],
            result: "1-1",
            minutesOnField: [69, 2],
            tackles: [undefined, 1],
          },
          19: {
            teams: ["Сассуоло", "Ювентус"],
            result: "0-3",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
          20: {
            teams: ["Ювентус", "Кремонезе"],
            result: "5-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            tackles: [undefined, 2],
            assists: [1, 3],
          },
          21: {
            teams: ["Кальяри", "Ювентус"],
            result: "1-0",
            minutesOnField: [10, 1],
          },
          22: {
            teams: ["Ювентус", "Наполи"],
            result: "3-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            tackles: [undefined, 2],
          },
          23: {
            teams: ["Парма", "Ювентус"],
            result: "1-4",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 2],
          },
          24: {
            teams: ["Ювентус", "Лацио"],
            result: "2-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
          },
        },
      },
    },
    kudus: {
      firstName: "Мохаммед",
      lastName: "Кудус",
      team: "Тоттенхэм",
      price: {
        ucl: 7,
      },
      stats: {
        ucl: {
          1: {
            teams: ["Тоттенхэм", "Вильярреал"],
            result: "1-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 1],
          },
          3: {
            teams: ["Монако", "Тоттенхэм"],
            result: "0-0",
            minutesOnField: [79, 2],
            cleanSheet: [true, 1],
            tackles: [2, 0],
          },
        },
      },
    },
    leao: {
      firstName: "Рафаэл",
      lastName: "Леау",
      team: "Милан",
      price: {
        seriaA: 9,
      },
      stats: {
        seriaA: {
          13: {
            teams: ["Милан", "Лацио"],
            result: "1-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 5],
            cleanSheet: [true, 1],
          },
          14: {
            teams: ["Торино", "Милан"],
            result: "2-3",
            minutesOnField: [31, 1],
          },
        },
      },
    },
    mbeumo: {
      firstName: "Брайан",
      lastName: "Мбемо",
      team: "Манчестер Юнайтед",
      price: {
        pl: 8.5,
      },
      stats: {
        pl: {
          9: {
            teams: ["Манчестер Юнайтед", "Брайтон"],
            result: "4-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 2],
            goals: [2, 10],
          },
          10: {
            teams: ["Ноттингем Форест", "Манчестер Юнайтед"],
            result: "2-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 2],
          },
          11: {
            teams: ["Тоттенхэм", "Манчестер Юнайтед"],
            result: "2-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 5],
            tackles: [undefined, 1],
          },
          12: {
            teams: ["Манчестер Юнайтед", "Эвертон"],
            result: "0-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            yellowCard: [1, -1],
            tackles: [undefined, 1],
          },
          13: {
            teams: ["Кристал Пэлас", "Манчестер Юнайтед"],
            result: "1-2",
            minutesOnField: [89, 2],
            yellowCard: [1, -1],
            tackles: [undefined, 2],
          },
          14: {
            teams: ["Манчестер Юнайтед", "Вест Хэм"],
            result: "1-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
          },
          23: {
            teams: ["Арсенал", "Манчестер Юнайтед"],
            result: "2-3",
            minutesOnField: [69, 2],
            goals: [1, 5],
          },
          24: {
            teams: ["Манчестер Юнайтед", "Фулхэм"],
            result: "3-2",
            minutesOnField: [89, 2],
            captain: true,
          },
          25: {
            teams: ["Манчестер Юнайтед", "Тоттенхэм"],
            result: "2-0",
            minutesOnField: [87, 2],
            goals: [1, 5],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
          26: {
            teams: ["Вест Хэм", "Манчестер Юнайтед"],
            result: "1-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 2],
            assists: [1, 3],
            captain: true,
          },
        },
      },
    },
    mcTominay: {
      firstName: "Скотт",
      lastName: "Мактоминей",
      team: "Наполи",
      price: {
        ucl: 7,
        seriaA: 11,
      },
      stats: {
        ucl: {
          5: {
            teams: ["Наполи", "Карабах"],
            result: "2-0",
            minutesOnField: [90, 2],
            assists: [1, 3],
            goals: [1, 5],
            cleanSheet: [true, 1],
            tackles: [5, 1],
            playerOfTheMatch: [true, 3],
          },
        },
        seriaA: {
          9: {
            teams: ["Лечче", "Наполи"],
            result: "0-1",
            minutesOnField: [29, 1],
          },
          10: {
            teams: ["Наполи", "Комо"],
            result: "0-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
          11: {
            teams: ["Болонья", "Наполи"],
            result: "2-0",
            minutesOnField: [82, 2],
          },
          22: {
            teams: ["Ювентус", "Наполи"],
            result: "3-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 1],
          },
          23: {
            teams: ["Наполи", "Фиорентина"],
            result: "2-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
          },
        },
      },
    },
    mKone: {
      firstName: "Ману",
      lastName: "Коне",
      team: "Рома",
      price: {
        seriaA: 6.5,
      },
      stats: {
        seriaA: {
          9: {
            teams: ["Рома", "Парма"],
            result: "2-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 2],
          },
          11: {
            teams: ["Рома", "Удинезе"],
            result: "2-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
          12: {
            teams: ["Кремонезе", "Рома"],
            result: "1-3",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 1],
            assists: [1, 3],
          },
          13: {
            teams: ["Рома", "Наполи"],
            result: "0-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 2],
          },
          14: {
            teams: ["Кальяри", "Рома"],
            result: "1-0",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            fullMatch: [true, 1],
            tackles: [undefined, 1],
          },
          15: {
            teams: ["Рома", "Комо"],
            result: "1-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
          16: {
            teams: ["Ювентус", "Рома"],
            result: "2-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            yellowCard: [1, -1],
            tackles: [undefined, 1],
          },
          17: {
            teams: ["Рома", "Дженоа"],
            result: "3-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 5],
            tackles: [undefined, 2],
          },
          18: {
            teams: ["Аталанта", "Рома"],
            result: "1-0",
            minutesOnField: [83, 2],
          },
          19: {
            teams: ["Лечче", "Рома"],
            result: "0-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            tackles: [undefined, 2],
          },
          20: {
            teams: ["Рома", "Сассуоло"],
            result: "2-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 5],
            cleanSheet: [true, 1],
            yellowCard: [1, -1],
          },
          21: {
            teams: ["Торино", "Рома"],
            result: "0-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
          22: {
            teams: ["Рома", "Милан"],
            result: "1-1",
            minutesOnField: [59, 1],
            tackles: [undefined, 1],
          },
        },
      },
    },
    modric: {
      firstName: "Лука",
      lastName: "Модрич",
      team: "Милан",
      price: {
        seriaA: 7,
      },
      stats: {
        seriaA: {
          6: {
            teams: ["Ювентус", "Милан"],
            result: "0-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
            captain: true,
          },
          7: {
            teams: ["Милан", "Фиорентина"],
            result: "2-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 2],
            captain: true,
          },
          8: {
            teams: ["Милан", "Пиза"],
            result: "2-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 2],
            assists: [1, 3],
          },
          9: {
            teams: ["Аталанта", "Милан"],
            result: "1-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 2],
            yellowCard: [1, -1],
            captain: true,
          },
          10: {
            teams: ["Милан", "Рома"],
            result: "1-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            tackles: [undefined, 2],
          },
          11: {
            teams: ["Парма", "Милан"],
            result: "2-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            yellowCard: [1, -1],
            tackles: [undefined, 2],
          },
          12: {
            teams: ["Интер", "Милан"],
            result: "0-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            tackles: [undefined, 2],
          },
          13: {
            teams: ["Милан", "Лацио"],
            result: "1-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            tackles: [undefined, 3],
            captain: true,
          },
          14: {
            teams: ["Торино", "Милан"],
            result: "2-3",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 1],
            captain: true,
          },
          15: {
            teams: ["Милан", "Сассуоло"],
            result: "2-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 1],
          },
          16: {
            teams: ["Комо", "Милан"],
            result: "1-3",
            minutesOnField: [86, 2],
          },
          17: {
            teams: ["Милан", "Верона"],
            result: "3-0",
            minutesOnField: [70, 2],
            cleanSheet: [true, 1],
            shotAfterGoal: [1, 3],
          },
          18: {
            teams: ["Кальяри", "Милан"],
            result: "0-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
          19: {
            teams: ["Милан", "Дженоа"],
            result: "1-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 1],
            shotAfterGoal: [1, 3],
          },
          21: {
            teams: ["Милан", "Лечче"],
            result: "1-0",
            minutesOnField: [3, 1],
          },
          23: {
            teams: ["Болонья", "Милан"],
            result: "0-3",
            minutesOnField: [72, 2],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
          25: {
            teams: ["Пиза", "Милан"],
            result: "1-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 5],
            tackles: [undefined, 2],
          },
        },
      },
    },
    neto: {
      firstName: "Педру",
      lastName: "Нету",
      team: "Челси",
      price: {
        pl: 7.5,
      },
      stats: {
        pl: {
          15: {
            teams: ["Борнмут", "Челси"],
            result: "0-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            yellowCard: [1, -1],
            tackles: [undefined, 1],
          },
          16: {
            teams: ["Челси", "Эвертон"],
            result: "2-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
            assists: [1, 3],
          },
          17: {
            teams: ["Ньюкасл", "Челси"],
            result: "2-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 2],
          },
        },
      },
    },
    nmecha: {
      firstName: "Феликс",
      lastName: "Нмеча",
      team: "Боруссия Дортмунд",
      price: {
        ucl: 5.9,
      },
      stats: {
        ucl: {
          4: {
            teams: ["Манчестер Сити", "Боруссия Дортмунд"],
            result: "4-1",
            minutesOnField: [90, 2],
            tackles: [6, 2],
          },
          6: {
            teams: ["Боруссия Дортмунд", "Буде-Глимт"],
            result: "2-2",
            minutesOnField: [90, 2],
            tackles: [6, 2],
          },
          8: {
            teams: ["Боруссия Дортмунд", "Интер"],
            result: "0-2",
            minutesOnField: [90, 2],
            tackles: [6, 2],
          },
        },
      },
    },
    olise: {
      firstName: "Майкл",
      lastName: "Олисе",
      team: "Бавария",
      price: {
        ucl: 8.2,
      },
      stats: {
        ucl: {
          1: {
            teams: ["Бавария", "Челси"],
            result: "3-1",
            minutesOnField: [90, 2],
            assists: [1, 3],
            yellowCard: [1, -1],
            tackles: [1, 0],
          },
          2: {
            teams: ["Пафос", "Бавария"],
            result: "1-5",
            minutesOnField: [73, 2],
            assists: [2, 6],
            goals: [1, 5],
            tackles: [3, 1],
          },
          3: {
            teams: ["Бавария", "Брюгге"],
            result: "4-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 1],
            tackles: [2, 0],
          },
          4: {
            teams: ["ПСЖ", "Бавария"],
            result: "1-2",
            minutesOnField: [81, 2],
            assists: [1, 3],
            tackles: [1, 0],
          },
          6: {
            teams: ["Бавария", "Спортинг"],
            result: "3-1",
            minutesOnField: [90, 2],
            assists: [1, 3],
            tackles: [2, 0],
          },
          7: {
            teams: ["Бавария", "Юнион"],
            result: "2-0",
            minutesOnField: [89, 2],
            assists: [1, 3],
            cleanSheet: [true, 1],
            yellowCard: [1, -1],
            tackles: [2, 0],
          },
        },
      },
    },
    paz: {
      firstName: "Нико",
      lastName: "Пас",
      team: "Комо",
      price: {
        seriaA: 8,
      },
      stats: {
        seriaA: {
          8: {
            teams: ["Парма", "Комо"],
            result: "0-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
            captain: true,
          },
          9: {
            teams: ["Комо", "Верона"],
            result: "3-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            yellowCard: [1, -1],
            tackles: [undefined, 2],
          },
          12: {
            teams: ["Торино", "Комо"],
            result: "1-5",
            minutesOnField: [84, 2],
            goals: [1, 5],
            tackles: [undefined, 2],
          },
          13: {
            teams: ["Комо", "Сассуоло"],
            result: "2-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            tackles: [undefined, 2],
            assists: [1, 3],
          },
          14: {
            teams: ["Интер", "Комо"],
            result: "4-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
          },
          15: {
            teams: ["Рома", "Комо"],
            result: "1-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            yellowCard: [1, -1],
            tackles: [undefined, 1],
          },
          16: {
            teams: ["Комо", "Милан"],
            result: "1-3",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 1],
          },
          17: {
            teams: ["Лечче", "Комо"],
            result: "0-3",
            minutesOnField: [89, 2],
            goals: [1, 5],
            cleanSheet: [true, 1],
            tackles: [undefined, 3],
            assists: [1, 3],
          },
          18: {
            teams: ["Комо", "Удинезе"],
            result: "1-0",
            minutesOnField: [21, 1],
          },
          19: {
            teams: ["Пиза", "Комо"],
            result: "0-3",
            minutesOnField: [88, 2],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
          20: {
            teams: ["Комо", "Болонья"],
            result: "1-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            yellowCard: [1, -1],
            tackles: [undefined, 1],
          },
          21: {
            teams: ["Лацио", "Комо"],
            result: "0-3",
            minutesOnField: [90, 2],
            goals: [2, 10],
            cleanSheet: [true, 1],
            missingPenalty: [1, -2],
            tackles: [undefined, 1],
          },
          22: {
            teams: ["Комо", "Торино"],
            result: "6-0",
            minutesOnField: [73, 2],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
          23: {
            teams: ["Комо", "Аталанта"],
            result: "0-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            fullMatch: [true, 1],
            missingPenalty: [1, -2],
            tackles: [undefined, 1],
          },
        },
      },
    },
    pedri: {
      firstName: "",
      lastName: "Педри",
      team: "Барселона",
      price: {
        ucl: 7.5,
        laLiga: 8,
      },
      stats: {
        ucl: {
          6: {
            teams: ["Барселона", "Айнтрахт Франкфурт"],
            result: "2-1",
            minutesOnField: [90, 2],
            tackles: [6, 2],
          },
        },
        laLiga: {
          8: {
            teams: ["Севилья", "Барселона"],
            result: "4-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            assists: [1, 3],
            tackles: [undefined, 2],
          },
          9: {
            teams: ["Барселона", "Жирона"],
            result: "2-1",
            minutesOnField: [63, 2],
            goals: [1, 5],
            tackles: [undefined, 2],
          },
          10: {
            teams: ["Реал Мадрид", "Барселона"],
            result: "2-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            redCard: [1, -3],
            captain: true,
          },
          16: {
            teams: ["Барселона", "Осасуна"],
            result: "2-0",
            minutesOnField: [63, 2],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
            assists: [1, 3],
          },
          18: {
            teams: ["Эспаньол", "Барселона"],
            result: "0-2",
            minutesOnField: [26, 1],
          },
          20: {
            teams: ["Реал Сосьедад", "Барселона"],
            result: "2-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 3],
          },
        },
      },
    },
    raphinha: {
      firstName: "",
      lastName: "Рафинья",
      team: "Барселона",
      price: {
        ucl: 9.3,
        laLiga: 11.5,
      },
      stats: {
        ucl: {
          8: {
            teams: ["Барселона", "Копенгаген"],
            result: "4-1",
            minutesOnField: [90, 2],
            goals: [1, 5],
            tackles: [3, 1],
            captain: true,
          },
        },
        laLiga: {
          14: {
            teams: ["Барселона", "Депортиво Алавес"],
            result: "4-1",
            minutesOnField: [60, 2],
            assists: [1, 3],
          },
          16: {
            teams: ["Барселона", "Осасуна"],
            result: "2-0",
            minutesOnField: [88, 2],
            goals: [2, 10],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
            captain: true,
          },
          17: {
            teams: ["Вильярреал", "Барселона"],
            result: "0-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 5],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
            captain: true,
          },
          18: {
            teams: ["Эспаньол", "Барселона"],
            result: "0-2",
            minutesOnField: [64, 2],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
            captain: true,
          },
          19: {
            teams: ["Барселона", "Атлетико"],
            result: "3-1",
            minutesOnField: [73, 2],
            goals: [1, 5],
          },
          21: {
            teams: ["Барселона", "Реал Овьедо"],
            result: "3-0",
            minutesOnField: [60, 2],
            goals: [1, 5],
            cleanSheet: [true, 1],
            captain: true,
          },
          22: {
            teams: ["Эльче", "Барселона"],
            result: "1-3",
            minutesOnField: [45, 1],
            tackles: [undefined, 1],
            captain: true,
          },
        },
      },
    },
    reijnders: {
      firstName: "Тиджани",
      lastName: "Рейндерс",
      team: "Манчестер Сити",
      price: {
        pl: 7,
      },
      stats: {
        pl: {
          7: {
            teams: ["Брентфорд", "Манчестер Сити"],
            result: "0-1",
            minutesOnField: [76, 2],
            cleanSheet: [true, 1],
          },
          8: {
            teams: ["Манчестер Сити", "Эвертон"],
            result: "2-0",
            minutesOnField: [59, 1],
          },
          20: {
            teams: ["Манчестер Сити", "Челси"],
            result: "1-1",
            minutesOnField: [70, 2],
            goals: [1, 5],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
          21: {
            teams: ["Манчестер Сити", "Брайтон"],
            result: "1-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
          },
        },
      },
    },
    rice: {
      firstName: "Деклан",
      lastName: "Райс",
      team: "Арсенал",
      price: {
        pl: 7,
      },
      stats: {
        pl: {
          13: {
            teams: ["Челси", "Арсенал"],
            result: "1-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 1],
          },
          14: {
            teams: ["Арсенал", "Брентфорд"],
            result: "2-0",
            minutesOnField: [83, 2],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
        },
      },
    },
    rogers: {
      firstName: "Морган",
      lastName: "Роджерс",
      team: "Астон Вилла",
      price: {
        pl: 8,
      },
      stats: {
        pl: {
          22: {
            teams: ["Астон Вилла", "Эвертон"],
            result: "0-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 1],
          },
          23: {
            teams: ["Ньюкасл", "Астон Вилла"],
            result: "0-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            tackles: [undefined, 2],
            assists: [1, 3],
          },
          24: {
            teams: ["Астон Вилла", "Брентфорд"],
            result: "0-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
          },
        },
      },
    },
    semenyo: {
      firstName: "Антуан",
      lastName: "Семеньо",
      team: "Борнмут/Манчестер Сити",
      price: {
        pl: 8,
      },
      stats: {
        pl: {
          11: {
            teams: ["Астон Вилла", "Борнмут"],
            result: "4-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            missingPenalty: [1, -2],
            tackles: [undefined, 1],
          },
          13: {
            teams: ["Сандерленд", "Борнмут"],
            result: "3-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            yellowCard: [1, -1],
            tackles: [undefined, 1],
          },
          14: {
            teams: ["Борнмут", "Эвертон"],
            result: "0-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 2],
          },
          17: {
            teams: ["Борнмут", "Бернли"],
            result: "1-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 5],
            tackles: [undefined, 2],
          },
          18: {
            teams: ["Брентфорд", "Борнмут"],
            result: "4-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 5],
            tackles: [undefined, 1],
          },
          19: {
            teams: ["Челси", "Борнмут"],
            result: "2-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 1],
            shotAfterGoal: [1, 3],
            concedingPenalty: [1, -2],
          },
          23: {
            teams: ["Манчестер Сити", "Вулверхэмптон"],
            result: "2-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 5],
            cleanSheet: [true, 1],
          },
        },
      },
    },
    szoboszlai: {
      firstName: "Доминик",
      lastName: "Собослаи",
      team: "Ливерпуль",
      price: {
        pl: 7,
      },
      stats: {
        pl: {
          16: {
            teams: ["Ливерпуль", "Брайтон"],
            result: "2-0",
            minutesOnField: [83, 2],
            cleanSheet: [true, 1],
          },
          17: {
            teams: ["Тоттенхэм", "Ливерпуль"],
            result: "1-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            yellowCard: [1, -1],
            tackles: [undefined, 1],
          },
          20: {
            teams: ["Фулхэм", "Ливерпуль"],
            result: "2-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 1],
          },
          21: {
            teams: ["Арсенал", "Ливерпуль"],
            result: "0-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
          },
          22: {
            teams: ["Ливерпуль", "Бернли"],
            result: "1-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            missingPenalty: [1, -2],
            tackles: [undefined, 1],
          },
          23: {
            teams: ["Борнмут", "Ливерпуль"],
            result: "3-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 5],
            tackles: [undefined, 1],
            assists: [1, 3],
          },
          24: {
            teams: ["Ливерпуль", "Ньюкасл"],
            result: "4-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 1],
          },
          25: {
            teams: ["Ливерпуль", "Манчестер Сити"],
            result: "1-2",
            minutesOnField: [90, 2],
            goals: [1, 5],
            redCard: [1, -3],
            tackles: [undefined, 2],
            captain: true,
          },
        },
      },
    },
    vargas: {
      firstName: "Рубен",
      lastName: "Варгас",
      team: "Севилья",
      price: {
        laLiga: 6.5,
      },
      stats: {
        laLiga: {
          13: {
            teams: ["Эспаньол", "Севилья"],
            result: "2-1",
            minutesOnField: [54, 1],
            tackles: [undefined, 1],
          },
        },
      },
    },
    xhaka: {
      firstName: "Гранит",
      lastName: "Джака",
      team: "Сандерленд",
      price: {
        pl: 5,
      },
      stats: {
        pl: {
          9: {
            teams: ["Челси", "Сандерленд"],
            result: "1-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
          },
          12: {
            teams: ["Фулхэм", "Сандерленд"],
            result: "1-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 1],
          },
          13: {
            teams: ["Сандерленд", "Борнмут"],
            result: "3-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 1],
            assists: [1, 3],
          },
          14: {
            teams: ["Ливерпуль", "Сандерленд"],
            result: "1-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
          },
          16: {
            teams: ["Сандерленд", "Ньюкасл"],
            result: "1-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
          },
          21: {
            teams: ["Брентфорд", "Сандерленд"],
            result: "3-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 2],
          },
        },
      },
    },
    yamal: {
      firstName: "Ламин",
      lastName: "Ямаль",
      team: "Барселона",
      price: {
        ucl: 9.9,
        laLiga: 10.5,
      },
      stats: {
        ucl: {
          5: {
            teams: ["Челси", "Барселона"],
            result: "3-0",
            minutesOnField: [80, 2],
            tackles: [4, 1],
          },
        },
        laLiga: {
          23: {
            teams: ["Барселона", "Мальорка"],
            result: "3-0",
            minutesOnField: [78, 2],
            goals: [1, 5],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
        },
      },
    },
    yıldız: {
      firstName: "Кенан",
      lastName: "Йылдыз",
      team: "Ювентус",
      price: {
        ucl: 6.8,
        seriaA: 8.5,
      },
      stats: {
        ucl: {
          7: {
            teams: ["Ювентус", "Бенфика"],
            result: "2-0",
            minutesOnField: [82, 2],
            cleanSheet: [true, 1],
          },
        },
        seriaA: {
          6: {
            teams: ["Ювентус", "Милан"],
            result: "0-0",
            minutesOnField: [69, 2],
            cleanSheet: [true, 1],
          },
          7: {
            teams: ["Комо", "Ювентус"],
            result: "2-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 2],
          },
          8: {
            teams: ["Лацио", "Ювентус"],
            result: "1-0",
            minutesOnField: [45, 1],
          },
          15: {
            teams: ["Болонья", "Ювентус"],
            result: "0-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
            assists: [1, 3],
          },
          16: {
            teams: ["Ювентус", "Рома"],
            result: "2-1",
            minutesOnField: [89, 2],
            tackles: [undefined, 2],
            captain: true,
          },
          17: {
            teams: ["Пиза", "Ювентус"],
            result: "0-2",
            minutesOnField: [89, 2],
            goals: [1, 5],
            cleanSheet: [true, 1],
            tackles: [undefined, 2],
            captain: true,
          },
          18: {
            teams: ["Ювентус", "Лечче"],
            result: "1-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            shotAfterGoal: [1, 3],
            captain: true,
          },
          19: {
            teams: ["Сассуоло", "Ювентус"],
            result: "0-3",
            minutesOnField: [85, 2],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
            captain: true,
          },
          20: {
            teams: ["Ювентус", "Кремонезе"],
            result: "5-0",
            minutesOnField: [62, 2],
            goals: [1, 5],
            cleanSheet: [true, 1],
            missingPenalty: [1, -2],
          },
          21: {
            teams: ["Кальяри", "Ювентус"],
            result: "1-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            yellowCard: [1, -1],
            tackles: [undefined, 1],
          },
          22: {
            teams: ["Ювентус", "Наполи"],
            result: "3-0",
            minutesOnField: [87, 2],
            goals: [1, 5],
            cleanSheet: [true, 1],
            yellowCard: [1, -1],
          },
          23: {
            teams: ["Парма", "Ювентус"],
            result: "1-4",
            minutesOnField: [45, 1],
          },
          24: {
            teams: ["Ювентус", "Лацио"],
            result: "2-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 2],
          },
        },
      },
    },
    zamboAnguissa: {
      firstName: "Андре",
      lastName: "Замбо-Ангисса",
      team: "Наполи",
      price: {
        seriaA: 7.5,
        ucl: 5.5,
      },
      stats: {
        seriaA: {
          6: {
            teams: ["Наполи", "Дженоа"],
            result: "2-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 5],
            shotAfterGoal: [1, 3],
          },
          7: {
            teams: ["Торино", "Наполи"],
            result: "1-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
          },
          8: {
            teams: ["Наполи", "Интер"],
            result: "3-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 1],
            goals: [1, 5],
          },
          9: {
            teams: ["Лечче", "Наполи"],
            result: "0-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 5],
            cleanSheet: [true, 1],
            tackles: [undefined, 2],
          },
          10: {
            teams: ["Наполи", "Комо"],
            result: "0-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            yellowCard: [1, -1],
            tackles: [undefined, 2],
          },
          11: {
            teams: ["Болонья", "Наполи"],
            result: "2-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 3],
          },
        },
        ucl: {
          4: {
            teams: ["Наполи", "Айнтрахт Франкфурт"],
            result: "0-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 1],
            tackles: [2, 0],
          },
        },
      },
    },
    zubimendi: {
      firstName: "Мартин",
      lastName: "Субименди",
      team: "Арсенал",
      price: {
        pl: 6.5,
      },
      stats: {
        pl: {
          7: {
            teams: ["Арсенал", "Вест Хэм"],
            result: "2-0",
            minutesOnField: [60, 2],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
          8: {
            teams: ["Фулхэм", "Арсенал"],
            result: "0-1",
            minutesOnField: [90, 2],
            cleanSheet: [true, 1],
            fullMatch: [true, 1],
          },
          9: {
            teams: ["Арсенал", "Кристал Пэлас"],
            result: "1-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            cleanSheet: [true, 1],
            tackles: [undefined, 1],
          },
          10: {
            teams: ["Бернли", "Арсенал"],
            result: "0-2",
            minutesOnField: [77, 2],
            cleanSheet: [true, 1],
          },
        },
      },
    },
  },
  forwards: {
    aAdams: {
      firstName: "Адамс",
      lastName: "Акор",
      team: "Севилья",
      price: {
        laLiga: 6,
      },
      stats: {
        laLiga: {
          20: {
            teams: ["Эльче", "Севилья"],
            result: "2-2",
            minutesOnField: [45, 1],
            goals: [2, 8],
            tackles: [undefined, 1],
          },
          22: {
            teams: ["Мальорка", "Севилья"],
            result: "4-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
          },
          23: {
            teams: ["Севилья", "Жирона"],
            result: "1-1",
            minutesOnField: [74, 2],
          },
        },
      },
    },
    alvarez: {
      firstName: "Хулиан",
      lastName: "Альварес",
      team: "Атлетико",
      price: {
        laLiga: 9.5,
      },
      stats: {
        laLiga: {
          8: {
            teams: ["Сельта", "Атлетико"],
            result: "1-1",
            minutesOnField: [81, 2],
            captain: true,
          },
          9: {
            teams: ["Атлетико", "Осасуна"],
            result: "1-0",
            minutesOnField: [82, 2],
            captain: true,
          },
          10: {
            teams: ["Бетис", "Атлетико"],
            result: "0-2",
            minutesOnField: [60, 2],
            assists: [1, 3],
          },
          11: {
            teams: ["Атлетико", "Севилья"],
            result: "3-0",
            minutesOnField: [86, 2],
            goals: [1, 4],
            tackles: [undefined, 1],
            captain: true,
          },
          12: {
            teams: ["Атлетико", "Леванте"],
            result: "3-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 1],
            assists: [1, 3],
            captain: true,
          },
          13: {
            teams: ["Хетафе", "Атлетико"],
            result: "0-1",
            minutesOnField: [59, 1],
            yellowCard: [1, -1],
            captain: true,
          },
          14: {
            teams: ["Атлетико", "Реал Овьедо"],
            result: "2-0",
            minutesOnField: [27, 1],
          },
          15: {
            teams: ["Атлетик Бильбао", "Атлетико"],
            result: "1-0",
            minutesOnField: [66, 2],
          },
          16: {
            teams: ["Атлетико", "Валенсия"],
            result: "2-1",
            minutesOnField: [59, 1],
          },
          17: {
            teams: ["Жирона", "Атлетико"],
            result: "0-3",
            minutesOnField: [77, 2],
            tackles: [undefined, 1],
            assists: [1, 3],
          },
          18: {
            teams: ["Реал Сосьедад", "Атлетико"],
            result: "1-1",
            minutesOnField: [60, 2],
          },
          19: {
            teams: ["Барселона", "Атлетико"],
            result: "3-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
          },
          20: {
            teams: ["Атлетико", "Алавес"],
            result: "1-0",
            minutesOnField: [62, 2],
            tackles: [undefined, 1],
          },
        },
      },
    },
    bonny: {
      firstName: "Анж-Йоан",
      lastName: "Бонни",
      team: "Интер",
      price: {
        seriaA: 6.5,
      },
      stats: {
        seriaA: {
          8: {
            teams: ["Наполи", "Интер"],
            result: "3-1",
            minutesOnField: [62, 2],
          },
          9: {
            teams: ["Интер", "Фиорентина"],
            result: "3-0",
            minutesOnField: [13, 1],
            earnedPenalty: [1, 3],
          },
          10: {
            teams: ["Верона", "Интер"],
            result: "1-2",
            minutesOnField: [55, 1],
          },
          11: {
            teams: ["Интер", "Лацио"],
            result: "2-0",
            minutesOnField: [81, 2],
            goals: [1, 4],
            tackles: [undefined, 1],
          },
        },
      },
    },
    cucho: {
      firstName: "Кучо",
      lastName: "Эрнандес",
      team: "Бетис",
      price: {
        laLiga: 7,
      },
      stats: {
        laLiga: {
          19: {
            teams: ["Реал Овьедо", "Бетис"],
            result: "1-1",
            minutesOnField: [80, 2],
            tackles: [undefined, 1],
            captain: true,
          },
        },
      },
    },
    jDavid: {
      firstName: "Джонатан",
      lastName: "Дэвид",
      team: "Ювентус",
      price: {
        seriaA: 9,
      },
      stats: {
        seriaA: {
          7: {
            teams: ["Ювентус", "Рома"],
            result: "2-1",
            minutesOnField: [8, 1],
            tackles: [undefined, 1],
          },
          24: {
            teams: ["Ювентус", "Лацио"],
            result: "2-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 1],
          },
        },
      },
    },
    jPedro: {
      firstName: "Жоао",
      lastName: "Педро",
      team: "Челси",
      price: {
        pl: 8,
      },
      stats: {
        pl: {
          25: {
            teams: ["Вулверхэмптон", "Челси"],
            result: "1-3",
            minutesOnField: [75, 2],
            earnedPenalty: [2, 6],
          },
          26: {
            teams: ["Челси", "Лидс"],
            result: "2-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 4],
            earnedPenalty: [1, 3],
          },
        },
      },
    },
    davis: {
      firstName: "Кинан",
      lastName: "Дэвис",
      team: "Удинезе",
      price: {
        seriaA: 5.5,
      },
      stats: {
        seriaA: {
          7: {
            teams: ["Кремонезе", "Удинезе"],
            result: "1-1",
            minutesOnField: [15, 1],
          },
          22: {
            teams: ["Верона", "Удинезе"],
            result: "1-3",
            minutesOnField: [84, 2],
            goals: [1, 4],
            tackles: [undefined, 2],
          },
          23: {
            teams: ["Удинезе", "Рома"],
            result: "1-0",
            minutesOnField: [56, 1],
            yellowCard: [1, -1],
            shotAfterGoal: [1, 3],
          },
        },
      },
    },
    dSimeone: {
      firstName: "Джованни",
      lastName: "Симеоне",
      team: "Торино",
      price: {
        seriaA: 6,
      },
      stats: {
        seriaA: {
          8: {
            teams: ["Торино", "Дженоа"],
            result: "2-1",
            minutesOnField: [83, 2],
          },
          9: {
            teams: ["Болонья", "Торино"],
            result: "0-0",
            minutesOnField: [33, 1],
          },
          10: {
            teams: ["Торино", "Пиза"],
            result: "2-2",
            minutesOnField: [78, 2],
            goals: [1, 4],
            tackles: [undefined, 1],
          },
        },
      },
    },
    ekitike: {
      firstName: "Юго",
      lastName: "Экитике",
      team: "Ливерпуль",
      price: {
        ucl: 8,
        pl: 8.5,
      },
      stats: {
        ucl: {
          8: {
            teams: ["Ливерпуль", "Карабах"],
            result: "6-0",
            minutesOnField: [67, 2],
            assists: [1, 3],
            goals: [1, 4],
            outsideTheBox: [1, 1],
          },
        },
        pl: {
          22: {
            teams: ["Ливерпуль", "Бернли"],
            result: "1-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            captain: true,
          },
          23: {
            teams: ["Борнмут", "Ливерпуль"],
            result: "3-2",
            minutesOnField: [31, 1],
            captain: true,
          },
          24: {
            teams: ["Ливерпуль", "Ньюкасл"],
            result: "4-1",
            minutesOnField: [84, 2],
            goals: [2, 8],
          },
          25: {
            teams: ["Ливерпуль", "Манчестер Сити"],
            result: "1-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
          },
          26: {
            teams: ["Сандерленд", "Ливерпуль"],
            result: "0-1",
            minutesOnField: [88, 2],
            tackles: [undefined, 1],
          },
        },
      },
    },
    ettaEyong: {
      firstName: "Карл",
      lastName: "Этта Йонг",
      team: "Леванте",
      price: {
        laLiga: 5,
      },
      stats: {
        laLiga: {
          8: {
            teams: ["Реал Овьедо", "Леванте"],
            result: "0-2",
            minutesOnField: [87, 2],
            goals: [1, 4],
            tackles: [undefined, 1],
          },
          9: {
            teams: ["Леванте", "Райо Вальекано"],
            result: "0-3",
            minutesOnField: [74, 2],
          },
          10: {
            teams: ["Мальорка", "Леванте"],
            result: "1-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 4],
            tackles: [undefined, 2],
            yellowCard: [1, -1],
          },
          11: {
            teams: ["Леванте", "Сельта"],
            result: "1-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            missingPenalty: [1, -2],
          },
          12: {
            teams: ["Атлетико", "Леванте"],
            result: "3-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 1],
          },
          13: {
            teams: ["Валенсия", "Леванте"],
            result: "1-0",
            minutesOnField: [70, 2],
          },
          14: {
            teams: ["Леванте", "Атлетик Бильбао"],
            result: "0-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
          },
          15: {
            teams: ["Осасуна", "Леванте"],
            result: "2-0",
            minutesOnField: [77, 2],
            tackles: [undefined, 1],
          },
          19: {
            teams: ["Леванте", "Эспаньол"],
            result: "1-1",
            minutesOnField: [2, 1],
          },
          21: {
            teams: ["Леванте", "Эльче"],
            result: "3-2",
            minutesOnField: [74, 2],
            tackles: [undefined, 1],
          },
          22: {
            teams: ["Леванте", "Атлетико"],
            result: "0-0",
            minutesOnField: [31, 1],
          },
          23: {
            teams: ["Атлетик", "Леванте"],
            result: "4-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
          },
        },
      },
    },
    haaland: {
      firstName: "Эрлинг",
      lastName: "Холанд",
      team: "Манчестер Сити",
      price: {
        ucl: 10.7,
        pl: 12,
      },
      stats: {
        ucl: {
          3: {
            teams: ["Вильярреал", "Манчестер Сити"],
            result: "0-2",
            minutesOnField: [86, 2],
            goals: [1, 4],
          },
          4: {
            teams: ["Манчестер Сити", "Вильярреал"],
            result: "4-1",
            minutesOnField: [86, 2],
            goals: [1, 4],
            captain: true,
          },
          5: {
            teams: ["Манчестер Сити", "Байер"],
            result: "0-2",
            minutesOnField: [25, 1],
            tackles: [1, 0],
          },
          6: {
            teams: ["Реал Мадрид", "Манчестер Сити"],
            result: "1-2",
            minutesOnField: [70, 2],
            goals: [1, 4],
            earnedPenalty: [1, 2],
            captain: true,
          },
          8: {
            teams: ["Манчестер Сити", "Галатасарай"],
            result: "2-0",
            minutesOnField: [90, 2],
            goals: [1, 4],
            tackles: [1, 0],
          },
        },
        pl: {
          7: {
            teams: ["Брентфорд", "Манчестер Сити"],
            result: "0-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 4],
            captain: true,
          },
          8: {
            teams: ["Манчестер Сити", "Эвертон"],
            result: "2-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [2, 8],
            captain: true,
          },
          9: {
            teams: ["Астон Вилла", "Манчестер Сити"],
            result: "1-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            captain: true,
          },
          10: {
            teams: ["Манчестер Сити", "Борнмут"],
            result: "3-1",
            minutesOnField: [82, 2],
            goals: [2, 8],
            captain: true,
          },
          11: {
            teams: ["Манчестер Сити", "Ливерпуль"],
            result: "3-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 4],
            missingPenalty: [1, -2],
          },
          12: {
            teams: ["Ньюкасл", "Манчестер Сити"],
            result: "2-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            captain: true,
          },
          13: {
            teams: ["Манчестер Сити", "Лидс"],
            result: "3-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            captain: true,
          },
          14: {
            teams: ["Фулхэм", "Манчестер Сити"],
            result: "4-5",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 4],
            assists: [2, 6],
            captain: true,
          },
          15: {
            teams: ["Манчестер Сити", "Сандерленд"],
            result: "3-0",
            minutesOnField: [69, 2],
            captain: true,
          },
          16: {
            teams: ["Кристал Пэлас", "Манчестер Сити"],
            result: "0-3",
            minutesOnField: [89, 2],
            goals: [2, 8],
            captain: true,
          },
          17: {
            teams: ["Манчестер Сити", "Вест Хэм"],
            result: "3-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [2, 8],
            assists: [1, 3],
            captain: true,
          },
          18: {
            teams: ["Ноттингем Форест", "Манчестер Сити"],
            result: "1-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            captain: true,
          },
          19: {
            teams: ["Сандерленд", "Манчестер Сити"],
            result: "0-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            captain: true,
          },
          20: {
            teams: ["Манчестер Сити", "Челси"],
            result: "1-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 1],
            captain: true,
          },
          21: {
            teams: ["Манчестер Сити", "Брайтон"],
            result: "1-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 4],
            captain: true,
          },
        },
      },
    },
    kane: {
      firstName: "Харри",
      lastName: "Кейн",
      team: "Бавария",
      price: {
        ucl: 10.8,
      },
      stats: {
        ucl: {
          1: {
            teams: ["Бавария", "Челси"],
            result: "3-1",
            minutesOnField: [89, 2],
            goals: [2, 8],
            earnedPenalty: [1, 2],
            tackles: [2, 0],
            playerOfTheMatch: [true, 3],
          },
          2: {
            teams: ["Пафос", "Бавария"],
            result: "1-5",
            minutesOnField: [64, 2],
            goals: [2, 8],
            playerOfTheMatch: [true, 3],
            captain: true,
          },
          3: {
            teams: ["Бавария", "Брюгге"],
            result: "4-0",
            minutesOnField: [69, 2],
            goals: [1, 4],
            tackles: [1, 0],
            captain: true,
          },
          4: {
            teams: ["ПСЖ", "Бавария"],
            result: "1-2",
            minutesOnField: [88, 2],
            tackles: [2, 0],
          },
          7: {
            teams: ["Бавария", "Юнион"],
            result: "2-0",
            minutesOnField: [90, 2],
            goals: [2, 8],
            missingPenalty: [1, -2],
            earnedPenalty: [1, 2],
            tackles: [2, 0],
            playerOfTheMatch: [true, 3],
            captain: true,
          },
        },
      },
    },
    kean: {
      firstName: "Мойзе",
      lastName: "Кин",
      team: "Фиорентина",
      price: {
        seriaA: 10,
      },
      stats: {
        seriaA: {
          10: {
            teams: ["Фиорентина", "Лечче"],
            result: "0-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            yellowCard: [1, -1],
          },
          12: {
            teams: ["Фиорентина", "Ювентус"],
            result: "1-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 2],
            assists: [1, 3],
          },
          16: {
            teams: ["Фиорентина", "Удинезе"],
            result: "5-1",
            minutesOnField: [71, 2],
            goals: [2, 8],
          },
        },
      },
    },
    lMartinez: {
      firstName: "Лаутаро",
      lastName: "Мартинес",
      team: "Интер",
      price: {
        seriaA: 10.5,
      },
      stats: {
        seriaA: {
          14: {
            teams: ["Интер", "Комо"],
            result: "4-0",
            minutesOnField: [85, 2],
            goals: [1, 4],
          },
          15: {
            teams: ["Дженоа", "Интер"],
            result: "1-2",
            minutesOnField: [84, 2],
            goals: [1, 4],
            assists: [1, 3],
            captain: true,
          },
          16: {
            teams: ["Интер", "Лечче"],
            result: "1-0",
            minutesOnField: [18, 1],
            shotAfterGoal: [1, 3],
            captain: true,
          },
          17: {
            teams: ["Аталанта", "Интер"],
            result: "0-1",
            minutesOnField: [84, 2],
            goals: [1, 4],
          },
          18: {
            teams: ["Интер", "Болонья"],
            result: "3-1",
            minutesOnField: [76, 2],
            goals: [1, 4],
            tackles: [undefined, 1],
            assists: [1, 3],
          },
          19: {
            teams: ["Парма", "Интер"],
            result: "0-2",
            minutesOnField: [85, 2],
          },
          20: {
            teams: ["Интер", "Наполи"],
            result: "2-2",
            minutesOnField: [87, 2],
            tackles: [undefined, 1],
            captain: true,
          },
          21: {
            teams: ["Удинезе", "Интер"],
            result: "0-1",
            minutesOnField: [88, 2],
            goals: [1, 4],
            captain: true,
          },
          22: {
            teams: ["Интер", "Пиза"],
            result: "6-2",
            minutesOnField: [80, 2],
            goals: [1, 4],
            yellowCard: [1, -1],
            tackles: [undefined, 1],
            captain: true,
          },
          23: {
            teams: ["Кремонезе", "Интер"],
            result: "0-2",
            minutesOnField: [74, 2],
            goals: [1, 4],
            captain: true,
          },
          24: {
            teams: ["Сассуоло", "Интер"],
            result: "0-5",
            minutesOnField: [76, 2],
            goals: [1, 4],
            tackles: [undefined, 1],
            captain: true,
          },
        },
      },
    },
    mateta: {
      firstName: "Жан-Филипп",
      lastName: "Матета",
      team: "Кристал Пэлас",
      price: {
        pl: 7.5,
      },
      stats: {
        pl: {
          7: {
            teams: ["Эвертон", "Кристал Пэлас"],
            result: "2-1",
            minutesOnField: [70, 2],
          },
          8: {
            teams: ["Кристал Пэлас", "Борнмут"],
            result: "3-3",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [3, 12],
          },
          10: {
            teams: ["Кристал Пэлас", "Брентфорд"],
            result: "2-0",
            minutesOnField: [89, 2],
            goals: [1, 4],
          },
          11: {
            teams: ["Кристал Пэлас", "Брайтон"],
            result: "0-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
          },
          12: {
            teams: ["Вулверхэмптон", "Кристал Пэлас"],
            result: "0-2",
            minutesOnField: [60, 2],
          },
          17: {
            teams: ["Лидс", "Кристал Пэлас"],
            result: "4-1",
            minutesOnField: [77, 2],
          },
          18: {
            teams: ["Кристал Пэлас", "Тоттенхэм"],
            result: "0-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 1],
          },
          19: {
            teams: ["Кристал Пэлас", "Фулхэм"],
            result: "1-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 4],
            tackles: [undefined, 1],
          },
          20: {
            teams: ["Ньюкасл", "Кристал Пэлас"],
            result: "2-0",
            minutesOnField: [87, 2],
            tackles: [undefined, 1],
          },
          21: {
            teams: ["Кристал Пэлас", "Астон Вилла"],
            result: "0-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 1],
          },
          22: {
            teams: ["Сандерленд", "Кристал Пэлас"],
            result: "2-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
          },
        },
      },
    },
    mbappe: {
      firstName: "Килиан",
      lastName: "Мбаппе",
      team: "Реал Мадрид",
      price: {
        ucl: 11,
        laLiga: 11.5,
      },
      stats: {
        ucl: {
          1: {
            teams: ["Реал Мадрид", "Марсель"],
            result: "2-1",
            minutesOnField: [90, 2],
            goals: [2, 8],
            playerOfTheMatch: [true, 3],
            captain: true,
          },
          2: {
            teams: ["Кайрат", "Реал Мадрид"],
            result: "0-5",
            minutesOnField: [81, 2],
            goals: [3, 12],
            outsideTheBox: [1, 1],
            playerOfTheMatch: [true, 3],
          },
          3: {
            teams: ["Реал Мадрид", "Ювентус"],
            result: "1-0",
            minutesOnField: [90, 2],
            tackles: [1, 0],
          },
          4: {
            teams: ["Ливерпуль", "Реал Мадрид"],
            result: "1-0",
            minutesOnField: [90, 2],
          },
          5: {
            teams: ["Олимпиакос", "Реал Мадрид"],
            result: "3-4",
            minutesOnField: [90, 2],
            goals: [4, 16],
            outsideTheBox: [1, 1],
            playerOfTheMatch: [true, 3],
            captain: true,
          },
          7: {
            teams: ["Реал Мадрид", "Монако"],
            result: "6-1",
            minutesOnField: [90, 2],
            goals: [2, 8],
          },
          8: {
            teams: ["Бенфика", "Реал Мадрид"],
            result: "4-2",
            minutesOnField: [90, 2],
            goals: [2, 8],
          },
        },
        laLiga: {
          8: {
            teams: ["Реал Мадрид", "Вильярреал"],
            result: "3-1",
            minutesOnField: [83, 2],
            goals: [1, 4],
            assists: [1, 3],
          },
          9: {
            teams: ["Хетафе", "Реал Мадрид"],
            result: "0-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 4],
            tackles: [undefined, 1],
          },
          10: {
            teams: ["Реал Мадрид", "Барселона"],
            result: "2-1",
            minutesOnField: [89, 2],
            goals: [1, 4],
            missingPenalty: [1, -2],
          },
          11: {
            teams: ["Реал Мадрид", "Валенсия"],
            result: "4-0",
            minutesOnField: [79, 2],
            goals: [2, 8],
          },
          12: {
            teams: ["Райо Вальекано", "Реал Мадрид"],
            result: "0-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
          },
          13: {
            teams: ["Эльче", "Реал Мадрид"],
            result: "2-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            yellowCard: [1, -1],
            assists: [1, 3],
          },
          14: {
            teams: ["Жирона", "Реал Мадрид"],
            result: "1-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 4],
            captain: true,
          },
          15: {
            teams: ["Реал Мадрид", "Сельта"],
            result: "0-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            captain: true,
          },
          16: {
            teams: ["Депортиво Алавес", "Реал Мадрид"],
            result: "1-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 4],
          },
          17: {
            teams: ["Реал Мадрид", "Севилья"],
            result: "2-0",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 4],
          },
          19: {
            teams: ["Атлетик Бильбао", "Реал Мадрид"],
            result: "0-3",
            minutesOnField: [78, 2],
            goals: [2, 8],
            assists: [1, 3],
            captain: true,
          },
          21: {
            teams: ["Вильярреал", "Реал Мадрид"],
            result: "0-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [2, 8],
          },
          22: {
            teams: ["Реал Мадрид", "Райо Вальекано"],
            result: "2-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 4],
          },
          23: {
            teams: ["Валенсия", "Реал Мадрид"],
            result: "0-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 4],
            captain: true,
          },
        },
      },
    },
    mThuram: {
      firstName: "Маркус",
      lastName: "Тюрам",
      team: "Интер",
      price: {
        ucl: 8.3,
        seriaA: 9.5,
      },
      stats: {
        ucl: {
          2: {
            teams: ["Интер", "Славия"],
            result: "3-0",
            minutesOnField: [66, 2],
            assists: [1, 3],
            tackles: [1, 0],
            playerOfTheMatch: [true, 3],
          },
        },
        seriaA: {
          12: {
            teams: ["Интер", "Милан"],
            result: "0-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
          },
          13: {
            teams: ["Пиза", "Интер"],
            result: "0-2",
            minutesOnField: [67, 2],
          },
          14: {
            teams: ["Интер", "Комо"],
            result: "4-0",
            minutesOnField: [77, 2],
            goals: [1, 4],
          },
          15: {
            teams: ["Дженоа", "Интер"],
            result: "1-2",
            minutesOnField: [16, 1],
          },
          16: {
            teams: ["Интер", "Лечче"],
            result: "1-0",
            minutesOnField: [87, 2],
            yellowCard: [1, -1],
          },
          17: {
            teams: ["Аталанта", "Интер"],
            result: "0-1",
            minutesOnField: [64, 2],
          },
          18: {
            teams: ["Интер", "Болонья"],
            result: "3-1",
            minutesOnField: [83, 2],
            goals: [1, 4],
            tackles: [undefined, 1],
          },
          19: {
            teams: ["Парма", "Интер"],
            result: "0-2",
            minutesOnField: [11, 1],
            goals: [1, 4],
            yellowCard: [1, -1],
          },
          20: {
            teams: ["Интер", "Наполи"],
            result: "2-2",
            minutesOnField: [83, 2],
            tackles: [undefined, 1],
            assists: [1, 3],
          },
        },
      },
    },
    pavlidis: {
      firstName: "Вангелис",
      lastName: "Павлидис",
      team: "Бенфика",
      price: {
        ucl: 7.1,
      },
      stats: {
        ucl: {
          1: {
            teams: ["Бенфика", "Карабах"],
            result: "2-3",
            minutesOnField: [79, 2],
            goals: [1, 4],
            tackles: [3, 1],
          },
          5: {
            teams: ["Аякс", "Бенфика"],
            result: "0-2",
            minutesOnField: [89, 2],
          },
        },
      },
    },
    vlahovic: {
      firstName: "Душан",
      lastName: "Влахович",
      team: "Ювентус",
      price: {
        seriaA: 8.5,
      },
      stats: {
        seriaA: {
          6: {
            teams: ["Ювентус", "Милан"],
            result: "0-0",
            minutesOnField: [21, 1],
          },
          13: {
            teams: ["Ювентус", "Кальяри"],
            result: "2-1",
            minutesOnField: [31, 1],
          },
        },
      },
    },
    welbeck: {
      firstName: "Дэнни",
      lastName: "Уэлбек",
      team: "Брайтон",
      price: {
        pl: 7,
      },
      stats: {
        pl: {
          7: {
            teams: ["Вулверхэмптон", "Брайтон"],
            result: "1-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            yellowCard: [1, -1],
          },
          10: {
            teams: ["Брайтон", "Лидс"],
            result: "3-0",
            minutesOnField: [81, 2],
            goals: [1, 4],
            tackles: [undefined, 1],
          },
          11: {
            teams: ["Кристал Пэлас", "Брайтон"],
            result: "0-0",
            minutesOnField: [85, 2],
          },
          12: {
            teams: ["Брайтон", "Брентфорд"],
            result: "2-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 4],
          },
          13: {
            teams: ["Ноттингем Форест", "Брайтон"],
            result: "0-2",
            minutesOnField: [65, 2],
            tackles: [undefined, 1],
          },
          14: {
            teams: ["Брайтон", "Астон Вилла"],
            result: "3-4",
            minutesOnField: [23, 1],
          },
          15: {
            teams: ["Брайтон", "Вест Хэм"],
            result: "1-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
          },
          19: {
            teams: ["Вест Хэм", "Брайтон"],
            result: "2-2",
            minutesOnField: [83, 2],
            goals: [1, 4],
            missingPenalty: [1, -2],
            yellowCard: [1, -1],
          },
          23: {
            teams: ["Фулхэм", "Брайтон"],
            result: "2-1",
            minutesOnField: [88, 2],
          },
          24: {
            teams: ["Брайтон", "Эвертон"],
            result: "1-1",
            minutesOnField: [70, 2],
            tackles: [undefined, 1],
          },
          26: {
            teams: ["Астон Вилла", "Брайтон"],
            result: "1-0",
            minutesOnField: [81, 2],
          },
        },
      },
    },
    woltemade: {
      firstName: "Ник",
      lastName: "Вольтемаде",
      team: "Ньюкасл",
      price: {
        pl: 7,
      },
      stats: {
        pl: {
          8: {
            teams: ["Брайтон", "Ньюкасл"],
            result: "2-1",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            goals: [1, 4],
          },
          9: {
            teams: ["Ньюкасл", "Фулхэм"],
            result: "2-1",
            minutesOnField: [86, 2],
            tackles: [undefined, 1],
          },
          13: {
            teams: ["Эвертон", "Ньюкасл"],
            result: "1-4",
            minutesOnField: [89, 2],
            goals: [1, 4],
          },
          14: {
            teams: ["Ньюкасл", "Тоттенхэм"],
            result: "2-2",
            minutesOnField: [90, 2],
            fullMatch: [true, 1],
            tackles: [undefined, 1],
            assists: [1, 3],
          },
          15: {
            teams: ["Ньюкасл", "Бернли"],
            result: "2-1",
            minutesOnField: [74, 2],
          },
          16: {
            teams: ["Сандерленд", "Ньюкасл"],
            result: "1-0",
            minutesOnField: [75, 2],
            ownGoal: [1, -2],
          },
          18: {
            teams: ["Манчестер Юнайтед", "Ньюкасл"],
            result: "1-0",
            minutesOnField: [68, 2],
          },
          22: {
            teams: ["Вулверхэмптон", "Ньюкасл"],
            result: "0-0",
            minutesOnField: [67, 2],
            tackles: [undefined, 1],
          },
          23: {
            teams: ["Ньюкасл", "Астон Вилла"],
            result: "0-2",
            minutesOnField: [28, 1],
          },
        },
      },
    },
  },
}; // Игроки
const activeTeams = {
  Арсенал: {
    color: ["fff", "ef0107"],
    opponents_ucl: [
      "Атлетик Бильбао",
      "Олимпиакос",
      "Атлетико",
      "Славия",
      "Бавария",
      "Брюгге",
      "Интер",
      "Кайрат",
    ],
    opponents_pl: [
      "Вест Хэм",
      "Фулхэм",
      "Кристал Пэлас",
      "Бернли",
      "Сандерленд",
      "Тоттенхэм",
      "Челси",
      "Брентфорд",
      "Астон Вилла",
      "Вулверхэмптон",
      "Эвертон",
      "Брайтон",
      "Астон Вилла",
      "Борнмут",
      "Ливерпуль",
      "Ноттингем Форест",
      "Манчестер Юнайтед",
      "Лидс",
      "Сандерленд",
      "Брентфорд",
      "Тоттенхэм",
      "Челси",
      "Брайтон",
      "Эвертон",
      "Вулверхэмптон",
      "Борнмут",
      "Манчестер Сити",
      "Ньюкасл",
      "Фулхэм",
      "Вест Хэм",
      "Бернли",
      "Кристал Пэлас",
    ],
  },
  "Астон Вилла": {
    color: ["93bde4", "490125"],
    opponents_pl: [
      "Бернли",
      "Тоттенхэм",
      "Манчестер Сити",
      "Ливерпуль",
      "Борнмут",
      "Лидс",
      "Вулверхэмптон",
      "Брайтон",
      "Арсенал",
      "Вест Хэм",
      "Манчестер Юнайтед",
      "Челси",
      "Арсенал",
      "Ноттингем Форест",
      "Кристал Пэлас",
      "Эвертон",
      "Ньюкасл",
      "Брентфорд",
      "Борнмут",
      "Брайтон",
      "Лидс",
      "Вулверхэмптон",
      "Челси",
      "Манчестер Юнайтед",
      "Вест Хэм",
      "Ноттингем Форест",
      "Сандерленд",
      "Фулхэм",
      "Тоттенхэм",
      "Бернли",
      "Ливерпуль",
      "Манчестер Сити",
    ],
  },
  Аталанта: {
    color: ["0a67b1", "1d1e1c"],
    opponents_seriaA: [
      "Комо",
      "Лацио",
      "Кремонезе",
      "Милан",
      "Удинезе",
      "Сассуоло",
      "Наполи",
      "Фиорентина",
      "Верона",
      "Кальяри",
      "Дженоа",
      "Интер",
      "Рома",
      "Болонья",
      "Торино",
      "Пиза",
      "Парма",
      "Комо",
      "Кремонезе",
      "Лацио",
      "Наполи",
      "Сассуоло",
      "Удинезе",
      "Интер",
      "Верона",
      "Лечче",
      "Ювентус",
      "Рома",
      "Кальяри",
      "Дженоа",
      "Милан",
      "Болонья",
      "Фиорентина",
    ],
  },
  "Атлетик Бильбао": {
    color: ["fff", "ee2523"],
    opponents_laLiga: [
      "Мальорка",
      "Эльче",
      "Хетафе",
      "Реал Сосьедад",
      "Реал Овьедо",
      "Барселона",
      "Леванте",
      "Атлетико",
      "Сельта",
      "Эспаньол",
      "Осасуна",
      "Реал Мадрид",
      "Мальорка",
      "Севилья",
      "Реал Сосьедад",
      "Леванте",
      "Реал Овьедо",
      "Эльче",
      "Райо Вальекано",
      "Барселона",
      "Жирона",
      "Бетис",
      "Хетафе",
      "Вильярреал",
      "Атлетико",
      "Осасуна",
      "Депортиво Алавес",
      "Валенсия",
      "Эспаньол",
      "Сельта",
      "Реал Мадрид",
    ],
  },
  Атлетико: {
    color: ["e8151e", "282a6f"],
    opponents_laLiga: [
      "Сельта",
      "Осасуна",
      "Бетис",
      "Севилья",
      "Леванте",
      "Хетафе",
      "Реал Овьедо",
      "Атлетик Бильбао",
      "Валенсия",
      "Жирона",
      "Реал Сосьедад",
      "Барселона",
      "Депортиво Алавес",
      "Мальорка",
      "Леванте",
      "Бетис",
      "Райо Вальекано",
      "Эспаньол",
      "Реал Овьедо",
      "Реал Сосьедад",
      "Хетафе",
      "Реал Мадрид",
      "Барселона",
      "Севилья",
      "Атлетик Бильбао",
      "Эльче",
      "Валенсия",
      "Сельта",
      "Осасуна",
      "Жирона",
      "Вильярреал",
    ],
  },
  Бавария: {
    color: ["fff", "ed0038"],
    opponents_ucl: [
      "Челси",
      "Пафос",
      "Брюгге",
      "ПСЖ",
      "Арсенал",
      "Спортинг",
      "Юнион",
      "ПСВ",
    ],
  },
  Барселона: {
    color: ["004d98", "a50044"],
    opponents_ucl: [
      "Ньюкасл",
      "ПСЖ",
      "Олимпиакос",
      "Брюгге",
      "Челси",
      "Айнтрахт Франкфурт",
      "Славия",
      "Копенгаген",
    ],
    opponents_laLiga: [
      "Севилья",
      "Жирона",
      "Реал Мадрид",
      "Эльче",
      "Сельта",
      "Атлетик Бильбао",
      "Депортиво Алавес",
      "Бетис",
      "Осасуна",
      "Вильярреал",
      "Эспаньол",
      "Атлетико",
      "Реал Сосьедад",
      "Реал Овьедо",
      "Эльче",
      "Мальорка",
      "Жирона",
      "Леванте",
      "Вильярреал",
      "Атлетик Бильбао",
      "Севилья",
      "Райо Вальекано",
      "Атлетико",
      "Эспаньол",
      "Хетафе",
      "Сельта",
      "Осасуна",
      "Реал Мадрид",
      "Депортиво Алавес",
      "Бетис",
      "Валенсия",
    ],
  },
  Бенфика: {
    color: ["fff", "e83030"],
    opponents_ucl: [
      "Карабах",
      "Челси",
      "Ньюкасл",
      "Байер",
      "Аякс",
      "Наполи",
      "Ювентус",
      "Реал Мадрид",
    ],
  },
  Бетис: {
    color: ["fff", "00954c"],
    opponents_laLiga: [
      "Эспаньол",
      "Вильярреал",
      "Атлетико",
      "Мальорка",
      "Валенсия",
      "Жирона",
      "Севилья",
      "Барселона",
      "Райо Вальекано",
      "Хетафе",
      "Реал Мадрид",
      "Реал Овьедо",
      "Вильярреал",
      "Депортиво Алавес",
      "Валенсия",
      "Атлетико",
      "Мальорка",
      "Райо Вальекано",
      "Севилья",
      "Хетафе",
      "Сельта",
      "Атлетик Бильбао",
      "Эспаньол",
      "Осасуна",
      "Реал Мадрид",
      "Жирона",
      "Реал Овьедо",
      "Реал Сосьедад",
      "Эльче",
      "Барселона",
      "Леванте",
    ],
  },
  Борнмут: {
    color: ["cd1419", "000"],
    opponents_pl: [
      "Фулхэм",
      "Кристал Пэлас",
      "Ноттингем Форест",
      "Манчестер Сити",
      "Астон Вилла",
      "Вест Хэм",
      "Сандерленд",
      "Эвертон",
      "Челси",
      "Манчестер Юнайтед",
      "Бернли",
      "Брентфорд",
      "Челси",
      "Арсенал",
      "Тоттенхэм",
      "Брайтон",
      "Ливерпуль",
      "Вулверхэмптон",
      "Астон Вилла",
      "Эвертон",
      "Вест Хэм",
      "Сандерленд",
      "Брентфорд",
      "Бернли",
      "Манчестер Юнайтед",
      "Арсенал",
      "Ньюкасл",
      "Лидс",
      "Кристал Пэлас",
      "Фулхэм",
      "Манчестер Сити",
      "Ноттингем Форест",
    ],
  },
  "Борнмут/Манчестер Сити": {
    color: ["fff", "6caddf"],
    opponents_pl: [
      "Фулхэм",
      "Кристал Пэлас",
      "Ноттингем Форест",
      "Манчестер Сити",
      "Астон Вилла",
      "Вест Хэм",
      "Сандерленд",
      "Эвертон",
      "Челси",
      "Манчестер Юнайтед",
      "Бернли",
      "Брентфорд",
      "Челси",
      "Арсенал",
      "Тоттенхэм",
      "Манчестер Юнайтед",
      "Вулверхэмптон",
      "Тоттенхэм",
      "Ливерпуль",
      "Фулхэм",
      "Ньюкасл",
      "Лидс",
      "Ноттингем Форест",
      "Вест Хэм",
      "Кристал Пэлас",
      "Челси",
      "Арсенал",
      "Бернли",
      "Эвертон",
      "Брентфорд",
      "Борнмут",
      "Астон Вилла",
    ],
  },
  "Боруссия Дортмунд": {
    color: ["000", "ffd900"],
    opponents_ucl: [
      "Ювентус",
      "Атлетик Бильбао",
      "Копенгаген",
      "Манчестер Сити",
      "Вильярреал",
      "Буде-Глимт",
      "Тоттенхэм",
      "Интер",
    ],
  },
  Брайтон: {
    color: ["fff", "005daa"],
    opponents_pl: [
      "Вулверхэмптон",
      "Ньюкасл",
      "Манчестер Юнайтед",
      "Лидс",
      "Кристал Пэлас",
      "Брентфорд",
      "Ноттингем Форест",
      "Астон Вилла",
      "Вест Хэм",
      "Ливерпуль",
      "Сандерленд",
      "Арсенал",
      "Вест Хэм",
      "Бернли",
      "Манчестер Сити",
      "Борнмут",
      "Фулхэм",
      "Эвертон",
      "Кристал Пэлас",
      "Астон Вилла",
      "Брентфорд",
      "Ноттингем Форест",
      "Арсенал",
      "Сандерленд",
      "Ливерпуль",
      "Бернли",
      "Тоттенхэм",
      "Челси",
      "Ньюкасл",
      "Вулверхэмптон",
      "Лидс",
      "Манчестер Юнайтед",
    ],
  },
  Валенсия: {
    color: ["fff", "000"],
    opponents_laLiga: [
      "Жирона",
      "Депортиво Алавес",
      "Вильярреал",
      "Реал Мадрид",
      "Бетис",
      "Леванте",
      "Райо Вальекано",
      "Севилья",
      "Атлетико",
      "Мальорка",
      "Сельта",
      "Эльче",
      "Хетафе",
      "Эспаньол",
      "Бетис",
      "Реал Мадрид",
      "Леванте",
      "Вильярреал",
      "Осасуна",
      "Депортиво Алавес",
      "Реал Овьедо",
      "Севилья",
      "Сельта",
      "Эльче",
      "Жирона",
      "Мальорка",
      "Атлетико",
      "Атлетик Бильбао",
      "Райо Вальекано",
      "Реал Сосьедад",
      "Барселона",
    ],
  },
  Вильярреал: {
    color: ["ffe667", "005187"],
    opponents_laLiga: [
      "Реал Мадрид",
      "Бетис",
      "Валенсия",
      "Райо Вальекано",
      "Эспаньол",
      "Мальорка",
      "Реал Сосьедад",
      "Хетафе",
      "Леванте",
      "Барселона",
      "Эльче",
      "Депортиво Алавес",
      "Бетис",
      "Реал Мадрид",
      "Осасуна",
      "Эспаньол",
      "Хетафе",
      "Валенсия",
      "Барселона",
      "Эльче",
      "Депортиво Алавес",
      "Реал Сосьедад",
      "Жирона",
      "Атлетик Бильбао",
      "Сельта",
      "Реал Овьедо",
      "Леванте",
      "Мальорка",
      "Севилья",
      "Райо Вальекано",
      "Атлетико",
    ],
  },
  Жирона: {
    color: ["fff", "cf0c29"],
    opponents_laLiga: [
      "Валенсия",
      "Барселона",
      "Реал Овьедо",
      "Хетафе",
      "Депортиво Алавес",
      "Бетис",
      "Реал Мадрид",
      "Эльче",
      "Реал Сосьедад",
      "Атлетико",
      "Мальорка",
      "Осасуна",
      "Эспаньол",
      "Хетафе",
      "Реал Овьедо",
      "Севилья",
      "Барселона",
      "Депортиво Алавес",
      "Сельта",
      "Леванте",
      "Атлетик Бильбао",
      "Осасуна",
      "Вильярреал",
      "Реал Мадрид",
      "Валенсия",
      "Бетис",
      "Мальорка",
      "Райо Вальекано",
      "Реал Сосьедад",
      "Атлетико",
      "Эльче",
    ],
  },
  Интер: {
    color: ["00219c", "000"],
    opponents_ucl: [
      "Аякс",
      "Славия",
      "Юнион",
      "Кайрат",
      "Атлетико",
      "Ливерпуль",
      "Арсенал",
      "Боруссия Дортмунд",
    ],
    opponents_seriaA: [
      "Кремонезе",
      "Рома",
      "Наполи",
      "Фиорентина",
      "Верона",
      "Лацио",
      "Милан",
      "Пиза",
      "Комо",
      "Дженоа",
      "Лечче",
      "Аталанта",
      "Болонья",
      "Парма",
      "Наполи",
      "Удинезе",
      "Пиза",
      "Кремонезе",
      "Сассуоло",
      "Ювентус",
      "Лечче",
      "Дженоа",
      "Милан",
      "Аталанта",
      "Фиорентина",
      "Рома",
      "Комо",
      "Кальяри",
      "Торино",
      "Парма",
      "Лацио",
      "Верона",
      "Болонья",
    ],
  },
  Комо: {
    color: ["fff", "10416a"],
    opponents_seriaA: [
      "Аталанта",
      "Ювентус",
      "Парма",
      "Верона",
      "Наполи",
      "Кальяри",
      "Торино",
      "Сассуоло",
      "Интер",
      "Рома",
      "Милан",
      "Лечче",
      "Удинезе",
      "Пиза",
      "Болонья",
      "Лацио",
      "Торино",
      "Аталанта",
      "Милан",
      "Фиорентина",
      "Ювентус",
      "Лечче",
      "Кальяри",
      "Рома",
      "Пиза",
      "Удинезе",
      "Интер",
      "Сассуоло",
      "Дженоа",
      "Наполи",
      "Верона",
      "Парма",
      "Кремонезе",
    ],
  },
  "Кристал Пэлас": {
    color: ["ee2e24", "0055a5"],
    opponents_pl: [
      "Эвертон",
      "Борнмут",
      "Арсенал",
      "Брентфорд",
      "Брайтон",
      "Вулверхэмптон",
      "Манчестер Юнайтед",
      "Бернли",
      "Фулхэм",
      "Манчестер Сити",
      "Лидс",
      "Тоттенхэм",
      "Фулхэм",
      "Ньюкасл",
      "Астон Вилла",
      "Сандерленд",
      "Челси",
      "Ноттингем Форест",
      "Брайтон",
      "Бернли",
      "Вулверхэмптон",
      "Манчестер Юнайтед",
      "Тоттенхэм",
      "Лидс",
      "Манчестер Сити",
      "Ньюкасл",
      "Вест Хэм",
      "Ливерпуль",
      "Борнмут",
      "Эвертон",
      "Брентфорд",
      "Арсенал",
    ],
  },
  "Кристал Пэлас/Манчестер Сити": {
    color: ["fff", "6caddf"],
    opponents_pl: [
      "Эвертон",
      "Борнмут",
      "Арсенал",
      "Брентфорд",
      "Брайтон",
      "Вулверхэмптон",
      "Манчестер Юнайтед",
      "Бернли",
      "Фулхэм",
      "Манчестер Сити",
      "Лидс",
      "Тоттенхэм",
      "Фулхэм",
      "Ньюкасл",
      "Астон Вилла",
      "Сандерленд",
      "Вулверхэмптон",
      "Тоттенхэм",
      "Ливерпуль",
      "Фулхэм",
      "Ньюкасл",
      "Лидс",
      "Ноттингем Форест",
      "Вест Хэм",
      "Кристал Пэлас",
      "Челси",
      "Арсенал",
      "Бернли",
      "Эвертон",
      "Брентфорд",
      "Борнмут",
      "Астон Вилла",
    ],
  },
  Леванте: {
    color: ["005ca3", "b3023d"],
    opponents_laLiga: [
      "Реал Овьедо",
      "Райо Вальекано",
      "Мальорка",
      "Сельта",
      "Атлетико",
      "Валенсия",
      "Атлетик Бильбао",
      "Осасуна",
      "Вильярреал",
      "Реал Сосьедад",
      "Севилья",
      "Эспаньол",
      "Реал Мадрид",
      "Эльче",
      "Атлетико",
      "Атлетик Бильбао",
      "Валенсия",
      "Барселона",
      "Депортиво Алавес",
      "Жирона",
      "Райо Вальекано",
      "Реал Овьедо",
      "Реал Сосьедад",
      "Хетафе",
      "Эспаньол",
      "Севилья",
      "Вильярреал",
      "Осасуна",
      "Сельта",
      "Мальорка",
      "Бетис",
    ],
  },
  Ливерпуль: {
    color: ["fff", "d20019"],
    opponents_ucl: [
      "Атлетико",
      "Галатасарай",
      "Айнтрахт Франкфурт",
      "Реал Мадрид",
      "ПСВ",
      "Интер",
      "Марсель",
      "Карабах",
    ],
    opponents_pl: [
      "Челси",
      "Манчестер Юнайтед",
      "Брентфорд",
      "Астон Вилла",
      "Манчестер Сити",
      "Ноттингем Форест",
      "Вест Хэм",
      "Сандерленд",
      "Лидс",
      "Брайтон",
      "Тоттенхэм",
      "Вулверхэмптон",
      "Лидс",
      "Фулхэм",
      "Арсенал",
      "Бернли",
      "Борнмут",
      "Ньюкасл",
      "Манчестер Сити",
      "Сандерленд",
      "Ноттингем Форест",
      "Вест Хэм",
      "Вулверхэмптон",
      "Тоттенхэм",
      "Брайтон",
      "Фулхэм",
      "Эвертон",
      "Кристал Пэлас",
      "Манчестер Юнайтед",
      "Челси",
      "Астон Вилла",
      "Брентфорд",
    ],
  },
  "Манчестер Сити": {
    color: ["fff", "6caddf"],
    opponents_ucl: [
      "Наполи",
      "Монако",
      "Вильярреал",
      "Боруссия Дортмунд",
      "Байер",
      "Реал Мадрид",
      "Буде-Глимт",
      "Галатасарай",
    ],
    opponents_pl: [
      "Брентфорд",
      "Эвертон",
      "Астон Вилла",
      "Борнмут",
      "Ливерпуль",
      "Ньюкасл",
      "Лидс",
      "Фулхэм",
      "Сандерленд",
      "Кристал Пэлас",
      "Вест Хэм",
      "Ноттингем Форест",
      "Сандерленд",
      "Челси",
      "Брайтон",
      "Манчестер Юнайтед",
      "Вулверхэмптон",
      "Тоттенхэм",
      "Ливерпуль",
      "Фулхэм",
      "Ньюкасл",
      "Лидс",
      "Ноттингем Форест",
      "Вест Хэм",
      "Кристал Пэлас",
      "Челси",
      "Арсенал",
      "Бернли",
      "Эвертон",
      "Брентфорд",
      "Борнмут",
      "Астон Вилла",
    ],
  },
  "Манчестер Юнайтед": {
    color: ["fff", "da020e"],
    opponents_pl: [
      "Сандерленд",
      "Ливерпуль",
      "Брайтон",
      "Ноттингем Форест",
      "Тоттенхэм",
      "Эвертон",
      "Кристал Пэлас",
      "Вест Хэм",
      "Вулверхэмптон",
      "Борнмут",
      "Астон Вилла",
      "Ньюкасл",
      "Вулверхэмптон",
      "Лидс",
      "Бернли",
      "Манчестер Сити",
      "Арсенал",
      "Фулхэм",
      "Тоттенхэм",
      "Вест Хэм",
      "Эвертон",
      "Кристал Пэлас",
      "Ньюкасл",
      "Астон Вилла",
      "Борнмут",
      "Лидс",
      "Челси",
      "Брентфорд",
      "Ливерпуль",
      "Сандерленд",
      "Ноттингем Форест",
      "Брайтон",
    ],
  },
  Милан: {
    color: ["e4002b", "101820"],
    opponents_seriaA: [
      "Ювентус",
      "Фиорентина",
      "Пиза",
      "Аталанта",
      "Рома",
      "Парма",
      "Интер",
      "Лацио",
      "Торино",
      "Сассуоло",
      "Комо",
      "Верона",
      "Кальяри",
      "Дженоа",
      "Фиорентина",
      "Лечче",
      "Рома",
      "Болонья",
      "Комо",
      "Пиза",
      "Парма",
      "Кремонезе",
      "Интер",
      "Лацио",
      "Торино",
      "Наполи",
      "Удинезе",
      "Верона",
      "Ювентус",
      "Сассуоло",
      "Аталанта",
      "Дженоа",
      "Кальяри",
    ],
  },
  Наполи: {
    color: ["fff", "01a7e1"],
    opponents_ucl: [
      "Манчестер Сити",
      "Спортинг",
      "ПСВ",
      "Айнтрахт Франкфурт",
      "Карабах",
      "Бенфика",
      "Копенгаген",
      "Челси",
    ],
    opponents_seriaA: [
      "Дженоа",
      "Торино",
      "Интер",
      "Лечче",
      "Комо",
      "Болонья",
      "Аталанта",
      "Рома",
      "Ювентус",
      "Удинезе",
      "Парма",
      "Кремонезе",
      "Лацио",
      "Верона",
      "Интер",
      "Сассуоло",
      "Ювентус",
      "Фиорентина",
      "Дженоа",
      "Рома",
      "Аталанта",
      "Верона",
      "Торино",
      "Лечче",
      "Кальяри",
      "Милан",
      "Парма",
      "Лацио",
      "Кремонезе",
      "Комо",
      "Болонья",
      "Пиза",
      "Удинезе",
    ],
  },
  Ньюкасл: {
    color: ["fff", "231f20"],
    opponents_pl: [
      "Ноттингем Форест",
      "Брайтон",
      "Фулхэм",
      "Вест Хэм",
      "Брентфорд",
      "Манчестер Сити",
      "Эвертон",
      "Тоттенхэм",
      "Бернли",
      "Сандерленд",
      "Челси",
      "Манчестер Юнайтед",
      "Бернли",
      "Кристал Пэлас",
      "Лидс",
      "Вулверхэмптон",
      "Астон Вилла",
      "Ливерпуль",
      "Брентфорд",
      "Тоттенхэм",
      "Манчестер Сити",
      "Эвертон",
      "Манчестер Юнайтед",
      "Челси",
      "Сандерленд",
      "Кристал Пэлас",
      "Борнмут",
      "Арсенал",
      "Брайтон",
      "Ноттингем Форест",
      "Вест Хэм",
      "Фулхэм",
    ],
  },
  ПСЖ: {
    color: ["e30613", "004170"],
    opponents_ucl: [
      "Аталанта",
      "Барселона",
      "Байер",
      "Бавария",
      "Тоттенхэм",
      "Атлетик Бильбао",
      "Спортинг",
      "Ньюкасл",
    ],
  },
  "Реал Мадрид": {
    color: ["fff", "004996"],
    opponents_ucl: [
      "Марсель",
      "Кайрат",
      "Ювентус",
      "Ливерпуль",
      "Олимпиакос",
      "Манчестер Сити",
      "Монако",
      "Бенфика",
    ],
    opponents_laLiga: [
      "Вильярреал",
      "Хетафе",
      "Барселона",
      "Валенсия",
      "Райо Вальекано",
      "Эльче",
      "Жирона",
      "Сельта",
      "Депортиво Алавес",
      "Севилья",
      "Бетис",
      "Атлетик Бильбао",
      "Леванте",
      "Вильярреал",
      "Райо Вальекано",
      "Валенсия",
      "Реал Сосьедад",
      "Осасуна",
      "Хетафе",
      "Сельта",
      "Эльче",
      "Атлетико",
      "Мальорка",
      "Жирона",
      "Бетис",
      "Депортиво Алавес",
      "Эспаньол",
      "Барселона",
      "Реал Овьедо",
      "Севилья",
      "Атлетик Бильбао",
    ],
  },
  Рома: {
    color: ["fbba00", "970a2c"],
    opponents_seriaA: [
      "Фиорентина",
      "Интер",
      "Сассуоло",
      "Парма",
      "Милан",
      "Удинезе",
      "Кремонезе",
      "Наполи",
      "Кальяри",
      "Комо",
      "Ювентус",
      "Дженоа",
      "Аталанта",
      "Лечче",
      "Сассуоло",
      "Торино",
      "Милан",
      "Удинезе",
      "Кальяри",
      "Наполи",
      "Кремонезе",
      "Ювентус",
      "Дженоа",
      "Комо",
      "Лечче",
      "Интер",
      "Пиза",
      "Аталанта",
      "Болонья",
      "Фиорентина",
      "Парма",
      "Лацио",
      "Верона",
    ],
  },
  Сандерленд: {
    color: ["fff", "eb172b"],
    opponents_pl: [
      "Манчестер Юнайтед",
      "Вулверхэмптон",
      "Челси",
      "Эвертон",
      "Арсенал",
      "Фулхэм",
      "Борнмут",
      "Ливерпуль",
      "Манчестер Сити",
      "Ньюкасл",
      "Брайтон",
      "Лидс",
      "Манчестер Сити",
      "Тоттенхэм",
      "Брентфорд",
      "Кристал Пэлас",
      "Вест Хэм",
      "Бернли",
      "Арсенал",
      "Ливерпуль",
      "Фулхэм",
      "Борнмут",
      "Лидс",
      "Брайтон",
      "Ньюкасл",
      "Тоттенхэм",
      "Астон Вилла",
      "Ноттингем Форест",
      "Вулверхэмптон",
      "Манчестер Юнайтед",
      "Эвертон",
      "Челси",
    ],
  },
  Севилья: {
    color: ["fff", "d70f21"],
    opponents_laLiga: [
      "Барселона",
      "Мальорка",
      "Реал Сосьедад",
      "Атлетико",
      "Осасуна",
      "Эспаньол",
      "Бетис",
      "Валенсия",
      "Реал Овьедо",
      "Реал Мадрид",
      "Леванте",
      "Сельта",
      "Эльче",
      "Атлетик Бильбао",
      "Мальорка",
      "Жирона",
      "Депортиво Алавес",
      "Хетафе",
      "Бетис",
      "Райо Вальекано",
      "Барселона",
      "Валенсия",
      "Реал Овьедо",
      "Атлетико",
      "Осасуна",
      "Леванте",
      "Реал Сосьедад",
      "Эспаньол",
      "Вильярреал",
      "Реал Мадрид",
      "Сельта",
    ],
  },
  Торино: {
    color: ["fff", "881f19"],
    opponents_seriaA: [
      "Лацио",
      "Наполи",
      "Дженоа",
      "Болонья",
      "Пиза",
      "Ювентус",
      "Комо",
      "Лечче",
      "Милан",
      "Кремонезе",
      "Сассуоло",
      "Кальяри",
      "Верона",
      "Удинезе",
      "Аталанта",
      "Рома",
      "Комо",
      "Лечче",
      "Фиорентина",
      "Болонья",
      "Дженоа",
      "Лацио",
      "Наполи",
      "Парма",
      "Милан",
      "Пиза",
      "Верона",
      "Кремонезе",
      "Интер",
      "Удинезе",
      "Сассуоло",
      "Кальяри",
      "Ювентус",
    ],
  },
  Тоттенхэм: {
    color: ["fff", "132257"],
    opponents_ucl: [
      "Вильярреал",
      "Буде-Глимт",
      "Монако",
      "Копенгаген",
      "ПСЖ",
      "Славия",
      "Боруссия Дортмунд",
      "Айнтрахт Франкфурт",
    ],
  },
  Удинезе: {
    color: ["fff", "7f7f7f"],
    opponents_seriaA: [
      "Кальяри",
      "Кремонезе",
      "Лечче",
      "Ювентус",
      "Аталанта",
      "Рома",
      "Болонья",
      "Парма",
      "Дженоа",
      "Наполи",
      "Фиорентина",
      "Лацио",
      "Комо",
      "Торино",
      "Пиза",
      "Интер",
      "Верона",
      "Рома",
      "Лечче",
      "Сассуоло",
      "Болонья",
      "Фиорентина",
      "Аталанта",
      "Ювентус",
      "Дженоа",
      "Комо",
      "Милан",
      "Парма",
      "Лацио",
      "Торино",
      "Кальяри",
      "Кремонезе",
      "Наполи",
    ],
  },
  Фиорентина: {
    color: ["fff", "61358b"],
    opponents_seriaA: [
      "Рома",
      "Милан",
      "Болонья",
      "Интер",
      "Лечче",
      "Дженоа",
      "Ювентус",
      "Аталанта",
      "Сассуоло",
      "Верона",
      "Удинезе",
      "Парма",
      "Кремонезе",
      "Лацио",
      "Милан",
      "Болонья",
      "Кальяри",
      "Наполи",
      "Торино",
      "Комо",
      "Пиза",
      "Удинезе",
      "Парма",
      "Кремонезе",
      "Интер",
      "Верона",
      "Лацио",
      "Лечче",
      "Сассуоло",
      "Рома",
      "Дженоа",
      "Ювентус",
      "Аталанта",
    ],
  },
  Челси: {
    color: ["fff", "001489"],
    opponents_pl: [
      "Ливерпуль",
      "Ноттингем Форест",
      "Сандерленд",
      "Тоттенхэм",
      "Вулверхэмптон",
      "Бернли",
      "Арсенал",
      "Лидс",
      "Борнмут",
      "Эвертон",
      "Ньюкасл",
      "Астон Вилла",
      "Борнмут",
      "Манчестер Сити",
      "Фулхэм",
      "Брентфорд",
      "Кристал Пэлас",
      "Вест Хэм",
      "Вулверхэмптон",
      "Лидс",
      "Бернли",
      "Арсенал",
      "Астон Вилла",
      "Ньюкасл",
      "Эвертон",
      "Манчестер Сити",
      "Манчестер Юнайтед",
      "Брайтон",
      "Ноттингем Форест",
      "Ливерпуль",
      "Тоттенхэм",
      "Сандерленд",
    ],
  },
  Ювентус: {
    color: ["fff", "000"],
    opponents_ucl: [
      "Боруссия Дортмунд",
      "Вильярреал",
      "Реал Мадрид",
      "Спортинг",
      "Буде-Глимт",
      "Пафос",
      "Бенфика",
      "Монако",
    ],
    opponents_seriaA: [
      "Милан",
      "Комо",
      "Лацио",
      "Удинезе",
      "Кремонезе",
      "Торино",
      "Фиорентина",
      "Кальяри",
      "Наполи",
      "Болонья",
      "Рома",
      "Пиза",
      "Лечче",
      "Сассуоло",
      "Кремонезе",
      "Кальяри",
      "Наполи",
      "Парма",
      "Лацио",
      "Интер",
      "Комо",
      "Рома",
      "Пиза",
      "Удинезе",
      "Сассуоло",
      "Дженоа",
      "Аталанта",
      "Болонья",
      "Милан",
      "Верона",
      "Лечче",
      "Фиорентина",
      "Торино",
    ],
  },
}; // Активные команды
const teams = {
  "Айнтрахт Франкфурт": "Eintracht_Frankfurt",
  Аякс: "Ajax",
  Арсенал: "Arsenal",
  "Астон Вилла": "Aston_Villa",
  Аталанта: "Atalanta",
  "Атлетик Бильбао": "Athletic_Bilbao",
  Атлетико: "Atletico",
  Байер: "Bayer",
  Бавария: "Bayern",
  Барселона: "Barcelona",
  Бенфика: "Benfica",
  Бернли: "Burnley",
  Бетис: "Betis",
  Болонья: "Bologna",
  Борнмут: "Bournemouth",
  "Борнмут/Манчестер Сити": "Manchester_City",
  "Боруссия Дортмунд": "Borussia_Dortmund",
  Брайтон: "Brighton",
  Брентфорд: "Brentford",
  "Буде-Глимт": "Bodo_Glimt",
  Брюгге: "Brugge",
  Валенсия: "Valencia",
  Верона: "Verona",
  "Вест Хэм": "West_Ham",
  Вильярреал: "Villarreal",
  Вулверхэмптон: "Wolverhampton",
  Галатасарай: "Galatasaray",
  "Депортиво Алавес": "Deportivo_Alaves",
  Дженоа: "Genoa",
  Жирона: "Girona",
  Интер: "Inter",
  Кальяри: "Cagliari",
  Карабах: "Qarabag",
  Кайрат: "Kairat",
  Комо: "Como",
  Копенгаген: "Copenhagen",
  Кремонезе: "Cremonese",
  "Кристал Пэлас": "Crystal_Palace",
  "Кристал Пэлас/Манчестер Сити": "Manchester_City",
  Лацио: "Lazio",
  Леванте: "Levante",
  Лечче: "Lecce",
  Ливерпуль: "Liverpool",
  Лидс: "Leeds",
  Мальорка: "Mallorca",
  "Манчестер Сити": "Manchester_City",
  "Манчестер Юнайтед": "Manchester_United",
  Марсель: "Marseille",
  Милан: "Milan",
  Монако: "Monaco",
  Наполи: "Napoli",
  "Ноттингем Форест": "Nottingham_Forest",
  Ньюкасл: "Newcastle",
  Олимпиакос: "Olympiacos",
  Осасуна: "Osasuna",
  Парма: "Parma",
  Пафос: "Pafos",
  Пиза: "Pisa",
  ПСВ: "PSV",
  ПСЖ: "PSG",
  "Райо Вальекано": "Rayo_Vallecano",
  "Реал Мадрид": "Real_Madrid",
  "Реал Овьедо": "Real_Oviedo",
  "Реал Сосьедад": "Real_Sociedad",
  Рома: "Roma",
  Сандерленд: "Sunderland",
  Сассуоло: "Sassuolo",
  Севилья: "Sevilla",
  Сельта: "Celta",
  Славия: "Slavia",
  Спортинг: "Sporting",
  Торино: "Torino",
  Тоттенхэм: "Tottenham",
  Удинезе: "Udinese",
  Фиорентина: "Fiorentina",
  Фулхэм: "Fulham",
  Хетафе: "Getafe",
  Челси: "Chelsea",
  Эвертон: "Everton",
  Эльче: "Elche",
  Эспаньол: "Espanyol",
  Ювентус: "Juventus",
  Юнион: "Union",
}; // Логотипы команд
const leagues = {
  ucl: {
    name: "Champions League",
    background: "linear-gradient(93.5deg,#0232ff 0.59%,#010056 94.82%)",
    button: "#040a63",
    players: {
      Камиль: 664,
      Хидир: 579,
      Эрик: 502,
      Карузо: 631,
      Аскольд: 435,
    },
  },
  pl: {
    name: "Premier League",
    background: "linear-gradient(90deg,#37003c,#953bff)",
    button: "#37003c",
    players: {
      Камиль: 1170,
    },
  },
  laLiga: {
    name: "LaLiga",
    background: "#ff4b44",
    button: "#ff4b44",
    players: {
      Камиль: 883,
    },
  },
  seriaA: {
    name: "Seria A",
    background:
      "url(https://shoneal.github.io/fantasy/images/other/seriA_cover.webp) no-repeat center center / cover",
    button: "#2047e3",
    players: {
      Камиль: 1128,
    },
  },
}; // Данные лиг
const terms = {
  goals: ["гол", "гола", "голов"],
  cleanSheet: ["сухой матч", "сухих матча", "сухих матчей", "сухой матч"],
  missedGoals: ["пропущенный гол", "пропущенных гола", "пропущенных голов"],
  savingPenalty: ["отбитый пенальти", "отбитых пенальти", "отбитых пенальти"],
  saves: ["сейв", "сейва", "сейвов"],
  minutesOnField: ["минута на поле", "минуты на поле", "минут на поле"],
  fullMatch: ["полный матч", "полных матча", "полных матчей", "полный матч"],
  outsideTheBox: [
    "гол из-за штрафной",
    "гола из-за штрафной",
    "голов из-за штрафной",
  ],
  playerOfTheMatch: [
    "награда «Игрок матча»",
    "награды «Игрок матча»",
    "наград «Игрок матча»",
    "награда «Игрок матча»",
  ],
  assists: ["голевой пас", "голевых паса", "голевых пасов"],
  shotAfterGoal: [
    "удар, после сэйва которого забит гол на добивании",
    "удара, после сэйва которого забит гол на добивании",
    "ударов, после сэйва которого забит гол на добивании",
  ],
  tackles: [
    "возврат владения",
    "возврата владения",
    "возвратов владения",
    "возвраты владения",
  ],
  earnedPenalty: [
    "заработанный пенальти",
    "заработанных пенальти",
    "заработанных пенальти",
  ],
  concedingPenalty: [
    "привезенный пенальти",
    "привезенных пенальти",
    "привезенных пенальти",
  ],
  missingPenalty: [
    "незабитый пенальти",
    "незабитых пенальти",
    "незабитых пенальти",
  ],
  yellowCard: ["желтая карточка", "желтые карточки", "желтых карточек"],
  redCard: ["красная карточка", "красные карточки", "красных карточек"],
  ownGoal: ["автогол", "автогола", "автоголов"],
  captain: ["тур «Капитан»", "тура «Капитан»", "туров «Капитан»", "капитан"],
  games: ["сыгранный матч", "сыгранных матча", "сыгранных матчей"],
  price: ["цена", "цена", "цена"],
}; // Терминология правил
for (const key in terms) {
  if (terms[key].length >= 4) {
    terms[key][3] =
      terms[key][3].charAt(0).toUpperCase() + terms[key][3].slice(1);
  }
}
function translate(term, value) {
  const data = terms[term];
  if (!data) return null;

  // Объединяем проверки для undefined и true
  if (value === undefined || value === true) {
    return data.length > 3 ? data[3] : data[0];
  }

  if (data.length === 1) return data[0];

  const num = Math.abs(value) % 100;
  const lastDigit = num % 10;

  // Оптимизируем условные выражения
  return num >= 11 && num <= 14
    ? data[2]
    : lastDigit === 1
      ? data[0]
      : lastDigit >= 2 && lastDigit <= 4
        ? data[1]
        : data[2];
}
const locationOfTheImages = "https://shoneal.github.io/fantasy/images/";

const setupImageWithContainer = (img) => {
  const onLoadOrError = () => {
    img.style.opacity = "1";
    img.removeEventListener("load", onLoadOrError);
    img.removeEventListener("error", onLoadOrError);
  };

  if (img.complete) {
    onLoadOrError();
  } else {
    img.addEventListener("load", onLoadOrError);
    img.addEventListener("error", onLoadOrError);
  }
}; // Функция для настройки прозрачности изображения

const headerButtons = document.querySelector(".header_buttons");
function createButton(league, key, isActive) {
  const button = document.createElement("button");
  button.classList.add("header_button");
  button.dataset.league = key;
  button.style.setProperty("--button-background", league.button);
  if (isActive) button.classList.add("header_button-is_active");
  const img = document.createElement("img");
  img.style.opacity = "0";
  img.src = `${locationOfTheImages}logos/leagues/mini/${key}.png`;
  img.alt = `Логотип чемпионата "${league.name}"`;
  setupImageWithContainer(img);
  button.appendChild(img);

  return button;
}
let isFirst = true;
Object.keys(leagues).forEach((key) => {
  headerButtons.appendChild(createButton(leagues[key], key, isFirst));
  isFirst = false;
}); // Главные кнопки в html

function calculateLeaguePoints() {
  const leaguePoints = {};

  for (const position of Object.values(players)) {
    for (const player of Object.values(position)) {
      if (!player.stats) continue;

      for (const [league, stats] of Object.entries(player.stats)) {
        leaguePoints[league] = leaguePoints[league] || 0;
        leaguePoints[league] += calculatePlayerPoints(stats);
      }
    }
  }

  return leaguePoints;
}
function calculatePlayerPoints(stats) {
  let totalPoints = 0;

  for (const match of Object.values(stats)) {
    let matchPoints = 0;

    for (const key in match) {
      const value =
        Array.isArray(match[key]) && typeof match[key][1] === "number"
          ? match[key][1]
          : 0;
      matchPoints += value;
    }

    if (match.captain) matchPoints *= 2;
    totalPoints += matchPoints;
  }
  return totalPoints;
} // Функция для подсчета очков игрока
const totalPoints = calculateLeaguePoints(); // Сумма очков по лигам
function calculateScore(leagueKey) {
  return (
    totalPoints[leagueKey] +
    (function () {
      switch (leagueKey) {
        case "ucl":
          return -8;
        case "laLiga":
          return 1;
        default:
          return 0;
      }
    })()
  );
} // Сумма очков по лигам с вычетом/добавлением условий

const headerElements = {
  buttons: document.querySelectorAll(".header_button"),
  top: document.querySelector(".header_top"),
  topRight: document.querySelector(".header_top_right"),
  logo: document.querySelector(".header_logo"),
  logoBig: document.querySelector(".header_logo_transparent"),
  title: document.querySelector(".header_title"),
  points: document.querySelector(".header_points"),
  runningLine: document.querySelector(".header_running_line"),
  standings: document.querySelector(".main_standings"),
};
const playersList = document.querySelector(".players_list");
const playerTemplate = document.querySelector("#player-template").content;
function createElements(container, { count = 0 } = {}) {
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    frag.appendChild(document.createElement("p"));
  }
  container.appendChild(frag);
}
createElements(headerElements.runningLine, { count: 30 });
createElements(playerTemplate.querySelector(".player_running_line"), {
  count: 4,
});
createElements(document.querySelector(".popup_running_line"), { count: 20 });
let appState = {
  currentLeagueKey: null,
};
const BREAKPOINT = 1280;
const logoLink = `${locationOfTheImages}logos/leagues/big/`;
const logoWhiteLink = `${logoLink}white/`;
function updateLogo() {
  headerElements.logo.src =
    appState.currentLeagueKey === "seriaA"
      ? `${logoLink}${appState.currentLeagueKey}.png`
      : window.innerWidth < BREAKPOINT
        ? `${logoWhiteLink}${appState.currentLeagueKey}.png`
        : `${logoLink}${appState.currentLeagueKey}.png`;
}
function updateHeaderAndCSS(leagueKey) {
  appState.currentLeagueKey = leagueKey;
  const league = leagues[leagueKey];

  const imagesToLoad = [headerElements.logo, headerElements.logoBig];
  imagesToLoad.forEach((el) => (el.style.opacity = 0));
  headerElements.topRight.style.opacity = 0;

  document.documentElement.style.setProperty(
    "--background-header-from-js",
    league.background,
  );
  headerElements.title.textContent = league.name;
  headerElements.points.textContent = calculateScore(leagueKey);
  headerElements.logoBig.src = `${logoWhiteLink}${leagueKey}.png`;
  headerElements.logo.alt =
    headerElements.logoBig.alt = `Логотип ${league.name}`;

  let loaded = 0;
  const onLoad = () => {
    if (++loaded === imagesToLoad.length) {
      imagesToLoad.forEach((el, index) => {
        el.style.opacity = [1, 0.16][index];
      });
      headerElements.topRight.style.opacity = 1;
    }
  };
  imagesToLoad.forEach((el) => {
    if (el.complete) onLoad();
    el.addEventListener("load", onLoad);
  });

  headerElements.runningLine
    .querySelectorAll("p")
    .forEach((p) => (p.textContent = league.name));

  updateLogo();

  const players = Object.entries(league.players)
    .map(([name, points]) => ({ name, points, isMe: false }))
    .concat({ name: "Я", points: calculateScore(leagueKey), isMe: true })
    .sort((a, b) => b.points - a.points);
  headerElements.standings
    .querySelectorAll(".standings_team")
    .forEach((el) => el.remove());
  const rows = players.map((player, idx) => {
    const row = document.createElement("div");
    row.className = player.isMe
      ? "standings_team standings_team_is-active"
      : "standings_team";

    row.innerHTML = `<p>${idx + 1}</p><p>${player.name}</p><p>${
      player.points
    }</p>`;
    headerElements.standings.appendChild(row);
    return row;
  });
  const myIndex = rows.findIndex((r) =>
    r.classList.contains("standings_team_is-active"),
  );
  if (myIndex !== -1) {
    rows.forEach((row, idx) => {
      if (![myIndex - 1, myIndex, myIndex + 1].includes(idx)) {
        row.classList.add("standings_team_is-inactive");
      }
    });
  }
}
function renderPlayersList() {
  const activeLeague = document.querySelector(".header_button-is_active")
    ?.dataset.league;

  playersList.innerHTML = Object.keys(players)
    .map((position) => {
      const count = Object.values(players[position]).filter(
        (player) => player.stats?.[activeLeague],
      ).length;

      return count
        ? `
        <h2 class="position_title">${position} - ${count}</h2>
        <div class="position_container ${position}"></div>
      `
        : "";
    })
    .filter(Boolean)
    .join("");
} // Добавление div по позициям

function createPlayerElement(playerData, leagueKey, parentKey, playerKey) {
  const playerClone = playerTemplate.cloneNode(true);
  const templateElements = {
    player: playerClone.querySelector(".player_item"),
    photo: playerClone.querySelector(".player_photo"),
    firstName: playerClone.querySelector(".player_firstName"),
    lastName: playerClone.querySelector(".player_lastName"),
    pointsWrapper: playerClone.querySelector(".player_totalPoints_wrapper"),
    runningLinePs: playerClone.querySelectorAll(".player_running_line p"),
  };
  const popup = document.querySelector(".popup");
  const linkToThePhoto = `${locationOfTheImages}players/${leagueKey}/${playerKey}.${
    leagueKey === "pl" ? "png" : "webp"
  }`;

  templateElements.photo.style.opacity = "0";
  templateElements.photo.src = linkToThePhoto;
  templateElements.photo.alt = `${playerData.firstName} ${playerData.lastName}`;
  if (templateElements.complete) templateElements.photo.style.opacity = "1";
  templateElements.photo.addEventListener("load", () => {
    templateElements.photo.style.opacity = "1";
  });

  templateElements.firstName.textContent = playerData.firstName;
  templateElements.lastName.textContent = playerData.lastName;
  templateElements.pointsWrapper.innerHTML = "";

  const stats = playerData.stats[leagueKey];
  const points = stats ? calculatePlayerPoints(stats) : 0;

  const divCount = points < 10 ? 4 : points > 99 ? 2 : 3;

  for (let i = 1; i <= divCount; i++) {
    const div = document.createElement("div");
    div.classList.add(`point-div-${i}`);

    for (let j = 0; j < 8; j++) {
      div.appendChild(document.createElement("p")).textContent = points;
    }

    templateElements.pointsWrapper.appendChild(div);
  }

  templateElements.runningLinePs.forEach(
    (p) => (p.textContent = parentKey.slice(0, -1)),
  );

  templateElements.player.addEventListener("click", () => {
    const popupElements = {
      header: popup.querySelector(".popup_header"),
      firstName: popup.querySelector(".popup_player_firstName"),
      lastName: popup.querySelector(".popup_player_lastName"),
      photo: popup.querySelector(".popup_player_photo"),
      points: popup.querySelector(".popup_player_points"),
      team: popup.querySelector(".popup_player_team"),
      teamBig: popup.querySelector(".popup_player_team_big"),
      runningLinePs: popup.querySelectorAll(".popup_running_line p"),
      buttons: popup.querySelector(".popup_buttons"),
      tourResult: popup.querySelector(".tour_result"),
      tourStats: popup.querySelector(".tour_statistics"),
      genStats: popup.querySelector(".general_statistics"),
    };

    // Инициализация popup
    openPopup(popup);
    addCloseOverlayListener(popup);
    popup
      .querySelector(".close")
      .addEventListener("click", () => closePopup(popup));

    // Заполнение данных игрока
    const teamInfo = activeTeams[playerData.team];

    const elementsToLoad = [
      popupElements.photo,
      popupElements.team,
      popupElements.teamBig,
    ];
    elementsToLoad.forEach((el) => (el.style.opacity = 0));
    popupElements.header.classList.remove(
      ...Array.from(popupElements.header.classList).filter((cls) =>
        cls.startsWith("popup_header_"),
      ),
    );
    popupElements.header.classList.add(`popup_header_${leagueKey}`);
    popupElements.firstName.textContent = playerData.firstName;
    popupElements.lastName.textContent = playerData.lastName;
    popupElements.photo.src = linkToThePhoto;
    popupElements.photo.alt = `${playerData.firstName} ${playerData.lastName}`;
    popupElements.points.textContent = stats ? calculatePlayerPoints(stats) : 0;
    popupElements.team.src = `${locationOfTheImages}logos/teams/${
      teams[playerData.team]
    }.png`;
    popupElements.teamBig.src = `${locationOfTheImages}logos/teams/white/${
      teams[playerData.team]
    }.png`;
    popupElements.team.alt =
      popupElements.teamBig.alt = `Логотип футбольного клуба ${playerData.team}`;
    popupElements.runningLinePs.forEach(
      (p) => (p.textContent = parentKey.slice(0, -1)),
    );
    let loaded = 0;
    const onLoad = () => {
      if (++loaded === elementsToLoad.length) {
        elementsToLoad.forEach((el, index) => {
          el.style.opacity = [1, 1, 0.16][index];
        });
      }
    };
    elementsToLoad.forEach((el, index) => {
      if (el.complete) onLoad();
      el.addEventListener("load", onLoad);
    });

    // Создание кнопок туров
    const opponents = teamInfo[`opponents_${leagueKey}`];
    const startIndex =
      leagueKey === "pl"
        ? 7
        : leagueKey === "laLiga"
          ? 8
          : leagueKey === "seriaA"
            ? 6
            : 1;

    popupElements.buttons.innerHTML = "";
    opponents.forEach((teamName, index) => {
      const tourNumber = startIndex + index;
      const button = document.createElement("button");
      const p = document.createElement("p");
      const buttonWrapper = document.createElement("div");
      const imgWrapper = document.createElement("div");
      const img = document.createElement("img");

      p.textContent = `GW.${tourNumber}`;
      img.src = `${locationOfTheImages}logos/teams/${teams[teamName]}.png`;
      img.alt = `Логотип ${teamName}`;
      imgWrapper.appendChild(img);
      imgWrapper.classList.add("popup_button_img_wrapper");
      buttonWrapper.appendChild(imgWrapper);
      buttonWrapper.classList.add("popup_button_wrapper");
      button.appendChild(p);
      button.appendChild(buttonWrapper);
      button.dataset.tour = tourNumber;

      if (!stats[tourNumber]) button.classList.add("disabled");
      popupElements.buttons.appendChild(button);
    });

    // Создание цветов команды
    const leftColor = `#${teamInfo.color[0]}`;
    const rightColor = `#${teamInfo.color[1]}`;
    document.documentElement.style.setProperty(
      "--background-team-left",
      leftColor,
    );
    document.documentElement.style.setProperty(
      "--background-team-right",
      rightColor,
    );

    // Находим активную кнопку
    const activeButton = [...popupElements.buttons.children]
      .filter((btn) => !btn.classList.contains("disabled"))
      .pop();

    if (activeButton) activeButton.classList.add("active");

    // Очистка контейнеров
    popupElements.tourResult.innerHTML =
      popupElements.tourStats.innerHTML =
      popupElements.genStats.innerHTML =
        "";

    const matchesPlayed = popup.querySelector(".main_stats_matches-played");
    const priceStats = popup.querySelector(".main_stats_price");
    const diff1 = popup.querySelector(".main_stats_different-1");
    const diff2 = popup.querySelector(".main_stats_different-2");
    const setStat = (container, value, term, icon) => {
      container.querySelector(".main_stats_value").textContent = value;
      container.querySelector(".main_stats_description").textContent =
        translate(term, value);
      const img = container.querySelector(".main_stats_img");
      img.style.opacity = "0";
      img.src = `${locationOfTheImages}icons/${icon}.png`;
      setupImageWithContainer(img);
    };
    const matchesCount = Object.keys(stats).filter(
      (k) => !["teams", "result"].includes(k),
    ).length;
    setStat(matchesPlayed, matchesCount, "games", "field");
    setStat(priceStats, playerData.price[leagueKey], "price", "price-tag");
    if (parentKey === "goalkeepers") {
      const saves = Object.values(stats).reduce(
        (s, t) => s + (t.saves?.[0] || 0),
        0,
      );
      setStat(diff1, saves, "saves", "glove");
    } else if (parentKey === "defenders") {
      const goals = Object.values(stats).reduce(
        (s, t) => s + (t.goals?.[0] || 0),
        0,
      );
      const assists = Object.values(stats).reduce(
        (s, t) => s + (t.assists?.[0] || 0),
        0,
      );
      diff1.querySelector(".main_stats_value").textContent = goals + assists;
      diff1.querySelector(".main_stats_description").textContent = "гол+пас";
      diff1.querySelector(".main_stats_img").src =
        `${locationOfTheImages}icons/shoes.png`;
    } else if (["midfielders", "forwards"].includes(parentKey)) {
      const goals = Object.values(stats).reduce(
        (s, t) => s + (t.goals?.[0] || 0),
        0,
      );
      setStat(diff1, goals, "goals", "ball");
    }
    if (["goalkeepers", "defenders"].includes(parentKey)) {
      const cleanSheets = Object.values(stats).filter(
        (t) => t.cleanSheet,
      ).length;
      setStat(diff2, cleanSheets, "cleanSheet", "lock");
    } else if (["midfielders", "forwards"].includes(parentKey)) {
      const assists = Object.values(stats).reduce(
        (s, t) => s + (t.assists?.[0] || 0),
        0,
      );
      setStat(diff2, assists, "assists", "shoes");
    }

    // Собираем общую статистику
    const generalStats = {};
    const booleanKeys = new Set();

    for (const tour in stats) {
      if (tour === "teams" || tour === "result") continue;
      for (const key in stats[tour]) {
        if (key === "teams" || key === "result") continue;
        const value = stats[tour][key];

        if (!generalStats[key]) generalStats[key] = [0, 0];

        if (Array.isArray(value)) {
          const firstValue = value[0] !== undefined ? value[0] : 0;
          const secondValue = value[1] !== undefined ? value[1] : 0;

          if (firstValue === true && typeof secondValue === "number") {
            generalStats[key][0]++;
            generalStats[key][1] += secondValue;
            booleanKeys.add(key);
          } else if (
            typeof firstValue === "number" &&
            typeof secondValue === "number"
          ) {
            generalStats[key][0] += firstValue;
            generalStats[key][1] += secondValue;
          } else if (typeof secondValue === "number") {
            generalStats[key][1] += secondValue;
          }
        } else if (value === true) {
          generalStats[key][0]++;
          booleanKeys.add(key);
        }
      }
    }

    // Отображаем общую статистику
    const keys = Object.keys(generalStats);
    const nonBoolean = keys.filter((key) => !booleanKeys.has(key));
    const boolean = keys.filter((key) => booleanKeys.has(key));
    const allKeys = [...nonBoolean, ...boolean];

    allKeys.forEach((key) => {
      const [count, sum] = generalStats[key];

      const p = document.createElement("p");
      const span = document.createElement("span");

      const isValidKey = booleanKeys.has(key) || count !== 0;
      const translateValue = isValidKey ? count : undefined;
      const baseText = translate(key, translateValue);

      p.textContent = isValidKey ? `${count} ${baseText}` : baseText;

      if (key !== "captain") {
        span.textContent = `${sum} оч.`;
        span.classList.add("statistics_points");
        p.textContent += ":";
        p.appendChild(span);
      }

      popupElements.genStats.appendChild(p);

      if (key === allKeys[allKeys.length - 1]) {
        const totalP = document.createElement("p");
        totalP.classList.add("statistics_total_points");
        totalP.innerHTML = `Итого:<span>${points}</span> оч.`;
        popupElements.genStats.appendChild(totalP);
      }
    });

    // Функция обновления тура
    const updateTour = (tourNumber) => {
      popupElements.tourResult.innerHTML = popupElements.tourStats.innerHTML =
        "";

      const tourStats = stats[tourNumber];
      if (!tourStats) return;

      // Результат матча
      const [homeTeam, awayTeam] = tourStats.teams;
      const score = tourStats.result;
      const [homeScore, awayScore] = score.split("-").map(Number);

      const homeTeamElement = document.createElement("p");
      homeTeamElement.textContent = homeTeam;

      const homeLogo = document.createElement("img");
      homeLogo.src = `${locationOfTheImages}logos/teams/${teams[homeTeam]}.png`;
      homeLogo.alt = `Логотип ${homeTeam}`;

      const awayTeamElement = document.createElement("p");
      awayTeamElement.textContent = awayTeam;

      const awayLogo = document.createElement("img");
      awayLogo.src = `${locationOfTheImages}logos/teams/${teams[awayTeam]}.png`;
      awayLogo.alt = `Логотип ${awayTeam}`;

      [homeLogo, awayLogo].forEach((logo) => {
        logo.style.opacity = "0";
        setupImageWithContainer(logo);
      });

      const scoreElement = document.createElement("p");
      scoreElement.classList.add("tour_score");
      scoreElement.textContent = score;

      [homeTeamElement, awayTeamElement].forEach((el) =>
        el.classList.remove("loser"),
      );
      if (homeScore < awayScore) {
        homeTeamElement.classList.add("loser");
      } else if (awayScore < homeScore) {
        awayTeamElement.classList.add("loser");
      }

      [
        homeTeamElement,
        homeLogo,
        scoreElement,
        awayLogo,
        awayTeamElement,
      ].forEach((element) => popupElements.tourResult.appendChild(element));

      let totalPoints = 0;
      // Статистика тура
      for (const key in tourStats) {
        if (key === "teams" || key === "result") continue;

        const value = tourStats[key];
        let [val1, val2] = ["", ""];

        if (Array.isArray(value)) {
          const firstValue = value[0] !== undefined ? value[0] : "";
          const secondValue = value[1] !== undefined ? value[1] : "";

          if (firstValue === true) {
            val2 = secondValue;
          } else if (
            typeof firstValue === "number" &&
            typeof secondValue === "number"
          ) {
            val1 = firstValue;
            val2 = secondValue;
          } else {
            val1 = firstValue;
            val2 = secondValue;
          }
        }

        const p = document.createElement("p");
        const span = document.createElement("span");
        p.classList.value = "";

        const baseText = translate(key, value[0] ?? undefined);
        p.textContent = val1 ? `${val1} ${baseText}` : baseText;

        if (val2 !== "") {
          p.textContent += ":";
          span.textContent = `${val2} оч.`;
          span.classList.add("statistics_points");
          p.appendChild(span);
        }

        if (key === "captain") {
          p.classList.add("statistics_captain");
        }

        popupElements.tourStats.appendChild(p);

        totalPoints += Number(val2);
        if (key === "captain") {
          totalPoints *= 2;
        }
        if (key === Object.keys(tourStats).at(-1)) {
          const totalP = document.createElement("p");
          totalP.classList.add("statistics_total_points");
          totalP.innerHTML = `Итого:<span>${totalPoints}</span> оч.`;
          popupElements.tourStats.appendChild(totalP);
        }
      }
    };

    // Инициализация активного тура
    if (activeButton) {
      updateTour(activeButton.dataset.tour);
    }

    // Обработчики кнопок
    popupElements.buttons.addEventListener("click", (e) => {
      const button = e.target.closest("button");
      if (!button || button.classList.contains("disabled")) return;

      popupElements.buttons
        .querySelectorAll("button")
        .forEach((btn) => btn.classList.remove("active"));

      button.classList.add("active");
      updateTour(button.dataset.tour);
    });
  });

  return playerClone;
}
function addPlayers(position, leagueKey) {
  playersList.classList.remove(
    ...Array.from(playersList.classList).filter((cls) =>
      cls.startsWith("players_list_"),
    ),
  );
  playersList.classList.add(`players_list_${leagueKey}`);

  const container = playersList.querySelector(`.${position}`);
  container.innerHTML = "";

  const positionPlayers = players[position];
  const validPlayers = [];
  for (const playerKey in positionPlayers) {
    const player = positionPlayers[playerKey];
    if (player.stats[leagueKey]) {
      validPlayers.push({
        player,
        playerKey,
        points: calculatePlayerPoints(player.stats[leagueKey]),
      });
    }
  }
  validPlayers.sort((a, b) => a.points - b.points);
  const fragment = document.createDocumentFragment();
  for (const { player, playerKey } of validPlayers) {
    fragment.appendChild(
      createPlayerElement(player, leagueKey, position, playerKey),
    );
  }
  container.appendChild(fragment);
}
function updatePlayers(leagueKey) {
  Object.keys(players).forEach((position) => {
    addPlayers(position, leagueKey);
  });
}
function handleButtonClick(button) {
  headerElements.buttons.forEach((btn) =>
    btn.classList.remove("header_button-is_active"),
  );
  button.classList.add("header_button-is_active");

  const leagueKey = button.dataset.league;

  renderPlayersList();
  updateHeaderAndCSS(leagueKey);
  updatePlayers(leagueKey);
}
function init() {
  const activeButton = document.querySelector(".header_button-is_active");
  if (activeButton) {
    handleButtonClick(activeButton);
  }
}
headerElements.buttons.forEach((button) => {
  button.addEventListener("click", () => handleButtonClick(button));
});
document.addEventListener("DOMContentLoaded", () => {
  init();
}); // Всё, что касается обновления шапки с логотипом и списка игроков

function openPopup(popupElement) {
  const body = document.body;
  const scrollPosition = window.scrollY;
  body.dataset.scrollPosition = scrollPosition;
  body.style.top = `-${scrollPosition}px`;
  body.classList.add("scroll-lock");
  popupElement.classList.add("popup_is-opened");
  document.addEventListener("keydown", closePopupByEsc);
}
function closePopup(popupElement) {
  const body = document.body;
  const scrollPosition = body.dataset.scrollPosition;
  body.style.top = "";
  body.classList.remove("scroll-lock");
  window.scrollTo(0, scrollPosition);
  popupElement.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closePopupByEsc);
}
function closePopupByEsc(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_is-opened"));
  }
}
function addCloseOverlayListener(element) {
  element.addEventListener("click", function (e) {
    if (e.target === e.currentTarget) {
      closePopup(e.currentTarget);
    }
  });
}
window.addEventListener("resize", updateLogo);
