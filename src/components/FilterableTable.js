/** @jsx jsx */
/** Imports */
import { useState } from 'react';
import { jsx, css } from '@emotion/core';

// Components
import { Button } from "@chakra-ui/core";

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
  const data = [
    {
      title: 'An Energy-Independent Pro-longevity Function of Triacylglycerol in Yeast',
      summary: 'A correlation between high levels of TAG and longer Saccharomyces cerevisiae chronological lifespan was observed. . Increased TAG abundance through the deletion of TAG lipases prolonged chronological lifespan of laboratory strains, while diminishing TAG biosynthesis shortened lifespan without apparently affecting vegetative growth.',
      link: 'https://drive.google.com/file/d/1wc9_p53iHNrRUC-Mj-QnZTSTtUqXPOKg/view?usp=sharing'
    },
    {
      title: 'Fkh1 and Fkh2 associate with Sir2 to control CLB2 transcription under normal and oxidative stress conditions',
      summary: 'Functional interplay between Fkh1/Fkh2 and Sir2 suggesting a novel mechanism of cell cycle repression. Thus, in budding yeast, not only the regulation of G2/M gene expression but also the protective response against stress could be directly coordinated by Fkh1 and Fkh2. Fkh1 and Fkh2 associate with Sir2 in G1 and M phase, and that Fkh1/Fkh2-mediated activation of reporter genes is antagonized by Sir2. Sir2 overexpression strongly affects cell growth in an Fkh1/Fkh2-dependent manner. Sir2 regulates the expression of the mitotic cyclin Clb2 through Fkh1/Fkh2-mediated binding to the CLB2 promoter in G1 and M phase. Sir2 is also enriched at the CLB2 promoter under stress conditions, and that the nuclear localization of Sir2 is dependent on Fkh1 and Fkh2',
      link: 'https://drive.google.com/file/d/1Sism7K7S9vP2ImmnR7hi9q3yP__Admha/view?usp=sharing'
    },
    {
      title: 'Fkh1 and Fkh2 associate with Sir2 to control CLB2 transcription under normal and oxidative stress conditions',
      summary: 'Functional interplay between Fkh1/Fkh2 and Sir2 suggesting a novel mechanism of cell cycle repression. Thus, in budding yeast, not only the regulation of G2/M gene expression but also the protective response against stress could be directly coordinated by Fkh1 and Fkh2. Fkh1 and Fkh2 associate with Sir2 in G1 and M phase, and that Fkh1/Fkh2-mediated activation of reporter genes is antagonized by Sir2. Sir2 overexpression strongly affects cell growth in an Fkh1/Fkh2-dependent manner. Sir2 regulates the expression of the mitotic cyclin Clb2 through Fkh1/Fkh2-mediated binding to the CLB2 promoter in G1 and M phase. Sir2 is also enriched at the CLB2 promoter under stress conditions, and that the nuclear localization of Sir2 is dependent on Fkh1 and Fkh2',
      link: 'https://drive.google.com/file/d/1Sism7K7S9vP2ImmnR7hi9q3yP__Admha/view?usp=sharing'
    },
    {
      title: 'Fkh1 and Fkh2 associate with Sir2 to control CLB2 transcription under normal and oxidative stress conditions',
      summary: 'Functional interplay between Fkh1/Fkh2 and Sir2 suggesting a novel mechanism of cell cycle repression. Thus, in budding yeast, not only the regulation of G2/M gene expression but also the protective response against stress could be directly coordinated by Fkh1 and Fkh2. Fkh1 and Fkh2 associate with Sir2 in G1 and M phase, and that Fkh1/Fkh2-mediated activation of reporter genes is antagonized by Sir2. Sir2 overexpression strongly affects cell growth in an Fkh1/Fkh2-dependent manner. Sir2 regulates the expression of the mitotic cyclin Clb2 through Fkh1/Fkh2-mediated binding to the CLB2 promoter in G1 and M phase. Sir2 is also enriched at the CLB2 promoter under stress conditions, and that the nuclear localization of Sir2 is dependent on Fkh1 and Fkh2',
      link: 'https://drive.google.com/file/d/1Sism7K7S9vP2ImmnR7hi9q3yP__Admha/view?usp=sharing'
    },
    {
      title: 'Fkh1 and Fkh2 associate with Sir2 to control CLB2 transcription under normal and oxidative stress conditions',
      summary: 'Functional interplay between Fkh1/Fkh2 and Sir2 suggesting a novel mechanism of cell cycle repression. Thus, in budding yeast, not only the regulation of G2/M gene expression but also the protective response against stress could be directly coordinated by Fkh1 and Fkh2. Fkh1 and Fkh2 associate with Sir2 in G1 and M phase, and that Fkh1/Fkh2-mediated activation of reporter genes is antagonized by Sir2. Sir2 overexpression strongly affects cell growth in an Fkh1/Fkh2-dependent manner. Sir2 regulates the expression of the mitotic cyclin Clb2 through Fkh1/Fkh2-mediated binding to the CLB2 promoter in G1 and M phase. Sir2 is also enriched at the CLB2 promoter under stress conditions, and that the nuclear localization of Sir2 is dependent on Fkh1 and Fkh2',
      link: 'https://drive.google.com/file/d/1Sism7K7S9vP2ImmnR7hi9q3yP__Admha/view?usp=sharing'
    }
  ];

  const filteredData = filters.length
    ? data.filter(row => filters.every(
      currentFilter => row.summary.match(new RegExp(currentFilter, 'gi'))
    ))
    : data;

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
        height: calc(100% - 200px);
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
            filteredData.map(({title, summary, link}) => (
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



