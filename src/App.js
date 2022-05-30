import Header, { periodNameToHref } from "./components/Header";
import data from "./data.json";

function App() {
  const periodNames = data.map(({ name }) => name);

  return (
    <>
      <Header periods={periodNames} />
      {data.map((periodInfo) => (
        <section
          className="period_info"
          id={periodNameToHref(periodInfo.name)}
          key={periodInfo.name}
        >
          <h1 className="period_info__name">{periodInfo.name}</h1>
          <span
            style={{ backgroundImage: `url(${periodInfo.background})` }}
            className="period_info__bg"
          />

          {periodInfo.items.map((point, i) => {
            if (i % 2 == 0)
              return (
                <div className="period_point" key={i}>
                  <div className="period_text">
                    <p className="period_text__content">{point.text}</p>
                    <a
                      className="period_text__link"
                      href={point.link}
                      target="_blank"
                    >
                      {">"} Ler mais
                    </a>
                  </div>

                  <img src={point.img} alt="" className="period_point__img" />
                </div>
              );
            return (
              <div className="period_point" key={i}>
                <img src={point.img} alt="" className="period_point__img" />

                <div className="period_text">
                  <p className="period_text__content">{point.text}</p>
                  <a
                    className="period_text__link"
                    href={point.link}
                    target="_blank"
                  >
                    {">"} Ler mais
                  </a>
                </div>
              </div>
            );
          })}
        </section>
      ))}
    </>
  );
}

export default App;
