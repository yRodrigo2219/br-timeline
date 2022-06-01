import Header, { periodNameToHref } from "./components/Header";
import useWindowSize from "./hooks/useWindowSize";
import data from "./data.json";

function App() {
  const periodNames = data.map(({ name }) => name);
  const { width } = useWindowSize();

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
            const PeriodText = () => (
              <div className="period_text">
                <h2 className="period_text__name">{point.name}</h2>
                <p className="period_text__content">{point.text} [...]</p>
                <a
                  className="period_text__link"
                  href={point.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {"> Ler mais"}
                </a>
              </div>
            );

            const PeriodImg = () => (
              <img src={point.img} alt="" className="period_point__img" />
            );

            return (
              <div className="period_point" key={i}>
                {i % 2 === 0 || width <= 720 ? (
                  <>
                    <PeriodText />
                    <PeriodImg />
                  </>
                ) : (
                  <>
                    <PeriodImg />
                    <PeriodText />
                  </>
                )}
              </div>
            );
          })}
        </section>
      ))}
    </>
  );
}

export default App;
