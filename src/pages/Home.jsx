import styled from "styled-components";
import FilterSearch from "../components/FilterSearch";
import { Results } from "styled-icons/foundation";
import CardSection from "../components/CardSection";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = ({ mode }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  let regions = data.map((curr) => {
    return curr.region;
  });

  regions = [...new Set(regions)];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get("https://restcountries.com/v2/all");
      setData(res.data);
      setFilteredData(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const filterData = (val) => {
    let temp = data.filter((curr) => {
      return curr.region === val;
    });

    setFilteredData(temp);
  };

  const searchCountry = (val) => {
    let temp = data.filter((curr) => {
      const name = curr.name.toLowerCase();
      const searchText = val.toLowerCase();

      if (name.includes(searchText)) {
        return true;
      } else {
        return false;
      }
    });

    setFilteredData(temp);
  };
  return (
    <Container mode={mode.toString()}>
      <FilterSearch
        mode={mode}
        regions={regions}
        filterData={filterData}
        searchCountry={searchCountry}
      />
      <CardSection mode={mode} data={filteredData} loading={loading} />
    </Container>
  );
};

const Container = styled.section`
  background-color: ${({ theme, mode }) =>
    mode === "true" ? theme.light.bg : theme.dark.bg};
`;

export default Home;
