import requests from "../request";

export const reqUser = () => requests({url:'/user',method:'get'});
