import axios from "axios";

export const listNameAll = async () => {
        return await axios.get("https://script.google.com/macros/s/AKfycby_o5FNufVqkSXaFTXcd1mrMstmkNxL-8-8XywJ-bi9W2gMZlIxTVe_vFrfTnlY4vdmeg/exec?action=getUsers", {
        });
};

export const listNameSent = async () => {
        return await axios.get("https://script.google.com/macros/s/AKfycbxEED-q0WYl1k103ZRs48aUVC8YnhdR1Ume9FoutKq1pPTYaocj9Iywvd4FV_1h2GFa/exec?action=getUsers", {
        });
};