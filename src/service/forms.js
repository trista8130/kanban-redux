import axios from "axios";

const url = " http://localhost:3006";

const fetchAll = () => {
    return axios.
}

const handleCreateCard = ({ formId, text }) => {
  return axios.post(`${url}/forms/card/create`, { formId, text });
};

const FormServices = {
  handleCreateCard,
};

export default FormServices;
