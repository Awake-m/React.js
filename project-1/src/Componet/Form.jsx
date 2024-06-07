import { useState } from "react"
import "./Form.css"
import Swal from 'sweetalert2'

function Form(){
      
    
    const [productName,setproductName] = useState("");
    const [productPrice,setproductPrice] = useState("")
    const [productDescription,setproductDescription] = useState("")
    const [productCategory,setproductcategory] = useState("")
    const [stockQuantity,setstockQuantity] = useState("")
    const [image,setimage] = useState("")
    const [arr,setArr] = useState("")

    
     const data = ()=>{
        let obj = {
         productName:productName,
         productPrice:productPrice,
         productDescription:  productDescription,
         productCategory:productCategory,
         stockQuantity:stockQuantity,
         image:image

        }
        setArr([...arr,obj])
    }
    console.log(arr);



    function handleClick(){
            if( productName || productPrice ||   productDescription ||  productCategory || stockQuantity || image )
               {
                  Swal.fire("Data Sucessfully Added....");
               }

        }


     return(

         <div className="form">
           
           
             <h1>Product Entry</h1><br></br><br></br>

               <div class="form-group">
                  {/* <label for="productName">Product Name</label> */}
                  <input type="text" id="productName" onChange={(el)=>setproductName(el.target.value)} name="productName" placeholder="Product Name" required />
               </div>

               <div class="form-group">
                  {/* <label for="productPrice">Product Price</label> */}
                  <input type="number" id="productPrice" onChange={(el)=>setproductPrice(el.target.value)} name="productPrice" placeholder="Product Price" step="0.01" min="0" required></input>
             </div>

               <div class="form-group">
                   {/* <label for="productDescription">Product Description</label> */}
                   <input type="text" id="productdescription" onChange={(el)=>setproductDescription(el.target.value)} name="productDescription" placeholder="Product Description" step="0.01" min="0" required></input>
                </div>

                <div class="form-group">
                   {/* <label for="productCategory">Product Category</label> */}
                   <input type="text" id="productdcategory" onChange={(el)=>setproductcategory(el.target.value)} name="productCategory" placeholder="Product Category" step="0.01" min="0" required></input>
                 </div>

                 <div class="form-group">
                         {/* <label for="stockQuantity">Stock Quantity</label> */}
                         <input type="number" id="stockQuantity" onChange={(el)=>setstockQuantity(el.target.value)} name="stockQuantity" placeholder="Stock Quantity" min="0" required />
                 </div>

                 
                 <div class="form-group">
                            {/* <label for="image">Product Image :</label> */}
                            <input type="text" id="image" name="image" onChange={(el)=>setimage(el.target.value)} placeholder="Image URL" accept="image/*"  />
                 </div>
                 <br></br>

                 <div class="button-group">

                    <button type="submit" onClick={handleClick}>Add Product</button>

                    <button type="submit">Show Data</button>
                   </div>
   
         </div>
    
      )

}

export default Form