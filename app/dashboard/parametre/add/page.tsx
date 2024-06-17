"use client"

import styles from "@/app/ui/dashboard/personne/addPersonne/addPersonne.module.css"
import axios from "axios";
import React, { useState } from 'react';
import Select from 'react-select';
const AddMariage = () => {
  const [isLoading, setLoading]=useState(false);
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];


  type BureauProps={
    id?: number
    nom_bureau: string,
    adresse_bureau: string,
    author?: string
  }

  const submitData =async(data : BureauProps): Promise<void> =>{
    setLoading(true)
    try{
      const response = await axios.post("http://cent-kilo.site/api/insert_bureau_civil",data)
      if(response.status==200){
        console.log("Successfully added")
      }
      else{
        console.log("Error while adding data")
      }
    }
    catch(err){
      console.log(err)
    }
    finally{
      setLoading(false)
    }
    

  }

  const handleSubmit =(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const form=e.currentTarget;
    const formData: BureauProps={
      nom_bureau: (form.querySelector("input[name='nomBureau']") as HTMLInputElement).value,
      adresse_bureau: (form.querySelector("input[name='adresseBureau']") as HTMLInputElement).value,
      author:"Admin"
    }
    submitData(formData).then(() => form.reset())
  }

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
        <form action="" method="post" className={styles.form} onSubmit={handleSubmit}>
          
          <input type="text" name="nomBureau" id="" placeholder="Nom du bureau" />
          <input type="text" name="adresseBureau" id="" placeholder="Adresse du bureau" />
          <button type="submit" disabled={isLoading}> { isLoading ? 'En cours ...': 'Enregistrer'}</button>
        </form>
      </div>
    )
  }
  
  export default AddMariage