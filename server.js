const express = require('express');
var cors = require('cors');
const app = express();
const axios = require('axios')

//app.use(express.static(path.join(__dirname, './build')));
app.use(cors());

app.get('/*', async function (req, res) {

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
             'Content-Type': 'text/xml',
            }
           }).then(res=>{
             
             return res
             
           }).catch(err=>{console.log(err)});
           console.log(result.data)
           res.send(result.data)

});
app.post('/new', async function (req, res) {
 
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
             'Content-Type': 'text/xml',
            }
           }).then(res=>{
             
             return res
             
           }).catch(err=>{console.log(err)});
           console.log(result.data)
           res.send(result.data)

});

app.listen(3001);
