import styled from "styled-components";
import { Search, Down } from "@icon-park/react";
import { useState } from "react";

const FilterSearch = ({ mode, regions, filterData, searchCountry }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    setInput(e.target.value);
    searchCountry(e.target.value);
  };
  return (
    <Container mode={mode.toString()}>
      <div className="search-bar">
        <Search
          theme="outline"
          size="25"
          fill="hsl(0, 0%, 52%)"
          strokeLinecap="butt"
        />
        <input
          type="text"
          placeholder="Search for country..."
          val={input}
          onChange={changeHandler}
        />
      </div>

      <div className="filter">
        <div className="drop-down-btn" onClick={() => setOpenMenu(!openMenu)}>
          <div className="filter-title">Filter By Region</div>
          {mode ? (
            <Down
              theme="outline"
              size="24"
              fill="hsl(200, 15%, 8%)"
              strokeLinecap="butt"
            />
          ) : (
            <Down
              theme="outline"
              size="24"
              fill="hsl(0, 0%, 100%)"
              strokeLinecap="butt"
            />
          )}
        </div>

        {openMenu && (
          <div className="drop-down-menu">
            <ul>
              {regions.map((curr, idx) => {
                return (
                  <li
                    key={idx}
                    onClick={() => {
                      filterData(curr);
                    }}
                  >
                    {curr}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </Container>
  );
};

const Container = styled.section`
  padding: 0 5rem;
  margin: 1.4rem 0;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${({ theme }) => theme.layout.mobile}) {
    padding: 0 1rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }
  .search-bar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    width: 30rem;
    padding: 0rem 1.5rem;
    border-radius: 0.6rem;
    background-color: ${({ theme, mode }) =>
      mode === "true" ? theme.light.lightElement : theme.dark.darkElement};
    box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.1);
    @media screen and (max-width: ${({ theme }) => theme.layout.mobile}) {
      width: 100%;
      padding: 0.5rem 1.5rem;
    }
    input {
      background-color: ${({ theme, mode }) =>
        mode === "true" ? theme.light.lightElement : theme.dark.darkElement};
      color: ${({ theme, mode }) =>
        mode === "true" ? theme.light.text : theme.dark.text};
      padding: 0.2rem;
      width: 100%;
      outline: none;
      border: none;

      &::placeholder {
        color: ${({ theme, mode }) =>
          mode === "true" ? theme.light.text : theme.dark.text};
      }
    }
  }

  .filter {
    position: relative;
    box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme, mode }) =>
      mode === "true" ? theme.light.lightElement : theme.dark.darkElement};
    border-radius: 0.6rem;

    .drop-down-btn {
      padding: 0.7rem 0.8rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.8rem;
      cursor: pointer;
      font-weight: 600;
      overflow: hidden;
      user-select: none;

      .filter-title {
        color: ${({ theme, mode }) =>
          mode === "true" ? theme.light.text : theme.dark.text};
      }
    }

    .drop-down-menu {
      position: absolute;
      box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.1);
      width: 100%;
      border-radius: 0.6rem;
      overflow: hidden;
      top: 110%;
      background-color: ${({ theme, mode }) =>
        mode === "true" ? theme.light.bg : theme.dark.bg};
      ul {
        list-style: none;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        gap: 0.3rem;
        li {
          color: ${({ theme, mode }) =>
            mode === "true" ? theme.light.text : theme.dark.text};
          padding: 0.5rem 1.3rem;
          cursor: pointer;
          &:hover {
            background-color: ${({ theme, mode }) =>
              mode === "true"
                ? theme.light.lightElement
                : theme.dark.darkElement};
          }
        }
      }
    }
  }
`;
export default FilterSearch;
