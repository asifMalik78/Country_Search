import styled from "styled-components";
import { ArrowCircleLeft } from "@icon-park/react";
import { useLocation, useNavigate } from "react-router-dom";
import { countries } from "country-data";


const Detail = ({ mode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state;
  const languages = data.languages
    .map((curr) => {
      return curr.name;
    })
    .join(", ");

  const clickHandler = () => {
    navigate("/");
  };
  return (
    <Container mode={mode.toString()}>
      <div className="back-btn" onClick={clickHandler}>
        <ArrowCircleLeft
          className="arrow"
          theme="filled"
          size="28"
          fill="hsl(200, 15%, 8%)"
          strokeLinecap="butt"
        />
        <p>Back</p>
      </div>

      <div className="country-details">
        <figure>
          <img src={data.flags.png} alt="img" />
        </figure>

        <div className="details">
          <h1 className="country-name">{data.name}</h1>
          <div className="extra-details">
            <div className="left">
              <p>
                Native Name : <span>{data.nativeName}</span>
              </p>
              <p>
                Population : <span>{data.population}</span>
              </p>
              <p>
                Region : <span>{data.region}</span>
              </p>
              <p>
                Sub Region : <span>{data.subregion}</span>
              </p>
              <p>
                Capital : <span>{data.capital}</span>
              </p>
            </div>

            <div className="right">
              <p>
                Top Level Domain : <span>{data.topLevelDomain}</span>
              </p>
              <p>
                Currencies :
                <span>
                  {data.currencies
                    ? ` (${data.currencies[0].symbol})  ${data.currencies[0].name}`
                    : " No Currency"}
                </span>
              </p>
              <p>
                Languages :<span className="languages">{languages}</span>
              </p>
            </div>
          </div>

          <div className="borders">
            <p>Border Countries :</p>
            <div className="countries">
              {data.borders ? (
                data?.borders?.map((curr, idx) => {
                  return (
                    <div className="country" key={idx}>
                      {countries[curr] ? countries[curr].name : "unknown"}
                    </div>
                  );
                })
              ) : (
                <div className="country">No Borders</div>
              )}
            </div>
          </div>
        </div>
      </div>

    </Container>
  );
};

const Container = styled.section`
  padding: 0 5rem;
  height: auto;
  background-color: ${({ theme, mode }) =>
    mode === "true" ? theme.light.bg : theme.dark.bg};
  @media screen and (max-width: ${({ theme }) => theme.layout.mobile}) {
    padding: 0 1rem;
    padding-bottom: 2rem;
  }
  .back-btn {
    width: fit-content;
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    align-items: center;
    padding: 0.6rem 1.4rem;
    background-color: ${({ theme, mode }) =>
      mode === "true" ? theme.light.lightElement : theme.dark.darkElement};
    color: ${({ theme, mode }) =>
      mode === "true" ? theme.light.text : theme.dark.text};
    margin: 3rem 0;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 0.5rem;
    font-weight: 600;
    cursor: pointer;
    .arrow {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .country-details {
    padding: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: ${({ theme }) => theme.layout.mobile}) {
      grid-template-columns: repeat(1, 1fr);
      gap: 1rem;
    }
    figure {
      width: 100%;
      overflow: hidden;
      img {
        border-radius: 0.5rem;
        width: 100%;
      }
    }
  }

  .details {
    .country-name {
      font-weight: 800;
      font-size: 2rem;
      margin: 2rem 0;
      color: ${({ theme, mode }) =>
        mode === "true" ? theme.light.text : theme.dark.text};
    }

    .extra-details {
      display: grid;
      grid-template-columns: 1fr 1fr;
      font-size: 1rem;

      @media screen and (max-width: ${({ theme }) => theme.layout.mobile}) {
        grid-template-columns: repeat(1, 1fr);
        gap: 2rem;
        font-size: 1.2rem;
      }
      .left,
      .right {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
      }
      p {
        font-weight: 600;
        color: ${({ theme, mode }) =>
          mode === "true" ? theme.light.text : theme.dark.text};
      }

      span {
        font-weight: 300;
        color: ${({ theme, mode }) =>
          mode === "true" ? theme.light.text : theme.dark.text};
      }
    }

    .borders {
      margin-top: 2rem;
      display: grid;
      grid-template-columns: 1fr 2fr;
      justify-content: center;
      align-items: center;
      @media screen and (max-width: ${({ theme }) => theme.layout.mobile}) {
        grid-template-columns: repeat(1, 1fr);
        gap: 1rem;
      }
      p {
        font-weight: 600;
        color: ${({ theme, mode }) =>
          mode === "true" ? theme.light.text : theme.dark.text};
        @media screen and (max-width: ${({ theme }) => theme.layout.mobile}) {
          font-size: 1.2rem;
        }
      }

      .countries {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        align-items: center;
        gap: 1rem;

        .country {
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
          padding: 0.3rem 0.8rem;
          border-radius: 0.4rem;
          color: ${({ theme, mode }) =>
            mode === "true" ? theme.light.text : theme.dark.text};
          background-color: ${({ theme, mode }) =>
            mode === "true"
              ? theme.light.lightElement
              : theme.dark.darkElement};
          cursor: pointer;
          @media screen and (max-width: ${({ theme }) => theme.layout.mobile}) {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
`;
export default Detail;
