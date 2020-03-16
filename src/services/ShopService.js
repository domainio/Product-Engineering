import axios from 'axios';

const axiosInstance = axios.create();

const measurePerfNetworkFakeAPI = async () => {
  console.log('performance start measure fake api call');
  await axiosInstance.get('https://fakerestapi.azurewebsites.net/api/Activities').then(res => {
    console.log('performance stop measure fake api call');
    console.log('fake api call res: ', res);
  }).catch(err => {
    console.log('performance error on measure fake api call');
    console.log(err);
  })
}

export default {
  payItems: measurePerfNetworkFakeAPI
}