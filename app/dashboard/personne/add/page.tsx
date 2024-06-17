"use client"

import styles from "@/app/ui/dashboard/personne/addPersonne/addPersonne.module.css"
import React, { useState } from 'react';
import Select from 'react-select';
const AddPersonne = () => {
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
          <input type="text" name="" id="" placeholder="Nom de la personne" />
          <input type="text" name="" id="" placeholder="postnom de la personne" />
          <input type="text" name="" id="" placeholder="Prenom de la personne" />
          <input type="text" name="" id="" placeholder="Lieu de naissance" />
          <input type="date" name="" id="" placeholder="Date de naissance" />
          <select name="" id="">
            <option value="">Selectionnez sexe</option>
            <option value="">Feminin</option>
            <option value="">Masculin</option>
          </select>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            className={styles.select}
            isSearchable
            placeholder='Nom pere'
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
            placeholder='Nom Mere'
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
          <input type="number" name="" id="" placeholder="Numero parcel" />
          <input type="text" name="" id="" placeholder="Avenue" />
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            className={styles.select}
            isSearchable
            placeholder='Quartier'
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
          <input type="number" name="" id="" placeholder="Contact" />
          <input type="text" name="" id="" placeholder="Adresse email" />
          <input type="number" name="" id="" placeholder="Fonction" />
          <select name="" id="">
            <option value="">Niveau d'etude</option>
            <option value="">Diplome</option>
            <option value="">Gradue</option>
          </select>
          <input type="text" name="" id="" placeholder="Adresse email" />
          <input type="number" name="" id="" placeholder="Annee fin d'etude" />
          <input type="text" name="" id="" placeholder="Ecole" />
          <button type="submit">Enregistrer</button>
        </form>
      </div>
    )
  }
  
  export default AddPersonne