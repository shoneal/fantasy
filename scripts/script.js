import { players } from "./players.js";
import { activeTeams } from "./active-teams.js";
import { tables } from "./tables.js";

const basicLink = "https://shoneal.github.io/fantasy/images/";

const teams = {
  "Айнтрахт Франкфурт": "Eintracht-Frankfurt",
  Аякс: "Ajax",
  Арсенал: "Arsenal",
  Аталанта: "Atalanta",
  Атлетик: "Athletic",
  Атлетико: "Atletico",
  Байер: "Bayer",
  Бавария: "Bayern",
  Барселона: "Barcelona",
  Бенфика: "Benfica",
  "Боруссия Дортмунд": "Borussia-Dortmund",
  "Буде-Глимт": "Bodo-Glimt",
  Брюгге: "Brugge",
  Вильярреал: "Villarreal",
  Галатасарай: "Galatasaray",
  Интер: "Inter",
  Карабах: "Qarabag",
  Кайрат: "Kairat",
  Копенгаген: "Copenhagen",
  Ливерпуль: "Liverpool",
  "Манчестер Сити": "Manchester-City",
  Марсель: "Marseille",
  Монако: "Monaco",
  Наполи: "Napoli",
  Ньюкасл: "Newcastle",
  Олимпиакос: "Olympiacos",
  Пафос: "Pafos",
  ПСВ: "PSV",
  ПСЖ: "PSG",
  "Реал Мадрид": "Real-Madrid",
  Славия: "Slavia",
  Спортинг: "Sporting",
  Тоттенхэм: "Tottenham",
  Челси: "Chelsea",
  Ювентус: "Juventus",
  Юнион: "Union",
}; // Логотипы команд
const terms = {
  goals: ["гол", "гола", "голов"],
  cleanSheet: ["сухой матч", "сухих матча", "сухих матчей"],
  missedGoals: ["пропущенный гол", "пропущенных гола", "пропущенных голов"],
  savingPenalty: ["отбитый пенальти", "отбитых пенальти", "отбитых пенальти"],
  saves: ["сейв", "сейва", "сейвов"],
  minutesOnField: ["минута на поле", "минуты на поле", "минут на поле"],
  outsideTheBox: [
    "гол из-за штрафной",
    "гола из-за штрафной",
    "голов из-за штрафной",
  ],
  playerOfTheMatch: [
    "награда «Игрок матча»",
    "награды «Игрок матча»",
    "наград «Игрок матча»",
    "Игрок матча",
  ],
  assists: ["голевой пас", "голевых паса", "голевых пасов"],
  tackles: ["возврат владения", "возврата владения", "возвратов владения"],
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
  captain: ["тур «Капитан»", "тура «Капитан»", "туров «Капитан»", "Капитан"],
  games: ["сыгранный матч", "сыгранных матча", "сыгранных матчей"],
}; // Терминология правил
const positions = {
  goalkeepers: "вратари",
  defenders: "защитники",
  midfielders: "полузащитники",
  forwards: "нападающие",
}; // Позиции
const statistics = [
  "Всего очков",
  "Голы",
  "Голевые пасы",
  "Возвраты владения",
  "Капитан",
  "Игрок матча",
  "Больше всего очков в&nbsp;одном матче",
  "Всего очков в&nbsp;среднем за&nbsp;матч",
  "Всего игроков по&nbsp;командам",
]; // Показатели статистик
const body = {
  buttons: document.querySelector(".header-buttons"),
  table: document.querySelector(".table"),
  squad: document.querySelector(".squad"),
  statistics: document.querySelector(".statistics"),
  footer: document.querySelector("footer"),
  popup: document.querySelector(".popup"),
  template: document.getElementById("player-template"),
}; // Элементы тела страницы

const showImage = (img) => {
  const onLoadOrError = () => {
    img.style.opacity = "1";
  };

  if (img.complete) {
    onLoadOrError();
  } else {
    img.addEventListener("load", onLoadOrError, { once: true });
    img.addEventListener("error", onLoadOrError, { once: true });
  }
}; // Функция для настройки прозрачности изображения
function getTerm(number, termsArray) {
  const n = number % 100;
  if (n >= 11 && n <= 14) return termsArray[2];
  return termsArray[n % 10 === 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 ? 1 : 2];
} // Функция для определения нужного термина

function calculatePoints(match) {
  if (!match) return 0;

  let points = 0;
  const isCaptain = !!match?.captain;

  for (const key in match) {
    const value = match[key];
    if (
      Array.isArray(value) &&
      value.length > 1 &&
      typeof value[1] === "number"
    ) {
      points += value[1];
    }
  }

  return isCaptain ? points * 2 : points;
} // Подсчёт очков за один матч
function calculatePlayerPoints(season) {
  let totalPoints = 0;
  const matches = Object.values(season);

  for (let i = 0; i < matches.length; i++) {
    totalPoints += calculatePoints(matches[i]);
  }

  return totalPoints;
} // Подсчёт очков всех матчей одного игрока
function calculateSeasonPoints(season) {
  let totalPoints = 0;

  for (const position of Object.values(players)) {
    for (const player of Object.values(position)) {
      const seasonStats = player.stats?.[season];
      if (!seasonStats) continue;
      totalPoints += calculatePlayerPoints(seasonStats);
    }
  }

  return totalPoints;
} // Подсчёт всех очков всех игроков

function initializeHeaderButtons() {
  const seasons = Object.keys(tables);
  seasons.sort((a, b) => parseInt(b, 10) - parseInt(a, 10));
  const fragment = document.createDocumentFragment();
  seasons.forEach((season) => {
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.href = "#";
    a.textContent = "20" + season;
    a.dataset.season = season;

    li.appendChild(a);
    fragment.appendChild(li);
  });
  body.buttons.appendChild(fragment);
  body.buttons.addEventListener("click", handleSeasonClick);
} // Добавление главных кнопок в html
function handleSeasonClick(e) {
  const target = e.target.closest("a");
  if (!target) return;

  e.preventDefault();

  body.buttons.querySelectorAll("a.is-active").forEach((btn) => {
    btn.classList.remove("is-active");
    btn.tabIndex = 0;
  });

  target.classList.add("is-active");
  target.tabIndex = -1;

  const season = target.dataset.season;
  renderSeasonTable(season);
  renderSquad(season);
  renderStatistics(season);
} // Переключение кнопок в шапке

function renderSeasonTable(season) {
  const seasonData = tables[season] || {};
  const myPoints = Math.max(0, calculateSeasonPoints(season) - seasonData["Я"]);

  const fragment = document.createDocumentFragment();

  const players = Object.entries(seasonData)
    .filter(([name]) => name !== "Я")
    .map(([name, points]) => ({ name, points, isMe: false }))
    .concat({ name: "Я", points: myPoints, isMe: true })
    .sort((a, b) => b.points - a.points);

  const myIndex = players.findIndex((player) => player.isMe);

  const template = document.createElement("li");
  for (let i = 0; i < 3; i++) {
    template.appendChild(document.createElement("span"));
  }

  players.forEach((player, index) => {
    const li = template.cloneNode(true);

    li.children[0].textContent = index + 1;
    li.children[1].textContent = player.name;
    li.children[2].textContent = player.points;

    if (player.isMe) li.classList.add("its-me");

    if (Math.abs(index - myIndex) === 1) li.classList.add("my-neighbors");

    fragment.appendChild(li);
  });

  body.table.innerHTML = "";
  body.table.appendChild(fragment);
} // Создание таблицы

function renderSquad(season) {
  body.squad.innerHTML = "";

  const fragment = document.createDocumentFragment();

  for (const [positionKey, positionData] of Object.entries(players)) {
    const div = document.createElement("div");
    div.className = "squad-role";

    const h2 = document.createElement("h2");
    h2.textContent = positions[positionKey];
    div.appendChild(h2);

    const ul = document.createElement("ul");
    ul.className = "squad-list";

    const sortedPlayers = Object.entries(positionData)
      .filter(([_, playerData]) => playerData.stats[season])
      .map(([playerKey, playerData]) => {
        const playerPoints = calculatePlayerPoints(playerData.stats[season]);
        return { playerKey, playerData, playerPoints };
      })
      .sort((a, b) => b.playerPoints - a.playerPoints);

    sortedPlayers.forEach(({ playerKey, playerData, playerPoints }) => {
      const li = document.createElement("li");

      const clone = body.template.content.cloneNode(true);
      const avatar = clone.querySelector(".avatar");
      const badge = clone.querySelector(".badge");
      const name = clone.querySelector(".player-name");
      const points = clone.querySelector(".player-points");

      avatar.style.opacity = "0";
      avatar.src = `${basicLink}players/${season.replace(
        "/",
        "-",
      )}/basic/${playerKey}.jpg`;
      avatar.alt = playerData.lastName;
      showImage(avatar);

      badge.style.opacity = "0";
      badge.src = `${basicLink}team-logos/${teams[playerData.team]}.png`;
      badge.alt = badge.parentElement.title = playerData.team;
      showImage(badge);

      name.textContent = playerData.lastName;
      points.textContent = `${playerPoints} оч.`;

      li.appendChild(clone);

      const link = li.querySelector("a");
      if (link) {
        link.addEventListener("click", (event) => {
          event.preventDefault();
          openPlayerPopup(
            playerData,
            playerKey,
            season,
            playerPoints,
            badge.src,
          );
        });
      }

      ul.appendChild(li);
    });

    div.appendChild(ul);
    fragment.appendChild(div);
  }

  body.squad.innerHTML = "";
  body.squad.appendChild(fragment);
} // Вывод игроков

function renderStatistics(season) {
  body.statistics.innerHTML = "";

  const fragment = document.createDocumentFragment();

  for (const statName of statistics) {
    const normalized = statName.replace(/&nbsp;/g, " ");

    const card = document.createElement("div");
    card.className = "stats-data-card";

    const headerDiv = document.createElement("div");
    headerDiv.className = "header";

    const h2 = document.createElement("h2");
    h2.innerHTML = statName;

    const top5 = getTop5(normalized, season);
    const firstPlayer = createTop5Item(1, top5[0], normalized, season);

    headerDiv.append(h2, firstPlayer);

    const bodyDiv = document.createElement("div");
    bodyDiv.className = "body";

    for (let i = 1; i < Math.min(5, top5.length); i++) {
      const playerItem = createTop5Item(i + 1, top5[i], normalized, season);
      bodyDiv.appendChild(playerItem);
    }

    card.append(headerDiv, bodyDiv);
    fragment.appendChild(card);
  }

  body.statistics.appendChild(fragment);
} // Вывод топов-5
function getTop5(statName, season) {
  const allPlayers = [];
  const teamsMap = new Map();

  for (const [positionKey, positionData] of Object.entries(players)) {
    for (const [playerKey, playerData] of Object.entries(positionData)) {
      const seasonStats = playerData.stats[season];
      if (!seasonStats) continue;

      const gamesCount = Object.keys(seasonStats).length;
      const totalPoints = calculatePlayerPoints(seasonStats);

      const team = playerData.team;
      if (team) {
        let teamData = teamsMap.get(team);
        if (!teamData) {
          teamData = {
            team,
            value: 0,
            totalGames: 0,
            totalPoints: 0,
          };
          teamsMap.set(team, teamData);
        }

        teamData.value++;
        teamData.totalGames += gamesCount;
        teamData.totalPoints += totalPoints;
      }

      if (statName !== "Всего игроков по командам") {
        let value = 0;

        switch (statName) {
          case "Всего очков":
            value = totalPoints;
            break;

          case "Голы":
            for (const match of Object.values(seasonStats)) {
              value += match.goals?.[0] || 0;
            }
            break;

          case "Голевые пасы":
            for (const match of Object.values(seasonStats)) {
              value += match.assists?.[0] || 0;
            }
            break;

          case "Возвраты владения":
            for (const match of Object.values(seasonStats)) {
              value += match.tackles?.[0] || 0;
            }
            break;

          case "Капитан":
            for (const match of Object.values(seasonStats)) {
              if (match.captain) value++;
            }
            break;

          case "Игрок матча":
            for (const match of Object.values(seasonStats)) {
              if (match.playerOfTheMatch?.[0]) value++;
            }
            break;

          case "Больше всего очков в одном матче": {
            let maxPoints = 0;
            for (const match of Object.values(seasonStats)) {
              const points = calculatePoints(match);
              if (points > maxPoints) maxPoints = points;
            }
            value = maxPoints;
            break;
          }

          case "Всего очков в среднем за матч":
            value = totalPoints / gamesCount;
            break;
        }

        allPlayers.push({
          playerKey,
          playerData,
          value,
          gamesCount,
          totalPoints,
          team: playerData.team,
        });
      }
    }
  }

  if (statName === "Всего игроков по командам") {
    const teamsArray = Array.from(teamsMap.values());
    return sortTop5(teamsArray);
  } else {
    return sortTop5(allPlayers);
  }
} // Функция для получения топ‑5 игроков по показателю
function sortTop5(data) {
  return data
    .sort((a, b) => {
      if (b.value !== a.value) return b.value - a.value;
      if (b.games !== a.games) return b.games - a.games;
      return b.points - a.points;
    })
    .slice(0, 5);
} // Функция для сортировки топ‑5
function createTop5Item(rank, data, statName, season) {
  const item = document.createElement("div");
  item.className = "stats-data-item";

  const rankSpan = document.createElement("span");
  rankSpan.textContent = rank.toString();
  item.appendChild(rankSpan);

  if (statName !== "Всего игроков по командам") {
    const playerPoints = calculatePlayerPoints(data.playerData.stats[season]);
    const badgeSrc = `${basicLink}team-logos/${teams[data.team]}.png`;

    const link = document.createElement("a");
    link.href = "#";

    const imgDiv = document.createElement("div");

    const avatar = document.createElement("img");
    avatar.src = `${basicLink}players/${season.replace("/", "-")}/basic/${
      data.playerKey
    }.jpg`;
    avatar.alt = data.playerData.lastName;

    const badgeDiv = document.createElement("div");
    const badge = document.createElement("img");
    badge.src = badgeSrc;
    badge.alt = badgeDiv.title = data.playerData.team;
    badgeDiv.appendChild(badge);
    imgDiv.append(avatar, badgeDiv);

    const nameSpan = document.createElement("span");
    nameSpan.textContent = data.playerData.lastName;
    const teamSpan = document.createElement("span");
    teamSpan.textContent = data.playerData.team;

    link.append(imgDiv, nameSpan, teamSpan);
    link.addEventListener("click", (event) => {
      event.preventDefault();

      openPlayerPopup(
        data.playerData,
        data.playerKey,
        season,
        playerPoints,
        badgeSrc,
      );
    });
    item.appendChild(link);
  } else {
    const div = document.createElement("div");

    const badgeDiv = document.createElement("div");
    const badge = document.createElement("img");
    badge.src = `${basicLink}team-logos/${teams[data.team]}.png`;
    badge.alt = badgeDiv.title = data.team;
    badgeDiv.appendChild(badge);

    const teamSpan = document.createElement("span");
    teamSpan.textContent = data.team;

    div.append(badgeDiv, teamSpan);
    item.appendChild(div);
  }

  const statSpan = document.createElement("span");
  statSpan.textContent =
    statName === "Всего очков в среднем за матч"
      ? data.value.toFixed(1)
      : Math.round(data.value).toString();

  item.appendChild(statSpan);

  return item;
} // Функция для создания элемента игрока/команды в топ-5

const content = body.popup.querySelector(".popup-content");
const popupElements = {
  close: content.querySelector("header button"),
  lastName: content.querySelector(".player-name-last"),
  teamLogo: content.querySelector(".player-team-logo"),
  teamName: content.querySelector(".player-team-name"),
  playerPoints: content.querySelector(".player-header-points"),
  photo: content.querySelector(".player-header-image"),
  matches: content.querySelector(".player-matches"),
  statsWrapper: content.querySelector(".match-stats").parentElement,
  overallWrapper: content.querySelector(".overall-stats").parentElement,
  stats: content.querySelector(".match-stats"),
  overall: content.querySelector(".overall-stats"),
  teamHome: content.querySelector(".team-home"),
  teamAway: content.querySelector(".team-away"),
  homeLogo: content.querySelector(".team-home-logo"),
  awayLogo: content.querySelector(".team-away-logo"),
  score: content.querySelector(".match-score"),
}; // Элементы попапа

function openPlayerPopup(data, key, season, points, badge) {
  const { lastName, teamLogo, teamName, playerPoints, photo } = popupElements;

  const firstName = document.querySelector(".player-name-first");
  if (firstName) firstName.remove();

  if (data.firstName) {
    const span = document.createElement("span");
    span.className = "player-name-first";
    span.textContent = data.firstName;

    lastName.parentNode.insertBefore(span, lastName);
  }

  lastName.textContent = data.lastName;

  teamLogo.style.opacity = "0";
  teamLogo.src = badge;
  teamLogo.alt =
    teamLogo.parentElement.title =
    teamName.textContent =
      data.team;
  showImage(teamLogo);

  playerPoints.textContent = `${points} оч.`;

  photo.style.opacity = "0";
  photo.src = `${basicLink}players/${season.replace(
    "/",
    "-",
  )}/personal/${key}.webp`;
  photo.alt = data.lastName;
  showImage(photo);

  generatePlayerMatches(data, season);

  generateOverallStats(data, season);

  body.popup.scrollTop = 0;
  openPopup(body.popup);
  addCloseOverlayListener(body.popup);
} // Открытие попапа

function generatePlayerMatches(data, season) {
  const container = popupElements.matches;
  container.innerHTML = "";

  const seasonTeams = activeTeams[data.team]?.[season];
  const playerStats = data.stats?.[season] || {};

  if (!seasonTeams) return;

  let lastMatchButton = null;

  const stagesConfig = [
    {
      name: "Общий этап",
      start: 0,
      end: 8,
      keys: Array.from({ length: 8 }, (_, i) => i + 1),
      showMatchNumber: true,
    },
    {
      name: "Стыковые матчи",
      start: 8,
      end: 10,
      keys: ["1/16(1)", "1/16(2)"],
    },
    { name: "1/8 финала", start: 10, end: 12, keys: ["1/8(1)", "1/8(2)"] },
    { name: "1/4 финала", start: 12, end: 14, keys: ["1/4(1)", "1/4(2)"] },
    { name: "1/2 финала", start: 14, end: 16, keys: ["1/2(1)", "1/2(2)"] },
    { name: "Финал", start: 16, end: 17, keys: ["Финал"] },
  ];

  for (const stage of stagesConfig) {
    const matches = seasonTeams.slice(stage.start, stage.end);
    if (!matches.length) continue;

    const fragment = document.createDocumentFragment();

    const stageDiv = document.createElement("div");
    stageDiv.className = "player-matches-phases";
    const h2 = document.createElement("h2");
    h2.textContent = stage.name;
    stageDiv.appendChild(h2);

    if (
      stage.name === "Стыковые матчи" &&
      seasonTeams[8] === "" &&
      seasonTeams[9] === ""
    ) {
      const span = document.createElement("span");
      const spanInside = document.createElement("span");
      spanInside.textContent = "Команда вышла в 1/8";
      span.className = "status";
      span.appendChild(spanInside);
      stageDiv.appendChild(span);
      container.appendChild(stageDiv);
      continue;
    }

    const matchesDiv = document.createElement("div");
    matchesDiv.className = "stage-matches";

    for (let i = 0; i < matches.length; i++) {
      if (!matches[i]) continue;

      const matchKey = stage.keys[i];
      const isPlayed = playerStats[matchKey] !== undefined;
      const points = isPlayed ? calculatePoints(playerStats[matchKey]) : null;

      const button = document.createElement("button");
      button.dataset.match = matchKey;
      button.className = isPlayed ? "match-button" : "match-button not-played";
      button.disabled = !isPlayed;

      if (isPlayed) {
        button.addEventListener("click", () =>
          handleMatchClick(matchKey, playerStats),
        );
        lastMatchButton = button;
      }

      if (stage.showMatchNumber) {
        const numberSpan = document.createElement("span");
        numberSpan.textContent = (i + 1).toString();
        button.appendChild(numberSpan);
      }

      const img = document.createElement("img");
      img.style.opacity = "0";
      img.src = `${basicLink}team-logos/${teams[matches[i]]}.png`;
      img.alt = matches[i];
      showImage(img);
      button.appendChild(img);

      if (isPlayed) {
        const pointsSpan = document.createElement("span");
        pointsSpan.textContent = `${points} оч.`;
        button.appendChild(pointsSpan);
      }

      matchesDiv.appendChild(button);
    }

    stageDiv.appendChild(matchesDiv);
    fragment.appendChild(stageDiv);
    container.appendChild(fragment);
  }

  if (lastMatchButton) {
    lastMatchButton.classList.add("is-active");
    const matchKey = lastMatchButton.dataset.match;
    displayMatchStats(playerStats[matchKey]);
    displayMatchInfo(playerStats[matchKey]);
  }

  const active = container.querySelector(".is-active");
  container.scrollLeft =
    active.offsetLeft + active.offsetWidth / 2 - container.clientWidth;
} // Генерация блоков с кнопками матчей
function handleMatchClick(key, stats) {
  const [currentActive, newActive] = [
    document.querySelector(".match-button.is-active"),
    document.querySelector(`[data-match="${key}"]`),
  ];

  if (currentActive) currentActive.classList.remove("is-active");

  if (newActive) newActive.classList.add("is-active");

  displayMatchStats(stats[key]);

  displayMatchInfo(stats[key]);
} // Функция обработчика кликов по кнопкам с матчами

function toKebabCase(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
} // camelCase в kebab‑case
function createStatsBlocks(stats, isOverall = false) {
  const fragment = document.createDocumentFragment();
  const specialKeys = new Set(["playerOfTheMatch", "captain"]);
  const cardsKeys = new Set(["yellowCard", "redCard"]);

  const regularBlocks = [];
  const specialBlocks = [];

  for (const [key, value] of Object.entries(stats)) {
    if (key === "teams" || key === "result") continue;

    const termsData = terms[key] || [];
    const statDiv = document.createElement("div");

    if (specialKeys.has(key) || cardsKeys.has(key)) {
      statDiv.className = toKebabCase(key);
    }

    let count;
    if ((!isOverall && !specialKeys.has(key)) || isOverall) {
      const valueSpan = document.createElement("span");
      valueSpan.className = specialKeys.has(key)
        ? "selected stat-value"
        : cardsKeys.has(key)
          ? "card stat-value"
          : "stat-value";

      if (isOverall) {
        count = value.count;
      } else {
        count = Array.isArray(value) ? value[0] : value;
        if (key === "cleanSheet" && count === true) count = 1;
      }

      valueSpan.textContent = count;
      statDiv.appendChild(valueSpan);
    }

    const labelSpan = document.createElement("span");
    const isSpecial = !isOverall && specialKeys.has(key);
    labelSpan.className = isSpecial ? "selected stat-label" : "stat-label";
    labelSpan.textContent = isSpecial
      ? termsData[3]
      : getTerm(count, termsData);
    statDiv.appendChild(labelSpan);

    if (key !== "captain") {
      const pointsSpan = document.createElement("span");
      pointsSpan.className = "stat-second-label";

      const points = isOverall
        ? value.points
        : Array.isArray(value) && typeof value[1] === "number"
          ? value[1]
          : 0;

      pointsSpan.textContent = `${points} оч.`;
      statDiv.appendChild(pointsSpan);
    }

    (specialKeys.has(key) ? specialBlocks : regularBlocks).push(statDiv);
  }

  regularBlocks.forEach((block) => fragment.appendChild(block));
  specialBlocks.forEach((block) => fragment.appendChild(block));

  return fragment;
} // Создание статистических блоков для стастики
function createTotalStatsBlock(points) {
  const div = document.createElement("div");
  div.className = "total-stats";

  const titleSpan = document.createElement("span");
  titleSpan.className = "stat-label";
  titleSpan.textContent = "Итого";

  const pointsSpan = document.createElement("span");
  pointsSpan.className = "stat-value";
  pointsSpan.textContent = `${points} оч.`;

  div.append(titleSpan, pointsSpan);

  return div;
} // Создание итогового блока для стастики
function displayMatchStats(matchStats) {
  const wrapper = popupElements.statsWrapper;
  const total = wrapper.querySelector(".total-stats");
  if (total) total.remove();

  const container = popupElements.stats;
  container.innerHTML = "";
  if (!matchStats) return;

  const statsBlocks = createStatsBlocks(matchStats, false);

  const totalStats = createTotalStatsBlock(calculatePoints(matchStats));

  container.appendChild(statsBlocks);
  wrapper.appendChild(totalStats);
} // Отображение статистики матча

function displayMatchInfo(matchStats) {
  if (!matchStats.teams) return;

  const { teamHome, homeLogo, teamAway, awayLogo, score } = popupElements;

  const updateTeam = (team, logo, name) => {
    logo.style.opacity = "0";
    logo.src = `${basicLink}team-logos/${teams[name]}.png`;
    team.textContent = logo.alt = logo.title = name;
    showImage(logo);
  };

  updateTeam(teamHome, homeLogo, matchStats.teams[0]);
  updateTeam(teamAway, awayLogo, matchStats.teams[1]);

  score.textContent = matchStats.result;
} // Отображение конкретного матча

function generateOverallStats(data, season) {
  const wrapper = popupElements.overallWrapper;
  const total = wrapper.querySelector(".total-stats");
  if (total) total.remove();

  const container = popupElements.overall;
  container.innerHTML = "";

  const seasonStats = data.stats?.[season];
  if (!seasonStats) return;

  const overallStats = {};
  let totalMatches = 0;

  for (const match of Object.values(seasonStats)) {
    totalMatches++;

    for (const [key, value] of Object.entries(match)) {
      if (key === "teams" || key === "result") continue;

      if (!overallStats[key]) {
        overallStats[key] = { count: 0, points: 0 };
      }

      const stat = overallStats[key];

      if (Array.isArray(value)) {
        stat.count += value[0];
        stat.points += typeof value[1] === "number" ? value[1] : 0;
      } else if (value === true) {
        stat.count += 1;
      }
    }
  }

  overallStats.games = { count: totalMatches, points: 0 };

  const statsBlocks = createStatsBlocks(
    Object.fromEntries(
      Object.entries(overallStats).filter(([key]) => key !== "games"),
    ),
    true,
  );

  const gamesDiv = document.createElement("div");
  const gamesValue = document.createElement("span");
  const gamesLabel = document.createElement("span");
  gamesValue.className = "stat-value";
  gamesLabel.className = "stat-label";
  gamesValue.textContent = totalMatches;
  gamesLabel.textContent = getTerm(totalMatches, terms.games);
  gamesDiv.append(gamesValue, gamesLabel);
  statsBlocks.insertBefore(gamesDiv, statsBlocks.firstChild);

  const totalStats = createTotalStatsBlock(calculatePlayerPoints(seasonStats));

  container.appendChild(statsBlocks);
  wrapper.appendChild(totalStats);
} // Отображение статистики общей

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

popupElements.close.addEventListener("click", () => closePopup(body.popup));

document.addEventListener("DOMContentLoaded", function () {
  initializeHeaderButtons(); // Главные кнопки в html

  const firstButton = body.buttons.querySelector("a");
  if (firstButton) {
    const mockEvent = {
      target: firstButton,
      preventDefault: () => {},
    };
    handleSeasonClick(mockEvent);
  } // Назначение активной кнопки

  popupElements.close.appendChild(
    document.querySelector("body > .header svg").cloneNode(true),
  ); // Клонирование svg

  content.appendChild(body.footer.cloneNode(true));
  document.querySelectorAll("footer").forEach((element) => {
    element.addEventListener("click", (e) => {
      if (!e.target.closest("a")) return;

      e.preventDefault();

      if (e.target.closest(".popup")) {
        body.popup.scrollTop = 0;
      } else {
        window.scrollTo(0, 0);
      }
    });
  }); // Клонирование footer
}); // Функции при инициализации страницы
