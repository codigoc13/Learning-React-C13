const API_URL = `https://crudcrud.com/api/${process.env.REACT_APP_KEY_CRUD}`;

export const getAllItems = async (items,id) => {
  const result = {
    statusResponse: false,
    data: null,
    error: null,
  };
  try {
    const response = await fetch(`${API_URL}/${items}`);
    const data = await response.json();
    result.statusResponse=true
    result.data=data
    
  } catch (error) {
    result.error=error;
  }
  return result
};

export const getANewById = async (items,id) => {
  const result = {
    statusResponse: false,
    data: null,
    error: null,
  };
  try {
    const response = await fetch(`${API_URL}/${items}/${id}`);
    const data = await response.json();
    result.statusResponse=true
    result.data=data
    
  } catch (error) {
    result.error=error;
  }
  return result
};
