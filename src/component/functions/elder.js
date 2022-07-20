import axios from "axios";

export const listNameAllSec = async () => {
        return await axios.get("https://script.google.com/macros/s/AKfycbwBNwEbWDYktEn9GpnFte9AkSDLnP3jw6deYnMcWGuOLXtAKE_-6WiDeTHNRxcvtidq/exec?action=getUsers", {
        });
};

export const listNameSentSec = async () => {
        return await axios.get("https://script.google.com/macros/s/AKfycbzGIOvjjPkgW2YciN4t-oVGPcxWpRfkZI9j8BlZ0ajB2T7lQ4mkbRCxsJbw7q01XtDF/exec?action=getUsers", {
        });
};