import React, { useState } from "react";

function Search({children}){

    const [search,setSearch] = useState("");
   
        return(
            <div>
                <label>{children}</label>
                <input 
                onChange={e => setSearch(e.target.value)} 
                type="text" 
                placeholder="Search..." 
                value={search} />
            </div>
        )
}
export default Search