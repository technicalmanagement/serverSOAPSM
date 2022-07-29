const express = require('express');
var cors = require('cors');
const app = express();
const axios = require('axios')

//app.use(express.static(path.join(__dirname, './build')));
app.use(cors());

app.get('/', async function (req, res) {

  //res.sendFile(path.join(__dirname, './build', 'index.html'));
  let xmls = `<?xml version="1.0" encoding="utf-8"?>
        <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
          <soap:Body>
            <Divide xmlns="http://tempuri.org/">
              <intA>5</intA>
              <intB>5</intB>
            </Divide>
          </soap:Body>
        </soap:Envelope>`

       const result = await axios.post('http://www.dneonline.com/calculator.asmx',
           xmls,
           {headers:
             {'Access-Control-Allow-Origin': '*',
             'Content-Type': 'application/soap+xml',
            }
           }).then(res=>{
             console.log(res.status)
             return res.status
             
           }).catch(err=>{
           
            console.log(err.response.status)
            return err.response.status
          });

           res.sendStatus(result)

});
app.get('/new', async function (req, res) {
 


    let xmls=`<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Header>
            <Country>ES</Country>
            <MessageType>ProcessOpportunity</MessageType>
            <Timestamp>2022-07-20 15:02:14</Timestamp>
        </soap:Header>
          <soap:Body>
            <BusinessPartner>
              <PartnerKind>P</PartnerKind>
              <Name>JOSE ANTONIO</Name>
              <FirstSurname>MONTAÑA TORO</FirstSurname>
              <PostCode>07711</PostCode>
              <Country>ES</Country>
              <Phone>655080580</Phone>
              <Email>josevieta@hotmail.com</Email>
              <LOPD>1</LOPD>
              <Robinson>1</Robinson>
              <CookieInfo>
                <VisitID>6</VisitID>
                <CookieID>11632034909395063610426021892288901227</CookieID>
              </CookieInfo>
            </BusinessPartner>
            <Vehicle_Opportunity>
              <VehicleInterest>
                <BrandVehicleOfInterest>MO</BrandVehicleOfInterest>
                <ModelVehicleOfInterest>ESCOOTER 125</ModelVehicleOfInterest>
              </VehicleInterest>
              <PurchaseIntention>0</PurchaseIntention><
              Campaign>CPG-00025556</Campaign>
              <PreferredTimeContacted>I</PreferredTimeContacted>
            </Vehicle_Opportunity>
            <SurveyResponse>
              <Question>
                <idQuestion>survey/result/q1/a1</idQuestion>
                <AnswerText>https://www.seat.es/ofertas/coches-nuevos/125-new.html</AnswerText>
              </Question>
              <Question>
                <idQuestion>survey/result/q2/a1</idQuestion>
                <AnswerText>Digital</AnswerText>
              </Question>
              <Question>
                <idQuestion>survey/result/q3/a1</idQuestion>
                <AnswerText>oferta-financiacion</AnswerText>
              </Question>
              <Question>
                <idQuestion>survey/result/q4/a1</idQuestion>
                <AnswerText>No+Aplica</AnswerText>
              </Question>
              <Question>
                <idQuestion>survey/result/q5/a1</idQuestion>
                <AnswerText>No+Aplica</AnswerText>
              </Question>
              <Question>
                <idQuestion>survey/result/q6/a1</idQuestion>
                <AnswerText>Blanco</AnswerText>
              </Question>
              <Question>
                <idQuestion>survey/result/q7/a1</idQuestion>
                <AnswerText>No+Aplica</AnswerText>
              </Question>
              <Question>
                <idQuestion>survey/result/q8/a1</idQuestion>
                <AnswerText>No+Aplica</AnswerText>
              </Question>
              <Question>
                <idQuestion>survey/result/q9/a1</idQuestion>
                <AnswerText>correo-electronico</AnswerText>
              </Question>
              <Campaign>CPG-00025556</Campaign>
            </SurveyResponse>
            </soap:Body>
            </soap:Envelope>`


       const result = await axios.post('eai-qa.seat.com',
       xmls,
       {headers:
         {'Content-Type': 'application/soap+xml',
        'Access-Control-Allow-Origin': '*'}
       }).then(response=>{
         console.log(response)
          return response.status
       }).catch(err=>{
        console.log(err)
        console.log(err.data)
      
        return 'Problems'});
       res.send(result)
});

app.listen(3002);
