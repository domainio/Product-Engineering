import axios from 'axios';

const axiosInstance = axios.create();

const measurePerfNetworkFakeAPI = async () => {
  await axiosInstance.get('https://fakerestapi.azurewebsites.net/api/Activities').then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  })
}

export default {
  payItems: measurePerfNetworkFakeAPI
}