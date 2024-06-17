"use client"
import styles from "@/app/ui/dashboard/personne/personne.module.css"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
const Bureau = () => {
    const columns= [
      {
          name:"Bureau",
          selector:(row)=>row.nom_bureau,
      },
      {
          name:"Adresse",
          selector:(row)=>row.adresse_bureau,
      },
      {
          name:"Data ajout",
          selector:(row)=>row.created_at,
      },
      {
            name:"Action",
            cell:(row)=>(
                <div className={styles.buttons}>
                  <button className={styles.button} onClick={()=>handleDelete(row.id)}>lire plus</button>
                  <button className={styles.modifier} onClick={()=>handleDelete(row.id)}>Modifier</button>
                </div>
            )
        }
    ];
    const [data, setData]= useState([]);
    const [search, SetSearch]= useState('');
    const [filter, setFilter]= useState([]);

    const getProduct=async()=>{
    try{
        const req= await fetch("https://cent-kilo.site/api/fetch_bureau_civil_paginate");
        const res= await req.json();
        setData(res.data);
        setFilter(res.data);
    } catch(error){
       console.log(error);
    }
    }
    useEffect(()=>{
        getProduct();
    }, []);

    useEffect(()=>{
        const result= data.filter((item)=>{
         return item.nom_bureau.toLowerCase().match(search.toLocaleLowerCase());
        });
        setFilter(result);
    },[search]);

    const handleDelete=(val)=>{
      const newdata= data.filter((item)=>item.id!==val);
      setFilter(newdata);
    }

    const tabletabletyle={
      border:'none',
      width:'100%'
    }
   
    const tableHeaderstyle={
      rows: {
        style: {
          border: 'none', // override the row height
        },
      },

      headCells:{
          style:{
              fontWeight:"bold",
              fontSize:"14px",
              backgroundColor:"#182237",
              color:"#b7bac1"
          },
      },
      cells:{
          style:{
            fontSize:"14px",
            backgroundColor:"#182237",
            color:"#b7bac1",
            border:"none"

          },
      }
    }

    createTheme('solarized', {
      text: {
        primary: '#268bd2',
        secondary: '#2aa198',
      },
      background: {
        default: '#182237',
      },
      context: {
        background: '#cb4b16',
        text: '#FFFFFF',
      },
      divider: {
        default: '#182237',
      },
      action: {
        button: 'rgba(0,0,0,.54)',
        hover: 'rgba(0,0,0,.08)',
        disabled: 'rgba(0,0,0,.12)',
      },
    }, 'dark');
    return (
      <div className={styles.container}>
        <DataTable 
            customStyles={ tableHeaderstyle}
            columns={columns}
            data={filter}
            style={tabletabletyle}
            pagination
            fixedHeader
            selectableRowsHighlight
            highlightOnHover
            subHeader
            theme="solarized"
            subHeaderComponent={
              <div className={styles.head}>
                <div className={styles.containerInput}>
                  <input type="text" className={styles.input} placeholder="Search..." value={ search} onChange={(e)=>SetSearch(e.target.value)}/>
                </div>
                <Link href="/dashboard/parametre/add">
                  <button>Ajouter</button>
                </Link>
              </div>
            }
            subHeaderAlign="space-between"
            />
      </div>
    )
  }
  
  export default Bureau