import styled from "styled-components";
import Card from "./Card";

const CardSection = ({ mode, data, loading }) => {
  if (loading) {
    return (
      <Container>
        <Card loading={loading} mode={mode} />
        <Card loading={loading} mode={mode} />
        <Card loading={loading} mode={mode} />
        <Card loading={loading} mode={mode} />
        <Card loading={loading} mode={mode} />
        <Card loading={loading} mode={mode} />
        <Card loading={loading} mode={mode} />
        <Card loading={loading} mode={mode} />
        <Card loading={loading} mode={mode} />
        <Card loading={loading} mode={mode} />
      </Container>
    );
  }

  if (data.length === 0) {
    return (
      <Container mode={mode.toString()}>
        <div className="result">
          <h1>No Result Found...</h1>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      {data.map((curr, idx) => {
        return <Card key={idx} data={curr} mode={mode} loading={loading} />;
      })}
    </Container>
  );
};

const Container = styled.section`
  padding: 1rem 5rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 5rem;
  @media screen and (max-width: ${({ theme }) => theme.layout.mobile}) {
    padding: 0 3rem;
  }

  .result {
    display: grid;
    place-items: center;
    width: 100%;
    height: 70vh;
    font-size: 9rem;
    z-index: 9999999;
    h1 {
      color: ${({ theme, mode }) =>
        mode === "true" ? theme.light.text : theme.dark.text};
    }
    @media screen and (max-width: ${({ theme }) => theme.layout.mobile}) {
      font-size: 4.5rem;
      height: 50vh;
    }
  }
`;
export default CardSection;
