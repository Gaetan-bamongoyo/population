"use client"

import styles from "@/app/ui/dashboard/personne/addPersonne/addPersonne.module.css"
import React, { useState } from 'react';
import Select from 'react-select';
const AddMariage = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  function customTheme(theme){
    return {
      ...theme, 
      colors: {
        ...theme.colors,
        primary25: 'white',
        primary: 'none'
      },
    }
  }
  const [selectedOption, setSelectedOption] = useState(null);
    return (
      <div className={styles.container}>
        <form action="" method="post" className={styles.form}>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            className={styles.select}
            isSearchable
            placeholder='Femme'
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor:'#151c2c',
                border:'none',
                color: '#b7bac1', 
              }),
              option: (provided, state) => ({
                ...provided,
                borderBottom: 'none',
                color: 'white',
                backgroundColor: '#151c2c',
              }),

            }}

            theme={customTheme}
          />
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            className={styles.select}
            isSearchable
            placeholder='Homme'
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor:'#151c2c',
                border:'none',
                color: '#b7bac1', 
              }),
              option: (provided, state) => ({
                ...provided,
                borderBottom: 'none',
                color: 'white',
                backgroundColor: '#151c2c',
              }),

            }}

            theme={customTheme}
          />
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            className={styles.select}
            isSearchable
            placeholder='Bureau'
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor:'#151c2c',
                border:'none',
                color: '#b7bac1', 
              }),
              option: (provided, state) => ({
                ...provided,
                borderBottom: 'none',
                color: 'white',
                backgroundColor: '#151c2c',
              }),

            }}

            theme={customTheme}
          />
          <input type="date" name="" id="" placeholder="Date de mariage" />
          <input type="number" name="" id="" placeholder="Statut" />
          <button type="submit">Enregistrer</button>
        </form>
      </div>
    )
  }
  
  export default AddMariage