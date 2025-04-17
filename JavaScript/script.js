// Constantes
const btnDaily = document.getElementById('daily');
const btnWeekly = document.getElementById('weekly');
const btnMonthly = document.getElementById('monthly');

// Fragment
const fragment = document.createDocumentFragment();

// Fetch
fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const card = document.createElement('div');

      window.addEventListener('load', () => {
        card.innerHTML = `
        <img src="images/icon-${item.title.toLowerCase()}.svg" alt="${item.title}">
        <div class="card__actividad">
          <div class="card__actividad__info">
            <div class="card__actividad__info__sup">
              <h3>${item.title}</h3>
              <button>...</button>
            </div>
            <div class="card__actividad__info__inf">
              <h2>${item.timeframes.weekly.current}hrs</h2>
              <p>last week - ${item.timeframes.weekly.previous}hrs</p>
            </div>
          </div>
        </div>
      `;
      });

      btnDaily.addEventListener('click', () => {
        btnMonthly.classList.remove('active');
        btnWeekly.classList.remove('active');
        btnDaily.classList.add('active');

        card.innerHTML = `
        <img src="images/icon-${item.title.toLowerCase()}.svg" alt="${item.title}">
        <div class="card__actividad">
          <div class="card__actividad__info">
            <div class="card__actividad__info__sup">
              <h3>${item.title}</h3>
              <button>...</button>
            </div>
            <div class="card__actividad__info__inf">
              <h2>${item.timeframes.daily.current}hrs</h2>
              <p>last week - ${item.timeframes.daily.previous}hrs</p>
            </div>
          </div>
        </div>
      `;
      });

      btnWeekly.addEventListener('click', () => {
        btnMonthly.classList.remove('active');
        btnDaily.classList.remove('active');
        btnWeekly.classList.add('active');

        card.innerHTML = `
        <img src="images/icon-${item.title.toLowerCase()}.svg" alt="${item.title}">
        <div class="card__actividad">
          <div class="card__actividad__info">
            <div class="card__actividad__info__sup">
              <h3>${item.title}</h3>
              <button>...</button>
            </div>
            <div class="card__actividad__info__inf">
              <h2>${item.timeframes.weekly.current}hrs</h2>
              <p>last week - ${item.timeframes.weekly.previous}hrs</p>
            </div>
          </div>
        </div>
      `;
      });

      btnMonthly.addEventListener('click', () => {
        btnWeekly.classList.remove('active');
        btnDaily.classList.remove('active');
        btnMonthly.classList.add('active');

        card.innerHTML = `
        <img src="images/icon-${item.title.toLowerCase()}.svg" alt="${item.title}">
        <div class="card__actividad">
          <div class="card__actividad__info">
            <div class="card__actividad__info__sup">
              <h3>${item.title}</h3>
              <button>...</button>
            </div>
            <div class="card__actividad__info__inf">
              <h2>${item.timeframes.monthly.current}hrs</h2>
              <p>last week - ${item.timeframes.monthly.previous}hrs</p>
            </div>
          </div>
        </div>
      `;
      });

      card.classList.add('card');
      card.classList.add(item.title.toLowerCase());
      fragment.appendChild(card);
    });

    document.querySelector('.main').appendChild(fragment);
  });
