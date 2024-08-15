import Card from "./Card";


function Tours({tours,removeTour}){

return(
 <div className="container"> 
   <div>
      <h2 className="title">Plan With Love</h2>
   </div>
   <div className="cards">
    {/*map function is use here in making card*/ }
     {
      tours.map((tour) =>{
        return <Card  key={tour.id} {...tour/*cloning*/} removeTour={removeTour}></Card>
      })
     }
   </div>
 </div>
);
}
export default Tours;