"use client";

import styles from "./search.module.css"
import { MdSearch } from "react-icons/md"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
const Search = ({placeholder}) => {
  const searchParams = useSearchParams();
  const {replace} = useRouter();
  const pathname = usePathname();

  const handleSearch =(e)=>{
    const params = new URLSearchParams(searchParams)
    params.set("q", e.target.value);
    replace(`${pathname}?${params}`);
  }

  
    return (
      <div className={styles.container}>
        <MdSearch/>
        <input type="text" name="" id="" placeholder={placeholder} className={styles.input} onChange={handleSearch} />
      </div>
    )
  }
  
  export default Search