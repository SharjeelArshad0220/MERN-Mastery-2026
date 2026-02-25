export function  StudentResultCard({studentName, rollNo, marks , subject}) 
{      let status = "Invalid Marks";
    let bgClass = "bg-gray-500"; // Default
    if (marks>=0 && marks<=100) {
        if (marks>=80) 
        {
            status='"A" Grade'
            bgClass='bg-green-500'
        }
        else if(marks>=60 && marks<80)
            {
            status='"B" Grade'
            bgClass='bg-yellow-500'
        }
        else if(marks >=40 && marks<60) {
            status='"C" Grade'
            bgClass='bg-orange-500'
        }
        else{
            status='Fail'
            bgClass='bg-red-500'
        }
    }

    return (
        <>
        <h1>Name:{studentName}</h1>
        <h2>Roll no:{rollNo}</h2>
        <h2>Subject:{subject}</h2>
         {marks<=100 && <h2>Marks:{marks}%</h2>} 
        {/*{marks>100||marks<0 && <span className="bg-red-100">Invalid Marks</span>} */}
        <span className={bgClass}>{status}</span>
        </>
    )
}
export default StudentResultCard