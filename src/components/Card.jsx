import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Card = ({ data, mode, loading }) => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/detail", { state: { data } });
  };
  return (
    <Container onClick={clickHandler} mode={mode.toString()}>
      <figure>
        {!loading ? (
          <img src={data.flags.png} alt="img" />
        ) : (
          <Skeleton width="100%" height="100%" />
        )}
      </figure>

      <div className="details">
        {!loading ? (
          <h4 className="country-name">{data.name}</h4>
        ) : (
          <Skeleton width="100%" height="100%" />
        )}
        <div className="country-details">
          {!loading ? (
            <p>
              Population : <span>{data.population}</span>
            </p>
          ) : (
            <Skeleton width="100%" height="100%" />
          )}
          {!loading ? (
            <p>
              Region : <span>{data.region}</span>
            </p>
          ) : (
            <Skeleton width="100%" height="100%" />
          )}
          {!loading ? (
            <p>
              Capital : <span>{data.capital}</span>
            </p>
          ) : (
            <Skeleton width="100%" height="100%" />
          )}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  width: 270px;
  background-color: ${({ theme, mode }) =>
    mode === "true" ? theme.light.lightElement : theme.dark.darkElement};
  border-radius: 0.3rem;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  &:hover {
    scale: 1.1;
  }
  @media screen and (max-width: ${({ theme }) => theme.layout.mobile}) {
    width: 100%;
  }
  figure {
    width: 100%;
    height: 170px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .details {
    padding: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .country-name {
      font-size: 1rem;
      margin-bottom: 0.2rem 0;
      font-weight: 900;
      color: ${({ theme, mode }) =>
        mode === "true" ? theme.light.text : theme.dark.text};

      @media screen and (max-width: ${({ theme }) => theme.layout.mobile}) {
        font-size: 1.2rem;
      }
    }

    .country-details {
      font-size: 0.9rem;
      color: ${({ theme, mode }) =>
        mode === "true" ? theme.light.text : theme.dark.text};
      @media screen and (max-width: ${({ theme }) => theme.layout.mobile}) {
        font-size: 1.1rem;
      }
      p {
        font-weight: 600;
      }

      span {
        font-weight: 300;
      }
    }
  }
`;
export default Card;
