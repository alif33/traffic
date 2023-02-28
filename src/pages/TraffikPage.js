import { useEffect, useState } from 'react';
import Layout from '../base/Layout';
import Hero from '../components/Hero';
import Form from '../components/Form';
import { authPost, __getData } from '../helpers/HttpServices'

export default function Home() {
  const [baseData, setBaseData] = useState();
  const [trafficInfos, setTrafficInfos] = useState();

  // cosnt [ _count, setCount ] = useState(0);


  useEffect(()=>{
    const getToken = async () => {
      const response = await fetch('https://api.vasttrafik.se/token?grant_type=client_credentials', {
        method: 'POST',
        headers: {
          'Authorization': 'Basic QUNqVjFvWEhOM3NrblUzY3RTT3ltMHdtMzBzYTpmZm1mbVBmTU5URUQ3YXlRaEplZkp4TDd2Xzhh'
        }
      });
      const data = await response.json();
      return data.access_token;
    }
    
    // let count = 0;
  
  
    const fetchData = async () => {
      const token = await getToken();
      const response = await fetch('https://api.vasttrafik.se/ts/v1/traffic-situations', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      console.log(data);
      setTrafficInfos(data);
      setBaseData(data);
      // setCount(_count+1)
    }
    
    fetchData();
  }, [])

  // console.log(_count);
  

  return (
    <Layout>
      <Hero
        baseData={baseData}
        trafficInfos={trafficInfos}
        setTrafficInfos={setTrafficInfos}
      />
      <Form
        baseData={baseData}
        trafficInfos={trafficInfos}
        setTrafficInfos={setTrafficInfos}
      />
    </Layout>
  )
}
