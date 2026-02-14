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
