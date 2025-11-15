import React from "react";

// 1st step
const BioContext = React.createContext();

// 2nd step
function BioProvider({ children }) {
    const bioData = {
        name: "Asraful Islam",
        age: 25,
        profession: "Software Developer"
    };
    return (
        <BioContext.Provider value={bioData}>
            {children}
        </BioContext.Provider>
    );
}

export default BioProvider;
export { BioContext };
