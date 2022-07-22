const express = require('express');
var cors = require('cors');
const app = express();
const axios = require('axios')

//app.use(express.static(path.join(__dirname, './build')));
app.use(cors());

// app.get('/*', async function (req, res) {

//   //res.sendFile(path.join(__dirname, './build', 'index.html'));
//   let xmls = `<?xml version="1.0" encoding="utf-8"?>
//         <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
//           <soap:Body>
//             <Divide xmlns="http://tempuri.org/">
//               <intA>5</intA>
//               <intB>5</intB>
//             </Divide>
//           </soap:Body>
//         </soap:Envelope>`

//        const result = await axios.post('http://www.dneonline.com/calculator.asmx',
//            xmls,
//            {headers:
//              {'Access-Control-Allow-Origin': '*',
//              'Content-Type': 'text/xml',
//             }
//            }).then(res=>{
             
//              return res
             
//            }).catch(err=>{console.log(err)});
//            console.log(result.data)
//            res.send(result.data)

// });
app.get('/', async function (req, res) {
 


    let xmls=`<?xml version="1.0" encoding="utf-8"?><Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"><Header><Country>ES</Country><MessageType>ProcessSurvey</MessageType><Timestamp>2020-08-11 13:37:57</Timestamp></Header><Body><BusinessPartner><PartnerKind>P</PartnerKind><Name>Jordi</Name><FirstSurname>Ruiz</FirstSurname><StreetName>Girona x girona</StreetName><PostCode>17003</PostCode><City>Girona</City><Country>ES</Country><Phone>639516193</Phone><Email>jordi27vila@gmail.com</Email><CookieInfo><VisitID>4</VisitID><CookieID>59664638481453237811492940541811149188</CookieID></CookieInfo></BusinessPartner><Vehicle_Opportunity><Campaign>CPG-00024016</Campaign></Vehicle_Opportunity><SurveyResponse><Question><idQuestion>survey/result/q1/a1</idQuestion><AnswerText>nocar</AnswerText></Question><Question><idQuestion>survey/result/q2/a1</idQuestion><AnswerText/></Question><Question><idQuestion>survey/result/q3/a1</idQuestion><AnswerText/></Question><Question><idQuestion>survey/result/q4/a1</idQuestion><AnswerText>Ofrecer mis servicios a vuestra Red de concesionarios y a trabajadore y a la misma empresa</AnswerText></Question><Question><idQuestion>survey/result/q5/a1</idQuestion><AnswerText>Buenos días soy un chico que tiene una empresa online de servicios essemciales tanto para empresas como para sus trabajadores de luz,agua,gas,electricidad ,telefonía  fija y móvil y seguros al mejor precio del mercado  como no tengo trabajafore y tampoco tengo oficina física ni ningún gasto puedo llegar al mejor  precio tengo prácticamente todas las mejores  empresas del mercado espero noticias suyas atentamente jordi ruiz vilalta</AnswerText></Question><Question><idQuestion>survey/result/q6/a1</idQuestion><AnswerText/></Question><Campaign>CPG-00024016</Campaign></SurveyResponse></Body></Envelope>
        `;


       const result = await axios.post('https://eai-qa.seat.com:443',
       xmls,
       {headers:
         {'Content-Type': 'text/xml',
         'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
        'Access-Control-Allow-Origin': '*'}
       }).then(res=>{
         console.log(res);
       }).catch(err=>{console.log(err)});
      res.send(JSON.parse(result))

});

app.listen(3001);
