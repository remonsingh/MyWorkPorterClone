function navbar(){
    return `
 
   
     <div id = "options">
 
         
     <div id = "optl">
        <div id="porter" style="background-image: url(&quot;https://d35ppnqksufxmo.cloudfront.net/frontend_website/fb288e54f8f9bcd6f987196eff3ef431.svg&quot;); height: 2rem; width: 7rem;"></div>
      
        <div id = "logor">India's Largest Marketplace for Intracity Logistics</div>
     </div>
     <div id = "optr">
       <div id = "driverlogo"><img src ="https://d35ppnqksufxmo.cloudfront.net/frontend_website/9e4ccae9c5a1b669d8fa2648db220c3f.svg"></div>
        <div id = "logodiv">
      
           <div id = "drive"><span id = "DI"> DRIVE WITH US </span><span id = "DI1">turn kms into money</span></div>
           <div id = "join">JOIN&nbsp;US</div>
       </div>
       
       <div id = "last">
         
          <div id = "num"><img src = "data:image/png;base64,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"/>4410-4410</div>
         <div id = "add">add your city code</div>
       </div>
     </div>
         
 
     
 
 </div>
 
 `
 
 }
 
 export default navbar