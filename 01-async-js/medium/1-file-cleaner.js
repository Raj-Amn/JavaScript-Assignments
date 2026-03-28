// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```


const fs = require('fs');

fs.readFile('example.txt','utf-8',(err,udata)=>{
  if(err) throw error;
  const data = udata.toString();
  const cleanedData = data.trim().replace(/\s+/g, ' ');

  fs.writeFile('example.txt',cleanedData,(err)=>{
    if(err) throw err;
    console.log("done");
  })
})
