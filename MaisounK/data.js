const food = [
    
]

const fs = require("fs");
const YEAR = 2023;
//console.log(fullDate("8/3"));

loadFile("./data.tab");

async function loadFile(fn)
{
    const lines = fs.readFileSync(fn, 'utf8').split("\n");
    //const row1 = lines[0].split("\t");
  //  console.log(row1);

    let id = 0;
// Name Email   Location        Country Zip     Age     Birthdate       Date Joined     Where do you call home? What's your sport?
    for (let i = 1; i < lines.length;i++) {
        //console.log(row);
        const row = lines[i];
        const data = row.split("\t");
        if (data.length > 1 &&data[0]) {
            const entry = {
                category:data[0],
                name: data[1],
                carbs: data[2],
                carbRating: 0,
                calories:data[4]
                
           }
            food.push(entry);
          //  console.log ("member:",member)


           
        }
    }
    console.log(JSON.stringify(food));
    /*
    for (let m of members)
    {
        console.log(insertInto(m));
    }
    */
    console.log("items Imported:", food.length);
 // console.log(JSON.stringify(members));
}