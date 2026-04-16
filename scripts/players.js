export const players = {
  goalkeepers: {
    alisson: {
      lastName: "Алисон",
      team: "Ливерпуль",
      stats: {
        "25/26": {
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
    chevalier: {
      firstName: "Люка",
      lastName: "Шевалье",
      team: "ПСЖ",
      stats: {
        "25/26": {
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
    milinkovicSavic: {
      firstName: "Ваня",
      lastName: "Милинкович-Савич",
      team: "Наполи",
      stats: {
        "25/26": {
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
      stats: {
        "25/26": {
          "1/16(1)": {
            teams: ["Брюгге", "Атлетико"],
            result: "3-3",
            minutesOnField: [90, 2],
            saves: [6, 2],
            missedGoals: [3, -1],
          },
          "1/16(2)": {
            teams: ["Атлетико", "Брюгге"],
            result: "4-1",
            minutesOnField: [90, 2],
            assists: [1, 3],
            saves: [5, 1],
            missedGoals: [1, 0],
          },
        },
      },
    },
    raya: {
      firstName: "Давид",
      lastName: "Райя",
      team: "Арсенал",
      stats: {
        "25/26": {
          1: {
            teams: ["Атлетик", "Арсенал"],
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
          "1/8(1)": {
            teams: ["Байер", "Арсенал"],
            result: "1-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            saves: [2, 0],
          },
          "1/8(2)": {
            teams: ["Арсенал", "Байер"],
            result: "2-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            saves: [2, 0],
          },
        },
      },
    },
  },
  defenders: {
    dumfries: {
      firstName: "Дензел",
      lastName: "Дюмфрис",
      team: "Интер",
      stats: {
        "25/26": {
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
      },
    },
    gabriel: {
      lastName: "Габриэл",
      team: "Арсенал",
      stats: {
        "25/26": {
          "1/8(1)": {
            teams: ["Байер", "Арсенал"],
            result: "1-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [10, 3],
          },
          "1/8(2)": {
            teams: ["Арсенал", "Байер"],
            result: "2-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [6, 2],
            captain: true,
          },
        },
      },
    },
    gvardiol: {
      firstName: "Йошко",
      lastName: "Гвардиол",
      team: "Манчестер Сити",
      stats: {
        "25/26": {
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
      },
    },
    hakimi: {
      firstName: "Ашраф",
      lastName: "Хакими",
      team: "ПСЖ",
      stats: {
        "25/26": {
          "1/16(1)": {
            teams: ["Монако", "ПСЖ"],
            result: "2-3",
            minutesOnField: [90, 2],
            goals: [1, 6],
            missedGoals: [2, -1],
            tackles: [2, 0],
          },
          "1/16(2)": {
            teams: ["ПСЖ", "Монако"],
            result: "2-2",
            minutesOnField: [90, 2],
            assists: [1, 3],
            missedGoals: [2, -1],
            tackles: [3, 1],
          },
        },
      },
    },
    huijsen: {
      firstName: "Дин",
      lastName: "Хейсен",
      team: "Реал Мадрид",
      stats: {
        "25/26": {
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
      },
    },
    kounde: {
      firstName: "Жюль",
      lastName: "Кунде",
      team: "Барселона",
      stats: {
        "25/26": {
          5: {
            teams: ["Челси", "Барселона"],
            result: "3-0",
            minutesOnField: [90, 2],
            missedGoals: [3, -1],
            ownGoal: [1, -2],
            tackles: [9, 3],
          },
        },
      },
    },
    nunoMendes: {
      lastName: "Нуну Мендеш",
      team: "ПСЖ",
      stats: {
        "25/26": {
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
          "1/16(2)": {
            teams: ["ПСЖ", "Монако"],
            result: "2-2",
            minutesOnField: [80, 2],
            missedGoals: [1, 0],
            tackles: [4, 1],
          },
        },
      },
    },
    pacho: {
      firstName: "Виллиан",
      lastName: "Пачо",
      team: "ПСЖ",
      stats: {
        "25/26": {
          5: {
            teams: ["ПСЖ", "Тоттенхэм"],
            result: "5-3",
            minutesOnField: [90, 2],
            goals: [1, 6],
            missedGoals: [3, -1],
            tackles: [4, 1],
          },
          6: {
            teams: ["Атлетик", "ПСЖ"],
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
          "1/16(1)": {
            teams: ["Монако", "ПСЖ"],
            result: "2-3",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            tackles: [6, 2],
          },
          "1/16(2)": {
            teams: ["ПСЖ", "Монако"],
            result: "2-2",
            minutesOnField: [90, 2],
            missedGoals: [2, -1],
            tackles: [7, 2],
          },
        },
      },
    },
    saliba: {
      firstName: "Вильям",
      lastName: "Салиба",
      team: "Арсенал",
      stats: {
        "25/26": {
          "1/8(2)": {
            teams: ["Арсенал", "Байер"],
            result: "2-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [9, 3],
          },
        },
      },
    },
    timber: {
      firstName: "Юррьен",
      lastName: "Тимбер",
      team: "Арсенал",
      stats: {
        "25/26": {
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
          "1/8(1)": {
            teams: ["Байер", "Арсенал"],
            result: "1-1",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            tackles: [2, 0],
          },
        },
      },
    },
    upamecano: {
      firstName: "Дайо",
      lastName: "Упамекано",
      team: "Бавария",
      stats: {
        "25/26": {
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
          "1/8(1)": {
            teams: ["Аталанта", "Бавария"],
            result: "1-6",
            minutesOnField: [90, 2],
            assists: [1, 3],
            missedGoals: [1, 0],
            tackles: [8, 2],
          },
        },
      },
    },
    vanDijk: {
      firstName: "Вирджил",
      lastName: "ван Дейк",
      team: "Ливерпуль",
      stats: {
        "25/26": {
          "1/8(1)": {
            teams: ["Галатасарай", "Ливерпуль"],
            result: "1-0",
            minutesOnField: [90, 2],
            missedGoals: [1, 0],
            yellowCard: [1, -1],
            tackles: [7, 2],
          },
          "1/8(2)": {
            teams: ["Ливерпуль", "Галатасарай"],
            result: "4-0",
            minutesOnField: [90, 2],
            cleanSheet: [true, 4],
            tackles: [9, 3],
          },
        },
      },
    },
    vandeVen: {
      firstName: "Мики",
      lastName: "ван де Вен",
      team: "Тоттенхэм",
      stats: {
        "25/26": {
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
  },
  midfielders: {
    ardaGuler: {
      lastName: "Арда Гюлер",
      team: "Реал Мадрид",
      stats: {
        "25/26": {
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
      },
    },
    bellingham: {
      firstName: "Джуд",
      lastName: "Беллингем",
      team: "Реал Мадрид",
      stats: {
        "25/26": {
          5: {
            teams: ["Олимпиакос", "Реал Мадрид"],
            result: "3-4",
            minutesOnField: [29, 1],
            tackles: [2, 0],
          },
        },
      },
    },
    calhanoglu: {
      firstName: "Хакан",
      lastName: "Чалханоглу",
      team: "Интер",
      stats: {
        "25/26": {
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
      },
    },
    ferminLopez: {
      lastName: "Фермин Лопес",
      team: "Барселона",
      stats: {
        "25/26": {
          5: {
            teams: ["Челси", "Барселона"],
            result: "3-0",
            minutesOnField: [62, 2],
          },
          "1/8(1)": {
            teams: ["Ньюкасл", "Барселона"],
            result: "1-1",
            minutesOnField: [88, 2],
            tackles: [4, 1],
          },
          "1/8(2)": {
            teams: ["Барселона", "Ньюкасл"],
            result: "7-2",
            minutesOnField: [66, 2],
            assists: [1, 3],
            goals: [1, 5],
            tackles: [2, 0],
          },
        },
      },
    },
    simeone: {
      firstName: "Джулиано",
      lastName: "Симеоне",
      team: "Атлетико",
      stats: {
        "25/26": {
          "1/16(1)": {
            teams: ["Брюгге", "Атлетико"],
            result: "3-3",
            minutesOnField: [90, 2],
            tackles: [7, 2],
          },
          "1/16(2)": {
            teams: ["Атлетико", "Брюгге"],
            result: "4-1",
            minutesOnField: [83, 2],
            tackles: [2, 0],
          },
        },
      },
    },
    karl: {
      firstName: "Леннарт",
      lastName: "Карль",
      team: "Бавария",
      stats: {
        "25/26": {
          "1/8(2)": {
            teams: ["Бавария", "Аталанта"],
            result: "4-1",
            minutesOnField: [90, 2],
            assists: [1, 3],
            goals: [1, 5],
            tackles: [3, 1],
          },
        },
      },
    },
    khephrenThuram: {
      firstName: "Хефрен",
      lastName: "Тюрам",
      team: "Ювентус",
      stats: {
        "25/26": {
          1: {
            teams: ["Ювентус", "Боруссия Дортмунд"],
            result: "4-4",
            minutesOnField: [90, 2],
            tackles: [7, 2],
          },
          "1/16(1)": {
            teams: ["Галатасарай", "Ювентус"],
            result: "5-2",
            minutesOnField: [80, 2],
            tackles: [2, 0],
          },
          "1/16(2)": {
            teams: ["Ювентус", "Галатасарай"],
            result: "3-2",
            minutesOnField: [77, 2],
            cleanSheet: [true, 1],
            earnedPenalty: [1, 2],
            tackles: [2, 0],
          },
        },
      },
    },
    kudus: {
      firstName: "Мохаммед",
      lastName: "Кудус",
      team: "Тоттенхэм",
      stats: {
        "25/26": {
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
    kvaratskhelia: {
      firstName: "Хвича",
      lastName: "Кварацхелия",
      team: "ПСЖ",
      stats: {
        "25/26": {
          "1/16(1)": {
            teams: ["Монако", "ПСЖ"],
            result: "2-3",
            minutesOnField: [69, 2],
            earnedPenalty: [1, 2],
            tackles: [1, 0],
          },
          "1/16(2)": {
            teams: ["ПСЖ", "Монако"],
            result: "2-2",
            minutesOnField: [90, 2],
            goals: [1, 5],
            tackles: [4, 1],
            captain: true,
          },
        },
      },
    },
    mcTominay: {
      firstName: "Скотт",
      lastName: "Мактоминей",
      team: "Наполи",
      stats: {
        "25/26": {
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
      },
    },
    nmecha: {
      firstName: "Феликс",
      lastName: "Нмеча",
      team: "Боруссия Дортмунд",
      stats: {
        "25/26": {
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
      stats: {
        "25/26": {
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
          "1/8(1)": {
            teams: ["Аталанта", "Бавария"],
            result: "1-6",
            minutesOnField: [90, 2],
            assists: [1, 3],
            goals: [2, 10],
            yellowCard: [1, -1],
            tackles: [1, 0],
            outsideTheBox: [1, 1],
            playerOfTheMatch: [true, 3],
          },
        },
      },
    },
    pedri: {
      lastName: "Педри",
      team: "Барселона",
      stats: {
        "25/26": {
          6: {
            teams: ["Барселона", "Айнтрахт Франкфурт"],
            result: "2-1",
            minutesOnField: [90, 2],
            tackles: [6, 2],
          },
        },
      },
    },
    raphinha: {
      lastName: "Рафинья",
      team: "Барселона",
      stats: {
        "25/26": {
          8: {
            teams: ["Барселона", "Копенгаген"],
            result: "4-1",
            minutesOnField: [90, 2],
            goals: [1, 5],
            tackles: [3, 1],
            captain: true,
          },
          "1/8(1)": {
            teams: ["Ньюкасл", "Барселона"],
            result: "1-1",
            minutesOnField: [88, 2],
            tackles: [2, 0],
          },
          "1/8(2)": {
            teams: ["Барселона", "Ньюкасл"],
            result: "7-2",
            minutesOnField: [90, 2],
            assists: [2, 6],
            goals: [2, 10],
            concedingPenalty: [1, 2],
            tackles: [1, 0],
            playerOfTheMatch: [true, 3],
          },
        },
      },
    },
    szoboszlai: {
      firstName: "Доминик",
      lastName: "Собослаи",
      team: "Ливерпуль",
      stats: {
        "25/26": {
          "1/8(2)": {
            teams: ["Ливерпуль", "Галатасарай"],
            result: "4-0",
            minutesOnField: [90, 2],
            goals: [1, 5],
            cleanSheet: [true, 1],
            concedingPenalty: [1, 2],
            tackles: [7, 2],
            playerOfTheMatch: [true, 3],
          },
        },
      },
    },
    yamal: {
      firstName: "Ламин",
      lastName: "Ямаль",
      team: "Барселона",
      stats: {
        "25/26": {
          5: {
            teams: ["Челси", "Барселона"],
            result: "3-0",
            minutesOnField: [80, 2],
            tackles: [4, 1],
          },
          "1/8(1)": {
            teams: ["Ньюкасл", "Барселона"],
            result: "1-1",
            minutesOnField: [90, 2],
            goals: [1, 5],
            captain: true,
          },
          "1/8(2)": {
            teams: ["Барселона", "Ньюкасл"],
            result: "7-2",
            minutesOnField: [90, 2],
            assists: [1, 3],
            goals: [1, 5],
          },
        },
      },
    },
    kenanYıldız: {
      lastName: "Кенан Йылдыз",
      team: "Ювентус",
      stats: {
        "25/26": {
          7: {
            teams: ["Ювентус", "Бенфика"],
            result: "2-0",
            minutesOnField: [82, 2],
            cleanSheet: [true, 1],
          },
          "1/16(2)": {
            teams: ["Ювентус", "Галатасарай"],
            result: "3-2",
            minutesOnField: [103, 2],
            cleanSheet: [true, 1],
            yellowCard: [1, -1],
            tackles: [2, 0],
          },
        },
      },
    },
    zamboAnguissa: {
      firstName: "Франк",
      lastName: "Замбо-Ангисса",
      team: "Наполи",
      stats: {
        "25/26": {
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
    zielinski: {
      firstName: "Петр",
      lastName: "Зелиньски",
      team: "Интер",
      stats: {
        "25/26": {
          "1/16(1)": {
            teams: ["Буде-Глимт", "Интер"],
            result: "3-1",
            minutesOnField: [14, 1],
            tackles: [3, 1],
          },
          "1/16(2)": {
            teams: ["Интер", "Буде-Глимт"],
            result: "1-2",
            minutesOnField: [62, 2],
            tackles: [3, 1],
          },
        },
      },
    },
  },
  forwards: {
    ekitike: {
      firstName: "Юго",
      lastName: "Экитике",
      team: "Ливерпуль",
      stats: {
        "25/26": {
          8: {
            teams: ["Ливерпуль", "Карабах"],
            result: "6-0",
            minutesOnField: [67, 2],
            assists: [1, 3],
            goals: [1, 4],
            outsideTheBox: [1, 1],
          },
          "1/8(1)": {
            teams: ["Галатасарай", "Ливерпуль"],
            result: "1-0",
            minutesOnField: [90, 2],
            tackles: [4, 1],
          },
          "1/8(2)": {
            teams: ["Ливерпуль", "Галатасарай"],
            result: "4-0",
            minutesOnField: [89, 2],
            goals: [1, 4],
            tackles: [2, 0],
          },
        },
      },
    },
    guirassy: {
      firstName: "Серу",
      lastName: "Гирасси",
      team: "Боруссия Дортмунд",
      stats: {
        "25/26": {
          "1/16(2)": {
            teams: ["Аталанта", "Боруссия Дортмунд"],
            result: "4-1",
            minutesOnField: [90, 2],
          },
        },
      },
    },
    haaland: {
      firstName: "Эрлинг",
      lastName: "Холанн",
      team: "Манчестер Сити",
      stats: {
        "25/26": {
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
          "1/8(1)": {
            teams: ["Реал Мадрид", "Манчестер Сити"],
            result: "3-0",
            minutesOnField: [82, 2],
            tackles: [1, 0],
          },
          "1/8(2)": {
            teams: ["Манчестер Сити", "Реал Мадрид"],
            result: "1-2",
            minutesOnField: [57, 1],
            goals: [1, 4],
            tackles: [1, 0],
          },
        },
      },
    },
    kane: {
      firstName: "Гарри",
      lastName: "Кейн",
      team: "Бавария",
      stats: {
        "25/26": {
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
    lautaroMartinez: {
      firstName: "Лаутаро",
      lastName: "Мартинес",
      team: "Интер",
      stats: {
        "25/26": {
          "1/16(1)": {
            teams: ["Буде-Глимт", "Интер"],
            result: "3-1",
            minutesOnField: [61, 2],
            tackles: [3, 1],
            captain: true,
          },
        },
      },
    },
    mbappe: {
      firstName: "Килиан",
      lastName: "Мбаппе",
      team: "Реал Мадрид",
      stats: {
        "25/26": {
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
          "1/16(1)": {
            teams: ["Бенфика", "Реал Мадрид"],
            result: "0-1",
            minutesOnField: [90, 2],
            assists: [1, 3],
            yellowCard: [1, -1],
            tackles: [3, 1],
          },
        },
      },
    },
    marcusThuram: {
      firstName: "Маркюс",
      lastName: "Тюрам",
      team: "Интер",
      stats: {
        "25/26": {
          2: {
            teams: ["Интер", "Славия"],
            result: "3-0",
            minutesOnField: [66, 2],
            assists: [1, 3],
            tackles: [1, 0],
            playerOfTheMatch: [true, 3],
          },
          "1/16(1)": {
            teams: ["Буде-Глимт", "Интер"],
            result: "3-1",
            minutesOnField: [29, 1],
            tackles: [1, 0],
          },
          "1/16(2)": {
            teams: ["Интер", "Буде-Глимт"],
            result: "1-2",
            minutesOnField: [90, 2],
            tackles: [3, 1],
          },
        },
      },
    },
    pavlidis: {
      firstName: "Вангелис",
      lastName: "Павлидис",
      team: "Бенфика",
      stats: {
        "25/26": {
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
  },
}; // Игроки
