"use client"

import styles from "@/app/ui/dashboard/personne/addPersonne/addPersonne.module.css"
import React, { useState } from 'react';
import Select from 'react-select';
const AddDeces = () => {
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
          <input type="text" name="" id="" placeholder="Lieu deces" />
          <input type="text" name="" id="" placeholder="Motif deces" />
          <input type="date" name="" id="" placeholder="Date deces" />
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            className={styles.select}
            isSearchable
            placeholder='Personne decedee'
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
            placeholder='Declarant'
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
            placeholder='Medecin'
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
          <button type="submit">Enregistrer</button>
        </form>
      </div>
    )
  }
  
  export default AddDeces