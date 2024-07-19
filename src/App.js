
import React, { useEffect, useState }  from "react";
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import { apiUrl, filterData } from "./data";
import Cards from './components/Cards';
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {

      const [courses, setCourses] = useState([]);
      const [loading, setLoading] = useState(true);

      const [category, setCategory] = useState(filterData[0].title)

      async function fetchData(){
        setLoading(true);
        try{
          const res = await fetch(apiUrl);
          const output = await res.json();
  
          setCourses(output.data);
          //console.log(setCources);
        }
        catch(error)
        {
          toast.error("something went wrong")
        }
        setLoading(false);
      }
    useEffect(() => {
      fetchData();
    },[])

  return(
    <div className="min-h-screen flex flex-col bg-gray-600">
      <div>
        <Navbar/>

      </div>

      <div className="bg-gray-600">
        <div>
          <Filter 
            filterData={filterData}
            category = {category}
            setCategory = {setCategory}
          />
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {
            //<Cards courses={courses}  />
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/> )
          }
        </div>
      </div>
    </div>
  );
};

export default App;
