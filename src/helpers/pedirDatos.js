import data from "../data/data.json";

export const pedirDatos = async () => {
  try {
  
    await new Promise((resolve) => setTimeout(resolve, 500));


    return data;
  } catch (error) {
   
    throw new Error("Error al cargar datos: " + error.message);
  }
};

    
     

