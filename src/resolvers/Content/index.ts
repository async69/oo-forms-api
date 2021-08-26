import { IContentEnum, IContentDoc, GQLFilterOptions } from "../../models/Content/content.types"
import fs from 'fs'
import readline from 'readline'

const columns = 'DOT_NUMBER","LEGAL_NAME","DBA_NAME","CARRIER_OPERATION","HM_FLAG","PC_FLAG","PHY_STREET","PHY_CITY","PHY_STATE","PHY_ZIP","PHY_COUNTRY","MAILING_STREET","MAILING_CITY","MAILING_STATE","MAILING_ZIP","MAILING_COUNTRY","TELEPHONE","FAX","EMAIL_ADDRESS","MCS150_DATE","MCS150_MILEAGE","MCS150_MILEAGE_YEAR","ADD_DATE","OIC_STATE","NBR_POWER_UNIT","DRIVER_TOTAL"'

const line = '10000,"POWELL DISTRIBUTING CO INC","","A","N","N","","","","","US","","","","","","","","","25-JUN-20","10000","2019","01-JUN-74","OR","1","1"'
const line2 = '1000015,"DAREN STONE","","C","N","N","","","","","US","","","","","","","","","22-JAN-02","0","","22-JAN-02","CO","1","1"'
const line3 = '1000014,"HACKWELL TRUCKING LLC","","C","N","N","8767 HOLMAN CIR","ARVADA","CO","80005","US","8767 HOLMAN CIR","ARVADA","CO","80005","US","(303) 423-3329","","GHACKWE@COMCAST.NET","26-JAN-20","18000","2019","22-JAN-02","CO","1","1"'

async function processLineByLine() {
  const fileStream = fs.createReadStream(fs.realpathSync('./src/blob/file.txt'));

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let count = 0;
  const data = [];
  for await (const line of rl) {
    if (count === 100000) return data;
    data.push(line)
    count++
  }
  return data
}

const ContentResolver = {
  Query: {
    async fetchContents(_: any, prop: any): Promise<IContentDoc[]> {
      const data = await processLineByLine()
      const database: any[] = []
      data.forEach(dataItem => {
        const foundArray = dataItem.split(',')
        database.push(foundArray)
      })
      console.log("some", database)
      const filteredArray1 = line.split(',')
      const filteredArray2 = line2.split(',')
      const filteredArray3 = line3.split(',')
      const keys: string[] = Object.keys(IContentEnum)
      const resultArray: any[] = []
      // const database = [filteredArray1, filteredArray2, filteredArray3]
      database.forEach((filteredArray: string[], _idx: number) => {
        let resultObj: any = {}
        keys.forEach((key: string, keyIdx: number) => {
          resultObj[key] = filteredArray[keyIdx].replace("\"", "").replace("\"", "")
        })
        resultArray.push(resultObj)
      })
      const collection: IContentDoc[] = [...resultArray]
      return collection
    },
    async fetchWithFilters(_: any, { input: prop }: GQLFilterOptions) {
      const collection = await ContentResolver.Query.fetchContents({}, {})
      const results: IContentDoc[] = []
      collection.forEach(data => {
        if (prop.DRIVER_TOTAL) {
          if (Number(data.DRIVER_TOTAL) === prop.DRIVER_TOTAL) {            
            results.push(data)
          }
        }
        if (prop.NBR_POWER_UNIT) {
          if (Number(data.NBR_POWER_UNIT) === prop.NBR_POWER_UNIT) results.push(data)
        }
        if (prop.PHY_STATE) {
          if (String(data.PHY_STATE) === prop.PHY_STATE) results.push(data)
        }
        if (prop.CARRIER_OPERATION) {
          if (String(data.CARRIER_OPERATION) === prop.CARRIER_OPERATION) results.push(data)
        }
        if (prop.PC_FLAG) {
          if (String(data.PC_FLAG) === prop.PC_FLAG) results.push(data)
        }
      })
      const dateResults: IContentDoc[] = []
      results.forEach(data => {
        const dataTime = new Date(data.ADD_DATE).getTime()
        const fromTime = new Date(prop.ADD_DATE.from).getTime()
        const toTime = new Date(prop.ADD_DATE.to).getTime()
        if (dataTime <= toTime && dataTime >= fromTime) {
          dateResults.push(data)
        }
      })
      return dateResults
    }
  }
}

export default ContentResolver