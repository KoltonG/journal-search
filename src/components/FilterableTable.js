/** @jsx jsx */
/** Imports */
import { useState } from 'react';
import { jsx, css } from '@emotion/core';

// Components
import { Button } from "@chakra-ui/core";

// Constants
import { JOURNALS } from '../constants';

const Header = ({ children }) => (
  <div css={css`
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    grid-gap: 1rem;
    width: 100%;
  `}>
    { children }
  </div>
)

const Filter = ({ filterString, filters, onClick, children }) => (
  <Button
    variantColor="teal"
    variant={filters.includes(filterString ? filterString : children) ? 'solid' : 'outline'}
    onClick={() => onClick(filterString ? filterString : children)}
  >
    {children}
  </Button>
)

/** Component - Filterable Table */
export const FilterableTable = () => {
  /* State */
  const [ filters, setFilters ] = useState([]);

  /* Handlers */
  const onFilterClick = filter => filters.includes(filter)
    ? setFilters(filters.filter(currentFilter => currentFilter !== filter))
    : setFilters([...filters, filter])

  /* Data */
  const filteredJournals = filters.length
    ? JOURNALS.filter(row => filters.every(
      currentFilter =>
        row.title.match(new RegExp(currentFilter, 'gi')) ||
        row.species.match(new RegExp(currentFilter, 'gi')) ||
        row.summary.match(new RegExp(currentFilter, 'gi'))
    ))
    : JOURNALS;

  return (
    <div css={css`
      width: 90vw;
      height: 90vh;
    `}>
      <Header>
        <Filter filters={filters} onClick={onFilterClick}>
          Chlamydomonas
        </Filter>
        <Filter filters={filters} onClick={onFilterClick}>
          Saccharomyces
        </Filter>
        <Filter filterString="acetate" filters={filters} onClick={onFilterClick}>
          Acetate
        </Filter>
        <Filter filters={filters} onClick={onFilterClick}>
          Longevity
        </Filter>
        <Filter filters={filters} onClick={onFilterClick}>
          Stress
        </Filter>
        <Filter filterString="Age" filters={filters} onClick={onFilterClick}>
          Ageing
        </Filter>
        <Filter filters={filters} onClick={onFilterClick}>
          Senescence
        </Filter>
        <Filter filters={filters} onClick={onFilterClick}>
          Apoptosis
        </Filter>
      </Header>
      <div css={css`
        margin-bottom: 2rem;
      `}>
        <table css={css`
          width: 100%;

          th, td {
            border: 1px solid #dddddd;
            padding: 8px;
          }

          th {
            text-align: left;

            &:first-of-type {
              width: 300px;
            }
          }
        `}>
          <tr>
            <th >Title</th>
            <th>Summary</th>
            <th>Link</th>
          </tr>
          {
            filteredJournals.map(({title, summary, link}) => (
              <tr>
                <td>{title}</td>
                <td>{summary}</td>
                <td><a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >Link
                </a></td>
              </tr>
            ))
          }
        </table>
      </div>
    </div>
  )
}



